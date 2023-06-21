Tree — Дерево
=============

Определение
-----------

Представление treeview --- это элемент интерфейса для иерархического отображения информации. Представляет собой совокупность связанных отношениями элементов в иерархическом древе. 

Каждый элемент чаще всего называют узлом и ветвью, который может иметь несколько подразделов.
Обычно используется для просмотра структуры каталогов (папок) и других подобных элементов, связанных иерархическими отношениями.

Каждый пункт (узел, ветвь) можно развернуть для просмотра подпунктов (если такие существуют), а также свернуть, чтобы их скрыть.

Внешний вид

..  thumbnail:: images/tree-1-view.png
    :align: center
    :alt: List View
    :class: framed

Отображение списка элементов в виде дерева

**Class**: ``tree``

Модель данных
-------------

..  code-block:: javascript

    interface ITreeViewItem {
        id: string;
        title: IViewTitle;
        description?: IViewDescription;
        icon?: IViewIcon;
        parentId: string | null;
        isFolder?: boolean;
    }

Пример
------

JSON
++++

Map
+++

..  code-block:: javascript

    function hook(item) {
        const { id, name } = item;
        return {
            id,
            title: {
                value: name,
                placeholder: "Название карточки",
            },
    parentId: item.parent_id,
        };
    }

Иконки
''''''

    Для отображения иконок в дереве нужно добавить в Map следующий блок:

..  code-block:: javascript

    icon: {
            value:  isFolder ? "Folder" : "Mail", 
            color: "primary.light",
        },

..  note::  первая икона для родительского элемента, вторая будет отображаться для дочерних элементов

Подпись
'''''''

    Для отображения подписи в TreeView нужно добавить в Map блок description:

..  code-block:: javascript

    description: {
            value: isFolder ? "" : "Очень длинная подпись переданная в элемент списка",
        },

..  thumbnail:: images/tree-2-view.png
    :align: center
    :alt: List View
    :class: framed    

Query
+++++

..  code-block:: SQL

    {"sort": [{"sort": "DESCENDING", "property": "isFolder"}, 
    {"sort": "ASCENDING", "property": "name"}], "type": "dictionary", "query": [{"value": "Tree_view", "operator": "eq", "property": "dictionaryType"},  
    {"value": "${ids}", "operator": "in", "property": "id"}, 
    {"value": "${name}", "operator": "contains", "property": "name"}  {{#unless ids}}, 
    {"group": [{"value": "${parentId}", "operator": "eq", "property": "parent_id"}, 
    {"value": "${parentId}", "operator": "isnull", "property": "parent_id"}], "logical": "OR"} {{/unless}}], "pagination": {"limit": 20, "offset": 0}}

..  attention:: Особенности Query для построения дерева. При использовании фильтров во view для иерархических структур (дерево, иерархический справочник) следует учитывать, что при использовании и не использовании ``parentId: null`` в запросах будут получены разные варианты. 
    
При использовании ``parentId: null`` поиск будет проведен только на верхнем уровне справочника, и если записей, удовлетворяющих условию, не будет на верхнем уровне, то даже при наличии таковых на более глубоких уровнях получить их будет невозможно (для этого надо добавить в запрос соответствующий parentId).

Запрос вида:

..  code-block:: SQL

    {"value": "rd", "operator": "eq", "property": "dictionaryType"}, 
    {"value": "${areaId}", "operator": "contains", "property": "main_folder_id"},
    {"group": [
    {"value": "${parentId}", "operator": "eq", "property": "parent_id"}, 
    {"value": "${parentId}", "operator": "isnull", "property": "parent_id"}
    ]}

всегда ищет элементы с указанным id (null или отличным от null).

Если нет уверенности в том, что удовлетворяющие условию фильтра данные имеются на верхнем уровне структуры, стоит исключить parentId: null из запроса. Будут возвращены все найденные элементы, и сторона клиента отвечает за их корректное отображение. Однако стоит учесть, что при использовании пагинации элемент, являющийся родителем, может прийти позже своих дочерних элементов, и в процессе прокрутки дерево (или иерархический справочник) будет перерисовано.

Запрос вида:

..  code-block:: SQL

    {"value": "rd", "operator": "eq", "property": "dictionaryType"}, 
    {"value": "${areaId}", "operator": "contains", "property": "main_folder_id"}, {{#if areaId}} {{#if parentId}}, 
    {"value": "${parentId}", "operator": "eq", "property": "parent_id"}, {{/if}} {{else}}, 
    {"group": [
    {"value": "${parentId}", "operator": "eq", "property": "parent_id"}, 
    {"value": "${parentId}", "operator": "isnull", "property": "parent_id"}]}
    {{/if}}

при отсутствии фильтра ищет записи с учетом ``parentId`` (и при ``parentId: null`` возвращает все элементы верхнего уровня), а если указан параметр ``areaId``, то при ``parentId: null`` поиск будет вестись без учета ``parentId``.

Filters
+++++++

..  code-block:: javascript

    [
     {
      "icon": "CompleteInput",
      "type": "text",
      "title": "По названию",
      "params": {
      "name": ""
      },
      "placeholder": "Введите название участка"
     }
    ]
