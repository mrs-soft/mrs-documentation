Структура Представления
=======================

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