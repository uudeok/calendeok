import { useState } from 'react';
import dayjs from 'dayjs';
import styled, { css } from 'styled-components';
import useCalendar from './hooks/useCalendar';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Dropdown, DropdownMenu, DropdownOption, DropdownToggle } from './common/dropdown/Dropdown';

const SUNDAY = 0;

const TIME_LIST = [
    { time: '00:00' },
    { time: '01:00' },
    { time: '02:00' },
    { time: '03:00' },
    { time: '04:00' },
    { time: '05:00' },
    { time: '06:00' },
    { time: '07:00' },
    { time: '08:00' },
    { time: '09:00' },
    { time: '10:00' },
];

const Example3 = () => {
    const [selected, setSelected] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');

    const { body, prevController, nextController, weeks, curYear, curMonth } = useCalendar();

    const handleDate = (date: Date) => {
        setSelected(date);
    };

    const selectedDate = dayjs(selected).format('YYYY-MM-DD');

    const handleTime = (time: string) => {
        setSelectedTime(time);
    };

    const validPrevMonth = () => {
        return curMonth <= new Date().getMonth();
    };

    const validNextMonth = () => {
        const maxMonth = 5;
        return maxMonth < curMonth;
    };

    const isVisiblePrevBtn = validPrevMonth();
    const isVisibleNextBtn = validNextMonth();

    return (
        <>
            <h2 className="text-3xl text-orange-600 mb-4 mt-5 font-pre">Calendeok2</h2>
            <input
                className="border border-black p-2 text-center mb-4"
                value={`${selectedDate} ${selectedTime}`}
                readOnly
            />

            <Container>
                <Header>
                    <Controller onClick={prevController} valid={isVisiblePrevBtn}>
                        <SlArrowLeft />
                    </Controller>
                    <div className="flex-1">
                        {curYear}년 {curMonth + 1}월
                    </div>
                    <Controller onClick={nextController} valid={isVisibleNextBtn}>
                        <SlArrowRight />
                    </Controller>
                </Header>

                <table className="p-2 mt-2 w-full">
                    <thead>
                        <tr>
                            {weeks.en.map((week, index) => (
                                <th key={index}>{week}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((rows, index) => (
                            <tr key={index}>
                                {rows.map((row) => (
                                    <td key={row.value} className={`text-15 relative pb-2.5 pt-2 text-center`}>
                                        <DateCell
                                            selected={row.date === selected}
                                            disabled={dayjs(row.date).isBefore(dayjs(), 'date')}
                                            onClick={() => handleDate(row.date)}
                                        >
                                            {row.date.getDate()}
                                        </DateCell>
                                        {dayjs().isSame(row.date, 'day') && <Today>Today</Today>}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <Dropdown>
                    <Toggle>시간 선택</Toggle>
                    <Menu>
                        {TIME_LIST.map((item) => (
                            <div onClick={() => handleTime(item.time)} key={item.time}>
                                <Option value={item.time} disabled={!selectedDate} />
                            </div>
                        ))}
                    </Menu>
                </Dropdown> */}
            </Container>
        </>
    );
};

export default Example3;

const Self = styled.div`
    padding: 0.5rem;
    position: absolute;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 350px;
    height: 450px;
    background-color: white;
    padding: 1rem;
    font-family: 'Pretendard-Regular';
`;

const Header = styled.div`
    display: flex;
    padding: 1rem;
    font-size: 20px;
    font-weight: bold;
`;

const Controller = styled.button<{ valid: boolean }>`
    border: none;
    background-color: transparent;
    cursor: pointer;

    ${({ valid }) =>
        valid &&
        css`
            visibility: hidden;
        `}
`;

const DateCell = styled.button<{ selected: boolean; disabled: boolean }>`
    border: none;
    cursor: pointer;
    width: 2rem;
    height: 2rem;

    &:hover {
        background-color: orange;
        color: white;
        border-radius: 50%;
    }

    ${({ selected }) =>
        selected &&
        css`
            background-color: orange;
            color: white;
            border-radius: 50%;
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            color: rgba(38, 45, 57, 0.16);
            pointer-events: none;
        `}
`;

const Today = styled.div`
    position: absolute;
    width: 100%;
    font-size: 10px;
    text-align: center;
`;

const Toggle = styled(DropdownToggle)<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.5rem;
    max-height: 56px;
    padding: 16px 12px 16px 16px;
    background-color: orange;
    color: white;
    border: 1px solid rgba(38, 45, 57, 0.08);
    font-size: 1.2rem;
    box-sizing: border-box;
    line-height: 22px;
    user-select: none;
    border-radius: 4px;

    cursor: pointer;

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
        `}
`;

const Menu = styled(DropdownMenu)`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 10rem;
    background-color: #f8f8f8;
    border-top: none;
    box-sizing: border-box;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    /* width: 100%; */
`;

const Option = styled(DropdownOption)<{ disabled?: boolean }>`
    height: 3rem;
    font-size: 1.2rem;
    background-color: #f8f8f8;
    text-align: left;
    padding: 8px 16px;
    cursor: pointer;
    line-height: 30px;
    user-select: none;
    box-sizing: border-box;
    border-left: 1px solid rgba(38, 45, 7, 0.08);
    border-right: 1px solid rgba(38, 45, 7, 0.08);

    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            opacity: 0.6;
            background-color: #dddddd;
        `}

    &:hover {
        background-color: #dddddd;
    }
`;
