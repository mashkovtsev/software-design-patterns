import Builder1 from './builder/Builder1';
import Director from './director/Director';

export function getSimpleProduct() {
  const builder = new Builder1();
  const director = new Director(builder);
  director.buildMinimalViableProduct();

  return builder.getProduct();
}

export function getFullProduct() {
  const builder = new Builder1();
  const director = new Director(builder);
  director.buildFullFeaturedProduct();

  return builder.getProduct();
}

export function getCustomProduct() {
  const builder = new Builder1();
  builder.producePartC();
  builder.producePartA();

  return builder.getProduct();
}
