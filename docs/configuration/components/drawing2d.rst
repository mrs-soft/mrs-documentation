Аннотации на чертёже --- drawing2d
==================================

Определение
-----------

Компонент используется для работы с чертежами в форме.

Тип компонента в конфигураторе: **drawing2d**.

Внешний вид
-----------

JSON-схема для создания компонента в конфигураторе:

..  code-block:: json

    "drawing": {
        "type": "drawing2d",
        "title": "Чертеж",
        "viewId": "62b99e2123e5d5012300046d"
    }

Как оно выглядит в пользовательском приложении:

..  thumbnail:: images/drawing2d-1-overview.png
    :alt: Пример компонента
    :align: center

Свойства
--------

..  code-block:: json

    "type": "drawing2d",
    "title": "Название компонента",
    "viewId": "...",
    "hidden": false,   
    "helperText": "..."

..  list-table::
    :widths: 10 80 10
    :header-rows: 1

    *   - Свойство
        - Определение
        - Тип данных
    *   - ``type``
        - Тип элемента. Для этого компонента --- это всегда ``drawing2d``.
        - **string**
    *   - ``title``
        - Название компонента, которое отображается в форме.
        - **string**
    *   - ``viewId``
        - В это поле записывается ID представления с чертежами из базы данных.
        - **string**
    *   - ``hidden``
        - Это стандартное свойство для всех компонентов.
          При установке значения ``true`` для этого свойства, компонент будет скрыт из формы.
          Это свойство помогает выстраивать логику для работы с полями.
          То есть с помощью хуков есть возможность изменить значение этого свойства в определённых ситуациях.
          Либо использовать данные из этого поля в других местах, но так, чтобы конечный пользователь не видел этого.
        - **boolean**
    *   - ``helperText``
        - Описание поля. Это стандартное свойство и отображается как текст под полем компонента.
        - **string**


Модель данных
-------------

Данные сохраняются в ``FormInstances`` в поле ``Data`` в виде JSON.

Заполненная форма в пользовательском приложении:

..  thumbnail:: images/drawing2d-2-model.png
    :alt: Пример компонента
    :width: 70%
    :class: framed

После сохранения данные попадают в ``FromInstances`` в конфигураторе. Они сохраняются также в JSON формате:

..  code-block:: json

    "drawing2d": {
        "pin": {
            "styles": {
                "fillStyle": "rgb(255,0,0)",
                "lineWidth": 2,
                "strokeStyle": "rgb(255,0,0)"
        },
        "points": [
            {
              "x": 242.0621795654297,
              "y": 191.7979278564453
            }
        ],
        "h": 42,
        "name": "anno-image",
        "angle": 0,
        "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAzNiA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDQ5QzE5Ljc3NSA0OSAyMS4yMjIyIDQ3LjU2NjcgMjEuMjIyMiA0NS43ODg0QzIxLjIyMjIgNDQuMDEwMiAxOS43NzUgNDIuNTc2OSAxOCA0Mi41NzY5QzE2LjIyNSA0Mi41NzY5IDE0Ljc3NzggNDQuMDEwMiAxNC43Nzc4IDQ1Ljc4ODRDMTQuNzc3OCA0Ny41NjY3IDE2LjIyNSA0OSAxOCA0OVoiIGZpbGw9IiM2QjcyODAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMjguMTg1OCAzMC41NjgyTDI4LjE4NjQgMzAuNTY3OEMzMi4zMTMyIDI3LjU4IDM1IDIyLjgwOTMgMzUgMTcuNDIxQzM1IDguMzE3NTEgMjcuMzUzOCAxIDE4IDFDOC42NDYyMiAxIDEgOC4zMTc1MSAxIDE3LjQyMUMxIDIyLjgwOTUgMy42ODY0MiAyNy41ODExIDcuODEzNTkgMzAuNTY4OUw3LjgxNDE3IDMwLjU2OTRDOC44NjY1NiAzMS4zMzAxIDkuODU1MDUgMzEuOTM4NCAxMC43MjE3IDMyLjQ3MTdDMTAuNzYyMiAzMi40OTY2IDEwLjgwMjQgMzIuNTIxNCAxMC44NDI0IDMyLjU0NkMxMS43NTM0IDMzLjEwNjggMTIuNDk0MiAzMy41NyAxMy4wOTk3IDM0LjA2NkMxMy42OTE3IDM0LjU1MDggMTQuMTE2NiAzNS4wMzgxIDE0LjQwMjMgMzUuNjIwMUMxNC42ODc5IDM2LjIwMTkgMTQuODY2NyAzNi45NDQgMTQuODY2NyAzNy45ODIzQzE0Ljg2NjcgMzkuNzA0NiAxNi4zMDQ2IDQxLjAzODUgMTggNDEuMDM4NUMxOS42OTU0IDQxLjAzODUgMjEuMTMzMyAzOS43MDQ2IDIxLjEzMzMgMzcuOTgyM0MyMS4xMzMzIDM2Ljk0NCAyMS4zMTIxIDM2LjIwMTggMjEuNTk3NyAzNS42MTk5QzIxLjg4MzUgMzUuMDM3NyAyMi4zMDg0IDM0LjU1MDMgMjIuOTAwNCAzNC4wNjUzQzIzLjUwNTkgMzMuNTY5MyAyNC4yNDY3IDMzLjEwNTkgMjUuMTU3NyAzMi41NDVDMjUuMTk3OSAzMi41MjAyIDI1LjIzODUgMzIuNDk1MiAyNS4yNzkzIDMyLjQ3MDFDMjYuMTQ1NyAzMS45MzY4IDI3LjEzMzkgMzEuMzI4NyAyOC4xODU4IDMwLjU2ODJaIiBmaWxsPSIjNkI3MjgwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGVsbGlwc2UgY3g9IjE4IiBjeT0iMTcuOTIzMSIgcng9IjcuMTExMTEiIHJ5PSI3LjA3NjkyIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
        "bounds": {
            "left-top": {
                "x": 242.0621795654297,
                "y": 191.7979278564453
            },
            "right-bottom": {
                "x": 270.0621795654297,
                "y": 233.7979278564453
            } 
        },
        "w": 28,
        "id": "6436b07500f8564084af4b83",
        "image": {}
        },
        "document": {
            "id": "b2f56b61-bf01-40ca-9d52-4506e9854dee",
            "src": "https://[...]/plans/a050e162-d6cf-49c3-b33d-1e5be2d9826a/sheet/1/manifest.json",
            "name": "606",
            "isFolder": false
        }
    }

В ``FormInstances`` попадают все данные о документе.

Примеры использования
---------------------

В примере ниже явно проставлено свойство ``"hidden": false``.

..  code-block:: json

    "maps": {
       "type": "drawing2d",
       "title": "Карты",
       "viewId": "638748cb30ac359874000068",
       "hidden": false
    }