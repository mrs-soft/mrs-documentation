Шаблоны документов
==================

Система позволяет создавать шаблоны печатных форм. Ограничения по количеству создаваемых шаблонов отсутствуют.
В качестве источников данных для печатных форм могут быть использованы:

*   данные справочников,
*   данные экземпляров форм,
*   данные пользователей.

Возможна предварительная настройка фильтрации данных при формировании печатных форм.
Также возможна фильтрация шаблонов печатных форм, в зависимости от пункта меню, в котором находится пользователь.
Пользователь может выбрать из интерфейса системы необходимый шаблон, настроить фильтр данных и сформировать печатную форму.

Каждый Шаблон Документа содержит:

*   название шаблона, 
*   тэг Локации, 
*   набор SQL-запросов для формирования данных шаблона,
*   файл шаблона,
*   шаблон названия,
*   метаданные формы для конфигурирования запроса;

Модель данных doc_templates
---------------------------

JSON
++++

..  code-block:: json

    {
        "templateName": "templateName",
        "metadata": null,
        "fileTitle": "Акт входного контроля №{reportNumber} от {reportDate}",
        "formId": "613738ec870762012c000006",
        "filenameExtension": "docx", //может еще быть xlsx
        "locationFilter": "^view.*", //В поле locationFilter храниться regexp по которому следует фильтровать шаблоны
        "tags": [],
        "relationsData": [],
        "name": "618e12f4357479019300001c" //идентификатор отчета
    }

Проверить regexp можно к примеру по ссылке: https://regex101.com/

SQL
+++

SQL-запросы параметризуются переменными в стиле ключ-значение;
какие-то переменные определяются исходя из текущей локации.
Например фильтры и родительский элемент структуры для Шаблонов, запускающихся из списка замечаний.

..  code-block:: mysql

    $_start $_end
    SELECT * FROM i issue WHERE i.creation_date BETWEEN ($_start, $_end)  
    $_ids
    SELECT * FROM i issue WHERE i.id IN $_ids
    Фильтр может быть null: ... WHERE ($_start IS NULL OR  i.creation_date > $_start)
    $limit : ... WHERE ... LIMIT $limit

Пример:

..  code-block:: postgresql-console

    [{ "title" : "test", 
    "sqlRequest" : "WITH RECURSIVE ft as (SELECT CASE WHEN (DATA -> 'info') ? 'typeOfLaboratory'
    THEN (((DATA -> 'info') -> 'typeOfLaboratory') -> 0) ->> 'name'
    ELSE NULL END AS lab_type,
    CASE WHEN (DATA -> 'info') ? 'cafm'
    THEN (((DATA -> 'info') -> 'cafm') -> 'document') ->> 'name'
    ELSE '' END AS rd_code, ((DATA -> 'members') -> 'applicant') ->> 0 AS app_id, CASE WHEN (DATA -> 'members') ? 'executor'
    THEN ((DATA -> 'members') -> 'executor') ->> 0
    ELSE NULL END AS ex_id,
    CASE WHEN (DATA -> 'info') ? 'area'
    THEN (((DATA -> 'info') -> 'area') -> 0) ->> 'id'
    ELSE NULL END AS area_id, DATA ->> 'number' AS num,
    CASE WHEN (DATA -> 'info') ? 'volume'
    THEN (DATA -> 'info') ->> 'volume'
    ELSE '' END AS procent, uuid AS obj_id,
    CASE WHEN (DATA -> 'dateTime') ->> 'dateTimeEnd' != '0'
    THEN to_char(to_timestamp(to_number((DATA -> 'dateTime') ->> 'dateTimeEnd','9999999999')), 'DD.MM.YYYY')
    ELSE ' ' end as due_date FROM form_instances where \"isArchived\" = false and \"formId\" = '62cbec43311cd1008500000d' <#if ids??>
    AND uuid IN (<#list ids as i>'${i}'<#if !i?is_last>, </#if></#list>)</#if> ), 
    area_tab AS (select ft.obj_id, pa.\"name\"::text AS area_name,
    pa.parent_id::text AS pid,
    CASE WHEN pa.parent_id is null 
    THEN 1 ELSE 0 END AS ar_check FROM ft inner join public.full_path pa on ft.area_id = pa.id::text union all select atb.obj_id,
    concat (pa.\"name\", atb.area_name)::text as area_name, pa.parent_id::text as pid,
    CASE WHEN pa.parent_id is null then 1 else 0 end as ar_check from area_tab atb 
    INNER JOIN public.full_path pa on atb.pid = pa.id::text ) ,
    other_tab AS ( select ft.obj_id, ft.num, ft,rd_code, ft.procent, ft.due_date,
    pua.organization AS app_org, pua.\"position\" AS app_pos,
    pue.organization AS ex_org, pue.\"position\" AS ex_pos,
    ft.lab_type AS lab_type from ft LEFT JOIN public.user pua ON ft.app_id = pua.id::TEXT LEFT JOIN public.user pue ON ft.ex_id = pue.id::TEXT)
    SELECT CASE WHEN {reportDate} is not null
    THEN to_char({reportDate}::date, 'DD.MM.YYYY')
    ELSE ' ' END AS req_date, ot.num, ot.rd_code, ot.procent, ot.due_date,
    CASE WHEN atb.area_name IS NOT NULL
    THEN atb.area_name ELSE '' END AS area,
    CASE WHEN ot.app_org IS NOT NULL
    THEN ot.app_org ELSE '' END AS app_org,
    CASE WHEN ot.app_pos IS NOT NULL THEN ot.app_pos 
    ELSE '' END AS app_pos, CASE WHEN ot.ex_org IS NOT NULL 
    THEN ot.ex_org 
    ELSE '' END AS exec_org, 
    CASE WHEN ot.ex_pos IS NOT NULL THEN ot.ex_pos 
    ELSE '' END AS exec_pos, 
    CASE WHEN ot.lab_type IS NOT NULL THEN ot.lab_type 
    ELSE '' END AS lab_type FROM other_tab ot LEFT JOIN (SELECT * FROM area_tab WHERE ar_check = 1) atb ON ot.obj_id = atb.obj_id" }]


Template
++++++++

Загруженный шаблон отчета.
Файл Шаблона загружается в хранилище. Он будет доступен по прямой ссылке.

Шаблон таблицы для Template
```````````````````````````

..  list-table::
    :header-rows: 1
    :align: left

    *   - Наименование
        - Тип данных
    *   - id
        - text
    *   - name
        - text
    *   - report_kind
        - text
    *   - last_modified_date
        - timestamp without time zone			
    *   - last_modified_by_user
        - text
    *   - url
        - text			
    *   - file_name
        - text			
    *   - isMultyTasks
        - boolean			
    *   - sql_fields
        - jsonb			
    *   - owner
        - text			
    *   - create_date
        - timestamp without time zone			
    *   - _extra_props
        - jsonb			


