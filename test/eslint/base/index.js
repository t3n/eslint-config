export const foo = 'bar';
export const foobar = `${foo}bar`;

const greet = (greetName) => `Hello ${greetName}`;
greet(foobar);

const randomGreet = () => {
  const rand = Math.round(Math.random());

  if (rand) {
    return `Hello ${foo}`;
  }
  return `Hi ${foo}`;
};
randomGreet();

const ternaryRandomGreet = () => {
  const greeting = Math.round(Math.random()) ? `Hello ${foo}` : `Hi ${foo}`;

  return greeting;
};
ternaryRandomGreet();

const greetByName = () => {
  const name = Math.round(Math.random()) ? 'Foo' : 'Bar';

  switch (name) {
    case 'Foo':
      return `Hello ${name}`;
    case 'Bar':
      return `Hi ${name}`;
    default:
      return `Hey ${name}`;
  }
};
greetByName();

let mutable = 'Foo';
mutable = 'Bar';

export const currentMutable = () => mutable;
