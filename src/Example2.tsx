import Calender from './Calendeok';
import { useState, useRef } from 'react';
import ConditionalDisplay from './common/ConditionalDisplay';
import dayjs from 'dayjs';
import { Time } from './@types';

const SUNDAY = 0;

type Props = {
    calendarRef: React.RefObject<HTMLDivElement>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Example2 = ({ calendarRef, isOpen, setIsOpen }: Props) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');

    const handleDate = (date: Date) => {
        setDate(date);
    };

    const pickDate = dayjs(date).format('YYYY-MM-DD');
    const laterOneMonth = dayjs(new Date()).add(1, 'month').toDate();

    const handleCalendarToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const isOpenDay = (date: Date) => {
        const day = new Date(date).getDay();
        return day !== SUNDAY;
    };

    const filterTime = (time: Time) => {
        const current = new Date().getTime();
        const selected = new Date(time.value).getTime();

        return current < selected;
    };

    const handleTime = (time: string) => {
        setTime(time);
    };

    return (
        <>
            <h2 className="text-3xl text-orange-600 mb-4 mt-5 font-pre">DatePicker & TimePicker</h2>
            <input
                className="border border-black p-2 text-center mb-4"
                value={`${pickDate} ${time}`}
                onClick={handleCalendarToggle}
                readOnly
            />
            <ConditionalDisplay condition={isOpen}>
                <div ref={calendarRef}>
                    <Calender
                        selected={date}
                        onClick={handleDate}
                        curMonthOnly={true}
                        minDate={new Date()}
                        maxDate={laterOneMonth}
                        filterDate={isOpenDay}
                        showTimePicker={true}
                        onClickTime={handleTime}
                        selectedTime={time}
                        timeInterval={30}
                        minTime="09:00"
                        maxTime="21:00"
                        filterTime={filterTime}
                        placeholder="시간 선택"
                        excludeTimes={[
                            new Date(date.setHours(12, 0, 0)),
                            new Date(date.setHours(12, 30, 0)),
                            new Date(date.setHours(13, 0, 0)),
                            new Date(2024, 2, 9, 15, 0, 0),
                        ]}
                    />
                </div>
            </ConditionalDisplay>
        </>
    );
};

export default Example2;