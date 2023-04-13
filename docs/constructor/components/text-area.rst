Многострочный текст --- textarea
================================

Определение
-----------

Компонент используется для ввода многострочных текстовых данных: описания, комментарии, заметки и прочее.
Тип компонента в конфигураторе: **textarea**.

Внешний вид
-----------

JSON-схема для компонента в конфигураторе:

..  code-block:: json

    "comment": {
                "type": "textarea",
                "title": "Комментарий",
                "description": "Введите комментарий...",
                "maxLength": 100
    }

Как пользователь видит компонент:

..  thumbnail:: images/textarea-screen-1.png
    :alt: Пример многострочного текстового компонента
    :align: center

Свойства
--------

..  code-block:: json

    "notes": {
                "type": "textarea",
                "title": "Заметки",
                "description": "Введите заметки...",
                "maxLength": 200,
                "minLength": 10,
                "rowsMax": 10,
                "rowsMin": 2,
                "multiple": true,
                "hidden": false
                "helperText": "Поле для заметок"
    }

..  list-table::
    :widths: 10 80 10
    :header-rows: 1

    *   - Свойство
        - Определение
        - Тип данных
    *   - ``type``
        - Тип элемента. Для многострочного текста — это всегда ``textarea``.
        - **string**
    *   - ``title``
        - Название поля, отображаемое в форме.
        - **string**
    *   - ``description``
        - Описание поля. Отображается как заглушка поля в форме.
        - **string**
    *   - ``minLength``
        - Минимальное количество символов в поле для того, чтобы заполненная форма считалась корректной.
        - **number**
    *   - ``maxLength``
        - Максимальное количество символов в поле для того, чтобы заполненная форма считалась корректной.
        - **number**
    *   - ``rowsMin``
        - Минимальное количество строк на форме.
        - **number**
    *   - ``rowsMax``
        - Максимальное количество строк на которое поле будет расширяться до появление скролла.
        - **number**
    *   - ``multiple``
        - При установке значения ``true`` для этого свойства, поле текста будет расширяться, пока не достигнет значения ``rowsMax``. 
        - **boolean**
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

Заполненное многострочное текстовое поле в пользовательском приложении:

..  thumbnail:: images/textarea-screen-2.png
    :alt: Пример заполненного многострочного текстового компонента
    :align: center

После сохранения данные попадают в ``FromInstances`` в конфигураторе:

..  code-block:: json

    {
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus fermentum lacus, sed efficitur orci sagittis id. Praesent laoreet nibh libero, eget sodales lacus laoreet a. Duis sed placerat erat. Phasellus auctor rhoncus nulla sit amet feugiat. Cras vitae ornare ante. Sed fringilla nisi nec mattis tristique. Nunc dictum ut enim quis iaculis. Integer lacinia at urna ut imperdiet. Donec lorem orci, maximus eget ante in, semper posuere sem. Sed sem ligula, volutpat sed quam sit amet, varius mollis orci. In pulvinar accumsan ligula. Phasellus ornare imperdiet leo, eget laoreet ex accumsan et. Praesent ac odio sem. Praesent dapibus lobortis neque, nec malesuada est congue vestibulum."
    }

Примеры использования
---------------------

В примере ниже используются ограничения ``"rowsMin": 2`` и ``"rowsMax": 5``. Это значит, что в поле будет минимум 2 строки,
а до поялвения скролла необходимо заполнить 5 строк.

..  code-block:: json

    {
        "description": {
            "type": "textarea",
            "title": "Описание",
            "hidden": false,
            "rowsMin": 2,
            "rowsMax": 5,
            "description": "Краткое описание"
        }
    }
    