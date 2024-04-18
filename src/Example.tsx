import { useState } from 'react';
import useCalendar from './hooks/useCalendar';
import dayjs from 'dayjs';

const Example = () => {
    const [selected, setSelected] = useState<Date>(new Date());
    const selectedDate = dayjs(selected).format('YYYY-MM-DD');

    const handleDate = (date: Date) => {
        setSelected(date);
    };

    const { prevController, nextController, body, curMonth, curYear, weeks } = useCalendar();

    return (
        <>
            <div className="font-bold w-40 text-center border border-black p-2 mt-4 mb-2">{selectedDate}</div>
            <div className="mx-auto flex flex-col items-center text-center w-350 h-450 bg-white p-4">
                <div className="p-4 text-2xl font-bold text-left ">
                    <div>
                        {curYear}년 {curMonth + 1}월
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button onClick={prevController} className="border-none bg-transparent cursor-pointer">
                        이전 달
                    </button>
                    <button onClick={nextController} className="border-none bg-transparent cursor-pointer">
                        다음 달
                    </button>
                </div>
                <table className="p-2 mt-4 w-full">
                    <thead>
                        <tr>
                            {weeks.ko.map((week, index) => (
                                <th key={index}>{week}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((rows, index) => (
                            <tr key={index}>
                                {rows.map((row) => (
                                    <td key={row.value} className={`text-15 relative pb-2.5 pt-2 text-center`}>
                                        <button
                                            className={`border-none cursor-pointer w-8 h-8  ${
                                                selected === row.date && 'bg-blue-500 text-white rounded-full'
                                            } hover:bg-blue-500 hover:text-white hover:rounded-full`}
                                            onClick={() => handleDate(row.date)}
                                        >
                                            {row.date.getDate()}
                                        </button>
                                        {dayjs().isSame(row.date, 'day') && (
                                            <div className="absolute w-full text-ss text-center">Today</div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Example;
