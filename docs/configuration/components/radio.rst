Переключатель --- radio
=======================

Определение
-----------

С помощью компонента можно создавать список c переключателями или ряд кнопок.
Подходит для работы со списками, в которых необходимо выбрать только что-то одно.

Тип компонента в конфигураторе: **radio**.

Внешний вид
-----------

Компонент делится на два различных вида отображения. Всё зависит от параметра в свойстве ``variant``.

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
          "title": "...",
          "color": "..."
        }
      ]
    }

..  list-table::
    :widths: 10 80 10
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
    *   - ``variant``
        - Свойство, в котором вы определяете тип переключателя. Может быть либо ``radio``, либо ``button``.
        - **string**
    *   - ``anyOf``
        - С помощью этого свойства задаётся список значений, в котором прописываются варианты ответов через ``enum``.
          Они описываются внутри квадратных скобок --- ``[]``. Дальнейшие свойства прописываются внутри ``anyOf``.
        - **array of objects**
    *   - ``enum``
        - Свойство объявляет пункт списка. После двоеточия в квадратных скобка --- ``[]`` --- записывается строка или число,
          которые в случае выбора будут переданы в экземпляр формы.        
        - **array of strings**
    *   - ``title``
        - Название элемента выбора. Передаётся в клиентское приложение и отображается в форме.
        - **string**
    *   - ``color``
        - Применяется, если в свойстве ``variant`` выбран тип ``button``. Цвета выбираются из базовой темы.
          Если это поле не заполнять, то кнопка будет принимать стандартный цвет приложения. Основные цвета::
            
            error.main, warning.main, info.main, success.main
        - **string**

Модель данных
-------------

Данные сохраняются в ``FormInstances`` в поле ``Data`` в виде JSON.

Выбранное значение списка в пользовательском приложении:

..  thumbnail:: images/radio-screen-1-variant-radio.png
    :alt: Пример компонента 
    :align: center

После сохранения данные попадают в ``FromInstances`` в конфигураторе:

..  code-block:: json

    {
        "selectVariants": "2"
    }

..  note::  Если ввести в ``enum`` текстовое значение, то в ``FromInstances`` они сохранятся в следующем виде:

            .. code-block:: json
            
                {
                  "selectVariants": "ready"
                }

Примеры использования
---------------------

В примере ниже в ``enum`` записаны текстовые значения, которые потом передаются для отображения в Gantt View.

..  code-block:: json

    "workType": {
      "type": "radio",
      "title": "Выберите тип работ:",
      "variant": "radio"
      "anyOf": [
        {
          "enum": [
            "build"
          ],
          "type": "string",
          "title": "Строительные работы"
        },
        {
          "enum": [
            "paint"
          ],
          "type": "string",
          "title": "Покраска"
        }
      ],
    }