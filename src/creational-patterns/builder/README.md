# Строитель (Builder)

Строитель позволяет создавать сложные объекты пошагово.\
Строитель даёт возможность использовать один и тот же код строительства для получения разных представлений объектов.

Для удобства, Строитель может иметь внутри себя _Директора_,
класс, который отвечает только за выполнение шагов построения в определённой последовательности.\
_Директор_ необязателен, так как клиент может напрямую управлять строителями.


## Когда:

1. Создаваемый объект достаточно сложный и требуют обширной конфигурации.
1. Создание разных представлений объекта можно свести к общим шагам (интерфейс).\
   Например билдеры создания машины и инструкции к ней можно свести к общему интерфейсу.


## Ссылка:
https://refactoring.guru/ru/design-patterns/builder
