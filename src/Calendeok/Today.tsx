import ConditionalDisplay from "../common/ConditionalDisplay";

const Today = ({ isToday }: { isToday: boolean }) => {
  return (
    <ConditionalDisplay condition={isToday}>
      <span className="text-sm text-center absolute inset-x-0 bottom-0 w-full">
        오늘
      </span>
    </ConditionalDisplay>
  );
};

export default Today;
