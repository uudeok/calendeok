import { useState } from 'react';
import useCalendar from './hooks/useCalendar';
import dayjs from 'dayjs';
import styled, { css } from 'styled-components';

const Example = () => {
    const [selected, setSelected] = useState<Date>();
    const selectedDate = dayjs(selected).format('YYYY-MM-DD');

    const handleDate = (date: Date) => {
        setSelected(date);
    };

    const { prevController, nextController, body, curMonth, curYear, weeks } = useCalendar();

    return (
        <>
            <h2 className="text-3xl text-orange-600 mb-4 mt-5 font-pre">useCalendar</h2>
            <input className="border border-black p-2 text-center mb-4" value={selectedDate} readOnly />

            <Container>
                <div className="p-4 text-2xl font-bold text-left ">
                    {curYear}년 {curMonth + 1}월
                </div>

                <div className="flex justify-end gap-4">
                    <Controller onClick={prevController}>이전 달</Controller>
                    <Controller onClick={nextController}>다음 달</Controller>
                </div>
                <table className="p-2 mt-2 w-full">
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
                                        <DateCell
                                            isSelected={row.date === selected}
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
            </Container>
        </>
    );
};

export default Example;

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

const Controller = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const DateCell = styled.button<{ isSelected: boolean }>`
    border: none;
    cursor: pointer;
    width: 2rem;
    height: 2rem;

    &:hover {
        background-color: rgb(59 130 246);
        color: white;
        border-radius: 50%;
    }

    ${({ isSelected }) =>
        isSelected &&
        css`
            background-color: rgb(59 130 246);
            color: white;
            border-radius: 50%;
        `}
`;

const Today = styled.div`
    position: absolute;
    width: 100%;
    font-size: 10px;
    text-align: center;
`;
