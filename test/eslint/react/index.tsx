// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';

export interface ComponentProps {
  name: string;
  greeting?: string;
}

export const Foo: React.FC = () => <h1>Bar</h1>;

export const StatefulComponent: React.FC = () => {
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    setName('Foo');
  }, []);

  return <p>{name}</p>;
};

export const ComponentWithProps: React.FC<ComponentProps> = ({ name }) => {
  return <p>{name}</p>;
};

export const CompositeComponent: React.FC = () => (
  <div>
    <ComponentWithProps name="foo" />
  </div>
);

export const ComponentWithSpreadProps: React.FC<ComponentProps> = ({
  children,
  ...props
}) => (
  <div>
    <ComponentWithProps {...props} />
    {children}
  </div>
);

export default CompositeComponent;
