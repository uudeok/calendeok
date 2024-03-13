import DynamicRender from "../common/DynamicRender";

const daysInKorean = ["일", "월", "화", "수", "목", "금", "토"];

type DayOfWeekType = {
  dayCaption?: string[];
};

const DayOfWeek = ({ dayCaption }: DayOfWeekType) => {
  const renderDay = (day: string) => (
    <th key={day} className="font-normal w-14 border-b font-Pre">
      {day}
    </th>
  );

  return (
    <table>
      <tbody>
        <tr className="w-full">
          <DynamicRender
            data={dayCaption ? dayCaption : daysInKorean}
            renderItem={renderDay}
          />
        </tr>
      </tbody>
    </table>
  );
};

export default DayOfWeek;
