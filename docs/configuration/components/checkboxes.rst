Список из чекбоксов --- checkboxes
==================================

Определение
-----------

С помощью компонента можно создавать список состоящий из чекбоксов.
Подходит для создания списков, в которых есть возможность выбрать из нескольких вариантов.

Тип компонента в конфигураторе: **checkboxes**.

Внешний вид
-----------

JSON-схема для компонента в конфигураторе:

..  code-block:: json
    
    "productivity": {
        "type": "checkboxes",
        "minItems": 1,
        "maxItems": 3,
        "title": "Выберите самых продуктивных сотрудников за день:",
        "items": {
            "enum": [0, 1, 2, 3],
            "enumNames": ["Гаранин", "Максимов", "Байков", "Миронов"]
        }
    }

Список с множественным выбором в пользовательском приложении:

..  thumbnail:: images/checkboxes-screen-1.png
    :alt: Пример компонента
    :align: center

Свойства
--------

..  code-block:: json
    
    {
        "type": "checkboxes",
        "minItems": 1,
        "maxItems": 3,
        "title": "...",
        "items": {
            "enum": [ 0 ],
            "enumNames": ["..."]
        }
        "hidden": false,
        "helperText": "..."
    }

..  list-table::
    :widths: 10 80 10
    :header-rows: 1
    
    *   - Свойство
        - Определение
        - Тип данных
    *   - ``type``
        - Тип элемента. Для списка с множественным выбором — это всегда ``checkboxes``.
        - **string**
    *   - ``minItems``
        - Минимальное количество выбранных элементов для того, чтобы заполненная форма считалась корректной.
        - **number**
    *   - ``maxItems``
        - Максимальное количество выбранных элементов для того, чтобы заполненная форма считалась корректной.
        - **number**
    *   - ``title``
        - Название поля, отображаемое в форме.
        - **string**
    *   - ``items``
        - С помощью атрибута задаётся список значений, в котором прописываются ``enum`` и ``enumNames``
        - **array**
    *   - ``enum``
        - Числовой список доступных значений.
          Если значений больше одного, они вписываются в квадратных скобках --- ``[]``.
        - **number**
    *   - ``enumNames``
        - Список отображающихся наименований для значений из поля ``enum``.
          Если значений больше одного, они вписываются в квадратных скобках --- ``[]``.
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

Выбранные значения списка в пользовательском приложении:

..  thumbnail:: images/checkboxes-screen-2.png
    :alt: Пример компонента 
    :align: center

После сохранения данные попадают в ``FromInstances`` в конфигураторе.

..  code-block:: json

    {
        "productivity": [ "0", "1", "2" ]
    }

..  note:: В ``FromInstances`` идут значения из ``enum``, а не наименования из ``enumNames``.

Примеры использования
---------------------

В примере ниже создан чеклист для проверки этажей, в котором необходимо выбрать минимум 2 пункта, чтобы форма считалось корректной.
Также явно проставлено свойство ``"hidden": false``.

..  code-block:: json

    "floors": {
          "type": "checkboxes",
          "items": {
            "enum": [0,1,2,3],
            "type": "number",
            "enumNames": [
              "Первый этаж",
              "Второй этаж",
              "Третий этаж",
              "Пятый этаж"
            ]
          },
          "title": "Проверить:",
          "hidden": false,
          "minItems": 2
        }