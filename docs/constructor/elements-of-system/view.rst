Представления
=============

Определение
-----------

Представление — это настроенное отображение нескольких сущностей (экземпляров форм) системы в определенном интерфейсе.
Представление позволяет отображать сущности в разном виде (Подробнее в Виды представлений).

Представления заранее описываются в конфигурации, на них можно ссылаться в связанных представлениях, детально настраивать, параметризовать и тд.

Содержимое текущей формы передается в представление как модель для параметров.

В интерфейсе можно отобразить не только данные формы, но и отобразить связанные с формой объекты в удобном для пользователя виде.

Модель view
-----------

View =

*   Id: guid
*   Title: string
*   Class: string
*   Query: json
*   Map: json
*   Settings: json

Модель данных
+++++++++++++

..  code-block:: javascript

    interface IViewTitle {
        value: string;
        placeholder: string;
        textClip?: boolean;
    }

..  code-block:: javascript

    interface IViewDescription extends IViewTitle {}

..  code-block:: javascript

    interface IViewCaption extends IViewTitle {
        color?: string;
    }

..  code-block:: javascript

    interface IViewIcon {
        value: MRSIcon;
        color?: string;
    }

..  code-block:: javascript

    interface IViewField extends IViewTitle {
        title: string;
    }

..  code-block:: javascript

    interface IViewChip extends IViewTitle {
        icon?: MRSIcon;
        color?: string;
    }

..  code-block:: javascript

    interface IViewUser {
        avatar?: string;
        name: string;
        caption?: string;
    }

..  code-block:: javascript

    interface IViewImage {
        placeholder: string;
        images: IImage[];
    }

..  code-block:: javascript

    interface IImage {
        url: string;
    }

..  note:: В поля ``color`` подставляются только значения из темы, например, “primary.dark”.