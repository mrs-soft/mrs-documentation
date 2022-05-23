window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "Содержит информацию о зафиксированных замечаниях, сроках устранения, наполненности замечаний, участниках. Позволяет интегрировать данные из платформы МРС с другими системами.\nДля подключения к данным платформы МРС необходимо подключить ключ API в административной панели вашей организации в настройках и составить запрос:\nhttp://{Код организации}.plotpad.com/{Конечная точка}",
    "version" : "2.0",
    "title" : "Plotpad service API",
    "contact" : { },
    "license" : { }
  },
  "host" : "localhost:8080",
  "basePath" : "/",
  "tags" : [ {
    "name" : "Annotations",
    "description" : " "
  }, {
    "name" : "Archive",
    "description" : " "
  }, {
    "name" : "Assignment",
    "description" : " "
  }, {
    "name" : "Attachments",
    "description" : " "
  }, {
    "name" : "Categories",
    "description" : " "
  }, {
    "name" : "Comments",
    "description" : " "
  }, {
    "name" : "Download",
    "description" : " "
  }, {
    "name" : "Events",
    "description" : " "
  }, {
    "name" : "Extra",
    "description" : " "
  }, {
    "name" : "Favorites",
    "description" : " "
  }, {
    "name" : "Folders",
    "description" : " "
  }, {
    "name" : "Licenses",
    "description" : " "
  }, {
    "name" : "Login",
    "description" : " "
  }, {
    "name" : "Normatives",
    "description" : " "
  }, {
    "name" : "Organizations",
    "description" : " "
  }, {
    "name" : "Permission",
    "description" : " "
  }, {
    "name" : "Ping",
    "description" : " "
  }, {
    "name" : "Plans",
    "description" : " "
  }, {
    "name" : "Profile",
    "description" : " "
  }, {
    "name" : "Projects",
    "description" : " "
  }, {
    "name" : "Recommendation",
    "description" : " "
  }, {
    "name" : "Report",
    "description" : " "
  }, {
    "name" : "Roles",
    "description" : " "
  }, {
    "name" : "Sheets",
    "description" : " "
  }, {
    "name" : "Tasks",
    "description" : " "
  }, {
    "name" : "Token",
    "description" : " "
  }, {
    "name" : "TwoFactorAuth",
    "description" : " "
  }, {
    "name" : "Users",
    "description" : " "
  }, {
    "name" : "XML Import",
    "description" : " "
  } ],
  "paths" : {
    "/nrs/2fa" : {
      "get" : {
        "tags" : [ "TwoFactorAuth" ],
        "summary" : "Возвращает секретный ключ",
        "operationId" : "getSecretKeyUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "type",
          "in" : "query",
          "description" : "Тип двухфакторной аутентификации.",
          "required" : false,
          "type" : "string",
          "allowEmptyValue" : false,
          "enum" : [ "email", "google" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/SecretKeyData"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/2fa/resend" : {
      "post" : {
        "tags" : [ "TwoFactorAuth" ],
        "summary" : "Отправляет секретный ключ заново",
        "operationId" : "resendUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "loginUser",
          "description" : "Логинация пользователя.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/LoginUser"
          }
        }, {
          "name" : "type",
          "in" : "query",
          "description" : "Тип двухфакторной аутентификации.",
          "required" : false,
          "type" : "string",
          "allowEmptyValue" : false,
          "enum" : [ "email", "google" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Response"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/2fa/update" : {
      "post" : {
        "tags" : [ "TwoFactorAuth" ],
        "summary" : "Обновляет секретный ключ",
        "operationId" : "updateSecretUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "type",
          "in" : "query",
          "description" : "Тип двухфакторной аутентификации.",
          "required" : false,
          "type" : "string",
          "allowEmptyValue" : false,
          "enum" : [ "email", "google" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/SecretKeyData"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/2fa/validation" : {
      "post" : {
        "tags" : [ "TwoFactorAuth" ],
        "summary" : "Проверяет секретный ключ",
        "operationId" : "checkKeyUsingPOST",
        "consumes" : [ "text/plain" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "key",
          "description" : "Секретный ключ.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "name" : "type",
          "in" : "query",
          "description" : "Тип двухфакторной аутентификации.",
          "required" : false,
          "type" : "string",
          "allowEmptyValue" : false,
          "enum" : [ "email", "google" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/ResponseEntity"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/annotation" : {
      "get" : {
        "tags" : [ "Annotations" ],
        "summary" : "Возвращает информацию об аннотации",
        "operationId" : "getUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Annotation"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Annotations" ],
        "summary" : "Создаёт аннотацию на плане",
        "operationId" : "createUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createAnnotations",
          "description" : "Создание аннотации.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateAnnotations"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Annotation"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Annotations" ],
        "summary" : "Удаляет аннотацию",
        "operationId" : "deleteUsingDELETE",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/archive/erase" : {
      "post" : {
        "tags" : [ "Archive" ],
        "summary" : "Удаляет навсегда заархивированный элемент",
        "operationId" : "eraseUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "eraseData",
          "description" : "Удаление заархивированного элемента.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/EraseDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/archive/restore" : {
      "post" : {
        "tags" : [ "Archive" ],
        "summary" : "Восстанавливает заархивированный элемент",
        "operationId" : "restoreUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "restoreData",
          "description" : "Восстановление заархивированного элемента.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/RestoreDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/assignment" : {
      "get" : {
        "tags" : [ "Assignment" ],
        "summary" : "Возвращает информацию о пользователях назначенных на проект",
        "operationId" : "getAssignmentUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Assignment"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/attachment" : {
      "get" : {
        "tags" : [ "Attachments" ],
        "summary" : "Возвращает информацию о приложении в замечании",
        "operationId" : "getUsingGET_1",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "address",
          "in" : "query",
          "description" : "URI файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "clonedFromId",
          "in" : "query",
          "description" : "Идентификатор элемента, с которого сделана копия.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "contentType",
          "in" : "query",
          "description" : "Тип файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fileName",
          "in" : "query",
          "description" : "Имя файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fileSize",
          "in" : "query",
          "description" : "Размер файла в байтах.",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "latitude",
          "in" : "query",
          "description" : "Геолокация. Широта, на которой было сделано приложение.",
          "required" : false,
          "type" : "number",
          "format" : "double"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "longitude",
          "in" : "query",
          "description" : "Геолокация. Долгота, на которой было сделано приложение.",
          "required" : false,
          "type" : "number",
          "format" : "double"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Статус элемента.",
          "required" : false,
          "type" : "string",
          "enum" : [ "CREATE", "NORMAL", "BROKEN", "NONE" ]
        }, {
          "name" : "urlToFile",
          "in" : "query",
          "description" : "Возвращает информацию о файле по прямой ссылке (URL или URI).",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Attachment"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Attachments" ],
        "summary" : "Загружает приложение",
        "operationId" : "createUsingPOST_1",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createNrsAttachment",
          "description" : "Загрузка приложения в замечание.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateNrsAttachment"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Attachment"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "put" : {
        "tags" : [ "Attachments" ],
        "summary" : "Изменяет приложение",
        "operationId" : "uploadUsingPUT",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "string",
          "x-example" : "5d0a4264e4e4687f4e7bbc27"
        }, {
          "name" : "latitude",
          "in" : "query",
          "description" : "Геолокация. Широта, на которой было сделано приложение.",
          "required" : false,
          "type" : "number",
          "format" : "double",
          "x-example" : 56.6393008
        }, {
          "name" : "longitude",
          "in" : "query",
          "description" : "Геолокация. Долгота, на которой было сделано приложение.",
          "required" : false,
          "type" : "number",
          "format" : "double",
          "x-example" : 47.8939321
        }, {
          "name" : "originalName",
          "in" : "query",
          "description" : "Оригинальное (изначальное) название файла.",
          "required" : false,
          "type" : "string",
          "x-example" : "Photo421.jpg"
        }, {
          "name" : "parentId",
          "in" : "query",
          "description" : "Идентификатор родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "f354g64454h545454545"
        }, {
          "name" : "parentRef.id",
          "in" : "query",
          "description" : "Идентификатор.",
          "required" : false,
          "type" : "string",
          "x-example" : "f354g64454h545454545"
        }, {
          "name" : "parentRef.type",
          "in" : "query",
          "description" : "Тип сущности.",
          "required" : false,
          "type" : "string",
          "x-example" : "TASK",
          "enum" : [ "PLAN", "SHEET", "USER", "TASK", "ANNOTATION", "FOLDER", "PROJECT", "FAVORITE", "CHECK_ITEM", "PERMISSION", "ROLE", "ORGANIZATION", "ATTACHMENT", "NORMATIVE", "NORMATIVE_GROUP", "NORMATIVE_MASK", "COMMENT", "REPORT", "REPORT_TEMPLATE", "PROJECTION", "MSP_TASK", "CATEGORY", "CONTRACT", "JOB_TYPE", "COMMERCIAL_PROJECT_NAME", "CHECKLIST", "CHECKLIST_BLANK", "BIM_OBJECT", "SHEET_RELATION", "CHART", "ASSIGNMENT", "ANCESTRY" ]
        }, {
          "name" : "parentType",
          "in" : "query",
          "description" : "Тип родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "project",
          "enum" : [ "PLAN", "SHEET", "USER", "TASK", "ANNOTATION", "FOLDER", "PROJECT", "FAVORITE", "CHECK_ITEM", "PERMISSION", "ROLE", "ORGANIZATION", "ATTACHMENT", "NORMATIVE", "NORMATIVE_GROUP", "NORMATIVE_MASK", "COMMENT", "REPORT", "REPORT_TEMPLATE", "PROJECTION", "MSP_TASK", "CATEGORY", "CONTRACT", "JOB_TYPE", "COMMERCIAL_PROJECT_NAME", "CHECKLIST", "CHECKLIST_BLANK", "BIM_OBJECT", "SHEET_RELATION", "CHART", "ASSIGNMENT", "ANCESTRY" ]
        }, {
          "in" : "body",
          "name" : "photoAttachment",
          "description" : "photoAttachment",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/PhotoAttachmentData"
          }
        }, {
          "name" : "urlToFile",
          "in" : "query",
          "description" : "Возвращает информацию о файле по прямой ссылке (URL или URI).",
          "required" : false,
          "type" : "string",
          "x-example" : "mrsdemo/report/afd1224a-3db2-4cb7-869a-70d9b78e6160/Photo421.jpg"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Attachment"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Attachments" ],
        "summary" : "Удаляет приложение",
        "operationId" : "deleteUsingDELETE_1",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/category" : {
      "get" : {
        "tags" : [ "Categories" ],
        "summary" : "Возвращает информацию о категории замечаний",
        "operationId" : "getUsingGET_2",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "folder",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string",
          "x-example" : "categoryName"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Category"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Categories" ],
        "summary" : "Создаёт категорию замечаний",
        "operationId" : "createUsingPOST_2",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createCategory",
          "description" : "Создание категории.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CategoryRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Category"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Categories" ],
        "summary" : "Удаляет категорию замечаний",
        "operationId" : "deleteUsingDELETE_2",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Categories" ],
        "summary" : "Изменяет категорию замечаний ",
        "operationId" : "updateUsingPATCH",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Category"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/category/find" : {
      "get" : {
        "tags" : [ "Categories" ],
        "summary" : "Ищет категорию замечаний",
        "operationId" : "searchUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "searchCategory",
          "description" : "Поиск категории.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/SearchCategory"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Category"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/comment" : {
      "get" : {
        "tags" : [ "Comments" ],
        "summary" : "Возвращает информацию о комментарии к замечанию",
        "operationId" : "getUsingGET_3",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "text",
          "in" : "query",
          "description" : "Текст комментария.",
          "required" : false,
          "type" : "string",
          "x-example" : "commentText"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Comment"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Comments" ],
        "summary" : "Создаёт комментарий к замечанию",
        "operationId" : "createUsingPOST_3",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "taskCreate",
          "description" : "Создание комментария.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CommentCreateContent"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Comment"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Comments" ],
        "summary" : "Удаляет комментарий к замечанию",
        "operationId" : "deleteUsingDELETE_3",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Comments" ],
        "summary" : "Изменяет комментарий к замечанию",
        "operationId" : "updateUsingPATCH_1",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Comment"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/download" : {
      "get" : {
        "tags" : [ "Download" ],
        "summary" : "Возвращает информацию о скачиваемом файле.",
        "operationId" : "downloadUsingGET_2",
        "produces" : [ "*/*" ],
        "parameters" : [ {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentId",
          "in" : "query",
          "description" : "Идентификатор родителя.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "parentType",
          "in" : "query",
          "description" : "Тип родителя.",
          "required" : false,
          "type" : "string",
          "enum" : [ "PLAN", "SHEET", "USER", "TASK", "ANNOTATION", "FOLDER", "PROJECT", "FAVORITE", "CHECK_ITEM", "PERMISSION", "ROLE", "ORGANIZATION", "ATTACHMENT", "NORMATIVE", "NORMATIVE_GROUP", "NORMATIVE_MASK", "COMMENT", "REPORT", "REPORT_TEMPLATE", "PROJECTION", "MSP_TASK", "CATEGORY", "CONTRACT", "JOB_TYPE", "COMMERCIAL_PROJECT_NAME", "CHECKLIST", "CHECKLIST_BLANK", "BIM_OBJECT", "SHEET_RELATION", "CHART", "ASSIGNMENT", "ANCESTRY" ]
        }, {
          "name" : "tokenOnly",
          "in" : "query",
          "description" : "Получить токен на скачивание или сразу файл.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "type",
          "in" : "query",
          "description" : "Тип сущности.",
          "required" : false,
          "type" : "string",
          "enum" : [ "PLAN", "SHEET", "USER", "TASK", "ANNOTATION", "FOLDER", "PROJECT", "FAVORITE", "CHECK_ITEM", "PERMISSION", "ROLE", "ORGANIZATION", "ATTACHMENT", "NORMATIVE", "NORMATIVE_GROUP", "NORMATIVE_MASK", "COMMENT", "REPORT", "REPORT_TEMPLATE", "PROJECTION", "MSP_TASK", "CATEGORY", "CONTRACT", "JOB_TYPE", "COMMERCIAL_PROJECT_NAME", "CHECKLIST", "CHECKLIST_BLANK", "BIM_OBJECT", "SHEET_RELATION", "CHART", "ASSIGNMENT", "ANCESTRY" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/download/{token}" : {
      "get" : {
        "tags" : [ "Download" ],
        "summary" : "Возвращает информацию о скачиваемом файле по токену загрузки.",
        "operationId" : "downloadUsingGET_1",
        "produces" : [ "*/*" ],
        "parameters" : [ {
          "name" : "token",
          "in" : "path",
          "description" : "Токен на загрузку файла.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/download/{token}/{fileName}" : {
      "get" : {
        "tags" : [ "Download" ],
        "summary" : "Возвращает информацию о скачиваемом файле по токену загрузки и имени файла.",
        "operationId" : "downloadUsingGET",
        "produces" : [ "*/*" ],
        "parameters" : [ {
          "name" : "fileName",
          "in" : "path",
          "description" : "Имя файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "token",
          "in" : "path",
          "description" : "Токен на загрузку файла.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/event" : {
      "get" : {
        "tags" : [ "Events" ],
        "summary" : "Возвращает историю изменений. Любое действие с API тоже учитывается",
        "operationId" : "getUsingGET_4",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "createDate",
          "in" : "query",
          "description" : "Поиск по дате создания. Используется с дописыванием .date (поиск по конкретной дате), .gt (> даты), .gte (>= дате), .lt(< даты), .lte (<= дате). ",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "eventType",
          "in" : "query",
          "description" : "Тип событий.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "CREATE", "UPDATE", "ARCHIVE", "RESTORE", "DELETE", "CLONE", "MOVE", "IMPORT", "LOGIN", "AVATAR_UPDATE", "CONVERSION_FINISH", "UPLOAD", "ASSIGNMENT", "COPY" ]
          },
          "collectionFormat" : "multi",
          "enum" : [ "CREATE", "UPDATE", "ARCHIVE", "RESTORE", "DELETE", "CLONE", "MOVE", "IMPORT", "LOGIN", "AVATAR_UPDATE", "CONVERSION_FINISH", "UPLOAD", "ASSIGNMENT", "COPY" ]
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов событий.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "initiator",
          "in" : "query",
          "description" : "Инициатор событий.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "objectId",
          "in" : "query",
          "description" : "Идентификаторы сущностей, которые изменялись.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "objectType",
          "in" : "query",
          "description" : "Типы сущностей, которые изменялись.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
          },
          "collectionFormat" : "multi",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Event"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/extra/project" : {
      "get" : {
        "tags" : [ "Extra" ],
        "summary" : "Возвращает дополнительную информацию по проектам",
        "operationId" : "getProjectsExtraInfoUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeChild",
          "in" : "query",
          "description" : "Включать информацию о подпапках или нет.",
          "required" : false,
          "type" : "boolean",
          "default" : true,
          "allowEmptyValue" : false
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ProjectExtraInfo"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/extra/task" : {
      "get" : {
        "tags" : [ "Extra" ],
        "summary" : "Возвращает дополнительную информацию по замечаниям",
        "operationId" : "getTasksExtraInfoUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/TaskExtraInfo"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/favorite" : {
      "get" : {
        "tags" : [ "Favorites" ],
        "summary" : "Возвращает информацию об избранном элементе",
        "operationId" : "getUsingGET_5",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/"
        }, {
          "name" : "createDate",
          "in" : "query",
          "description" : "Дата создания элемента, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1619163687713"
        }, {
          "name" : "entityType",
          "in" : "query",
          "description" : "Тип сущности.",
          "required" : false,
          "type" : "string",
          "x-example" : "TASK",
          "enum" : [ "PLAN", "SHEET", "USER", "TASK", "ANNOTATION", "FOLDER", "PROJECT", "FAVORITE", "CHECK_ITEM", "PERMISSION", "ROLE", "ORGANIZATION", "ATTACHMENT", "NORMATIVE", "NORMATIVE_GROUP", "NORMATIVE_MASK", "COMMENT", "REPORT", "REPORT_TEMPLATE", "PROJECTION", "MSP_TASK", "CATEGORY", "CONTRACT", "JOB_TYPE", "COMMERCIAL_PROJECT_NAME", "CHECKLIST", "CHECKLIST_BLANK", "BIM_OBJECT", "SHEET_RELATION", "CHART", "ASSIGNMENT", "ANCESTRY" ]
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "path",
          "in" : "query",
          "description" : "Путь до конкретного элемента.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:TASK"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "userId",
          "in" : "query",
          "description" : "Идентификатор избранного пользователя.",
          "required" : false,
          "type" : "string",
          "x-example" : "5d416b0ee4e4685f534ba21b"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Favorite"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Favorites" ],
        "summary" : "Создает избранный элемент",
        "operationId" : "createUsingPOST_4",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createFavorite",
          "description" : "Создание избранного элемента.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateFavorite"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Favorite"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Favorites" ],
        "summary" : "Удаляет избранный элемент",
        "operationId" : "deleteUsingDELETE_4",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ancestryList",
          "description" : "Происхождение сущности.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/folder" : {
      "get" : {
        "tags" : [ "Folders" ],
        "summary" : "Возвращает информацию о папке",
        "operationId" : "getUsingGET_6",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "names",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Folder"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Folders" ],
        "summary" : "Создаёт папку",
        "operationId" : "createUsingPOST_5",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createFolder",
          "description" : "Создание папки.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateFolder"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Folder"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Folders" ],
        "summary" : "Удаляет папку",
        "operationId" : "deleteUsingDELETE_5",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Folders" ],
        "summary" : "Изменяет папку",
        "operationId" : "updateUsingPATCH_2",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Folder"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/license" : {
      "get" : {
        "tags" : [ "Licenses" ],
        "summary" : "Возвращает информацию о количестве используемых и выданных лицензий ",
        "operationId" : "getUsingGET_7",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/LicenseStatusResponse"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/login" : {
      "post" : {
        "tags" : [ "Login" ],
        "summary" : "Зайти в аккаунт",
        "operationId" : "loginUserUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "X-Real-IP",
          "in" : "header",
          "description" : "IP-адрес пользователя.",
          "required" : false,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "loginUser",
          "description" : "Логинация пользователя.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/LoginUser"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/login/2fa" : {
      "post" : {
        "tags" : [ "Login" ],
        "summary" : "Использование двухфакторной аутентификации",
        "operationId" : "loginUserWithOtpUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "X-Real-IP",
          "in" : "header",
          "description" : "IP-адрес пользователя.",
          "required" : false,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "loginUser",
          "description" : "Логинация пользователя.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/LoginUser"
          }
        }, {
          "name" : "tfaType",
          "in" : "query",
          "description" : "Тип двухфакторной аутентификации.",
          "required" : false,
          "type" : "string",
          "allowEmptyValue" : false,
          "enum" : [ "email", "google" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/UserWithToken"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/login/forgot" : {
      "post" : {
        "tags" : [ "Login" ],
        "summary" : "Забыл пароль",
        "operationId" : "resetUserPasswordUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "forgotPassword",
          "description" : "Забыл пароль.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/ForgotPassword"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK"
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/login/reset" : {
      "post" : {
        "tags" : [ "Login" ],
        "summary" : "Восстановление пароля",
        "operationId" : "applyResetUserPasswordUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "resetPassword",
          "description" : "Восстановление пароля.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/ResetPassword"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK"
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/normative" : {
      "get" : {
        "tags" : [ "Normatives" ],
        "summary" : "Возвращает информацию о типовом замечании",
        "operationId" : "getUsingGET_9",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "description",
          "in" : "query",
          "description" : "Описание.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "descriptionMaskId",
          "in" : "query",
          "description" : "Маска описания.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "flag",
          "in" : "query",
          "description" : "Обязательное замечание или нет.",
          "required" : false,
          "type" : "string",
          "enum" : [ "REQUIRED", "VOLUNTARY", "ALL" ]
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "paragraph",
          "in" : "query",
          "description" : "Параграф",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "requiredFlagMask",
          "in" : "query",
          "description" : "Маска флага для ",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "titleMaskId",
          "in" : "query",
          "description" : "Маска названия.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AnswerNormative"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Normatives" ],
        "summary" : "Создаёт типовое замечание",
        "operationId" : "createUsingPOST_8",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "data",
          "description" : "Информация о типовом замечании.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateNormative"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/AnswerNormative"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Normatives" ],
        "summary" : "Удаляет типовое замечание",
        "operationId" : "deleteUsingDELETE_7",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Normatives" ],
        "summary" : "Изменяет типовое замечание",
        "operationId" : "updateUsingPATCH_4",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AnswerNormative"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/normative/find" : {
      "get" : {
        "tags" : [ "Normatives" ],
        "summary" : "Ищет информацию о типовом замечании",
        "operationId" : "searchUsingGET_1",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "flag",
          "in" : "query",
          "description" : "Обязательное замечание или нет.",
          "required" : false,
          "type" : "string",
          "x-example" : "VOLUNTARY",
          "enum" : [ "REQUIRED", "VOLUNTARY", "ALL" ]
        }, {
          "name" : "includeGroup",
          "in" : "query",
          "description" : "Включать в результаты поиска папки или нет.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "parentId",
          "in" : "query",
          "description" : "Идентификатор родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "5db14ec16d10e75a203d20b3"
        }, {
          "name" : "text",
          "in" : "query",
          "description" : "Текстовый поиск по всем значениям.",
          "required" : false,
          "type" : "string",
          "x-example" : "Перед сборкой необходимо очистить"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/AnswerNormative"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/normative/group" : {
      "get" : {
        "tags" : [ "Normatives" ],
        "summary" : "Возвращает информацию о папке типовых документов",
        "operationId" : "getUsingGET_8",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "descriptionMaskId",
          "in" : "query",
          "description" : "Маска описания.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentNumber",
          "in" : "query",
          "description" : "Номер документа.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "requiredFlagMask",
          "in" : "query",
          "description" : "Маска флага для ",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "title",
          "in" : "query",
          "description" : "Название.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "titleMaskId",
          "in" : "query",
          "description" : "Маска названия.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "url",
          "in" : "query",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AnswerGroup"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Normatives" ],
        "summary" : "Создаёт папку типовых документов",
        "operationId" : "createUsingPOST_6",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "group",
          "description" : "Создание папки типовых замечаний.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateNormativeGroup"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/AnswerGroup"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Normatives" ],
        "summary" : "Удаляет папку типовых документов",
        "operationId" : "deleteUsingDELETE_6",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Normatives" ],
        "summary" : "Изменяет папку типовых документов",
        "operationId" : "updateUsingPATCH_3",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AnswerGroup"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/normative/import" : {
      "post" : {
        "tags" : [ "Normatives" ],
        "summary" : "Импортирует типовое замечание",
        "operationId" : "createUsingPOST_7",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "data",
          "description" : "Информация о типовом замечании.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/CreateNormativeGroup"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AnswerGroup"
              }
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/organization" : {
      "get" : {
        "tags" : [ "Organizations" ],
        "summary" : "Возвращает информацию об организации",
        "operationId" : "getUsingGET_10",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "bic",
          "in" : "query",
          "description" : "БИК.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "code",
          "in" : "query",
          "description" : "Код организации.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "corrAcc",
          "in" : "query",
          "description" : "Корреспондентский счет.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "currentAcc",
          "in" : "query",
          "description" : "Расчетный счет.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "delegateName",
          "in" : "query",
          "description" : "Имя представителя.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "delegatePosition",
          "in" : "query",
          "description" : "Должность представителя.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "description",
          "in" : "query",
          "description" : "Описание.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fax",
          "in" : "query",
          "description" : "Факс.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "identification",
          "in" : "query",
          "description" : "Идентификатор",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "individual",
          "in" : "query",
          "description" : "Является ли организация физическим лицом.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "inn",
          "in" : "query",
          "description" : "ИНН.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "kpp",
          "in" : "query",
          "description" : "КПП.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "legalAddress",
          "in" : "query",
          "description" : "Юридический адрес организации.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "legalName",
          "in" : "query",
          "description" : "Юридическое название организации.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "main",
          "in" : "query",
          "description" : "Является ли организация главной, то есть управляющей всеми остальными контрангентами. Такая организация только одна.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "names",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "ogrn",
          "in" : "query",
          "description" : "ОГРН.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "phone",
          "in" : "query",
          "description" : "Номер телефона.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateRegDate",
          "in" : "query",
          "description" : "Дата выдачи свидетельства государственной регистрации.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "stateRegNo",
          "in" : "query",
          "description" : "Номер свидетельства государственной регистрации.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "streetAddress",
          "in" : "query",
          "description" : "Фактический адрес организации.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Organization"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Organizations" ],
        "summary" : "Создаёт организацию",
        "operationId" : "createUsingPOST_9",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "name",
          "description" : "Название организации.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Organization"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Organizations" ],
        "summary" : "Удаляет организацию",
        "operationId" : "deleteUsingDELETE_8",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Organizations" ],
        "summary" : "Изменяет организацию",
        "operationId" : "updateUsingPATCH_5",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Organization"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/organization/find" : {
      "get" : {
        "tags" : [ "Organizations" ],
        "summary" : "Поиск организации",
        "operationId" : "searchUsingGET_2",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Organization"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/permission" : {
      "get" : {
        "tags" : [ "Permission" ],
        "summary" : "Возвращает информацию о правах",
        "operationId" : "getPermissionUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "hasUsers",
          "in" : "query",
          "description" : "Есть ли права у пользователя или нет.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "path",
          "in" : "query",
          "description" : "Путь до конкретного элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "permissionType",
          "in" : "query",
          "description" : "Тип прав. Project - роль в проекте, Personal - личные права.",
          "required" : false,
          "type" : "string",
          "enum" : [ "PERSONAL", "PROJECT" ]
        }, {
          "name" : "roleId",
          "in" : "query",
          "description" : "Идентификатор роли в типе прав Project.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "userId",
          "in" : "query",
          "description" : "Идентификаторы пользователей.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Permission"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Permission" ],
        "summary" : "Создаёт права",
        "operationId" : "updateUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updatePermission",
          "description" : "Обновление прав.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdatePermission"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Permission"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/ping" : {
      "get" : {
        "tags" : [ "Ping" ],
        "summary" : "Возвращает время соединения до пользователя",
        "operationId" : "registerUserUsingGET",
        "produces" : [ "*/*" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Pong"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/ping/revision" : {
      "get" : {
        "tags" : [ "Ping" ],
        "summary" : "Возвращает информации о версии клиента и сервера пользователя",
        "operationId" : "getRevisionUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/ping/user" : {
      "get" : {
        "tags" : [ "Ping" ],
        "summary" : "Возвращает информацию о пользователе в сети",
        "operationId" : "pingUserUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Pong"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/plan" : {
      "get" : {
        "tags" : [ "Plans" ],
        "summary" : "Получает файлы из раздела документация (.pdf,.wmf, большинство форматов изображения и так далее) ",
        "operationId" : "getUsingGET_11",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "genplan",
          "in" : "query",
          "description" : "Верхний или родительский слой для текущего документа (Генплан).",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "originalFileName",
          "in" : "query",
          "description" : "Оригинальное (изначальное) название файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sheets",
          "in" : "query",
          "description" : "Идентификаторы страниц (листов) плана.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Plan"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Plans" ],
        "summary" : "Создаёт файл в разделе документация",
        "operationId" : "createUsingPOST_10",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "Файл.",
          "required" : false,
          "type" : "file"
        }, {
          "in" : "formData",
          "name" : "folderId",
          "description" : "Идентификатор папки.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Plan"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Plans" ],
        "summary" : "Удаляет файл в разделе документация",
        "operationId" : "deleteUsingDELETE_9",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Plans" ],
        "summary" : "Обновляет файл в разделе документация",
        "operationId" : "updateUsingPATCH_7",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Plan"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/plan/copy" : {
      "post" : {
        "tags" : [ "Plans" ],
        "summary" : "Копирует файл в разделе документация",
        "operationId" : "updateUsingPOST_1",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "copyPlanRequest",
          "description" : "Копирование документации.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CopyPlanRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK"
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/profile/avatar" : {
      "post" : {
        "tags" : [ "Profile" ],
        "summary" : "Загружает аватар пользователя",
        "operationId" : "uploadPhotoUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "photoAttachment",
          "description" : "Информация о загружаемом аватаре.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/PhotoAttachmentData"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/UploadAvatarResponse"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Profile" ],
        "summary" : "Удаляет аватар пользователя",
        "operationId" : "removeAvatarUsingDELETE",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/ResponseEntity"
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/project" : {
      "get" : {
        "tags" : [ "Projects" ],
        "summary" : "Возвращает информацию о проекте",
        "operationId" : "getProjectsUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "attributes.contract",
          "in" : "query",
          "description" : "Название договора (дополнительная возможность).",
          "required" : false,
          "type" : "string",
          "x-example" : "directContract"
        }, {
          "name" : "attributes.gencontractor",
          "in" : "query",
          "description" : "Генподрядчик (дополнительная возможность).",
          "required" : false,
          "type" : "string",
          "x-example" : "FIESTA LLC"
        }, {
          "name" : "attributes.genplaner",
          "in" : "query",
          "description" : "Генпроектировщик (дополнительная возможность).",
          "required" : false,
          "type" : "string",
          "x-example" : "SK PLANNER LTD"
        }, {
          "name" : "attributes.name",
          "in" : "query",
          "description" : "Имя (дополнительная возможность).",
          "required" : false,
          "type" : "string",
          "x-example" : "project attributes names"
        }, {
          "name" : "attributes.status",
          "in" : "query",
          "description" : "Статус проекта (дополнительная возможность).",
          "required" : false,
          "type" : "string",
          "x-example" : "carryToTaneko"
        }, {
          "name" : "code",
          "in" : "query",
          "description" : "Номер.",
          "required" : false,
          "type" : "string",
          "x-example" : "2435"
        }, {
          "name" : "codifier",
          "in" : "query",
          "description" : "Кодификатор.",
          "required" : false,
          "type" : "string",
          "x-example" : "1123"
        }, {
          "name" : "description",
          "in" : "query",
          "description" : "Описание.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "dstOrgAddress",
          "in" : "query",
          "required" : false,
          "type" : "string",
          "x-example" : "Russia, Saint Petersburg, Drovyanoy pereulok, 22, litera A, pom. 2Н"
        }, {
          "name" : "endDate",
          "in" : "query",
          "description" : "Дата окончания работы на элементе структуры.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550566711503"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "names",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "notifyTime",
          "in" : "query",
          "description" : "Время отправки оповещений.",
          "required" : false,
          "type" : "integer",
          "format" : "int64",
          "x-example" : 22800000
        }, {
          "name" : "objectAddress",
          "in" : "query",
          "description" : "Полный адрес объекта.",
          "required" : false,
          "type" : "string",
          "x-example" : "Russia, Saint Petersburg, Drovyanoy pereulok, 22, litera A, pom. 2Н"
        }, {
          "name" : "objectName",
          "in" : "query",
          "description" : "Полное название объекта.",
          "required" : false,
          "type" : "string",
          "x-example" : "FIESTA object"
        }, {
          "name" : "objectShortName",
          "in" : "query",
          "description" : "Краткое название объекта.",
          "required" : false,
          "type" : "string",
          "x-example" : "FIESTA"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "reportCity",
          "in" : "query",
          "description" : "Название города.",
          "required" : false,
          "type" : "string",
          "x-example" : "Saint Petersburg"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "startDate",
          "in" : "query",
          "description" : "Дата начала работ на элементе структуры.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "startDayOfWeek",
          "in" : "query",
          "description" : "День начала отчётной недели.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 2
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Project"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Projects" ],
        "summary" : "Отправляет информацию о проекте",
        "operationId" : "createProjectUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createProjectDto",
          "description" : "Создание проекта.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateProject"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Project"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Projects" ],
        "summary" : "Удаляет информацию о проекте",
        "operationId" : "deleteUsingDELETE_10",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Projects" ],
        "summary" : "Изменяет информацию о проекте",
        "operationId" : "updateUsingPATCH_8",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Project"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/project/copy" : {
      "post" : {
        "tags" : [ "Projects" ],
        "summary" : "Копирует информацию о проекте",
        "operationId" : "updateUsingPOST_2",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "copyProjectRequest",
          "description" : "Копирование проекта.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CopyProjectRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK"
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/project/find" : {
      "get" : {
        "tags" : [ "Projects" ],
        "summary" : "Возвращает результаты поиска проектов по произвольной подстроке",
        "operationId" : "searchUsingGET_3",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "searchProject",
          "description" : "Поиск проекта",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/SearchProject"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Project"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/recommendations/blankTasks" : {
      "get" : {
        "tags" : [ "Recommendation" ],
        "summary" : "Возвращает информацию о пустых замечаниях",
        "operationId" : "getBlankTasksUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/BlankTasks"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/recommendations/downToTop" : {
      "get" : {
        "tags" : [ "Recommendation" ],
        "summary" : "Возвращает информацию о пользователях, которым стоит поднять уровень доступа в проекте",
        "operationId" : "getReassignDownToTopUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/DownTopReassignment"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/recommendations/missingUsers" : {
      "get" : {
        "tags" : [ "Recommendation" ],
        "summary" : "Возвращает информацию о пользователях, которые давно не заходили в сеть",
        "operationId" : "getMissingUserUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "monthToArchive",
          "description" : "Сколько месяцев пользователь должен быть не в сети, чтобы его порекомендовало заархивировать",
          "required" : false,
          "schema" : {
            "type" : "integer",
            "format" : "int32"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/MissingUsers"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/recommendations/unusedTasks" : {
      "get" : {
        "tags" : [ "Recommendation" ],
        "summary" : "Возвращает информацию о замечаниях, которые давно не использовали",
        "operationId" : "getUnusedTasksUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "monthToArchive",
          "in" : "query",
          "description" : "Сколько месяцев пользователь должен быть не в сети, чтобы его порекомендовало заархивировать",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 6
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "parentId",
          "in" : "query",
          "description" : "Идентификатор родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "5d416b0ee4e4685f534ba21b"
        }, {
          "name" : "parentType",
          "in" : "query",
          "description" : "Тип родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "PROJECT",
          "enum" : [ "PLAN", "SHEET", "USER", "TASK", "ANNOTATION", "FOLDER", "PROJECT", "FAVORITE", "CHECK_ITEM", "PERMISSION", "ROLE", "ORGANIZATION", "ATTACHMENT", "NORMATIVE", "NORMATIVE_GROUP", "NORMATIVE_MASK", "COMMENT", "REPORT", "REPORT_TEMPLATE", "PROJECTION", "MSP_TASK", "CATEGORY", "CONTRACT", "JOB_TYPE", "COMMERCIAL_PROJECT_NAME", "CHECKLIST", "CHECKLIST_BLANK", "BIM_OBJECT", "SHEET_RELATION", "CHART", "ASSIGNMENT", "ANCESTRY" ]
        }, {
          "name" : "stateForArchive",
          "in" : "query",
          "description" : "Состояние замечания, которое должно попадать в рекомендацию",
          "required" : false,
          "type" : "string",
          "x-example" : "OPENED",
          "enum" : [ "OPENED", "COMPLETED", "VERIFIED" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/UnusedTasks"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/report" : {
      "get" : {
        "tags" : [ "Report" ],
        "summary" : "Возвращает информацию об отчёте",
        "operationId" : "getUsingGET_12",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "contentType",
          "in" : "query",
          "description" : "Тип файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "createdDate",
          "in" : "query",
          "description" : "Поиск по дате создания. Используется с дописыванием .date (поиск по конкретной дате), .gt (> даты), .gte (>= дате), .lt(< даты), .lte (<= дате). ",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "entityId",
          "in" : "query",
          "description" : "Если создано единичное предписание, то это идентификатор замечания. Поле будет пустым для массового предписания.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fileSize",
          "in" : "query",
          "description" : "Размер файла в байтах.",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owner",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "taskIds",
          "in" : "query",
          "description" : "Идентификаторы замечаний.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "url",
          "in" : "query",
          "description" : "URI на скачивание отчёта.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/LightReportDto"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Report" ],
        "summary" : "Создаёт отчёт",
        "operationId" : "createUsingPOST_11",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createReport",
          "description" : "Создание отчёта.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateReport"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Report" ],
        "summary" : "Удаляет отчёт",
        "operationId" : "deleteUsingDELETE_11",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/report/download" : {
      "post" : {
        "tags" : [ "Report" ],
        "summary" : "Загружает отчёт",
        "operationId" : "getTokenToArchiveWithReportsUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/FileToken"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/report/ids" : {
      "get" : {
        "tags" : [ "Report" ],
        "summary" : "Возвращает информацию об идентификаторах отчётов",
        "operationId" : "getIdsUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "contentType",
          "in" : "query",
          "description" : "Тип файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "createdDate",
          "in" : "query",
          "description" : "Поиск по дате создания. Используется с дописыванием .date (поиск по конкретной дате), .gt (> даты), .gte (>= дате), .lt(< даты), .lte (<= дате). ",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "entityId",
          "in" : "query",
          "description" : "Если создано единичное предписание, то это идентификатор замечания. Поле будет пустым для массового предписания.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fileSize",
          "in" : "query",
          "description" : "Размер файла в байтах.",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owner",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "taskIds",
          "in" : "query",
          "description" : "Идентификаторы замечаний.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "url",
          "in" : "query",
          "description" : "URI на скачивание отчёта.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/report/template" : {
      "get" : {
        "tags" : [ "Report" ],
        "summary" : "Возвращает шаблон",
        "operationId" : "getTemplatesUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "allowEmptyValue" : false
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "allowEmptyValue" : false
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Template"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Report" ],
        "summary" : "Создаёт шаблон",
        "operationId" : "createTemplateUsingPOST",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "formData",
          "name" : "file",
          "description" : "Файл.",
          "required" : false,
          "schema" : {
            "type" : "file"
          }
        }, {
          "in" : "formData",
          "name" : "fileName",
          "description" : "Имя файла.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "in" : "formData",
          "name" : "id",
          "description" : "Идентификатор.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "in" : "formData",
          "name" : "isMultyTasks",
          "description" : "Массовое предписание или нет.",
          "required" : false,
          "schema" : {
            "type" : "boolean"
          }
        }, {
          "in" : "formData",
          "name" : "name",
          "description" : "Название элемента.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "in" : "formData",
          "name" : "reportKind",
          "description" : "Тип отчёта.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "in" : "formData",
          "name" : "sqlFields[0].sqlRequest",
          "description" : "Тело SQL-запроса для создания шаблона.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "in" : "formData",
          "name" : "sqlFields[0].title",
          "description" : "Заголовок SQL-запроса для создания шаблона.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "in" : "formData",
          "name" : "url",
          "description" : "URI на скачивание отчёта.",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Template"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Report" ],
        "summary" : "Удаляет шаблон",
        "operationId" : "archiveTemplatesUsingDELETE",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK"
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Report" ],
        "summary" : "Изменяет шаблон",
        "operationId" : "updateTemplateUsingPATCH",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "query",
          "description" : "Файл.",
          "required" : false,
          "type" : "file"
        }, {
          "name" : "fileName",
          "in" : "query",
          "description" : "Имя файла.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "id",
          "in" : "query",
          "description" : "Идентификатор.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "isMultyTasks",
          "in" : "query",
          "description" : "Массовое предписание или нет.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "reportKind",
          "in" : "query",
          "description" : "Тип отчёта.",
          "required" : false,
          "type" : "string",
          "enum" : [ "WORD", "EXCEL", "ACT" ]
        }, {
          "name" : "sqlFields[0].sqlRequest",
          "in" : "query",
          "description" : "Тело SQL-запроса для создания шаблона.",
          "required" : false,
          "type" : "string",
          "x-example" : "SELECT code,ARRAY_TO_STRING(ARRAY(SELECT project.name FROM project, WHERE way.id=project.id), '/') AS \"object_name\",plan_screenshot_url AS \"planUrl\"FROM task"
        }, {
          "name" : "sqlFields[0].title",
          "in" : "query",
          "description" : "Заголовок SQL-запроса для создания шаблона.",
          "required" : false,
          "type" : "string",
          "x-example" : "plan"
        }, {
          "name" : "url",
          "in" : "query",
          "description" : "URI на скачивание отчёта.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Template"
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/report/types/{reportKind}" : {
      "get" : {
        "tags" : [ "Report" ],
        "summary" : "Возврщает информацию о типовом отчёте",
        "operationId" : "getReportTypesUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "reportKind",
          "in" : "path",
          "description" : "Тип отчёта.",
          "required" : false,
          "type" : "string",
          "enum" : [ "word", "excel", "act" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ReportInformation"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/report/users/" : {
      "get" : {
        "tags" : [ "Report" ],
        "summary" : "Возвращает отчёт по пользователям",
        "operationId" : "csvUsersReportUsingGET",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "orgId",
          "in" : "query",
          "description" : "Идентификатор организации.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi",
          "allowEmptyValue" : false
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/report/users/allContragents" : {
      "get" : {
        "tags" : [ "Report" ],
        "summary" : "Возвращает отчёт по всем контрагентам",
        "operationId" : "csvUsersReportUsingGET_1",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/role" : {
      "get" : {
        "tags" : [ "Roles" ],
        "summary" : "Возвращает информацию о роли",
        "operationId" : "getRolesUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "policy",
          "in" : "query",
          "description" : "Права роли.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "policy.notEmpty",
          "in" : "query",
          "description" : "${ParametersPolicyIsNotEmpty}",
          "required" : false,
          "type" : "boolean",
          "x-example" : true
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Role"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Roles" ],
        "summary" : "Создаёт роль",
        "operationId" : "createUsingPOST_12",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createRole",
          "description" : "Создание роли.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateRole"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Role"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Roles" ],
        "summary" : "Удаляет роль",
        "operationId" : "deleteUsingDELETE_12",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Roles" ],
        "summary" : "Изменяет роль",
        "operationId" : "updateUsingPATCH_9",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Role"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/sheet" : {
      "get" : {
        "tags" : [ "Sheets" ],
        "summary" : "Получает информацию о странице",
        "operationId" : "getUsingGET_13",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Название элемента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "options.displayUnits",
          "in" : "query",
          "description" : "Отображаемые единицы измерения.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "options.planUnits",
          "in" : "query",
          "description" : "Единицы измерения самого плана.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "options.scale",
          "in" : "query",
          "description" : "Масштаб.",
          "required" : false,
          "type" : "number",
          "format" : "double"
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "position",
          "in" : "query",
          "description" : "Номер листа.",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "size.height",
          "in" : "query",
          "description" : "Высота.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 1024
        }, {
          "name" : "size.width",
          "in" : "query",
          "description" : "Ширина",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 1280
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Sheet"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Sheets" ],
        "summary" : "Изменяет страницу",
        "operationId" : "updateUsingPATCH_10",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Sheet"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/task" : {
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Возвращает информацию о замечании проверка",
        "operationId" : "getUsingGET_14",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "actDate",
          "in" : "query",
          "description" : "Дата акта.",
          "required" : false,
          "type" : "string",
          "format" : "date-time"
        }, {
          "name" : "actNumber",
          "in" : "query",
          "description" : "Номер акта.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "categoryIds",
          "in" : "query",
          "description" : "Идентификаторы Категорий в замечании.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "clonedFromId",
          "in" : "query",
          "description" : "Идентификатор элемента, с которого сделана копия.",
          "required" : false,
          "type" : "string",
          "x-example" : "d354g64454h545454545"
        }, {
          "name" : "code",
          "in" : "query",
          "description" : "Номер.",
          "required" : false,
          "type" : "string",
          "x-example" : "2435"
        }, {
          "name" : "color",
          "in" : "query",
          "description" : "Цвет замечания.",
          "required" : false,
          "type" : "string",
          "x-example" : "#5dae4b"
        }, {
          "name" : "completeDate",
          "in" : "query",
          "description" : "Фактическая дата устранения, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "2019-08-30T17:57:20.999+00:00"
        }, {
          "name" : "contractId",
          "in" : "query",
          "description" : "id договора контрагента.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "description",
          "in" : "query",
          "description" : "Описание.",
          "required" : false,
          "type" : "string",
          "x-example" : "Раскрытие трещины более 3 мм. Отклонение СП"
        }, {
          "name" : "docContent",
          "in" : "query",
          "description" : "Содержание документа типового нарушения.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "docDescription",
          "in" : "query",
          "description" : "Название документа типового нарушения.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "docNumber",
          "in" : "query",
          "description" : "Номер документа типового нарушения.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "docTitle",
          "in" : "query",
          "description" : "Буквенный или числовой индикатор типового нарушения.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "docURL",
          "in" : "query",
          "description" : "Адрес хранения типового нарушения.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "dueDate",
          "in" : "query",
          "description" : "Срок устранения, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "2019-08-31T20:59:59.999+00:00"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "important",
          "in" : "query",
          "description" : "Наличие отметки Важное.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "lastModifiedDate",
          "in" : "query",
          "description" : "Дата последнего изменения замечания, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "2019-08-30T17:57:20.999+00:00"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "location",
          "in" : "query",
          "description" : "Местоположение.",
          "required" : false,
          "type" : "string",
          "x-example" : "Кухня"
        }, {
          "name" : "mailingList",
          "in" : "query",
          "description" : "Идентификатор пользователя из поля Требует внимания.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "measurements",
          "in" : "query",
          "description" : "NONE",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "objectId",
          "in" : "query",
          "description" : "Идентификатор объекта, в котором находится замечание.",
          "required" : false,
          "type" : "string",
          "x-example" : "o354g64454h545454545"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "owners",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "parentPath",
          "in" : "query",
          "description" : "Путь до родителя.",
          "required" : false,
          "type" : "string",
          "x-example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }, {
          "name" : "position.scale",
          "in" : "query",
          "description" : "Масштаб шкалы измерения на плане.",
          "required" : false,
          "type" : "number",
          "format" : "double",
          "x-example" : 0.5
        }, {
          "name" : "position.x",
          "in" : "query",
          "description" : "Значение координаты X на плане.",
          "required" : false,
          "type" : "number",
          "format" : "double",
          "x-example" : 230.0
        }, {
          "name" : "position.y",
          "in" : "query",
          "description" : "Значение координаты Y на плане.",
          "required" : false,
          "type" : "number",
          "format" : "double",
          "x-example" : 456.0
        }, {
          "name" : "proposal",
          "in" : "query",
          "description" : "Предложение по устранению.",
          "required" : false,
          "type" : "string",
          "x-example" : "Штукатурить с армированием"
        }, {
          "name" : "reportDate",
          "in" : "query",
          "description" : "Дата отчётности.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "2019-08-30T17:57:20.999+00:00"
        }, {
          "name" : "reportType",
          "in" : "query",
          "description" : "Тип отчётности.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "state",
          "in" : "query",
          "description" : "Статус замечания. Открыто, Выполнено или Проверено.",
          "required" : false,
          "type" : "string",
          "x-example" : "OPENED",
          "enum" : [ "OPENED", "COMPLETED", "VERIFIED" ]
        }, {
          "name" : "title",
          "in" : "query",
          "description" : "Название.",
          "required" : false,
          "type" : "string",
          "x-example" : "Трещина в стене"
        }, {
          "name" : "type",
          "in" : "query",
          "description" : "Тип сущности.",
          "required" : false,
          "type" : "string",
          "x-example" : "task"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Task"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Tasks" ],
        "summary" : "Отправляет информацию о замечании",
        "operationId" : "createUsingPOST_13",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "taskCreate",
          "description" : "Создание замечания.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/TaskCreate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Task"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Tasks" ],
        "summary" : "Архивирует информацию о замечании",
        "operationId" : "deleteUsingDELETE_13",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Tasks" ],
        "summary" : "Изменяет информацию о замечании",
        "operationId" : "updateUsingPATCH_11",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Task"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/task/find" : {
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Возвращает информацию по замечаниям по заданным параметрам",
        "operationId" : "searchUsingGET_4",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "assignUser",
          "in" : "query",
          "description" : "Идентификатор исполнителя замечания.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assignUserOrg",
          "in" : "query",
          "description" : "Идентификатор организации исполнителя замечания.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "categories",
          "in" : "query",
          "description" : "Идентификаторы Категорий в замечании.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "code",
          "in" : "query",
          "description" : "Номер.",
          "required" : false,
          "type" : "string",
          "x-example" : "2435"
        }, {
          "name" : "completeDate",
          "in" : "query",
          "description" : "Фактическая дата устранения, GMT.",
          "required" : false,
          "type" : "string",
          "x-example" : "2019-08-31T20:59:59.999+00:00"
        }, {
          "name" : "createdDate",
          "in" : "query",
          "description" : "Дата создания элемента, GMT.",
          "required" : false,
          "type" : "string",
          "x-example" : "2019-08-30T17:57:20.999+00:00"
        }, {
          "name" : "dueDate",
          "in" : "query",
          "description" : "Срок устранения, GMT.",
          "required" : false,
          "type" : "string",
          "x-example" : "2019-08-31T20:59:59.999+00:00"
        }, {
          "name" : "havePrecept",
          "in" : "query",
          "description" : "Замечание с предписанием или нет",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "important",
          "in" : "query",
          "description" : "Наличие отметки Важное.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isReopened",
          "in" : "query",
          "description" : "Отметка о повторном открытии замечания.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "lastModifiedDate",
          "in" : "query",
          "description" : "Дата последнего изменения замечания, GMT.",
          "required" : false,
          "type" : "string",
          "x-example" : "2019-08-30T17:57:20.999+00:00"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "noNtd",
          "in" : "query",
          "description" : "Без НТД",
          "required" : false,
          "type" : "boolean",
          "x-example" : true
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "onPlan",
          "in" : "query",
          "description" : "Наличие привязки к плану.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "owner",
          "in" : "query",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "ownerOrg",
          "in" : "query",
          "description" : "Идентификатор организации пользователя, который создал элемент.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "planId",
          "in" : "query",
          "description" : "Идентификатор документа.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "projectId",
          "in" : "query",
          "description" : "Идентификатор элемента структуры.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "reportDate",
          "in" : "query",
          "description" : "Дата отчётности.",
          "required" : false,
          "type" : "string",
          "x-example" : "2019-08-31T20:59:59.999+00:00"
        }, {
          "name" : "sheetId",
          "in" : "query",
          "description" : "Идентификатор листа.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "state",
          "in" : "query",
          "description" : "Статус замечания. Открыто, Выполнено или Проверено.",
          "required" : false,
          "type" : "string",
          "x-example" : "OPENED",
          "enum" : [ "OPENED", "COMPLETED", "VERIFIED" ]
        }, {
          "name" : "title",
          "in" : "query",
          "description" : "Название.",
          "required" : false,
          "type" : "string",
          "x-example" : "Трещина в стене"
        }, {
          "name" : "userAttention",
          "in" : "query",
          "description" : "Идентификатор сотрудника из поля Требует внимания.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Task"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/token/generate" : {
      "get" : {
        "tags" : [ "Token" ],
        "summary" : "Генерирует новый токен для работы с API, заменяя старый",
        "operationId" : "getGeneratedAccessTokenUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/token/get" : {
      "get" : {
        "tags" : [ "Token" ],
        "summary" : "Возвращает токен для работы с API",
        "operationId" : "getAccessTokenUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string"
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/user" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Получает данные пользователя",
        "operationId" : "getUsersUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ancestry",
          "in" : "query",
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "email",
          "in" : "query",
          "description" : "Значение электронной почты.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "lang",
          "in" : "query",
          "description" : "Язык установленный у пользователя.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Имя пользователя.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "nameForReport",
          "in" : "query",
          "description" : "Имя пользователя для отчёта в творительном падеже для создания отчёта.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "organizationId",
          "in" : "query",
          "description" : "Уникальный идентификатор для организации.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "phone",
          "in" : "query",
          "description" : "Номер телефона.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "position",
          "in" : "query",
          "description" : "Должность пользователя.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "positionForReport",
          "in" : "query",
          "description" : "Должность пользователя в творительном падеже для создания отчёта.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "registerDate",
          "in" : "query",
          "description" : "Дата регистрации.",
          "required" : false,
          "type" : "string",
          "format" : "date-time"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/User"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "post" : {
        "tags" : [ "Users" ],
        "summary" : "Создаёт пользователя",
        "operationId" : "createUserUsingPOST",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "createUserDto",
          "description" : "Создание пользователя.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CreateUser"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      },
      "delete" : {
        "tags" : [ "Users" ],
        "summary" : "Удаляет пользователя",
        "operationId" : "deleteUsersUsingDELETE",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "ids",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      },
      "patch" : {
        "tags" : [ "Users" ],
        "summary" : "Обновляет пользователя",
        "operationId" : "updateUsersUsingPATCH",
        "consumes" : [ "application/json;charset=UTF-8" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "updateDto",
          "description" : "Обновление сущности.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UpdateDto"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/User"
              }
            }
          },
          "204" : {
            "description" : "No Content"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/user/find" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Находит пользователя",
        "operationId" : "findUsersUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "archiveInitiators",
          "in" : "query",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "archivedDate",
          "in" : "query",
          "description" : "Дата архивации, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1550696399999"
        }, {
          "name" : "email",
          "in" : "query",
          "description" : "Значение электронной почты.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "includeArchived",
          "in" : "query",
          "description" : "Включение заархивированных элементов в выдачу.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "isArchived",
          "in" : "query",
          "description" : "Отметка об архивации.",
          "required" : false,
          "type" : "boolean",
          "x-example" : "false"
        }, {
          "name" : "lastOnline",
          "in" : "query",
          "description" : "Когда пользователь в последний раз был в сети. Используется с дописыванием .date (поиск по конкретной дате), .gt (> даты), .gte (>= дате), .lt(< даты), .lte (<= дате).",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "licensed",
          "in" : "query",
          "description" : "Пометка об оплаченной лицензии.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Количество сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 50
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Имя пользователя.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Количество пропускаемых сущностей в ответе.",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "organizationId",
          "in" : "query",
          "description" : "Уникальный идентификатор для организации.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "phone",
          "in" : "query",
          "description" : "Номер телефона.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "restoredDate",
          "in" : "query",
          "description" : "Дата восстановления, GMT.",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "1549359857704"
        }, {
          "name" : "sort",
          "in" : "query",
          "description" : "Параметры сортировки",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/User"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/user/import" : {
      "post" : {
        "tags" : [ "Users" ],
        "summary" : "Импортирует пользователя",
        "operationId" : "importUsersUsingPOST",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "importUsers",
          "description" : "Импортирование пользователя.",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/ImportUsers"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ImportUser"
              }
            }
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/user/online" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Получить ID пользователей в сети",
        "operationId" : "getOnlineUsersUsingGET",
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "ids",
          "in" : "query",
          "description" : "Массив идентификаторов.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    },
    "/nrs/xml-project/{parentId}" : {
      "post" : {
        "tags" : [ "XML Import" ],
        "summary" : "Импорт XML",
        "operationId" : "uploadProjectUsingPOST",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json;charset=UTF-8" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "Файл.",
          "required" : false,
          "type" : "file"
        }, {
          "name" : "parentId",
          "in" : "path",
          "description" : "Идентификатор родителя.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK"
          },
          "201" : {
            "description" : "Created"
          },
          "401" : {
            "description" : "Unauthorized"
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Not Found"
          }
        },
        "deprecated" : false
      }
    }
  },
  "definitions" : {
    "Annotation" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "type" : {
          "type" : "string",
          "example" : "annotation",
          "description" : "Тип сущности.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Annotation"
    },
    "AnswerGroup" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5db14ec16d10e75a203d20b3:NORMATIVE_GROUP"
        },
        "descriptionMask" : {
          "type" : "string",
          "example" : [ "DESCRIPTION" ]
        },
        "documentNumber" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string",
          "example" : "5db1600d6d10e75a203d22ed"
        },
        "number" : {
          "type" : "string"
        },
        "parentId" : {
          "type" : "string",
          "example" : "5db14ec16d10e75a203d20b3"
        },
        "requiredFlagMask" : {
          "type" : "string",
          "example" : "(reqired)"
        },
        "title" : {
          "type" : "string",
          "example" : "Welding operations"
        },
        "titleMask" : {
          "type" : "string",
          "example" : "Regulatory document [PARAGRAPH] is violated"
        },
        "type" : {
          "type" : "string",
          "example" : "normativeCategory",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "url" : {
          "type" : "string"
        }
      },
      "title" : "AnswerGroup"
    },
    "AnswerNormative" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5db14ec16d10e75a203d20b3:NORMATIVE_GROUP"
        },
        "description" : {
          "type" : "string",
          "example" : "Before assembling, it is necessary to clean the internal cavity of pipes and pipeline parts from soil, dirt, snow, etc."
        },
        "flag" : {
          "type" : "string",
          "example" : "VOLUNTARY",
          "enum" : [ "REQUIRED", "VOLUNTARY", "ALL" ]
        },
        "id" : {
          "type" : "string",
          "example" : "5bd6b0226d10e7653f306ef4"
        },
        "maskedDescription" : {
          "type" : "string",
          "example" : "Before assembling, it is necessary to clean the internal cavity of pipes and pipeline parts from soil, dirt, snow, etc."
        },
        "maskedTitle" : {
          "type" : "string",
          "example" : "The regulatory document 284.1325800.2016 p. 19.3.6 is violated"
        },
        "originalDocument" : {
          "$ref" : "#/definitions/AnswerGroup"
        },
        "paragraph" : {
          "type" : "string",
          "example" : "СП 284.1325800.2016 п. 19.3.6"
        },
        "parentId" : {
          "type" : "string",
          "example" : "5db14ec16d10e75a203d20b3"
        },
        "type" : {
          "type" : "string",
          "example" : "normative",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "AnswerNormative"
    },
    "Assignment" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27"
        },
        "path" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        },
        "roleId" : {
          "type" : "string",
          "example" : "5bc6d9cf6d10e70588402c43"
        },
        "userIds" : {
          "type" : "array",
          "example" : [ "5cebf5b56d10e71c5da197c5", "5c9e43956d10e734e76594a5", "5bd322986d10e7653f306d26" ],
          "items" : {
            "type" : "string"
          }
        }
      },
      "title" : "Assignment"
    },
    "Attachment" : {
      "type" : "object",
      "properties" : {
        "address" : {
          "type" : "string",
          "description" : "URI файла."
        },
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "clonedFromId" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор элемента, с которого сделана копия."
        },
        "contentType" : {
          "type" : "string",
          "example" : "image/jpg",
          "description" : "Тип файла."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "fileName" : {
          "type" : "string",
          "example" : "Photo421.jpg",
          "description" : "Имя файла."
        },
        "fileSize" : {
          "type" : "integer",
          "format" : "int64",
          "example" : 22801,
          "description" : "Размер файла в байтах."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "latitude" : {
          "type" : "number",
          "format" : "double",
          "example" : 56.6393008,
          "description" : "Геолокация. Широта, на которой было сделано приложение."
        },
        "longitude" : {
          "type" : "number",
          "format" : "double",
          "example" : 47.8939321,
          "description" : "Геолокация. Долгота, на которой было сделано приложение."
        },
        "originalName" : {
          "type" : "string",
          "example" : "Photo421.jpg"
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "status" : {
          "type" : "string",
          "example" : "NORMAL",
          "description" : "Статус элемента.",
          "enum" : [ "CREATE", "NORMAL", "BROKEN", "NONE" ]
        },
        "type" : {
          "type" : "string",
          "example" : "attachment",
          "description" : "Тип сущности.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "urlToFile" : {
          "type" : "string",
          "example" : "mrsdemo/report/afd1224a-3db2-4cb7-869a-70d9b78e6160/Photo421.jpg",
          "description" : "Возвращает информацию о файле по прямой ссылке (URL или URI)."
        },
        "urlToThumbnail" : {
          "type" : "string",
          "example" : "mrsdemo/attachments/573286fa-7eaf-4c25-b711-a698cb98a5e7/75"
        }
      },
      "title" : "Attachment"
    },
    "BlankTasks" : {
      "type" : "object",
      "properties" : {
        "count" : {
          "type" : "integer",
          "format" : "int64",
          "example" : 50
        },
        "entities" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/TaskWithSmallInfo"
          }
        },
        "id" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "ownerId" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "ownerName" : {
          "type" : "string",
          "example" : "John Johnson"
        },
        "totalCount" : {
          "type" : "integer",
          "format" : "int64",
          "example" : 581
        },
        "type" : {
          "type" : "string",
          "enum" : [ "REASSIGN_TOP_TO_DOWN", "REASSIGN_DOWN_TO_TOP", "UNUSED_TASKS", "MISSING_USERS", "BLANK_TASKS" ]
        }
      },
      "title" : "BlankTasks"
    },
    "Category" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "isFolder" : {
          "type" : "boolean",
          "example" : true,
          "description" : "Папка с категориями или нет."
        },
        "name" : {
          "type" : "string",
          "example" : "categoryName",
          "description" : "Название элемента."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "type" : {
          "type" : "string",
          "example" : "category",
          "description" : "Тип сущности.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Category"
    },
    "CategoryRequest" : {
      "type" : "object",
      "properties" : {
        "folder" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Папка с категориями или нет."
        },
        "name" : {
          "type" : "string",
          "example" : "categoryName"
        },
        "parentId" : {
          "type" : "string",
          "example" : "5d4170f6e4e4685f534ba2eb"
        }
      },
      "title" : "CategoryRequest"
    },
    "Change" : {
      "type" : "object",
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "value" : {
          "type" : "object"
        }
      },
      "title" : "Change"
    },
    "Comment" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "text" : {
          "type" : "string",
          "example" : "commentText",
          "description" : "Текст комментария."
        },
        "type" : {
          "type" : "string",
          "example" : "comment",
          "description" : "Тип сущности.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "${ParametersUpdateDate}"
        }
      },
      "title" : "Comment"
    },
    "CommentCreateContent" : {
      "type" : "object",
      "properties" : {
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620121010940,
          "description" : "Дата создания элемента, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "609115b200752940a4e38f80",
          "description" : "Массив идентификаторов."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827a2762242540ac80999c",
          "description" : "Идентификатор родителя."
        },
        "parentType" : {
          "type" : "string",
          "example" : "task",
          "description" : "Тип родителя.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "text" : {
          "type" : "string",
          "example" : "commentText",
          "description" : "Текст комментария."
        }
      },
      "title" : "CommentCreateContent"
    },
    "CopyPlanRequest" : {
      "type" : "object",
      "properties" : {
        "destination" : {
          "type" : "array",
          "example" : [ "5db33c516d10e75a203d28e1,5bc6d9cf6d10e70588402c40" ],
          ",items" : {
            "type" : "string"
          }
        },
        "source" : {
          "type" : "array",
          "example" : [ "5be3da516d10e7745cbddbe8,5cd0337f6d10e710d7a06ba1" ],
          "items" : {
            "type" : "string"
          }
        }
      },
      "title" : "CopyPlanRequest"
    },
    "CopyProjectRequest" : {
      "type" : "object",
      "properties" : {
        "ids" : {
          "type" : "array",
          "example" : [ "5d417110e4e4685f534ba2f0,5d416b0ee4e4685f534ba21b" ],
          "items" : {
            "type" : "string"
          }
        },
        "withDocuments" : {
          "type" : "boolean",
          "example" : true
        }
      },
      "title" : "CopyProjectRequest"
    },
    "CreateAnnotations" : {
      "type" : "object",
      "properties" : {
        "content" : {
          "type" : "object",
          "example" : {
            "type" : "annotation",
            "name" : "anno-box",
            "styles" : {
              "fillStyle" : "rgb(255, 0, 0)",
              "strokeStyle" : "rgb(255, 0, 0)",
              "lineWidth" : 2
            },
            "points" : [ {
              "x" : 1228.260009765625,
              "y" : 253.02334594726562
            }, {
              "x" : 1396.5933837890625,
              "y" : 388.0233459472656
            } ],
            "id" : "608a670062d59b4097a6ff8f",
            "ancestry" : "/5bc6d9cf6d10e70588402c41:ORGANIZATION/5d8c7b0f6d10e773489216d4:PROJECT/5dc045546d10e75a203d8ead:PLAN/5dc045546d10e75a203d8eb0:SHEET"
          }
        },
        "sheetId" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        }
      },
      "title" : "CreateAnnotations"
    },
    "CreateFavorite" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT"
        }
      },
      "title" : "CreateFavorite"
    },
    "CreateFolder" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "example" : "folderName"
        },
        "parentId" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Идентификатор родителя."
        },
        "parentType" : {
          "type" : "string",
          "example" : "project",
          "description" : "Тип родителя.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "CreateFolder"
    },
    "CreateNormative" : {
      "type" : "object",
      "properties" : {
        "description" : {
          "type" : "string",
          "example" : "Перед сборкой необходимо очистить внутреннюю полость труб и деталей трубопроводов от грунта, грязи, снега и т.п. загрязнений.",
          "description" : "Описание."
        },
        "flag" : {
          "type" : "string",
          "example" : "VOLUNTARY",
          "description" : "Обязательное замечание или нет.",
          "enum" : [ "REQUIRED", "VOLUNTARY", "ALL" ]
        },
        "paragraph" : {
          "type" : "string",
          "example" : "СП 284.1325800.2016 п. 19.3.6",
          "description" : "Параграф"
        },
        "parentId" : {
          "type" : "string",
          "example" : "5db14ec16d10e75a203d20b3",
          "description" : "Идентификатор родителя."
        }
      },
      "title" : "CreateNormative"
    },
    "CreateNormativeGroup" : {
      "type" : "object",
      "properties" : {
        "children" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CreateNormativeGroup"
          }
        },
        "descriptionMask" : {
          "type" : "string",
          "example" : [ "DESCRIPTION" ],
          "description" : "${ParametersDescriptionMask}"
        },
        "documentNumber" : {
          "type" : "string",
          "description" : "Номер документа."
        },
        "paragraphs" : {
          "type" : "array",
          "description" : "${ParametersParagraphs}",
          "items" : {
            "$ref" : "#/definitions/CreateNormative"
          }
        },
        "parentId" : {
          "type" : "string",
          "example" : "5d4170f6e4e4685f534ba2eb",
          "description" : "Идентификатор родителя."
        },
        "requiredFlagMask" : {
          "type" : "string",
          "example" : "(обязательный)",
          "description" : "Маска флага для "
        },
        "title" : {
          "type" : "string",
          "example" : "Сварочные работы",
          "description" : "Название."
        },
        "titleMask" : {
          "type" : "string",
          "example" : "Нарушен нормативный документ [PARAGRAPH]",
          "description" : "${ParametersTitleMask}"
        },
        "url" : {
          "type" : "string"
        }
      },
      "title" : "CreateNormativeGroup"
    },
    "CreateNrsAttachment" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Массив идентификаторов."
        },
        "latitude" : {
          "type" : "number",
          "format" : "double",
          "example" : 56.6393008,
          "description" : "Геолокация. Широта, на которой было сделано приложение."
        },
        "longitude" : {
          "type" : "number",
          "format" : "double",
          "example" : 47.8939321,
          "description" : "Геолокация. Долгота, на которой было сделано приложение."
        },
        "originalName" : {
          "type" : "string",
          "example" : "Photo421.jpg",
          "description" : "Оригинальное (изначальное) название файла."
        },
        "parentId" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Идентификатор родителя."
        },
        "parentType" : {
          "type" : "string",
          "example" : "project",
          "description" : "Тип родителя.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "urlToFile" : {
          "type" : "string",
          "example" : "mrsdemo/report/afd1224a-3db2-4cb7-869a-70d9b78e6160/Photo421.jpg",
          "description" : "Возвращает информацию о файле по прямой ссылке (URL или URI)."
        }
      },
      "title" : "CreateNrsAttachment"
    },
    "CreateProject" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "example" : "Fiesta project"
        },
        "parentId" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Идентификатор родителя."
        },
        "parentType" : {
          "type" : "string",
          "example" : "project",
          "description" : "Тип родителя.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "CreateProject"
    },
    "CreateReport" : {
      "type" : "object",
      "required" : [ "projectId" ],
      "properties" : {
        "attachToTasks" : {
          "type" : "array",
          "example" : [ "5d417110e4e4685f534ba2f0,5d416b0ee4e4685f534ba21b" ],
          "items" : {
            "type" : "string"
          }
        },
        "filters" : {
          "example" : "5d416b0ee4e4685f534ba21b",
          "$ref" : "#/definitions/TaskFilters"
        },
        "name" : {
          "type" : "string",
          "example" : "Report name example"
        },
        "notifyByEmail" : {
          "type" : "boolean",
          "example" : false
        },
        "projectId" : {
          "type" : "string",
          "example" : "5d417110e4e4685f534ba2f0"
        },
        "remarks" : {
          "type" : "array",
          "example" : [ "5d417110e4e4685f534ba2f0,5d416b0ee4e4685f534ba21b" ],
          "items" : {
            "type" : "string"
          }
        },
        "templateId" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "type" : {
          "type" : "string",
          "example" : "DEFAULT",
          "enum" : [ "INSPECTIONS", "INSPECTIONS_ACT", "EXCEL_INSPECTIONS", "XML", "SEVERIN", "TATNEFT", "FORUM_GROUP", "MOSKOVIA", "ETALON", "ULZAPAD", "R1PRO_MULTI_TASKS", "EXCEL_KORTROS", "EXCEL_TATNEFT", "EXCEL_TATNEFT_NOT_ATTACHMENTS", "EXCEL_TASK", "WORD_KORTROS", "EXCEL_PRECEPT", "DEFAULT", "DEFAULT_ACT", "ROSKAPSTROY", "ALFA_CONSTRUCTION", "A101", "A101_ELIMINATION_DURING_WORKS", "A101_WORKS_PROHIBITION", "A101_SUSPENSION_OF_WORKS", "TAVROS", "SURVEYING", "STROYMOST", "EXCEL_ULZAPAD", "CDS", "OSK_SELECTOR", "OSK", "APLUS", "KSPRO", "GLOBAL_STROY", "SIBPROMSTROY", "TEHRESURS", "TEHRESURS_ACT", "LIDER_INVEST", "LIDER_INVEST_ACT", "EXCEL_LIDER_INVEST", "SNEMA", "AIR_TERMINAL_YS", "MGSU", "MGSU_EXCEL", "TASHIR", "CDS_SPB", "SGS", "SGS_ACHIMGAZ", "SGS_IKEA", "SGS_SNGP", "SGS_MINE12", "SGS_RSH", "SGS_INTER_GAS", "EXCEL_SGS", "SERVICE_STROY", "CERA_GROUP", "TALAN", "FSKNW", "FSKNW_ACT", "SMRTE", "CDS_SPB_WEEKLY", "UNISTROY_KZN_PROTOKOL", "UNISTROY_TOLYATTI", "UNISTROY_UFA", "UNISTROY_ACT_OF_FIXING", "UNISTROY_MEETING_PROTOCOL", "GLORAX", "AKVILON", "AKVILON_ACT", "UKRAZVITIE", "NORTH_CITY", "EXCEL_NORTH_CITY", "GST3", "GST3_CHECKING_ACT", "ACCELERATION", "EXCEL_ACCELERATION", "EXCEL_GPN", "EXCEL_AKVILON", "COLDY", "ARSENAL", "ETALON_GROUP", "KZN_STROYEXPERT", "SAMOLETGROUP", "EXCEL_SAMOLET", "EXCEL_COLDY", "IRBIS", "GLAVSTROY", "GLAVSTROY_NORTH_VALLEY", "GLAVSTROY_YNTOLOVO", "GLAVSTROY_ACT", "GLAVSTROY_NORTH_VALLEY_ACT", "GLAVSTROY_NORTH_VALLEY_USK_ACT", "GLAVSTROY_NORTH_VALLEY_FROM_SUBCONTRACTOR_ACT", "GLAVSTROY_YNTOLOVO_ACT", "SBD", "SSHTM", "EXCEL_IRBIS", "KOKTOBECITY", "IQS", "IQS_INSPECTION_REPORT", "NEW_CITY", "NEW_CITY_INSPECTION_ACT", "DEVELOPMENT_UG", "SPORTESTEIT_EXCEL", "SKDK_ACT", "SKDK_ACT_OT_AND_TB", "DOMKOR", "DOMKOR_GP", "LENRUSSTROY_LIGOVSKY", "LENRUSSTROY_SIDNEY", "SGS_ACT_ORDER", "SGS_ACT_WARNING", "ATLAS", "ATLAS_INTERMEDIATE_ACT", "ATLAS_FINAL_ACT", "MIP_REPORT", "MIP_ACT", "EXCEL_DPM", "ENKO", "ALABUGA" ]
        }
      },
      "title" : "CreateReport"
    },
    "CreateRole" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "example" : "Architect"
        },
        "orgId" : {
          "type" : "string",
          "example" : "5bc6d9cf6d10e70588402c41"
        },
        "policy" : {
          "type" : "array",
          "example" : [ "plan:read", "project:restoreOwn", "task:allowMailing", "folder:delete", "category:delete", "org:update", "page:settings", "project:delete", "reportTemplate:create", "user:restore", "checklistBlank:delete", "checklist:delete", "msproject:update", "task:status:setCompleted", "project:restore", "task:setOpenedAssign", "normative:update", "task:update" ],
          "description" : "Права роли.",
          "items" : {
            "type" : "string"
          }
        }
      },
      "title" : "CreateRole"
    },
    "CreateUser" : {
      "type" : "object",
      "required" : [ "orgId" ],
      "properties" : {
        "email" : {
          "type" : "string",
          "example" : "user_name@mail.com"
        },
        "isLicensed" : {
          "type" : "boolean"
        },
        "licensed" : {
          "type" : "boolean",
          "example" : true
        },
        "name" : {
          "type" : "string",
          "example" : "John Johnson"
        },
        "orgId" : {
          "type" : "string",
          "example" : "5ca30ffc6d10e734e7659cd0"
        },
        "password" : {
          "type" : "string",
          "example" : "Qwerty!123"
        },
        "phone" : {
          "type" : "string",
          "example" : 89021234567
        },
        "valid" : {
          "type" : "boolean",
          "example" : true
        }
      },
      "title" : "CreateUser"
    },
    "DownTopReassignment" : {
      "type" : "object",
      "properties" : {
        "entities" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ParentWithChildrenIds"
          }
        },
        "id" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "ownerId" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "ownerName" : {
          "type" : "string",
          "example" : "John Johnson"
        },
        "type" : {
          "type" : "string",
          "enum" : [ "REASSIGN_TOP_TO_DOWN", "REASSIGN_DOWN_TO_TOP", "UNUSED_TASKS", "MISSING_USERS", "BLANK_TASKS" ]
        }
      },
      "title" : "DownTopReassignment"
    },
    "EraseDto" : {
      "type" : "object",
      "properties" : {
        "ids" : {
          "type" : "array",
          "example" : "5d0a4264e4e4687f4e7bbc27,5d8c7b0f6d10e773489216d4",
          "items" : {
            "type" : "string"
          }
        },
        "type" : {
          "type" : "string",
          "example" : "task",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "EraseDto"
    },
    "Event" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "changes" : {
          "type" : "array",
          "description" : "${ParametersChanges}",
          "items" : {
            "$ref" : "#/definitions/Change"
          }
        },
        "createDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Дата создания элемента, GMT."
        },
        "eventType" : {
          "type" : "string",
          "description" : "Тип событий.",
          "enum" : [ "CREATE", "UPDATE", "ARCHIVE", "RESTORE", "DELETE", "CLONE", "MOVE", "IMPORT", "LOGIN", "AVATAR_UPDATE", "CONVERSION_FINISH", "UPLOAD", "ASSIGNMENT", "COPY" ]
        },
        "id" : {
          "type" : "string",
          "description" : "Массив идентификаторов."
        },
        "initiator" : {
          "type" : "string"
        },
        "objectId" : {
          "type" : "string",
          "description" : "Идентификаторы сущностей, которые изменялись."
        },
        "objectType" : {
          "type" : "string",
          "description" : "Типы сущностей, которые изменялись.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Event"
    },
    "Favorite" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/60827320fafba17d25593246:ORGANIZATION/60827320fafba17d25593253:PROJECT",
          "description" : "Путь до конкретного элемента."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "entityType" : {
          "type" : "string",
          "example" : "project",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "id" : {
          "type" : "string"
        },
        "owner" : {
          "type" : "string",
          "example" : "60827320fafba17d25593245",
          "description" : "${ParametersUserId}"
        }
      },
      "title" : "Favorite"
    },
    "File" : {
      "type" : "object",
      "properties" : {
        "absolute" : {
          "type" : "boolean"
        },
        "absoluteFile" : {
          "$ref" : "#/definitions/File"
        },
        "absolutePath" : {
          "type" : "string"
        },
        "canonicalFile" : {
          "$ref" : "#/definitions/File"
        },
        "canonicalPath" : {
          "type" : "string"
        },
        "directory" : {
          "type" : "boolean"
        },
        "executable" : {
          "type" : "boolean"
        },
        "file" : {
          "type" : "boolean"
        },
        "freeSpace" : {
          "type" : "integer",
          "format" : "int64"
        },
        "hidden" : {
          "type" : "boolean"
        },
        "lastModified" : {
          "type" : "integer",
          "format" : "int64"
        },
        "name" : {
          "type" : "string"
        },
        "parent" : {
          "type" : "string"
        },
        "parentFile" : {
          "$ref" : "#/definitions/File"
        },
        "path" : {
          "type" : "string"
        },
        "readable" : {
          "type" : "boolean"
        },
        "totalSpace" : {
          "type" : "integer",
          "format" : "int64"
        },
        "usableSpace" : {
          "type" : "integer",
          "format" : "int64"
        },
        "writable" : {
          "type" : "boolean"
        }
      },
      "title" : "File"
    },
    "FileToken" : {
      "type" : "object",
      "properties" : {
        "token" : {
          "type" : "string",
          "format" : "uuid"
        }
      },
      "title" : "FileToken"
    },
    "Folder" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "name" : {
          "type" : "string",
          "example" : "name_example",
          "description" : "Название элемента."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "type" : {
          "type" : "string",
          "example" : "folder",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Folder"
    },
    "ForgotPassword" : {
      "type" : "object",
      "properties" : {
        "customData" : {
          "type" : "string",
          "example" : "eyJzdWJuZXRGaWxlIjpudWxsfQ=="
        },
        "email" : {
          "type" : "string",
          "example" : "user_name@mail.com",
          "description" : "Значение электронной почты."
        }
      },
      "title" : "ForgotPassword"
    },
    "ImportUser" : {
      "type" : "object",
      "properties" : {
        "email" : {
          "type" : "string",
          "example" : "user_name@mail.com"
        },
        "id" : {
          "type" : "string",
          "example" : "5ca30ffc6d10e734e7659cd0"
        },
        "isLicensed" : {
          "type" : "boolean",
          "example" : true
        },
        "isLocked" : {
          "type" : "boolean",
          "example" : false
        },
        "lang" : {
          "type" : "string",
          "example" : "ru"
        },
        "lastOnline" : {
          "$ref" : "#/definitions/LastOnline"
        },
        "login" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string",
          "example" : "john Johnson"
        },
        "nameForReport" : {
          "type" : "string",
          "example" : "to John johnson"
        },
        "organization" : {
          "type" : "string",
          "example" : "FIESTA LTD"
        },
        "organization_id" : {
          "type" : "string",
          "example" : "5cd0337f6d10e710d7a06ba1"
        },
        "phone" : {
          "type" : "string",
          "example" : 89021234567
        },
        "position" : {
          "type" : "string",
          "example" : "Product owner"
        },
        "positionForReport" : {
          "type" : "string",
          "example" : "to product owner"
        },
        "settings" : {
          "$ref" : "#/definitions/UserSettings"
        }
      },
      "title" : "ImportUser"
    },
    "ImportUsers" : {
      "type" : "object",
      "properties" : {
        "file" : {
          "type" : "file"
        },
        "orgId" : {
          "type" : "string",
          "example" : "5cd0337f6d10e710d7a06ba1"
        }
      },
      "title" : "ImportUsers"
    },
    "InputStream" : {
      "type" : "object",
      "title" : "InputStream"
    },
    "JsonNode" : {
      "type" : "object",
      "properties" : {
        "array" : {
          "type" : "boolean"
        },
        "bigDecimal" : {
          "type" : "boolean"
        },
        "bigInteger" : {
          "type" : "boolean"
        },
        "binary" : {
          "type" : "boolean"
        },
        "boolean" : {
          "type" : "boolean"
        },
        "containerNode" : {
          "type" : "boolean"
        },
        "double" : {
          "type" : "boolean"
        },
        "float" : {
          "type" : "boolean"
        },
        "floatingPointNumber" : {
          "type" : "boolean"
        },
        "int" : {
          "type" : "boolean"
        },
        "integralNumber" : {
          "type" : "boolean"
        },
        "long" : {
          "type" : "boolean"
        },
        "missingNode" : {
          "type" : "boolean"
        },
        "nodeType" : {
          "type" : "string",
          "enum" : [ "ARRAY", "BINARY", "BOOLEAN", "MISSING", "NULL", "NUMBER", "OBJECT", "POJO", "STRING" ]
        },
        "null" : {
          "type" : "boolean"
        },
        "number" : {
          "type" : "boolean"
        },
        "object" : {
          "type" : "boolean"
        },
        "pojo" : {
          "type" : "boolean"
        },
        "short" : {
          "type" : "boolean"
        },
        "textual" : {
          "type" : "boolean"
        },
        "valueNode" : {
          "type" : "boolean"
        }
      },
      "title" : "JsonNode"
    },
    "LastOnline" : {
      "type" : "object",
      "properties" : {
        "date" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1554190332501
        },
        "device" : {
          "type" : "string",
          "example" : "windows"
        }
      },
      "title" : "LastOnline"
    },
    "LicenseStatusResponse" : {
      "type" : "object",
      "properties" : {
        "licenseNumber" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100
        },
        "usedLicenseNumber" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 83
        }
      },
      "title" : "LicenseStatusResponse"
    },
    "LightReportDto" : {
      "type" : "object",
      "properties" : {
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713
        },
        "id" : {
          "type" : "string",
          "example" : "5d417110e4e4685f534ba2f0"
        },
        "name" : {
          "type" : "string",
          "example" : "Report name example"
        },
        "owner" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        }
      },
      "title" : "LightReportDto"
    },
    "LoginUser" : {
      "type" : "object",
      "required" : [ "email", "password" ],
      "properties" : {
        "authToken" : {
          "type" : "string"
        },
        "clientToken" : {
          "type" : "string"
        },
        "email" : {
          "type" : "string"
        },
        "password" : {
          "type" : "string"
        },
        "reCaptchaToken" : {
          "type" : "string"
        }
      },
      "title" : "LoginUser"
    },
    "MissingUsers" : {
      "type" : "object",
      "properties" : {
        "entities" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/UserLastOnline"
          }
        },
        "id" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "type" : {
          "type" : "string",
          "enum" : [ "REASSIGN_TOP_TO_DOWN", "REASSIGN_DOWN_TO_TOP", "UNUSED_TASKS", "MISSING_USERS", "BLANK_TASKS" ]
        }
      },
      "title" : "MissingUsers"
    },
    "Organization" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "bic" : {
          "type" : "string",
          "example" : 123456789,
          "description" : "БИК."
        },
        "code" : {
          "type" : "string",
          "example" : "orgCode",
          "description" : "Код организации."
        },
        "corrAcc" : {
          "type" : "string",
          "example" : 12345678901234567890,
          "description" : "Корреспондентский счет."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "currentAcc" : {
          "type" : "string",
          "example" : 12345678901234567890,
          "description" : "Расчетный счет."
        },
        "delegateName" : {
          "type" : "string",
          "example" : "delegatename",
          "description" : "Имя представителя."
        },
        "delegatePosition" : {
          "type" : "string",
          "example" : "delegatePosition",
          "description" : "Должность представителя."
        },
        "description" : {
          "type" : "string",
          "example" : "orgDescription",
          "description" : "Описание."
        },
        "fax" : {
          "type" : "string",
          "example" : 123456789012,
          "description" : "Факс."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "identification" : {
          "type" : "string",
          "description" : "Идентификатор"
        },
        "individual" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Является ли организация физическим лицом."
        },
        "inn" : {
          "type" : "string",
          "example" : 1234567890,
          "description" : "ИНН."
        },
        "isFolder" : {
          "type" : "boolean",
          "example" : true,
          "description" : "Папка с категориями или нет."
        },
        "isMain" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Является ли организация главной, то есть управляющей всеми остальными контрангентами. Такая организация только одна."
        },
        "kpp" : {
          "type" : "string",
          "example" : 123456789,
          "description" : "КПП."
        },
        "legalAddress" : {
          "type" : "string",
          "example" : "Russia, Saint Petersburg, Drovyanoy pereulok, 22, litera A, pom. 2Н",
          "description" : "Юридический адрес организации."
        },
        "legalName" : {
          "type" : "string",
          "example" : "FIESTA LLC",
          "description" : "Юридическое название организации."
        },
        "main" : {
          "type" : "boolean"
        },
        "name" : {
          "type" : "string",
          "example" : "name_example",
          "description" : "Название элемента."
        },
        "odataId" : {
          "type" : "string"
        },
        "ogrn" : {
          "type" : "string",
          "example" : 1234567890123,
          "description" : "ОГРН."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "phone" : {
          "type" : "string",
          "example" : 89021234567,
          "description" : "Номер телефона."
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "stateRegDate" : {
          "type" : "string",
          "example" : "22.10.2010",
          "description" : "Дата выдачи свидетельства государственной регистрации."
        },
        "stateRegNo" : {
          "type" : "string",
          "example" : "12 123456789",
          "description" : "Номер свидетельства государственной регистрации."
        },
        "streetAddress" : {
          "type" : "string",
          "example" : "Russia, Saint Petersburg, Drovyanoy pereulok, 22, litera A, pom. 2Н",
          "description" : "Фактический адрес организации."
        },
        "type" : {
          "type" : "string",
          "example" : "organization",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Organization"
    },
    "ParentWithChildrenIds" : {
      "type" : "object",
      "properties" : {
        "childrenIds" : {
          "type" : "array",
          "example" : [ "5d417110e4e4685f534ba2f0,5d416b0ee4e4685f534ba21b" ],
          "items" : {
            "type" : "string"
          }
        },
        "parentId" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        }
      },
      "title" : "ParentWithChildrenIds"
    },
    "Permission" : {
      "type" : "object",
      "properties" : {
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "path" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/",
          "description" : "Путь до конкретного элемента."
        },
        "permissionType" : {
          "type" : "string",
          "description" : "Тип прав. Project - роль в проекте, Personal - личные права.",
          "enum" : [ "PERSONAL", "PROJECT" ]
        },
        "policy" : {
          "type" : "array",
          "example" : [ "plan:read", "project:restoreOwn", "task:allowMailing", "folder:delete", "category:delete", "org:update", "page:settings", "project:delete", "reportTemplate:create", "user:restore", "checklistBlank:delete", "checklist:delete", "msproject:update", "task:status:setCompleted", "project:restore", "task:setOpenedAssign", "normative:update", "task:update" ],
          "items" : {
            "type" : "string"
          }
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "roleId" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27"
        }
      },
      "title" : "Permission"
    },
    "PhotoAttachmentData" : {
      "type" : "object",
      "properties" : {
        "file" : {
          "type" : "string"
        }
      },
      "title" : "PhotoAttachmentData"
    },
    "Plan" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "genplan" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Верхний или родительский слой для текущего документа (Генплан)."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "name" : {
          "type" : "string",
          "example" : "image.jpg",
          "description" : "Название элемента."
        },
        "originalFileName" : {
          "type" : "string",
          "example" : "image.jpg",
          "description" : "Оригинальное (изначальное) название файла."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "sheets" : {
          "type" : "array",
          "description" : "Идентификаторы страниц (листов) плана.",
          "items" : {
            "$ref" : "#/definitions/Sheet"
          }
        },
        "status" : {
          "type" : "string",
          "example" : "NORMAL",
          "enum" : [ "NORMAL", "ERROR", "UPDATE", "CREATE", "TOO_MANY_SHEETS" ]
        },
        "type" : {
          "type" : "string",
          "example" : "plan",
          "description" : "Тип сущности.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "version" : {
          "type" : "string",
          "example" : "5d4170f6e4e4685f534ba2eb"
        }
      },
      "title" : "Plan"
    },
    "Pong" : {
      "type" : "object",
      "properties" : {
        "message" : {
          "type" : "string",
          "example" : "pong"
        },
        "time" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713
        }
      },
      "title" : "Pong"
    },
    "Position" : {
      "type" : "object",
      "properties" : {
        "scale" : {
          "type" : "number",
          "format" : "double",
          "example" : 0.5,
          "description" : "Масштаб шкалы измерения на плане."
        },
        "x" : {
          "type" : "number",
          "format" : "double",
          "example" : 230.0,
          "description" : "Значение координаты X на плане."
        },
        "y" : {
          "type" : "number",
          "format" : "double",
          "example" : 456.0,
          "description" : "Значение координаты Y на плане."
        }
      },
      "title" : "Position"
    },
    "Project" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "attributes" : {
          "$ref" : "#/definitions/ProjectAttributes"
        },
        "code" : {
          "type" : "string",
          "example" : 2435,
          "description" : "Номер."
        },
        "codifier" : {
          "type" : "string",
          "example" : 3324,
          "description" : "Кодификатор."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "description" : {
          "type" : "string",
          "example" : "Object description example",
          "description" : "Описание."
        },
        "dstOrgAddress" : {
          "type" : "string",
          "example" : "Russia, Saint Petersburg, Drovyanoy pereulok, 22, litera A, pom. 2Н"
        },
        "endDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата окончания работы на элементе структуры."
        },
        "groups" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/PseudoGroup"
          }
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "name" : {
          "type" : "string",
          "example" : "name_example",
          "description" : "Название элемента."
        },
        "notifyTime" : {
          "type" : "integer",
          "format" : "int64",
          "example" : 22800000,
          "description" : "Время отправки оповещений."
        },
        "objectAddress" : {
          "type" : "string",
          "example" : "Russia, Saint Petersburg, Drovyanoy pereulok, 22, litera A, pom. 2Н",
          "description" : "Полный адрес объекта."
        },
        "objectName" : {
          "type" : "string",
          "example" : "Object full name example",
          "description" : "Полное название объекта."
        },
        "objectShortName" : {
          "type" : "string",
          "example" : "Object short name example",
          "description" : "Краткое название объекта."
        },
        "odataId" : {
          "type" : "string"
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "reportCity" : {
          "type" : "string",
          "example" : "Saint Petersburg",
          "description" : "Название города."
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "startDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата начала работ на элементе структуры."
        },
        "startDayOfWeek" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 1,
          "description" : "День начала отчётной недели."
        },
        "type" : {
          "type" : "string",
          "example" : "folder",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Project"
    },
    "ProjectAttributes" : {
      "type" : "object",
      "properties" : {
        "contract" : {
          "type" : "string",
          "example" : "directContract",
          "description" : "Название договора (дополнительная возможность)."
        },
        "gencontractor" : {
          "type" : "string",
          "example" : "FIESTA LLC",
          "description" : "Генподрядчик (дополнительная возможность)."
        },
        "genplaner" : {
          "type" : "string",
          "example" : "SK PLANNER LTD",
          "description" : "Генпроектировщик (дополнительная возможность)."
        },
        "name" : {
          "type" : "string",
          "example" : "project attributes names",
          "description" : "Имя (дополнительная возможность)."
        },
        "status" : {
          "type" : "string",
          "example" : "carryToTaneko",
          "description" : "Статус проекта (дополнительная возможность)."
        }
      },
      "title" : "ProjectAttributes"
    },
    "ProjectExtraInfo" : {
      "type" : "object",
      "properties" : {
        "hasDocumentation" : {
          "type" : "boolean",
          "example" : false,
          "description" : "${ParametersHasDocumentation}"
        },
        "projectId" : {
          "type" : "string",
          "example" : "5d4170f6e4e4685f534ba2eb",
          "description" : "Идентификатор элемента структуры."
        },
        "stateCounter" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/TaskStateCounter"
          }
        }
      },
      "title" : "ProjectExtraInfo"
    },
    "ProjectUpdateAttributes" : {
      "type" : "object",
      "properties" : {
        "asProjectAttributes" : {
          "$ref" : "#/definitions/ProjectAttributes"
        },
        "contract" : {
          "type" : "string"
        },
        "gencontractor" : {
          "type" : "string"
        },
        "genplaner" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        }
      },
      "title" : "ProjectUpdateAttributes"
    },
    "PseudoGroup" : {
      "type" : "object",
      "properties" : {
        "path" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION"
        },
        "roleId" : {
          "type" : "string",
          "example" : "5d4170f6e4e4685f534ba2eb"
        },
        "userIds" : {
          "type" : "array",
          "example" : [ "5d417110e4e4685f534ba2f0,5d416b0ee4e4685f534ba21b" ],
          "items" : {
            "type" : "string"
          }
        }
      },
      "title" : "PseudoGroup"
    },
    "Ref" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Идентификатор."
        },
        "type" : {
          "type" : "string",
          "example" : "TASK",
          "description" : "Тип сущности.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Ref"
    },
    "ReportInformation" : {
      "type" : "object",
      "properties" : {
        "isMultyTasks" : {
          "type" : "boolean"
        },
        "name" : {
          "type" : "string"
        },
        "templateId" : {
          "type" : "string"
        },
        "type" : {
          "type" : "string",
          "enum" : [ "INSPECTIONS", "INSPECTIONS_ACT", "EXCEL_INSPECTIONS", "XML", "SEVERIN", "TATNEFT", "FORUM_GROUP", "MOSKOVIA", "ETALON", "ULZAPAD", "R1PRO_MULTI_TASKS", "EXCEL_KORTROS", "EXCEL_TATNEFT", "EXCEL_TATNEFT_NOT_ATTACHMENTS", "EXCEL_TASK", "WORD_KORTROS", "EXCEL_PRECEPT", "DEFAULT", "DEFAULT_ACT", "ROSKAPSTROY", "ALFA_CONSTRUCTION", "A101", "A101_ELIMINATION_DURING_WORKS", "A101_WORKS_PROHIBITION", "A101_SUSPENSION_OF_WORKS", "TAVROS", "SURVEYING", "STROYMOST", "EXCEL_ULZAPAD", "CDS", "OSK_SELECTOR", "OSK", "APLUS", "KSPRO", "GLOBAL_STROY", "SIBPROMSTROY", "TEHRESURS", "TEHRESURS_ACT", "LIDER_INVEST", "LIDER_INVEST_ACT", "EXCEL_LIDER_INVEST", "SNEMA", "AIR_TERMINAL_YS", "MGSU", "MGSU_EXCEL", "TASHIR", "CDS_SPB", "SGS", "SGS_ACHIMGAZ", "SGS_IKEA", "SGS_SNGP", "SGS_MINE12", "SGS_RSH", "SGS_INTER_GAS", "EXCEL_SGS", "SERVICE_STROY", "CERA_GROUP", "TALAN", "FSKNW", "FSKNW_ACT", "SMRTE", "CDS_SPB_WEEKLY", "UNISTROY_KZN_PROTOKOL", "UNISTROY_TOLYATTI", "UNISTROY_UFA", "UNISTROY_ACT_OF_FIXING", "UNISTROY_MEETING_PROTOCOL", "GLORAX", "AKVILON", "AKVILON_ACT", "UKRAZVITIE", "NORTH_CITY", "EXCEL_NORTH_CITY", "GST3", "GST3_CHECKING_ACT", "ACCELERATION", "EXCEL_ACCELERATION", "EXCEL_GPN", "EXCEL_AKVILON", "COLDY", "ARSENAL", "ETALON_GROUP", "KZN_STROYEXPERT", "SAMOLETGROUP", "EXCEL_SAMOLET", "EXCEL_COLDY", "IRBIS", "GLAVSTROY", "GLAVSTROY_NORTH_VALLEY", "GLAVSTROY_YNTOLOVO", "GLAVSTROY_ACT", "GLAVSTROY_NORTH_VALLEY_ACT", "GLAVSTROY_NORTH_VALLEY_USK_ACT", "GLAVSTROY_NORTH_VALLEY_FROM_SUBCONTRACTOR_ACT", "GLAVSTROY_YNTOLOVO_ACT", "SBD", "SSHTM", "EXCEL_IRBIS", "KOKTOBECITY", "IQS", "IQS_INSPECTION_REPORT", "NEW_CITY", "NEW_CITY_INSPECTION_ACT", "DEVELOPMENT_UG", "SPORTESTEIT_EXCEL", "SKDK_ACT", "SKDK_ACT_OT_AND_TB", "DOMKOR", "DOMKOR_GP", "LENRUSSTROY_LIGOVSKY", "LENRUSSTROY_SIDNEY", "SGS_ACT_ORDER", "SGS_ACT_WARNING", "ATLAS", "ATLAS_INTERMEDIATE_ACT", "ATLAS_FINAL_ACT", "MIP_REPORT", "MIP_ACT", "EXCEL_DPM", "ENKO", "ALABUGA" ]
        }
      },
      "title" : "ReportInformation"
    },
    "ResetPassword" : {
      "type" : "object",
      "properties" : {
        "password" : {
          "type" : "string",
          "example" : "Qwerty!123"
        },
        "resetToken" : {
          "type" : "string",
          "example" : "35rshtddvr832gdkbsvlnau51kv3cg8lt8d6mvs23rt2bm943g9gak18l97cv7e12f2tu6fd26chdcf2bic1v4n1l54sm1jv9ai71620f7ivt43vav0qc0q6"
        }
      },
      "title" : "ResetPassword"
    },
    "Resource" : {
      "type" : "object",
      "properties" : {
        "description" : {
          "type" : "string"
        },
        "file" : {
          "$ref" : "#/definitions/File"
        },
        "filename" : {
          "type" : "string"
        },
        "inputStream" : {
          "$ref" : "#/definitions/InputStream"
        },
        "open" : {
          "type" : "boolean"
        },
        "readable" : {
          "type" : "boolean"
        },
        "uri" : {
          "$ref" : "#/definitions/URI"
        },
        "url" : {
          "$ref" : "#/definitions/URL"
        }
      },
      "title" : "Resource"
    },
    "Response" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "integer",
          "format" : "int32"
        },
        "message" : {
          "type" : "string"
        },
        "response" : {
          "type" : "object"
        },
        "time" : {
          "type" : "string",
          "format" : "date-time"
        }
      },
      "title" : "Response"
    },
    "ResponseEntity" : {
      "type" : "object",
      "properties" : {
        "body" : {
          "type" : "object"
        },
        "statusCode" : {
          "type" : "string",
          "enum" : [ "100 CONTINUE", "101 SWITCHING_PROTOCOLS", "102 PROCESSING", "103 CHECKPOINT", "200 OK", "201 CREATED", "202 ACCEPTED", "203 NON_AUTHORITATIVE_INFORMATION", "204 NO_CONTENT", "205 RESET_CONTENT", "206 PARTIAL_CONTENT", "207 MULTI_STATUS", "208 ALREADY_REPORTED", "226 IM_USED", "300 MULTIPLE_CHOICES", "301 MOVED_PERMANENTLY", "302 FOUND", "302 MOVED_TEMPORARILY", "303 SEE_OTHER", "304 NOT_MODIFIED", "305 USE_PROXY", "307 TEMPORARY_REDIRECT", "308 PERMANENT_REDIRECT", "400 BAD_REQUEST", "401 UNAUTHORIZED", "402 PAYMENT_REQUIRED", "403 FORBIDDEN", "404 NOT_FOUND", "405 METHOD_NOT_ALLOWED", "406 NOT_ACCEPTABLE", "407 PROXY_AUTHENTICATION_REQUIRED", "408 REQUEST_TIMEOUT", "409 CONFLICT", "410 GONE", "411 LENGTH_REQUIRED", "412 PRECONDITION_FAILED", "413 PAYLOAD_TOO_LARGE", "413 REQUEST_ENTITY_TOO_LARGE", "414 URI_TOO_LONG", "414 REQUEST_URI_TOO_LONG", "415 UNSUPPORTED_MEDIA_TYPE", "416 REQUESTED_RANGE_NOT_SATISFIABLE", "417 EXPECTATION_FAILED", "418 I_AM_A_TEAPOT", "419 INSUFFICIENT_SPACE_ON_RESOURCE", "420 METHOD_FAILURE", "421 DESTINATION_LOCKED", "422 UNPROCESSABLE_ENTITY", "423 LOCKED", "424 FAILED_DEPENDENCY", "426 UPGRADE_REQUIRED", "428 PRECONDITION_REQUIRED", "429 TOO_MANY_REQUESTS", "431 REQUEST_HEADER_FIELDS_TOO_LARGE", "451 UNAVAILABLE_FOR_LEGAL_REASONS", "500 INTERNAL_SERVER_ERROR", "501 NOT_IMPLEMENTED", "502 BAD_GATEWAY", "503 SERVICE_UNAVAILABLE", "504 GATEWAY_TIMEOUT", "505 HTTP_VERSION_NOT_SUPPORTED", "506 VARIANT_ALSO_NEGOTIATES", "507 INSUFFICIENT_STORAGE", "508 LOOP_DETECTED", "509 BANDWIDTH_LIMIT_EXCEEDED", "510 NOT_EXTENDED", "511 NETWORK_AUTHENTICATION_REQUIRED" ]
        },
        "statusCodeValue" : {
          "type" : "integer",
          "format" : "int32"
        }
      },
      "title" : "ResponseEntity"
    },
    "RestoreDto" : {
      "type" : "object",
      "properties" : {
        "ids" : {
          "type" : "array",
          "example" : "5d0a4264e4e4687f4e7bbc27,5d8c7b0f6d10e773489216d4",
          "items" : {
            "type" : "string"
          }
        },
        "type" : {
          "type" : "string",
          "example" : "task",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "RestoreDto"
    },
    "Role" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "name" : {
          "type" : "string",
          "example" : "Observer",
          "description" : "Название элемента."
        },
        "policy" : {
          "type" : "array",
          "example" : [ "plan:read", "project:restoreOwn", "task:allowMailing", "folder:delete", "category:delete", "org:update", "page:settings", "project:delete", "reportTemplate:create", "user:restore", "checklistBlank:delete", "checklist:delete", "msproject:update", "task:status:setCompleted", "project:restore", "task:setOpenedAssign", "normative:update", "task:update" ],
          "description" : "Права роли.",
          "items" : {
            "type" : "string"
          }
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        }
      },
      "title" : "Role"
    },
    "SQLField" : {
      "type" : "object",
      "properties" : {
        "sqlRequest" : {
          "type" : "string",
          "example" : "SELECT code,ARRAY_TO_STRING(ARRAY(SELECT project.name FROM project, WHERE way.id=project.id), '/') AS \"object_name\",plan_screenshot_url AS \"planUrl\"FROM task",
          "description" : "Тело SQL-запроса для создания шаблона."
        },
        "title" : {
          "type" : "string",
          "example" : "plan",
          "description" : "Заголовок SQL-запроса для создания шаблона."
        }
      },
      "title" : "SQLField"
    },
    "SearchCategory" : {
      "type" : "object",
      "properties" : {
        "availablePaths" : {
          "type" : "array",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT",
          "items" : {
            "type" : "string"
          }
        },
        "limit" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 50,
          "description" : "Количество сущностей в ответе."
        },
        "name" : {
          "type" : "string",
          "example" : "categoryName"
        },
        "offset" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100,
          "description" : "Количество пропускаемых сущностей в ответе."
        }
      },
      "title" : "SearchCategory"
    },
    "SearchJobTypes" : {
      "type" : "object",
      "properties" : {
        "availablePaths" : {
          "type" : "array",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT",
          "items" : {
            "type" : "string"
          }
        },
        "contracts" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "limit" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 50,
          "description" : "Количество сущностей в ответе."
        },
        "offset" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100,
          "description" : "Количество пропускаемых сущностей в ответе."
        },
        "text" : {
          "type" : "string"
        }
      },
      "title" : "SearchJobTypes"
    },
    "SearchNormative" : {
      "type" : "object",
      "properties" : {
        "availablePaths" : {
          "type" : "array",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT",
          "items" : {
            "type" : "string"
          }
        },
        "flag" : {
          "type" : "string",
          "example" : "VOLUNTARY",
          "description" : "Обязательное замечание или нет.",
          "enum" : [ "REQUIRED", "VOLUNTARY", "ALL" ]
        },
        "includeGroup" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Включать в результаты поиска папки или нет."
        },
        "limit" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 50,
          "description" : "Количество сущностей в ответе."
        },
        "offset" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100,
          "description" : "Количество пропускаемых сущностей в ответе."
        },
        "parentId" : {
          "type" : "string",
          "example" : "5db14ec16d10e75a203d20b3",
          "description" : "Идентификатор родителя."
        },
        "text" : {
          "type" : "string",
          "example" : "Перед сборкой необходимо очистить",
          "description" : "Текстовый поиск по всем значениям."
        }
      },
      "title" : "SearchNormative"
    },
    "SearchNormativeGroup" : {
      "type" : "object",
      "properties" : {
        "availablePaths" : {
          "type" : "array",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT",
          "items" : {
            "type" : "string"
          }
        },
        "limit" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 50,
          "description" : "Количество сущностей в ответе."
        },
        "offset" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100,
          "description" : "Количество пропускаемых сущностей в ответе."
        },
        "parentId" : {
          "type" : "string",
          "example" : "5db14ec16d10e75a203d20b3",
          "description" : "Идентификатор родителя."
        },
        "text" : {
          "type" : "string",
          "example" : "Перед сборкой необходимо очистить",
          "description" : "Текстовый поиск по всем значениям."
        }
      },
      "title" : "SearchNormativeGroup"
    },
    "SearchProject" : {
      "type" : "object",
      "properties" : {
        "address" : {
          "type" : "string",
          "example" : "Russia, Saint Petersburg, Drovyanoy pereulok, 22, litera A, pom. 2Н",
          "description" : "Полный адрес объекта."
        },
        "ancestry" : {
          "type" : "array",
          "example" : [ "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT" ],
          "description" : "Путь в иерархии от родительской сущности до текущей.",
          "items" : {
            "type" : "string"
          }
        },
        "availablePaths" : {
          "type" : "array",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT",
          "items" : {
            "type" : "string"
          }
        },
        "city" : {
          "type" : "string",
          "example" : "Saint Petersburg",
          "description" : "Название города."
        },
        "code" : {
          "type" : "string",
          "example" : 123,
          "description" : "Номер."
        },
        "description" : {
          "type" : "string",
          "example" : "Object description example",
          "description" : "Описание."
        },
        "isArchived" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Отметка об архивации."
        },
        "limit" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 50,
          "description" : "Количество сущностей в ответе."
        },
        "name" : {
          "type" : "string",
          "example" : "FIESTA PROJECT",
          "description" : "Название элемента."
        },
        "offset" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100,
          "description" : "Количество пропускаемых сущностей в ответе."
        },
        "shortName" : {
          "type" : "string",
          "example" : "FIESTA",
          "description" : "${ParametersShortName}"
        }
      },
      "title" : "SearchProject"
    },
    "SearchTask" : {
      "type" : "object",
      "properties" : {
        "assignUser" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор исполнителя замечания.",
          "items" : {
            "type" : "string"
          }
        },
        "assignUserOrg" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор организации исполнителя замечания.",
          "items" : {
            "type" : "string"
          }
        },
        "availablePaths" : {
          "type" : "array",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT",
          "items" : {
            "type" : "string"
          }
        },
        "categories" : {
          "type" : "array",
          "example" : "5e3eee48e446871178b2d36, 5e3ee48e4e46871178b2d37",
          "description" : "Идентификаторы Категорий в замечании.",
          "items" : {
            "type" : "string"
          }
        },
        "code" : {
          "type" : "string",
          "example" : 2435,
          "description" : "Номер."
        },
        "completeDate" : {
          "type" : "string",
          "example" : "2019-08-31T20:59:59.999+00:00",
          "description" : "Фактическая дата устранения, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "example" : "2019-08-30T17:57:20.999+00:00",
          "description" : "Дата создания элемента, GMT."
        },
        "dueDate" : {
          "type" : "string",
          "example" : "2019-08-31T20:59:59.999+00:00",
          "description" : "Срок устранения, GMT."
        },
        "havePrecept" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Замечание с предписанием или нет"
        },
        "important" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Наличие отметки Важное."
        },
        "isArchived" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Отметка об архивации."
        },
        "isReopened" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Отметка о повторном открытии замечания."
        },
        "lastModifiedDate" : {
          "type" : "string",
          "example" : "2019-08-30T17:57:20.999+00:00",
          "description" : "Дата последнего изменения замечания, GMT."
        },
        "limit" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 50,
          "description" : "Количество сущностей в ответе."
        },
        "noNtd" : {
          "type" : "boolean",
          "example" : true,
          "description" : "Без НТД"
        },
        "offset" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100,
          "description" : "Количество пропускаемых сущностей в ответе."
        },
        "onPlan" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Наличие привязки к плану."
        },
        "owner" : {
          "type" : "array",
          "example" : "5d3eee48e4e46871178b2d36",
          "description" : "Идентификатор пользователя, который создал элемент.",
          "items" : {
            "type" : "string"
          }
        },
        "ownerOrg" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор организации пользователя, который создал элемент.",
          "items" : {
            "type" : "string"
          }
        },
        "planId" : {
          "type" : "array",
          "example" : "5757567657d5454",
          "description" : "Идентификатор документа.",
          "items" : {
            "type" : "string"
          }
        },
        "projectId" : {
          "type" : "array",
          "example" : "d575756v76v5454",
          "description" : "Идентификатор элемента структуры.",
          "items" : {
            "type" : "string"
          }
        },
        "reportDate" : {
          "type" : "string",
          "example" : "2019-08-31T20:59:59.999+00:00",
          "description" : "Дата отчётности."
        },
        "sheetId" : {
          "type" : "array",
          "example" : "5757567657d5454",
          "description" : "Идентификатор листа.",
          "items" : {
            "type" : "string"
          }
        },
        "state" : {
          "type" : "string",
          "example" : "OPENED",
          "description" : "Статус замечания. Открыто, Выполнено или Проверено.",
          "enum" : [ "opened", "completed", "verified" ]
        },
        "title" : {
          "type" : "string",
          "example" : "Трещина в стене",
          "description" : "Название."
        },
        "userAttention" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор сотрудника из поля Требует внимания.",
          "items" : {
            "type" : "string"
          }
        }
      },
      "title" : "SearchTask"
    },
    "SearchUser" : {
      "type" : "object",
      "properties" : {
        "archiveInitiators" : {
          "type" : "array",
          "example" : "5d0a4264e4e4687f4e7bbc27,f354g64454h545454545",
          "description" : "Идентификатор пользователя, заархивировавшего сущность.",
          "items" : {
            "type" : "string"
          }
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1550696399999,
          "description" : "Дата архивации, GMT."
        },
        "availablePaths" : {
          "type" : "array",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT",
          "items" : {
            "type" : "string"
          }
        },
        "email" : {
          "type" : "string",
          "description" : "Значение электронной почты."
        },
        "ids" : {
          "type" : "array",
          "example" : "60827320fafba17d25593253,60827321fafba17d25593255,60827320fafba17d25593251",
          "description" : "Массив идентификаторов.",
          "items" : {
            "type" : "string"
          }
        },
        "includeArchived" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Включение заархивированных элементов в выдачу."
        },
        "isArchived" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Отметка об архивации."
        },
        "lastOnline" : {
          "type" : "string",
          "description" : "Когда пользователь в последний раз был в сети. Используется с дописыванием .date (поиск по конкретной дате), .gt (> даты), .gte (>= дате), .lt(< даты), .lte (<= дате)."
        },
        "licensed" : {
          "type" : "boolean",
          "description" : "Пометка об оплаченной лицензии."
        },
        "limit" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 50,
          "description" : "Количество сущностей в ответе."
        },
        "name" : {
          "type" : "string",
          "description" : "Имя пользователя."
        },
        "offset" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 100,
          "description" : "Количество пропускаемых сущностей в ответе."
        },
        "organizationId" : {
          "type" : "array",
          "description" : "Уникальный идентификатор для организации.",
          "items" : {
            "type" : "string"
          }
        },
        "phone" : {
          "type" : "string",
          "description" : "Номер телефона."
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1549359857704,
          "description" : "Дата восстановления, GMT."
        },
        "sort" : {
          "type" : "array",
          "description" : "Параметры сортировки",
          "items" : {
            "type" : "string"
          }
        }
      },
      "title" : "SearchUser"
    },
    "SecretKeyData" : {
      "type" : "object",
      "properties" : {
        "qr" : {
          "type" : "string"
        },
        "secret" : {
          "type" : "string"
        }
      },
      "title" : "SecretKeyData"
    },
    "Sheet" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "error" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "name" : {
          "type" : "string",
          "example" : "sheetNameExample.dwf",
          "description" : "Название элемента."
        },
        "options" : {
          "$ref" : "#/definitions/SheetOptions"
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "position" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 6,
          "description" : "Номер листа."
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "sheetIdForVersion" : {
          "type" : "string"
        },
        "size" : {
          "description" : "${ParametersSheetSize}",
          "$ref" : "#/definitions/Size"
        },
        "status" : {
          "type" : "string",
          "example" : "NORMAL",
          "enum" : [ "NORMAL", "ERROR", "UPDATE", "CREATE", "TOO_MANY_SHEETS" ]
        },
        "type" : {
          "type" : "string",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "urlConverted" : {
          "type" : "string",
          "example" : "mrsdemo/plans/cbe81cf3-40ab-413d-a930-2825145d988a/sheet/1"
        },
        "version" : {
          "type" : "string"
        }
      },
      "title" : "Sheet"
    },
    "SheetOptions" : {
      "type" : "object",
      "properties" : {
        "displayUnits" : {
          "type" : "string",
          "description" : "Отображаемые единицы измерения."
        },
        "planUnits" : {
          "type" : "string",
          "description" : "Единицы измерения самого плана."
        },
        "scale" : {
          "type" : "number",
          "format" : "double",
          "description" : "Масштаб."
        }
      },
      "title" : "SheetOptions"
    },
    "Size" : {
      "type" : "object",
      "properties" : {
        "height" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 1024,
          "description" : "Высота."
        },
        "width" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 1280,
          "description" : "Ширина"
        }
      },
      "title" : "Size"
    },
    "Task" : {
      "type" : "object",
      "properties" : {
        "actDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Дата акта."
        },
        "actNumber" : {
          "type" : "string",
          "description" : "Номер акта."
        },
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "assignUsers" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор исполнителя замечания.",
          "items" : {
            "type" : "string"
          }
        },
        "categoryIds" : {
          "type" : "array",
          "example" : "5e3eee48e446871178b2d36, 5e3ee48e4e46871178b2d37",
          "description" : "Идентификаторы Категорий в замечании.",
          "items" : {
            "type" : "string"
          }
        },
        "clonedFromId" : {
          "type" : "string",
          "example" : "d354g64454h545454545",
          "description" : "Идентификатор элемента, с которого сделана копия."
        },
        "code" : {
          "type" : "string",
          "example" : 2435,
          "description" : "Номер."
        },
        "color" : {
          "type" : "string",
          "example" : "#5dae4b",
          "description" : "Цвет замечания."
        },
        "completeDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-30T17:57:20.999+00:00",
          "description" : "Фактическая дата устранения, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "description" : {
          "type" : "string",
          "example" : "Раскрытие трещины более 3 мм. Отклонение СП",
          "description" : "Описание."
        },
        "docContent" : {
          "type" : "string",
          "description" : "Содержание документа типового нарушения."
        },
        "docDescription" : {
          "type" : "string",
          "description" : "Название документа типового нарушения."
        },
        "docNumber" : {
          "type" : "string",
          "description" : "Номер документа типового нарушения."
        },
        "docTitle" : {
          "type" : "string",
          "description" : "Буквенный или числовой индикатор типового нарушения."
        },
        "docURL" : {
          "type" : "string",
          "description" : "Адрес хранения типового нарушения."
        },
        "dueDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-31T20:59:59.999+00:00",
          "description" : "Срок устранения, GMT."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "important" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Наличие отметки Важное."
        },
        "isReopened" : {
          "type" : "boolean"
        },
        "lastModifiedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-30T17:57:20.999+00:00",
          "description" : "Дата последнего изменения замечания, GMT."
        },
        "location" : {
          "type" : "string",
          "example" : "Кухня",
          "description" : "Местоположение."
        },
        "mailingList" : {
          "type" : "array",
          "example" : "f354g64454h545454545",
          "description" : "Идентификатор пользователя из поля Требует внимания.",
          "items" : {
            "type" : "string"
          }
        },
        "measurements" : {
          "type" : "string",
          "description" : "NONE"
        },
        "objectId" : {
          "type" : "string",
          "example" : "o354g64454h545454545",
          "description" : "Идентификатор объекта, в котором находится замечание."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "points" : {
          "description" : "Координаты замечания на документе.",
          "$ref" : "#/definitions/Position"
        },
        "proposal" : {
          "type" : "string",
          "example" : "Штукатурить с армированием",
          "description" : "Предложение по устранению."
        },
        "reportDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-30T17:57:20.999+00:00",
          "description" : "Дата отчётности."
        },
        "reportType" : {
          "type" : "string",
          "description" : "Тип отчётности."
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "state" : {
          "type" : "string",
          "example" : "OPENED",
          "description" : "Статус замечания. Открыто, Выполнено или Проверено.",
          "enum" : [ "opened", "completed", "verified" ]
        },
        "title" : {
          "type" : "string",
          "example" : "Трещина в стене",
          "description" : "Название."
        },
        "type" : {
          "type" : "string",
          "example" : "task",
          "description" : "Тип сущности.",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "Task"
    },
    "TaskCreate" : {
      "type" : "object",
      "properties" : {
        "assignUser" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор Исполнителя замечания",
          "items" : {
            "type" : "string"
          }
        },
        "categoryIds" : {
          "type" : "array",
          "example" : "5e3eee48e446871178b2d36, 5e3ee48e4e46871178b2d37",
          "description" : "Идентификаторы Категорий в замечании",
          "items" : {
            "type" : "string"
          }
        },
        "clonedFromId" : {
          "type" : "string",
          "example" : "d354g64454h545454545",
          "description" : "Идентификатор замечания, с которого сделан клон"
        },
        "code" : {
          "type" : "string",
          "example" : 2435,
          "description" : "Номер замечания"
        },
        "completeDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-30T17:57:20.999+00:00",
          "description" : "Фактическая дата устранения, GMT"
        },
        "description" : {
          "type" : "string",
          "example" : "раскрытие трещениы более 3 мм. Отклонение СП",
          "description" : "Описание замечания"
        },
        "dueDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-31T20:59:59.999+00:00",
          "description" : "Срок устранения, GMT"
        },
        "id" : {
          "type" : "string",
          "description" : "Идентификатор"
        },
        "important" : {
          "type" : "boolean",
          "example" : false,
          "description" : "Наличие отметки Важное"
        },
        "location" : {
          "type" : "string",
          "example" : "Кухня",
          "description" : "Местоположение"
        },
        "mailingList" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор сотрудника из поля Требует внимания",
          "items" : {
            "type" : "string"
          }
        },
        "objectId" : {
          "type" : "string"
        },
        "parent" : {
          "$ref" : "#/definitions/Ref"
        },
        "parentId" : {
          "type" : "string"
        },
        "parentType" : {
          "type" : "string",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "points" : {
          "type" : "array",
          "description" : "Координаты замечания на документе",
          "items" : {
            "$ref" : "#/definitions/Position"
          }
        },
        "proposal" : {
          "type" : "string",
          "example" : "Штукатурить с армированием",
          "description" : "Предложение по устранению"
        },
        "state" : {
          "type" : "string",
          "example" : "OPENED",
          "description" : "Статус замечания. Открыто, Выполнено или Проверено",
          "enum" : [ "opened", "completed", "verified" ]
        },
        "title" : {
          "type" : "string",
          "example" : "Трещина в стене",
          "description" : "Название замечания"
        }
      },
      "title" : "TaskCreate"
    },
    "TaskExtraInfo" : {
      "type" : "object",
      "properties" : {
        "hasComment" : {
          "type" : "boolean",
          "example" : false,
          "description" : "${ParametersHasComment}"
        },
        "hasImage" : {
          "type" : "boolean",
          "example" : true,
          "description" : "${ParametersHasImage}"
        },
        "hasReport" : {
          "type" : "boolean",
          "example" : false,
          "description" : "${ParametersHasReport}"
        },
        "taskId" : {
          "type" : "string",
          "example" : "5d4170f6e4e4685f534ba2eb",
          "description" : "Идентификатор замечания."
        }
      },
      "title" : "TaskExtraInfo"
    },
    "TaskFilters" : {
      "type" : "object",
      "properties" : {
        "assignUser" : {
          "type" : "string",
          "example" : "5bcee2666d10e7653f306677"
        },
        "createdDateBegin" : {
          "type" : "string",
          "example" : 1620115548928
        },
        "createdDateEnd" : {
          "type" : "string",
          "example" : 1619163687713
        },
        "noAssignedFilter" : {
          "type" : "boolean"
        },
        "overDueToday" : {
          "type" : "string"
        }
      },
      "title" : "TaskFilters"
    },
    "TaskStateCounter" : {
      "type" : "object",
      "properties" : {
        "count" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 10,
          "description" : "${ParametersCount}"
        },
        "state" : {
          "type" : "string",
          "example" : "OPENED",
          "description" : "${ParametersTaskState}",
          "enum" : [ "opened", "completed", "verified" ]
        }
      },
      "title" : "TaskStateCounter"
    },
    "TaskWithSmallInfo" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "string",
          "example" : 16
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1616338597060
        },
        "id" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "projectName" : {
          "type" : "string",
          "example" : "Project name example"
        },
        "title" : {
          "type" : "string"
        }
      },
      "title" : "TaskWithSmallInfo"
    },
    "Template" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "example" : "/5d0a4264e4e4687f4e7bbc27:ORGANIZATION/5d416b0ee4e4685f534ba21b:PROJECT/5d4170f6e4e4685f534ba2eb:PLAN/5d417110e4e4685f534ba2f0:SHEET",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1619163687713,
          "description" : "Дата создания элемента, GMT."
        },
        "fileName" : {
          "type" : "string",
          "example" : "template_file.docx",
          "description" : "Имя файла."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "isMultyTasks" : {
          "type" : "boolean",
          "example" : true,
          "description" : "Массовое предписание или нет."
        },
        "lastModifiedByUser" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "lastModifiedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата последнего изменения замечания, GMT."
        },
        "name" : {
          "type" : "string",
          "example" : "Template name example",
          "description" : "Название элемента."
        },
        "owner" : {
          "type" : "string",
          "example" : "5d0a4264e4e4687f4e7bbc27",
          "description" : "Идентификатор пользователя, который создал элемент."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "reportKind" : {
          "type" : "string",
          "example" : "EXCEL",
          "description" : "Тип отчёта.",
          "enum" : [ "word", "excel", "act" ]
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "sqlFields" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/SQLField"
          }
        },
        "type" : {
          "type" : "string",
          "example" : "report_template",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "url" : {
          "type" : "string",
          "example" : "template/839e524c-cfec-488e-8389-e1fcfbeb97d7/template_file.docx",
          "description" : "${ParameterReportUrl}"
        }
      },
      "title" : "Template"
    },
    "URI" : {
      "type" : "object",
      "properties" : {
        "absolute" : {
          "type" : "boolean"
        },
        "authority" : {
          "type" : "string"
        },
        "fragment" : {
          "type" : "string"
        },
        "host" : {
          "type" : "string"
        },
        "opaque" : {
          "type" : "boolean"
        },
        "path" : {
          "type" : "string"
        },
        "port" : {
          "type" : "integer",
          "format" : "int32"
        },
        "query" : {
          "type" : "string"
        },
        "rawAuthority" : {
          "type" : "string"
        },
        "rawFragment" : {
          "type" : "string"
        },
        "rawPath" : {
          "type" : "string"
        },
        "rawQuery" : {
          "type" : "string"
        },
        "rawSchemeSpecificPart" : {
          "type" : "string"
        },
        "rawUserInfo" : {
          "type" : "string"
        },
        "scheme" : {
          "type" : "string"
        },
        "schemeSpecificPart" : {
          "type" : "string"
        },
        "userInfo" : {
          "type" : "string"
        }
      },
      "title" : "URI"
    },
    "URL" : {
      "type" : "object",
      "properties" : {
        "authority" : {
          "type" : "string"
        },
        "content" : {
          "type" : "object"
        },
        "defaultPort" : {
          "type" : "integer",
          "format" : "int32"
        },
        "deserializedFields" : {
          "$ref" : "#/definitions/URLStreamHandler"
        },
        "file" : {
          "type" : "string"
        },
        "host" : {
          "type" : "string"
        },
        "path" : {
          "type" : "string"
        },
        "port" : {
          "type" : "integer",
          "format" : "int32"
        },
        "protocol" : {
          "type" : "string"
        },
        "query" : {
          "type" : "string"
        },
        "ref" : {
          "type" : "string"
        },
        "serializedHashCode" : {
          "type" : "integer",
          "format" : "int32"
        },
        "userInfo" : {
          "type" : "string"
        }
      },
      "title" : "URL"
    },
    "URLStreamHandler" : {
      "type" : "object",
      "title" : "URLStreamHandler"
    },
    "UnusedTasks" : {
      "type" : "object",
      "properties" : {
        "count" : {
          "type" : "integer",
          "format" : "int64",
          "example" : 50
        },
        "entities" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/TaskWithSmallInfo"
          }
        },
        "id" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "ownerId" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "ownerName" : {
          "type" : "string",
          "example" : "John Johnson"
        },
        "totalCount" : {
          "type" : "integer",
          "format" : "int64",
          "example" : 581
        },
        "type" : {
          "type" : "string",
          "enum" : [ "REASSIGN_TOP_TO_DOWN", "REASSIGN_DOWN_TO_TOP", "UNUSED_TASKS", "MISSING_USERS", "BLANK_TASKS" ]
        }
      },
      "title" : "UnusedTasks"
    },
    "UpdFolder" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "title" : "UpdFolder"
    },
    "UpdNormative" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "flag" : {
          "type" : "string",
          "enum" : [ "REQUIRED", "VOLUNTARY", "ALL" ]
        },
        "paragraph" : {
          "type" : "string"
        }
      },
      "title" : "UpdNormative"
    },
    "UpdNormativeGroup" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "descriptionMask" : {
          "type" : "string"
        },
        "documentNumber" : {
          "type" : "string"
        },
        "requiredFlagMask" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "titleMask" : {
          "type" : "string"
        },
        "url" : {
          "type" : "string"
        }
      },
      "title" : "UpdNormativeGroup"
    },
    "UpdateCategory" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        }
      },
      "title" : "UpdateCategory"
    },
    "UpdateComment" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "text" : {
          "type" : "string"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time"
        }
      },
      "title" : "UpdateComment"
    },
    "UpdateDto" : {
      "type" : "object",
      "properties" : {
        "ids" : {
          "type" : "array",
          "example" : [ "5d0a4264e4e4687f4e7bbc27, 5d416b0ee4e4685f534ba21b" ],
          "description" : "Массив идентификаторов.",
          "items" : {
            "type" : "string"
          }
        },
        "patch" : {
          "example" : {
            "op" : "replace",
            "path" : "/title",
            "value" : "newTitle"
          },
          "description" : "${ParametersPatch}",
          "$ref" : "#/definitions/JsonNode"
        }
      },
      "title" : "UpdateDto"
    },
    "UpdateOrganization" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "bic" : {
          "type" : "string"
        },
        "code" : {
          "type" : "string"
        },
        "corrAcc" : {
          "type" : "string"
        },
        "currentAcc" : {
          "type" : "string"
        },
        "delegateName" : {
          "type" : "string"
        },
        "delegatePosition" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "fax" : {
          "type" : "string"
        },
        "identification" : {
          "type" : "string"
        },
        "individual" : {
          "type" : "boolean"
        },
        "inn" : {
          "type" : "string"
        },
        "kpp" : {
          "type" : "string"
        },
        "legalAddress" : {
          "type" : "string"
        },
        "legalName" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "ogrn" : {
          "type" : "string"
        },
        "phone" : {
          "type" : "string"
        },
        "stateRegDate" : {
          "type" : "string"
        },
        "stateRegNo" : {
          "type" : "string"
        },
        "streetAddress" : {
          "type" : "string"
        }
      },
      "title" : "UpdateOrganization"
    },
    "UpdatePermission" : {
      "type" : "object",
      "properties" : {
        "policy" : {
          "type" : "array",
          "example" : [ "plan:read", "project:restoreOwn", "task:allowMailing", "folder:delete", "category:delete", "org:update", "page:settings", "project:delete", "reportTemplate:create", "user:restore", "checklistBlank:delete", "checklist:delete", "msproject:update", "task:status:setCompleted", "project:restore", "task:setOpenedAssign", "normative:update", "task:update" ],
          "items" : {
            "type" : "string"
          }
        },
        "projectId" : {
          "type" : "string",
          "example" : "5d416b0ee4e4685f534ba21b"
        },
        "roleId" : {
          "type" : "string",
          "example" : "5d4170f6e4e4685f534ba2eb"
        },
        "userId" : {
          "type" : "string",
          "example" : "f354g64454h545454545"
        },
        "userIds" : {
          "type" : "array",
          "example" : [ "5d417110e4e4685f534ba2f0,5d0a4264e4e4687f4e7bbc27" ],
          "items" : {
            "type" : "string"
          }
        }
      },
      "title" : "UpdatePermission"
    },
    "UpdatePlan" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "genplan" : {
          "type" : "boolean"
        },
        "name" : {
          "type" : "string"
        }
      },
      "title" : "UpdatePlan"
    },
    "UpdateProject" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "attributes" : {
          "$ref" : "#/definitions/ProjectUpdateAttributes"
        },
        "code" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "dstOrgAddress" : {
          "type" : "string"
        },
        "endDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "name" : {
          "type" : "string"
        },
        "notifyTime" : {
          "type" : "integer",
          "format" : "int64"
        },
        "objectAddress" : {
          "type" : "string"
        },
        "objectName" : {
          "type" : "string"
        },
        "objectShortName" : {
          "type" : "string"
        },
        "reportCity" : {
          "type" : "string"
        },
        "startDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "startDayOfWeek" : {
          "type" : "integer",
          "format" : "int32"
        }
      },
      "title" : "UpdateProject"
    },
    "UpdateRole" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "nameChanged" : {
          "type" : "boolean"
        },
        "policy" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "policyChanged" : {
          "type" : "boolean"
        }
      },
      "title" : "UpdateRole"
    },
    "UpdateSheet" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "options" : {
          "$ref" : "#/definitions/SheetOptions"
        }
      },
      "title" : "UpdateSheet"
    },
    "UpdateTask" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string"
        },
        "assignUsers" : {
          "type" : "array",
          "example" : "5d3eee48e446871178b2d36",
          "description" : "Идентификатор Исполнителя замечания",
          "items" : {
            "type" : "string"
          }
        },
        "categoryIds" : {
          "type" : "array",
          "example" : "5e3eee48e446871178b2d36, 5e3ee48e4e46871178b2d37",
          "description" : "Идентификаторы Категорий в замечании",
          "items" : {
            "type" : "string"
          }
        },
        "code" : {
          "type" : "string",
          "example" : 2435,
          "description" : "Номер замечания"
        },
        "completeDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-30T17:57:20.999+00:00",
          "description" : "Фактическая дата устранения, GMT"
        },
        "description" : {
          "type" : "string",
          "example" : "раскрытие трещениы более 3 мм. Отклонение СП",
          "description" : "Описание замечания"
        },
        "docContent" : {
          "type" : "string"
        },
        "docURL" : {
          "type" : "string"
        },
        "dueDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : "2019-08-31T20:59:59.999+00:00",
          "description" : "Срок устранения, GMT"
        },
        "important" : {
          "type" : "boolean"
        },
        "jobTypeId" : {
          "type" : "string"
        },
        "location" : {
          "type" : "string",
          "example" : "Кухня",
          "description" : "Местоположение"
        },
        "mailingList" : {
          "type" : "array",
          "example" : "f354g64454h545454545",
          "description" : "Идентификатор пользователя из поля Требует внимания",
          "items" : {
            "type" : "string"
          }
        },
        "points" : {
          "$ref" : "#/definitions/Position"
        },
        "proposal" : {
          "type" : "string",
          "example" : "Штукатурить с армированием",
          "description" : "Предложение по устранению"
        },
        "state" : {
          "type" : "string",
          "example" : "OPENED",
          "description" : "Статус замечания. Открыто, Выполнено или Проверено",
          "enum" : [ "opened", "completed", "verified" ]
        },
        "title" : {
          "type" : "string",
          "example" : "Трещина в стене",
          "description" : "Название замечания"
        }
      },
      "title" : "UpdateTask"
    },
    "UpdateUser" : {
      "type" : "object",
      "properties" : {
        "email" : {
          "type" : "string"
        },
        "isLicensed" : {
          "type" : "boolean"
        },
        "isLocked" : {
          "type" : "boolean"
        },
        "lang" : {
          "type" : "string"
        },
        "makeUserLicensed" : {
          "type" : "boolean"
        },
        "name" : {
          "type" : "string"
        },
        "nameForReport" : {
          "type" : "string"
        },
        "password" : {
          "type" : "string"
        },
        "phone" : {
          "type" : "string"
        },
        "position" : {
          "type" : "string"
        },
        "positionForReport" : {
          "type" : "string"
        },
        "settings" : {
          "$ref" : "#/definitions/UserSettings"
        }
      },
      "title" : "UpdateUser"
    },
    "UploadAvatarResponse" : {
      "type" : "object",
      "properties" : {
        "avatar" : {
          "type" : "string",
          "example" : "avatars/44e1f18b-c21a-4eda-a280-4a789bf43e15"
        },
        "id" : {
          "type" : "string",
          "example" : "5bc6d9cf6d10e70588402c40"
        }
      },
      "title" : "UploadAvatarResponse"
    },
    "User" : {
      "type" : "object",
      "properties" : {
        "ancestry" : {
          "type" : "string",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "email" : {
          "type" : "string",
          "example" : "user_name@mail.com",
          "description" : "Значение электронной почты."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "isFolder" : {
          "type" : "boolean",
          "example" : true,
          "description" : "Папка с категориями или нет."
        },
        "isLicensed" : {
          "type" : "boolean"
        },
        "isLocked" : {
          "type" : "boolean"
        },
        "lang" : {
          "type" : "string",
          "example" : "ru",
          "description" : "Язык установленный у пользователя."
        },
        "last_online" : {
          "$ref" : "#/definitions/LastOnline"
        },
        "name" : {
          "type" : "string",
          "example" : "John Johnson",
          "description" : "Имя пользователя."
        },
        "nameForReport" : {
          "type" : "string",
          "example" : "to John Johnson",
          "description" : "Имя пользователя для отчёта в творительном падеже для создания отчёта."
        },
        "organizationId" : {
          "type" : "string",
          "example" : "5bc6d9cf6d10e70588402c41",
          "description" : "Уникальный идентификатор для организации."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "phone" : {
          "type" : "string",
          "example" : 89021234567,
          "description" : "Номер телефона."
        },
        "position" : {
          "type" : "string",
          "example" : "Project Manager",
          "description" : "${ParametersPosition}"
        },
        "positionForReport" : {
          "type" : "string",
          "example" : "to Project Manager",
          "description" : "Должность пользователя в творительном падеже для создания отчёта."
        },
        "registerDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1544782243846,
          "description" : "Дата регистрации."
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "settings" : {
          "$ref" : "#/definitions/UserSettings"
        },
        "type" : {
          "type" : "string",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        }
      },
      "title" : "User"
    },
    "UserLastOnline" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "orgName" : {
          "type" : "string",
          "example" : "FIESTA LLC"
        },
        "userName" : {
          "type" : "string",
          "example" : "John Johnson"
        }
      },
      "title" : "UserLastOnline"
    },
    "UserSettings" : {
      "type" : "object",
      "properties" : {
        "emailNotify" : {
          "type" : "boolean",
          "example" : false
        },
        "geolocation" : {
          "type" : "boolean",
          "example" : true
        },
        "notifyType" : {
          "type" : "string",
          "example" : "important",
          "enum" : [ "all", "important" ]
        },
        "pushNotify" : {
          "type" : "boolean",
          "example" : true
        },
        "tfaType" : {
          "type" : "string",
          "example" : "email",
          "enum" : [ "email", "google" ]
        }
      },
      "title" : "UserSettings"
    },
    "UserWithToken" : {
      "type" : "object",
      "properties" : {
        "accessToken" : {
          "type" : "string",
          "example" : "eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE2MjAxMjQzOTYsInN1YiI6IjYwODI3MzIwZmFmYmExN2QyNTU5MzI0NSIsImRhdGUiOjE2MjAxMjQzOTYxNzIsInJldmlzaW9uX251bWJlciI6MSwidmVyaWZ5IjoidEN6bExlZE4iLCJzZXNzaW9uX2lkIjoiNjA5MTIyZWNmNDVkYjgzYTczMDAyZDUyIiwib3JnYW5pemF0aW9uX2NvZGUiOiJMb2NhbCBzZXJ2ZXIifQ.7CcERDuupzKae_vSrJ014ai-zA_dtwndv48jVcVnik-vNFhW2X1z379ORWGCqQdZ"
        },
        "ancestry" : {
          "type" : "string",
          "description" : "Путь в иерархии от родительской сущности до текущей."
        },
        "archiveInitiator" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "archivedDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115548928,
          "description" : "Дата архивации, GMT."
        },
        "email" : {
          "type" : "string",
          "example" : "user_name@mail.com",
          "description" : "Значение электронной почты."
        },
        "id" : {
          "type" : "string",
          "example" : "f354g64454h545454545",
          "description" : "Массив идентификаторов."
        },
        "isFolder" : {
          "type" : "boolean",
          "example" : true,
          "description" : "Папка с категориями или нет."
        },
        "isLicensed" : {
          "type" : "boolean"
        },
        "isLocked" : {
          "type" : "boolean"
        },
        "lang" : {
          "type" : "string",
          "example" : "ru",
          "description" : "Язык установленный у пользователя."
        },
        "last_online" : {
          "$ref" : "#/definitions/LastOnline"
        },
        "name" : {
          "type" : "string",
          "example" : "John Johnson",
          "description" : "Имя пользователя."
        },
        "nameForReport" : {
          "type" : "string",
          "example" : "to John Johnson",
          "description" : "Имя пользователя для отчёта в творительном падеже для создания отчёта."
        },
        "organizationId" : {
          "type" : "string",
          "example" : "5bc6d9cf6d10e70588402c41",
          "description" : "Уникальный идентификатор для организации."
        },
        "parentId" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253"
        },
        "parentType" : {
          "type" : "string",
          "example" : "60827320fafba17d25593253",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "phone" : {
          "type" : "string",
          "example" : 89021234567,
          "description" : "Номер телефона."
        },
        "position" : {
          "type" : "string",
          "example" : "Project Manager",
          "description" : "${ParametersPosition}"
        },
        "positionForReport" : {
          "type" : "string",
          "example" : "to Project Manager",
          "description" : "Должность пользователя в творительном падеже для создания отчёта."
        },
        "registerDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1544782243846,
          "description" : "Дата регистрации."
        },
        "restoredDate" : {
          "type" : "string",
          "format" : "date-time",
          "example" : 1620115543528,
          "description" : "Дата восстановления, GMT."
        },
        "settings" : {
          "$ref" : "#/definitions/UserSettings"
        },
        "type" : {
          "type" : "string",
          "enum" : [ "plan", "sheet", "user", "task", "annotation", "folder", "project", "favorite", "checkItem", "permission", "role", "organization", "attachment", "normative", "normativeCategory", "normativeMask", "comment", "report", "reportTemplate", "projection", "mspTask", "category", "contract", "jobType", "commercialProjectName", "checklist", "checklistBlank", "bimObject", "sheetRelation", "chart", "assignment", "ancestry" ]
        },
        "userId" : {
          "type" : "string"
        }
      },
      "title" : "UserWithToken"
    }
  }
}