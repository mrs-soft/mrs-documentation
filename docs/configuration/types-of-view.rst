Виды представлений
==================

..  toctree::
    :hidden:

    types-of-view/drawing2d

List — Список
-------------

Предназначение
++++++++++++++

Отображение элементов в виде списка

**Class**: ``list``

Модель данных
+++++++++++++

..  code-block:: javascript

    interface IListViewItem {
        id: string,
        icon?: IViewIcon;
        avatar?: IViewUser;
        title: IViewTitle;
        description?: IViewDescription;
        fields: IViewField[];
        chips?: IViewChip[];
        users: IViewUser[];
        docUrl?: string;
    }

Внешний вид
+++++++++++

Список для отображения информации о доступных пользователю экземплярах формы
````````````````````````````````````````````````````````````````````````````

..  thumbnail:: images/list-1-form-instances.png
    :align: center
    :alt: List View
    :class: framed

Список для отображения и скачивания отчетов
```````````````````````````````````````````

..  thumbnail:: images/list-2-reports.png
    :align: center
    :alt: List View
    :class: framed


Список для отображения плоских справочников
```````````````````````````````````````````

..  thumbnail:: images/list-3-dictionaries.png
    :align: center
    :alt: List View
    :class: framed

Tree — Дерево
-------------

Предназначение
++++++++++++++

Отображение списка элементов в виде дерева

**Class**: ``tree``

Модель данных
+++++++++++++

..  code-block:: javascript

    interface ITreeViewItem {
        id: string;
        title: IViewTitle;
        description?: IViewDescription;
        icon?: IViewIcon;
        parentId: string | null;
        isFolder?: boolean;
    }

Внешний вид
+++++++++++

..  thumbnail:: images/tree-1-view.png
    :align: center
    :alt: List View
    :class: framed

Grid — Карточки
---------------

Предназначение
++++++++++++++

Используется для отображения списка экземпляров представления в виде карточек

**Class**: ``grid``

Модель данных
+++++++++++++

..  code-block:: javascript

    interface IGridViewItem {
        id: string;
        topChip?: IViewChip;
        caption: IViewCaption;
        title: IViewTitle;
        description: IViewDescription;
        images?: IViewImage;
        chips?: IViewChip[];
        users: IViewUser[];
    }

Внешний вид
+++++++++++

..  thumbnail:: images/grid-1-view.png
    :align: center
    :alt: List View
    :class: framed