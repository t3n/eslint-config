import React, { useEffect, useState } from 'react';

interface ComponentProps {
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

export const ComponentWithOptionalProps: React.FC<ComponentProps> = ({
  name,
  greeting,
}) => (
  <p>
    {greeting || 'Hello'} {name}
  </p>
);

export const ComponentWithOptionalPropsParent: React.FC<ComponentProps> = ({
  name,
  greeting,
}) => <ComponentWithOptionalProps name={name} greeting={greeting} />;

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

export const ComponentWithMissingPropTypesValidation = ({
  name,
}: ComponentProps) => {
  return <div>Hello {name}</div>;
};

export default CompositeComponent;
