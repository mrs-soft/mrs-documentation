Представления
=============

Определение
-----------

Представление — это преднастроеный элемент пользовательского интерфейса системы, служащий для отображения и/или интерактивной работы с данными. 

Представления позволяют улучшить пользовательский опыт.
Например, вместо того чтобы всегда использовать список объектов вы можете вывести их как карточки, отобразить на чертеже, карте,
в календаре, диаграмме Гантта и тд.

В представлениях могут быть организованы интерактивные элементы.
Например, фильтры для отображения требуемой выборки данных или возможность изменять объекты системы прямо из представления (запланировано в v2.1).

Представление можно вывести в главное меню приложения, откуда пользователи смогут войти в него и выполнить свою задачу.

Представлени строится на основе определенного Запроса к данным системы и функции-хука преобразования (map) данных.
Полученные в результате данные должны соответствовать модели, которую ожидает выбранный тип представления.

..  toctree::
    :maxdepth: 2
    :caption: Подробнее в статьях:

    view/structure
    view/query