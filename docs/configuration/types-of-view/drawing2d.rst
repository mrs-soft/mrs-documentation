Drawing2d — Чертёж
==================

Определение
-----------

Представление ``drawing2d`` --- это возможность отображать и работать с двухмерными чертежами.
Просматривать чертеж, проставлять и редактировать аннотации и отметки, а также указывать дополнительную информацию.

..  thumbnail:: images/drawing2d-1-view.png
    :align: center
    :alt: Drawing2d View
    :class: framed

Модель данных
+++++++++++++

..	code-block:: typescript

	interface IDrawing2dViewItem {
        id: string,
        title: IViewTitle;
        description?: IViewDescription;
        pin: object[];
        shapes: object[];
        document: object;
    }

Пример
------

Комментарии
-----------
