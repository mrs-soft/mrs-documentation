Компоненты формы
================

Компонент --- это единичный структурный элемент с определенным поведением.
Поведение зависит от задачи, для которой он создан. При необходимости компоненты могут дополняться.

..  toctree::
    :maxdepth: 1
    :caption: Все стандартные компоненты формы:

    components/array
    components/attachments
    components/button-switcher
    components/checkboxes
    components/checkbox
    components/checklistitem
    components/date
    components/datetime
    components/email
    components/number
    components/object
    components/radio
    components/ref-books
    components/status
    components/text-area
    components/text
    components/user

Пример полной формы
-------------------

.. code-block:: json

    {
  "order": [
    "name",
    "email",
    "first",
    "second",
    "sum"
  ],
  "title": "JSONSchema Form",
  "required": [
    "name",
    "email"
  ],
  "properties": {
    "selectUser": {
      "type": "user"
    },
    "selectOne": {
      "enum": [
        "one",
        "two",
        "three"
      ],
      "type": "radio",
      "title": "Проверить:",
      "enumNames": [
        "Стяжки",
        "Стены",
        "Потолки",
        "Дверные проемы"
      ]
    },
    "sum": {
      "type": "number",
      "title": "Сумма",
      "readOnly": true
    },
    "name": {
      "type": "text",
      "title": "Название",
      "minLength": "3",
      "description": "Название объекта"
    },
    "date": {
      "type": "date",
      "title": "Дата",
      "description": "Дата начала"
    },
    "first": {
      "type": "number",
      "title": "Первое значение"
    },
    "selectAny": {
      "type": "checkboxes",
      "items": {
        "enum": [
          0,
          1,
          2,
          3
        ],
        "enumNames": [
          "Первый этаж",
          "Второй этаж",
          "Третий этаж",
          "Пятый этаж"
        ]
      },
      "title": "Проверить:",
      "minItems": 2
    },
    "selectUserArray": {
      "type": "array",
      "items": {
        "type": "user"
      },
      "title": "Сотрудники"
    },
    "status": {
      "type": "status",
      "title": "Статус",
      "default": "done"
    },
    "second": {
      "type": "number",
      "title": "Второе значение"
    },
    "address": {
      "type": "text",
      "title": "Адрес",
      "description": "Адрес объекта"
    },
    "amount": {
      "type": "number",
      "title": "Количество",
      "description": "Количество"
    },
    "documents": {
      "type": "attachments",
      "title": "Документы"
    },
    "objectType": {
      "enum": [
        "Жилой комплекс",
        "Спортивные сооружения",
        "Служебные помещения"
      ],
      "type": "select",
      "title": "Тип объекта"
    },
    "dateTime": {
      "type": "datetime",
      "title": "Дата и время",
      "description": "Дата и время начала"
    },
    "email": {
      "type": "email",
      "title": "E-mail ответственного лица"
    },
    "description": {
      "type": "textarea",
      "title": "Описание",
      "description": "Краткое описание"
    }
  }




.. _react-jsonschema-form: https://github.com/rjsf-team/react-jsonschema-form/