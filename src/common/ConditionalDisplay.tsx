type TProps = {
  children: JSX.Element;
  condition: boolean;
};

const ConditionalDisplay = ({ condition, children }: TProps) => {
  return <>{condition ? children : null}</>;
};

export default ConditionalDisplay;
