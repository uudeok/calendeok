import { MONTH_LABEL_VALUES } from '../@types';
import { MONTH_LABEL } from '../const';
import { getDateLabelColor } from '../util/date';
import styled, { css } from 'styled-components';

type DateCellType = {
    label: number;
    monthLabel: MONTH_LABEL_VALUES;
    curMonthOnly?: boolean;
    isToday: boolean;
    disabled: boolean;
    selected: boolean;
};

const DateCell = ({ label, monthLabel, curMonthOnly, isToday, disabled, selected }: DateCellType) => {
    return (
        <Self
            disabled={disabled}
            $month={monthLabel}
            $isToday={isToday}
            $isCurMonth={monthLabel === MONTH_LABEL.MONTH_CURRENT}
            selected={selected}
        >
            {curMonthOnly && monthLabel !== MONTH_LABEL.MONTH_CURRENT ? null : (
                <button disabled={disabled} data-name={monthLabel}>
                    {label}
                </button>
            )}
            {isToday && monthLabel === MONTH_LABEL.MONTH_CURRENT && <TodayLabel>오늘</TodayLabel>}
        </Self>
    );
};
export default DateCell;

const Self = styled.td<{
    disabled: boolean;
    $month: MONTH_LABEL_VALUES;
    selected?: boolean;
    $isToday?: boolean;
    $isCurMonth?: boolean;
}>`
    position: relative;
    padding-bottom: 1rem;

    text-align: center;

    ${({ disabled }) =>
        disabled &&
        css`
            color: rgba(38, 45, 57, 0.16);
            pointer-events: none;
        `}

    button {
        width: 2.5rem;
        height: 2.5rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        ${({ $month }) => getDateLabelColor($month)}

        &:disabled {
            cursor: default;
            color: rgba(38, 45, 57, 0.16);
        }

        ${({ $isToday }) =>
            $isToday &&
            css`
                border: 1px solid rgba(38, 45, 57, 0.16);
                box-sizing: border-box;
                border-radius: 30px;
            `}
    }

    ${({ disabled, $isCurMonth }) =>
        !disabled &&
        $isCurMonth &&
        css`
            cursor: pointer;

            &:hover {
                button {
                    color: white;
                    background-color: #3581ff;
                    border-radius: 50%;
                    border: none;
                }
            }
        `}

    ${({ selected }) =>
        selected &&
        css`
            color: white;
            cursor: pointer;

            button {
                color: white !important;
                background-color: #3581ff;
                border-radius: 50%;
            }
        `}
`;

const TodayLabel = styled.div`
    position: absolute;
    width: 100%;
    height: 1.6rem;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    color: rgba(38, 45, 57, 0.52);
    /* left: -3px; */
`;
