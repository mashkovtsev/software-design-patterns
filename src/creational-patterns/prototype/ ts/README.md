# Реализация

Здесь нет примера кода, т.к. описание говорит само за себя.

Вот лишь несколько техник, которые могут быть использованы внутри метода `clone`:

```js
const obj = { a: 1, b: { c: 2 } };
let clone;

// поверхностный клон:
clone = { ...obj };
clone = Object.assign({}, obj);

// то же что и пример выше, + сохранение всех дескрипторов
clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(obj)
);

// то же что и пример выше, + сохранение прототипа
clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

```

Готовые реализации клонирования объектов:
- [klona](https://github.com/lukeed/klona)
- [lodash](https://lodash.com/docs/latest#clone)


## Note

[Тонкое различие между spread и Object.assign](https://2ality.com/2016/10/rest-spread-properties.html)
