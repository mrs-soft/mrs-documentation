Filters
=======

..	code-block:: json

	[
		{
			"icon": "CompleteInput",
			"type": "text",
			"title": "По названию",
			"params": [
				{
					"name": "name",
					"value": ""
				}
			],
			"inSidebar": false,
			"placeholder": "Введите название"
		},
		{
			"icon": "Calendar",
			"type": "date",
			"title": "По дате создания",
			"params": [
				{
					"name": "createDate",
					"value": {
						"end": "",
						"start": ""
					}
				}
			],
			"inSidebar": false
		},
		{
			"icon": "Project",
			"type": "view",
			"title": "По дереву чертежей",
			"params": [
				{
					"name": "cafm",
					"value": ""
				}
			],
			"viewId": "638748cb30ac700123000068",
			"muliple": false,
			"inSidebar": true
		}
	]