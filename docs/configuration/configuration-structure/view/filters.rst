Filters
=======

Фильтры необходимы для обработки запросов из блока ``query`` в :ref:`Query in Query`.

Каждому фильтру должен соответствовать блок с запросом в ``query``, в противном случае фильтр не будет работать.

Структура фильтров
------------------

Общий вид JSON-файла с фильтрами:

..  code-block:: json

    [
        {
            "icon": "...",
            "type": "...",
            "title": "...",
            "params": [
                    {
                            "name": "...",
                            "value": "..."
                    }
            ],
            "inSidebar": false,
            "placeholder": "..."
        }
    ]

IViewFilter
+++++++++++

Общая модель данных для фильтров.

..	code-block:: typescript

	export interface IViewFilter {
		title: string;
		placeholder?: string;
		viewId?: string;
		fields?: string[];
		type: VIEW_FILTER_TYPE;
		icon: string;
		multiple?: boolean;
		inSidebar?: boolean;
		params: IViewFilterParameter[];
	}

..  list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    *   - Поле
        - Определение
    *   - ``title``
        - Название фильтра, которое будет видеть пользователь.
    *   - ``placeholder``
        - Заглушка для фильтра.
    *   - ``viewId``
        - В поле записывается наименование представления, если тип фильтра --- ``view``.
    *   - ``fields``
        - Поля формы или справочника, к которым применяется фильтр.
    *   - ``type``
        - В этом поле определяется тип фильтра. Подробнее о них :ref:`ниже<Filter Type>`.
    *   - ``icon``
        - В этом поле записывается наименование иконки для фильтра. Само наименование берётся из библиотеки иконок.
    *   - ``multiple``
        - Этот параметр отвечает за множественный выбор. Если значение ``true``, то за раз можно выбрать несколько фильтров.
    *   - ``inSidebar``
        - Этот параметр работает с боковым меню. Если значение ``true``, то у представления появится боковое меню.
          Данные для этого меню берутся из значений фильтра.
    *   - ``params``
        - В этом блоке описываются параметры, относительно которых совершаются запросы при фильтрации.
    
        

IViewFilterParameter
++++++++++++++++++++

Модель данных для параметров фильтра.

..	code-block:: typescript

	export interface IViewFilterParameter {
		name: string;
		value?: string | object | object[];
	}

..  list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    *   - Поле
        - Определение
    *   - ``name``
        - Название переменной из поля ``value`` в **Query**.
    *   - ``value``
        - ЗначВ зависимости от типа фильтра, поле может передавать строку, объект или массив объектов.
          

..  _Filter Type:

VIEW_FILTER_TYPE
++++++++++++++++

..	code-block:: typescript

	export enum VIEW_FILTER_TYPE {
		TEXT = "text",
		VIEW = "view",
		DATE = "date",
		SWITCH = "switch",
	}

..  list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    *   - Поле
        - Определение