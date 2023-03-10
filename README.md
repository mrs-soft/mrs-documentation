# О документации

Данный репозиторий отвечает за исходный код документации для "МРС Платформа".
Документация собирается с помощью генератора статичных сайтов — Sphinx.

## Первый старт

После того, как вы склонировали данный репозиторий, необходимо установить зависимости для него.

Первоначально вам понадобится Python, так как он необходим для работы самого генератора статичных сайтов.

>   [Ссылка для скачивания Python](https://www.python.org/downloads/).

Советуем пользоваться [virtualenv](https://pypi.org/project/virtualenv/) для дальнейшей работы.
Если вы установили ``virtualenv``, то начинайте работу со следующих команд, находясь в папке с документацией:

    virtualenv venv
    source venv/bin/activate

Если вы решили не устанавливать ``virtualenv``, то пропустите предыдущий этап.

После этого необходимо установить зависимости, которые используются в работе со Sphinx. Они все собраны в файле ``requirments.txt``.
Введите команду:

    pip3 install -r requirments.txt

Если всё устновилось корректно, то для сборки введите команду:

    sphinx-autobuild -b dirhtml docs build

После этого билд документации будет доступен по ссылке http://127.0.0.1 или http://localhost:8000/.

## Алгоритм сборки для работы

Если вы установили и работаете с ``virtualenv``, то всегда начинайте работу с команды:

    source venv/bin/activate

Если ``virtualenv`` нет, то пропускайте этот шаг.

После этого билд можно собрать с помощью команды:

    sphinx-autobuild -b dirhtml docs build

## Структура проекта

В таблице ниже описана структура проекта. В ней есть описания только до 3 уровня вложенности и упускаются файлы и папки,
в которых нет смысла что-то менять/**НЕ НАДО** ничего менять.

| 1 уровень вложенности | Описание                                                                                                                                                     | 2 уровень вложенности | Описание                                                                                                                                                                                                                                  | 3 уровень вложенности  | Описание                                                                                                                                                                                            |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| docs                  | Папка с исходниками. Вся работа проходит здесь.                                                                                                              | _images               | В эту папку складываются картинки для разделов верхнего уровня: index.rst, constructor.rst и так далее.                                                                                                                                   | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | _static               | В этой папке хранятся статические файлы, которые нужны для сайта. CSS, favicon, logo и так далее.                                                                                                                                         | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | constructor           | В этой папке хранятся вкладки, которые находятся в разделе "Конструктор" в документации.                                                                                                                                                  | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | components             | В этой папке хранятся вкладки, которые находятся в разделе "Компоненты формы". Глубже описывать не буду, внутри файлы называются тем же образом, по которым их можно открыть при сборке.            |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | dev-environment        | В этой папке хранятся вкладки, которые находятся в разделе "Среда разработки".                                                                                                                      |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | images                 | В этой папке хранятся картинки для разделов в папке constructor: components.rst, dev-environment.rst и так далее.                                                                                   |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | components.rst         | Это заголовочный файл для раздела "Компоненты формы". Это первый файл в формате .rst, который попадается в описании структуры, но это основные файлы в документации, в которых проходит вся работа. |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | dev-environment.rst    | Это заголовочный файл для раздела "Cреда разработки".                                                                                                                                               |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | elements-of-system.rst | Это заголовочный файл для раздела "Элементы системы".                                                                                                                                               |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | how-to-start.rst       | Это заголовочный файл для раздела "Логинация".                                                                                                                                                      |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | structure.rst          | Это заголовочный файл для раздела "Структура приложения".                                                                                                                                           |
| —                     | —                                                                                                                                                            | —                     | —                                                                                                                                                                                                                                         | types-of-view.rst      | Это заголовочный файл для раздела "Типы представлений".                                                                                                                                             |
| —                     | —                                                                                                                                                            | examples              | В этой папке хранятся вкладки, которые находятся в разделе "Примеры" в документации.                                                                                                                                                      | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | locale                | В этой папке хранятся файлы для локализации темы, которая используются в генерации. Если в теме есть какие-то вещи, которые отображаются на английском языке, то в файле ``sphinx.po`` необходимо написать перевод этой фразы.            | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | api.rst               | Это заголовочный файл для раздела "Интеграции и API".                                                                                                                                                                                     | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | conf.py               | Это файл конфигурации. Подробнее о работе с ним можно почитать по [ссылке](https://www.sphinx-doc.org/en/master/usage/configuration.html). Но в целом менять там ничего особо не надо. Только если добавляется какое-то новое расширение. | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | constructor.rst       | Это заголовочный файл для раздела "Конструктор".                                                                                                                                                                                          | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | examples.rst          | Это заголовочный файл для раздела "Примеры".                                                                                                                                                                                              | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | glossary.rst          | Это заголовочный файл для раздела "Глоссарий".                                                                                                                                                                                            | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | index.rst             | Это файл с главной страницей сайта.                                                                                                                                                                                                       | —                      | —                                                                                                                                                                                                   |
| —                     | —                                                                                                                                                            | services.rst          | Это заголовочный файл для раздела "Службы".                                                                                                                                                                                               | —                      | —                                                                                                                                                                                                   |
| .gitignore            | В этот файл записываются конкретные файлы, папки или расширения файлов, которые не надо хранить в удалённом git-репозитории.                                 | —                     | —                                                                                                                                                                                                                                         | —                      | —                                                                                                                                                                                                   |
| README.md             | Вы читаете сейчас этот файл.                                                                                                                                 | —                     | —                                                                                                                                                                                                                                         | —                      | —                                                                                                                                                                                                   |
| requirments.txt       | В этом файле записываются зависимости необходимые для работы генератора. Если добавляете какие-то расширения для Sphinx, то не забывайте записывать их сюда. | —                     | —                                                                                                                                                                                                                                         | —                      | —                                                                                                                                                                                                   |
