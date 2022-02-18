export type Foobar = 'foo' | 'bar';

export const foobar: Foobar = 'foo';

export interface FooBarInterface {
  foo: string;
  bar: number;
}

export const foobarValues: FooBarInterface = {
  foo: 'Foo',
  bar: 1337,
};

export type FooBarFooValue = typeof foobarValues['foo'];
