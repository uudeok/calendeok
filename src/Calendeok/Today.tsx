import ConditionalDisplay from "../common/ConditionalDisplay";

const Today = ({ isToday }: { isToday: boolean }) => {
  return (
    <ConditionalDisplay condition={isToday}>
      <span className="text-sm absolute bottom-0 left-0 right-0 text-center font-pre">
        오늘
      </span>
    </ConditionalDisplay>
  );
};

export default Today;
