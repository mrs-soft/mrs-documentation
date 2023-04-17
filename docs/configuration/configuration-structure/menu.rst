Меню
====

Меню приложения используется для навигации пользователя между страницами приложения.
Меню располагается в левой части экрана, раскрывается по клику на `гамбургер`. Меню приложения имеет линейную структуру

Системные пункты меню
---------------------

Системные пункты меню записаны в коде приложения и не изменяются вне зависимоти от конфигурации:

*   настройки,
*   помощь,
*   профиль пользователя.

Кастомные пункты меню
---------------------

Кастомные пункты меню, это пункты, которые может создавать и редактировать администратор клиентского приложения.
По клику на пункт меню открывается страница списка экземпляров представления, указанного в поле ``ViewID``. Создается список в файле формата json.

..  code-block:: json

    {
        "items": [
            {
                "name": "ObjectId",
                "icon": "MRSIcon",
                "title": "MENUNAME1",
                "viewId": "viewId"
            },
            {
                "name": "ObjectId",
                "icon": "MRSIcon",
                "title": "MENUNAME2",
                "viewId": "viewId"
            }
        ]
    }

..  list-table::
    :widths: 20 80
    :header-rows: 1

    *   - Наименование поля
        - Определение
    *   - ``name``
        - поле, в котором указывается идентификатор пункта меню (сервис для генерации ObjectId https://observablehq.com/@hugodf/mongodb-objectid-generator)
    *   - ``icon``
        - иконка, которая будет отображаться для пункта меню. Название иконки можно брать из библиотеки иконок (список доступных иконок приложен ниже)
    *   - ``title``
        - название пункта меню для отображения для пользователей
    *   - ``viewId``
        - идентификатор представления, информация по которому отобразиться для пользователя
          при выборе пункта меню (подробнее о Представлениях в разделе “Представления”)

Порядок для отображения пунктов меню для клиента соответсnвует порядку, в котором пункты меню прописаны в item.
Из примера следует, что MENUNAME1 будет выше в списке, чем MENUNAME2. 

#.  MENUNAME1 - order 1
#.  MENUNAME2 - order 2

Список доступных в библиотеке иконок
++++++++++++++++++++++++++++++++++++

Ниже можете видеть полный список иконок, который используется в приложении. В конфигурацию записывается вариант в кавычках.

..  code-block:: typescript

    export enum MRSIcon {
        PROJECT = "Project",
        DEADLINE = "Deadline",
        "3D" = "3D",
        VIEW = "View",
        NOTIFICATION_ON = "NotificationOn",
        NOTIFICATION_OFF = "NotificationOff",
        COMPLETE_INPUT = "CompleteInput",
        MAIL = "Mail",
        TAG = "Tag",
        MIC = "Mic",
        ARCHIVE = "Archive",
        HOME = "Home",
        CREDIT_CARD = "CreditCard",
        OFFLINE = "Offline",
        CLOUD = "Cloud",
        ADD_USER = "AddUser",
        MESSAGE = "Message",
        PDF = "Pdf",
        EXCEL = "Excel",
        WORD = "Word",
        STAR = "Star",
        INBOX = "Inbox",
        TEMPLATE = "Template",
        IMAGE = "Image",
        USER_GROUP = "UserGroup",
        USER = "User",
        PIN = "Pin",
        TIMER = "Timer",
        FOLDER = "Folder",
        FILE = "File",
        SETTINGS = "Settings",
        CALENDAR = "Calendar",
        ZOOM_OUT = "ZoomOut",
        ZOOM_IN = "ZoomIn",
        SYNC = "Sync",
        ATTACH = "Attach",
        CAMERA = "Camera",
        ERROR = "Error",
        REFRESH = "Refresh",
        SAVE = "Save",
        CLOCK = "Clock",
        SEND = "Send",
        COMPLETE = "Complete",
        MORE = "More",
        PAUSE = "Pause",
        PLAY = "Play",
        INFO = "Info",
        HELP = "Help",
        EDIT = "Edit",
        STATUS_100 = "Status100",
        STATUS_50 = "Status50",
        STATUS_25 = "Status25",
        STATUS_0 = "Status0",
        STATUS = "Status",
        DELETE = "Delete",
        SORT = "Sort",
        SEARCH = "Search",
        FILTER = "Filter",
        ADD = "Add",
        CHECKBOX_ON = "CheckboxOn",
        CHECKBOX_OFF = "CheckboxOff",
        MOVE = "Move",
        LINK = "Link",
        MENU = "Menu",
        LIST = "List",
        LEFT_SIDE_BAR = "LeftSideBar",
        RIGHT_SIDE_BAR = "RightSideBar",
        DROP_LEFT = "DropLeft",
        DROP_RIGHT = "DropRight",
        DROP_UP = "DropUp",
        DROP_DOWN = "DropDown",
        CLOSE = "Close",
        ARROW_UP = "ArrowUp",
        ARROW_DOWN = "ArrowDown",
        ARROW_FORWARD = "ArrowForward",
        ARROW_BACK = "ArrowBack",
        GRID = "Grid",
        COMMAND = "Command",
    }