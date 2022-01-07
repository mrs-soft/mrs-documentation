Текстовые элементы
==================

Простое текстовое поле
""""""""""""""""""""""

``text`` --- текстовое поле.

.. code-block:: json

    "name": {
            "title": "Название",
            "description": "Название объекта",
            "type": "text",
            "minLength": 3
    }

----

Текстовое поле в Конструкторе

.. image:: images/component-text.png
    :alt: Текстовое поле в Конструкторе
    :align: center

Поле для ввода email
""""""""""""""""""""

``email`` --- поле почты. Используется с валидацией формата email.

.. code-block:: json

    "email": {
        "title": "E-mail ответственного лица",
        "type": "email",
    }

----

Email в Конструкторе

.. image:: images/component-email.png
    :alt: Email в Конструкторе
    :align: center

----

Неправильный ввод email в Конструкторе

.. image:: images/component-email-wrong.png
    :alt: Неправильный ввод email в Конструкторе
    :align: center

Ввод многострочного текста
""""""""""""""""""""""""""

``textarea`` --- ввод многострочного текста.

.. code-block:: json

    "description": {
        "title": "Описание",
        "description": "Краткое или не очень описание",
        "type": "textarea",
    }

----

Многострочный текст в Конструкторе

.. image:: images/component-textarea.png
    :alt: Многострочный текст в Конструкторе
    :align: center

Ввод числового значения
"""""""""""""""""""""""

``number`` --- числовое поле.

.. code-block:: json

    "amount": {
        "title": "Количество",
        "description": "Количество",
        "type": "number",
    }

----

Числовое значение в Конструкторе

.. image:: images/component-number.png
    :alt: Числовое значение в Конструкторе
    :align: center

Ввод даты
"""""""""

``date`` --- поле даты.

.. code-block:: json

    "date": {
        "title": "Дата",
        "description": "Дата начала",
        "type": "date",
    }

----

Дата в Конструкторе

.. image:: images/component-date.png
    :alt: Дата в Конструкторе
    :align: center

Ввод даты и времени
"""""""""""""""""""

``datetime`` --- поле даты и времени.

.. code-block:: json

    "dateTime": {
        "title": "Дата и время",
        "description": "Дата и время начала",
        "type": "datetime",
    }

----

Время и дата в Конструкторе

.. image:: images/component-datetime.png
    :alt: Время и дата в Конструкторе
    :align: center