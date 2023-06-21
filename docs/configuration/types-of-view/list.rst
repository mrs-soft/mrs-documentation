List — Список
=============

Предназначение
--------------

Отображение элементов в виде списка

**Class**: ``list``

Модель данных
-------------

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
-----------

Список для отображения информации о доступных пользователю экземплярах формы
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

..  thumbnail:: images/list-1-form-instances.png
    :align: center
    :alt: List View
    :class: framed

Список для отображения и скачивания отчетов
+++++++++++++++++++++++++++++++++++++++++++

..  thumbnail:: images/list-2-reports.png
    :align: center
    :alt: List View
    :class: framed


Список для отображения плоских справочников
+++++++++++++++++++++++++++++++++++++++++++

..  thumbnail:: images/list-3-dictionaries.png
    :align: center
    :alt: List View
    :class: framed
