Переключатель --- radio
=======================

Определение
-----------

С помощью компонента можно создавать список c переключателями или ряд кнопок.
Подходит для работы со списками, в которых необходимо выбрать только что-то одно.

Тип компонента в конфигураторе: **radio**.

Внешний вид
-----------

Компонент делится на два различных видах отображения. Всё зависит от параметра в свойстве ``variant``.

variant: radio
++++++++++++++

JSON-схема:

..  code-block:: json
    
    "selectVariants": {
      "type": "radio",
      "title": "Проверить:",
      "variant": "radio",
      "anyOf": [
        {
          "enum": [
            "1"
          ],
          "type": "string",
          "title": "Отменено"
        },
        {
          "enum": [
            "2"
          ],
          "type": "string",
          "title": "Готов к приёмке" 
        },
        {
          "enum": [
            "3"
          ],
          "type": "string",
          "title": "Не готов к приемке"
        }
      ]
    }

Отображение в клиенте:

..  thumbnail:: images/radio-screen-1-variant-radio.png
    :alt: Пример компонента
    :width: 70%
    :class: framed

variant: button
+++++++++++++++

JSON-схема:

..  code-block:: json
    
    "selectVariants": {
      "type": "radio",
      "title": "Проверить:",
      "variant": "button",
      "anyOf": [
        {
          "enum": [
            "1"
          ],
          "type": "string",
          "title": "Отменено"
        },
        {
          "enum": [
            "2"
          ],
          "type": "string",
          "color": "success.main",
          "title": "Готов к приёмке"
        },
        {
          "enum": [
            "3"
          ],
          "type": "string",
          "color": "error.main",
          "title": "Не готов к приемке"
        }
      ]
    }

Отображение в клиенте:

..  thumbnail:: images/radio-screen-2-variant-button.png
    :alt: Пример компонента
    :width: 70%
    :class: framed

Свойства
--------

..  code-block:: json
    
    {
    "type": "radio",
      "title": "...",
      "variant": "...",
      "anyOf": [
        {
          "enum": [
            "..."
          ],
          "type": "string",
          "title": "...",
          "color": "..."
        }
      ]
    }

..  list-table::
    :header-rows: 1

    *   - Свойство
        - Определение
        - Тип данных
    *   - ``type``
        - Тип элемента. Для списка с единичным выбором — это всегда ``radio``.
        - **string**
    *   - ``title``
        - Название поля, отображаемое в форме.
        - **string**
    *   - ``anyOf``
        - С помощью этого свойства задаётся список значений, в котором прописываются варианты ответов через ``enum``.
          Они описываются внутри квадратных скобок --- ``[]``.
        - **array**
    *   - ``enum``
        - Единичное . Если значений больше одного, они вписываются в квадратных скобках .
        
          ..  code-block:: json
        
              "enum": ["one", "two", "three", "four"]

        - **string**

Модель данных
-------------

Данные сохраняются в ``FormInstances`` в поле ``Data`` в виде JSON.

Выбранное значение списка в пользовательском приложении:

..  thumbnail:: images/radio-screen-2.png
    :alt: Пример компонента 
    :align: center

После сохранения данные попадают в ``FromInstances`` в конфигураторе:

.. code-block:: json

    {
        "productivity": "2"
    }

..  note::  В ``FromInstances`` идут значения из ``enum``, а не наименования из ``enumNames``.
            Соответственно, если ввести в ``enum`` текстовое значение, то в ``FromInstances`` они сохранятся в следующем виде:

            .. code-block:: json
            
                {
                  "productivity": "three"
                }

Комментарии
-----------

Примеры использования
---------------------