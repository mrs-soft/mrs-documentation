Структура данных (Map)
======================

Map --- это простая функция, которая необходима для верного отображения данных в представлении.

Помимо общей модели данных, которая описана ниже, для работы с представлениями нужно знать модель данных,
конкретного :doc:`вида представления<../../types-of-view>`.
В зависимости от них, map будет очень сильно отличаться.

Поля представления
------------------

View
++++

Основные поля представления. Работа с ними подробнее расписана в следующих разделах.

..  list-table::
    :header-rows: 1
    :align: left

    *   - Поле
        - Тип данных
    *   - ``title``
        - **string**
    *   - ``viewType``
        - **ViewType**
    *   - ``query``
        - **IQuery** | **null**
    *   - ``map``
        - **string**
    *   - ``settings``
        - **object**
    *   - ``forCreate``
        - **object**
    *   - ``filters``
        - **IViewFilter[]**

ViewType
++++++++

Отвечает за тип представления. Подробнее о них в разделе :doc:`../../types-of-view`.

..  list-table::
    :header-rows: 1
    :align: left

    *   - Значение, которое определяет система
        - Значение, которое записывает прикладной программист
    *   - ``List`` 
        - "list"
    *   - ``Grid`` 
        - "grid"
    *   - ``Drawing2d`` 
        - "drawing2d"
    *   - ``Tree`` 
        - "tree"
    *   - ``Document`` 
        - "document"
    *   - ``Calendar`` 
        - "calendar"
    *   - ``Gantt`` 
        - "gantt"
    *   - ``DataGrid`` 
        - "dataGrid"
    *   - ``Embed`` 
        - "embed"

Модель данных для видов представления
-------------------------------------

IViewTitle
++++++++++

Отвечает за отображение названия.

..  code-block:: javascript

    interface IViewTitle {
        value: string;
        placeholder: string;
        noClip?: boolean;
    }

..  list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    *   - Поле
        - Определение
    *   - ``value``
        - Значение, которое используется как название в представлении.
    *   - ``placeholder``
        - Значение, которое используется, если ``value`` пусто.
    *   - ``noClip``
        - Свойство, которое позволяет показывать текстовые поля в полном объёме, если значение ``true``.
          Если значение ``false``, то часть текста скрывается.
          
          Пока работает только для плоского списка.

IViewDescription
++++++++++++++++

Отвечает за отображение описания. 

..  code-block:: javascript

    interface IViewDescription extends IViewTitle {}

Повторяет полностью поля ``IViewTitle``.

IViewIcon
+++++++++

Отвечает за иконку, которая будет отображаться в представлении.

..  code-block:: javascript

    interface IViewIcon {
        value: MRSIcon;
        color?: string;
    }

..  list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    *   - Поле
        - Определение
    *   - ``value``
        - В это поле передаётся наименование иконки из библиотеки иконок.
    *   - ``color``
        - В это поле передаётся цвет из библиотеки цветов.

IViewChip
+++++++++

Отвечает за отображение чипсов в представлении.

..  note:: Чипсы --- это элементы представлений, которые отображают информацию по тем
           или иным полям формы представления без непосредственного открытия формы.

..  code-block:: javascript

    interface IViewChip extends IViewTitle {
        icon?: MRSIcon;
        color?: string;
    }

..  list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    *   - Поле
        - Определение
    *   - ``icon``
        - В это поле передаётся наименование иконки из библиотеки иконок.
    *   - ``color``
        - В это поле передаётся цвет из библиотеки цветов.

Помимо полей выше, также включает в себя поля 

IViewUser
+++++++++

Отвечает за отображения пользовательских данных в представлении.

..  code-block:: javascript

    interface IViewUser {
        avatar?: string;
        name: string;
        caption?: string;
    }

..  list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    *   - Поле
        - Определение
    *   - ``avatar``
        - В это поле передаётся аватар пользователя.
    *   - ``name``
        - В это поле передаётся имя пользователя.
    *   - ``caption``
        - В это поле передаётся дополнительная информация по пользователю. Например данные об организации.