Drawing2d — Чертёж
==================

Определение
-----------

Представление ``drawing2d`` --- это возможность отображать и работать с двухмерными чертежами.
Просматривать чертеж, проставлять и редактировать аннотации и отметки, а также указывать дополнительную информацию.

..  thumbnail:: images/drawing2d-1-view.png
    :align: center
    :alt: Drawing2d View
    :class: framed

Структура данных
----------------

Назначение полей
++++++++++++++++

Структура ``drawing2d`` подразумевает наличие: ``json``, ``map``, ``query`` и ``filters``.

JSON
````

..  code-block:: json

    {
    	"title": "...",
    	"class": "drawing2d",
    	"settings": {
    		"emptyList": {
    			"nothingFound": {
    				"text": "...",
    				"subtitle": "..."
    			},
    			"nothingSelected": {
    				"text": "..."
    			}
    		}
    	},
    	"isArchived": false,
    	"forCreate": {
    		"type": "formInstance",
    		"formId": "6387490730ac70012300006b"
    	},
    	"type": null,
    	"sqlField": null,
    	"relationsData": [],
    	"name": "..."
    }
    
Map
```


Query
`````


Filters
```````


Модель данных
+++++++++++++

..  code-block:: javascript

    interface IDrawing2dViewItem {
        id: string,
        title: IViewTitle;
        description?: IViewDescription;
        pin: object[];
        shapes: object[];
        document: object;
    }

Пример
------

Комментарии
-----------

