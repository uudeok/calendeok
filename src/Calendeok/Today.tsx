const Today = ({ isToday }: { isToday: boolean }) => {
  return (
    isToday && (
      <span className="text-sm text-center absolute inset-x-0 bottom-0 w-full">
        오늘
      </span>
    )
  );
};

export default Today;
