Tree — Дерево
=============

Предназначение
--------------

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

Внешний вид
-----------

..  thumbnail:: images/tree-1-view.png
    :align: center
    :alt: List View
    :class: framed