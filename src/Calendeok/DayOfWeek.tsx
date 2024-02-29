const daysInKorean = ["일", "월", "화", "수", "목", "금", "토"];

const DayOfWeek = () => {
  return (
    <table>
      <tbody>
        <tr>
          {daysInKorean.map((day) => (
            <th key={day} className="font-normal">
              {day}
            </th>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default DayOfWeek;
