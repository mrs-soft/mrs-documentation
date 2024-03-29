Дата и время --- datetime
=========================

Определение
-----------

Компонент используется для ввода даты и времени. Подходит для установки сроков, в которых необходимо указывать точное время.

Тип компонента в конфигураторе: **datetime**

Внешний вид
-----------

JSON-схема для компонента в конфигураторе:

..  code-block:: json

    "entry-date": {
                    "type": "datetime",
                    "title": "Дата и время приезда материалов"
    }

Как оно выглядит в пользовательском приложении:

..  thumbnail:: images/datetime-screen-1.png
    :alt: Пример компонента
    :width: 40%

Окно выбора даты:

..  thumbnail:: images/datetime-screen-2.png
    :alt: Пример компонента 
    :width: 30%

Окно выбора времени следует сразу после выбора даты:

..  thumbnail:: images/datetime-screen-3.png
    :alt: Пример компонента 
    :width: 30%

Свойства
--------

..  code-block:: json

    {
        "type": "datetime",
        "title": "Дата и время начала смены сотрудника",
        "hidden": false,
        "helperText": "Укажите точное время прихода сотрудника на работу"
    }

..  list-table::
    :widths: 10 80 10
    :header-rows: 1

    *   - Свойство
        - Определение
        - Тип данных
    *   - ``type``
        - Тип элемента. Для поля даты и времени — это всегда ``datetime``.
        - **string**
    *   - ``title``
        - Название поля, отображаемое в форме.
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

Заполненное поле даты и времени в пользовательском приложении:

..  thumbnail:: images/datetime-screen-4.png
    :alt: Пример компонента 
    :width: 40%

После сохранения данные попадают в ``FromInstances`` в конфигураторе:

..  code-block:: json

    {
       "entry-date": 1639624790000
    }

Дата и время хранятся в виде временной метки --- timestamp.

..  note::  Timestamp --- это последовательность символов или закодированной информации, показывающей, когда произошло определённое событие.
            Обычно показывает дату и время (иногда с точностью до долей секунд).

Примеры использования
---------------------

В примере ниже компонент прописан с ``description``. Также явно проставлено свойство ``"hidden": false``.

..  code-block:: json

    "dateTime": {
          "type": "datetime",
          "title": "Дата и время",
          "hidden": false,
          "description": "Дата и время начала"
        }
