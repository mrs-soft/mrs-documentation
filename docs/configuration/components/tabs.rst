Вкладки для отображения формы по частям
=======================================

Определение
-----------

Вкладки необходимы для разделения формы на части, которые включают разную логику взаимодействия с пользователем.

Вкладки не являются типичным компонентом, для которого прописывается тип.
Для работы с ними необходимо заполнять отдельное поле в схеме, которое называется ``tabs``.

Внешний вид
-----------

..  tab-set::

    ..  tab-item:: JSON-схема

        ..  code-block:: json

            "tabs": [
              {
                "name": "description",
                "type": "form",
                "title": "Описание",
                "hidden": false,
                "disabled": false,
                "fieldNames": [
                "info",
                "request_process_info",
                "description_objeсt"
                ]
              },
              {
                "name": "participant",
                "type": "form",
                "title": "Комиссия",
                "hidden": false,
                "disabled": false,
                "fieldNames": [
                "participant"
                ]
              },
              {
                "name": "check_list",
                "type": "form",
                "title": "Чеклист",
                "hidden": false,
                "disabled": false,
                "fieldNames": [
                "check_list"
                ]
              },
              {
                "name": "check_list_results",
                "type": "form",
                "title": "Заполненные чеклисты",
                "hidden": false,
                "disabled": false,
                "fieldNames": []
              },
              {
                "name": "acceptance_result",
                "type": "form",
                "title": "Результат",
                "hidden": false,
                "disabled": false,
                "fieldNames": [
                "result"
                ]
              },
              {
                "name": "issue",
                "type": "form",
                "title": "Замечания",
                "hidden": false,
                "disabled": false,
                "fieldNames": [
                "issue"
                ]
              },
              {
                "name": "feed",
                "type": "form",
                "title": "Лента",
                "hidden": false,
                "disabled": false,
                "fieldNames": [
                "feed"
                ]
              }
            ]

    ..  tab-item:: Отображение в клиенте

        ..  thumbnail:: images/tabs-screen-1.png
            :alt: Пример текстового компонента
            :align: center
            :class: framed

Свойства
--------

..  code-block:: json

    "name": "...",
    "type": "...",
    "title": "...",
    "fieldNames": [ "..." ],
    "hidden": false,
    "disabled": false,

..  list-table::
    :widths: 10 80 10
    :header-rows: 1
    :align: left

    *   - Свойство
        - Определение
        - Тип данных
    *   - ``name``
        - Наименование вкладки.
        - **string**
    *   - ``title``
        - Отображаемое название вкладки.
        - **string**
    *   - ``type``
        - Тип вкладки. Заполняется либо ``form``, либо ``fullScreen``.
          В первом случае поля вкладки будут отображаться только на самой вкладке после сохранения и открытия экземпляра формы.
          Во втором случае поле вкладки будет доступно для заполнения при создании формы.
        - **string**
    *   - ``fieldNames``
        - Прописывается для типа вкладки ``form``. Поля, которые отображаются на данной вкладке.
        - **array of strings**
    *   - ``fieldName``
        - Прописывается для типа вкладки ``fullScreen``. Поле, которое будет отображаются на данной вкладке.
          В данном случае передать можно только одно поле.
        - **string**
    *   - ``hidden``
        - Это стандартное свойство для всех компонентов.
          При установке значения ``true`` для этого свойства, компонент будет скрыт из формы.
        - **boolean**
    *   - ``disabled``
        - Отключение компонента. Это стандартное свойство и используется для управления компонентом.
          Если значение этого свойства ``true``, то вкладка будет отображаться, но нажать на неё будет нельзя.
        - **string**

Модель данных
-------------

Ниже описана полная модель данных этого компонента.

Интерфейс ``ITab`` для основных полей вкладок.

..  code-block:: typescript

    export interface ITab {
        name: string;
        title: string;
        type: TabType;
        hidden?: boolean;
        disabled?: boolean;
    }

Тип данных ``TabType`` для выбора типа вкладки.

..  code-block:: typescript

    export enum TabType {
        Form = "form",
        FullScreen = "fullScreen",
    }

Интерфейсы для типов вкладок, которые наследуют функционал ``ITab``.

..  code-block:: typescript

    interface ITabForm extends ITab {
        fieldNames: string[];
    }

    interface ITabFullScreen extends ITab {
        fieldName: string;
    }

Примеры использования
---------------------

Форма ниже предназначена для создания роли и распределения прав.

..  code-block:: json

    {
      "scheme": {
        "tabs": [
          {
            "name": "description",
            "type": "form",
            "title": "Роль",
            "hidden": false,
            "disabled": false,
            "fieldNames": [
                "name"
            ]
          },
          {
            "name": "permission",
            "type": "form",
            "title": "Доступные действия в замечаниях",
            "hidden": false,
            "disabled": false,
            "fieldNames": [
              "issue_canCreate"
            ]
          }
        ],
        "properties": [
          {
            "type": "text",
            "title": "Название *",
            "description": "Введите название",
            "name": "name"
          },
          {
            "type": "checkboxes",
            "hidden": false,
            "disabled": false,
            "items": {
              "enum": [
                "issue_canCreate",
                "issue_canDelete",
                "issue_canBeAuthor",
                "issue_canBeExecutor",
                "issue_canBeObserver",
                "issue_actsAsAuthor",
                "issue_actsAsExecutor",
                "issue_actsAsObserver",
                "issue_viewAll"
              ],
              "type": "string",
              "enumNames": [
                "Может создавать замечание",
                "Может удалять замечание",
                "Может быть автором в замечании",
                "Может быть исполнителем в замечания",
                "Может быть наблюдателем в замечании",
                "Обладает правами автора в замечании",
                "Обладает правами исполнителя в замечании",
                "Обладает правами наблюдателя в замечании",
                "Может просматривать замечания"
              ]
            },
            "title": "Доступные действия",
            "minItems": 0,
            "readOnly": false,
            "name": "issue_canCreate"
          }
        ],
        "order": [
          "name",
          "issue_canCreate",
          "issue_canDelete",
          "issue_canBeAuthor",
          "issue_canBeExecutor",
          "issue_canBeObserver",
          "issue_actsAsAuthor",
          "issue_actsAsExecutor",
          "issue_actsAsObserver",
          "issue_viewAll"
        ]
      },
      "isArchived": false,
      "code": null,
      "fieldsForMappedTable": null,
      "tags": [],
      "relationsData": [],
      "title": "Роли",
      "description": null,
      "name": "role_form"
    }

В ней используются всего две вкладки, при чём обе типа ``form``. То есть отрабатывают они только при открытии экземпляра формы.
Чтобы избежать повторов и путаницы, во вкладке **Роль** используется то же самое поле ``name``, что и при создании формы.

Ниже можно посмотреть, как это выглядит:

..  tab-set::

    ..  tab-item:: Создание формы

        ..  thumbnail:: images/tabs-screen-2-fullscreen.png
            :alt: Вкладки
            :align: center
            :class: framed

    ..  tab-item:: Экземпляр формы: Роль

        ..  thumbnail:: images/tabs-screen-3-form-first-tab.png
            :alt: Вкладки
            :align: center
            :class: framed

    ..  tab-item:: Экземпляр формы: Права

        ..  thumbnail:: images/tabs-screen-4-form-second-tab.png
            :alt: Вкладки
            :align: center
            :class: framed

