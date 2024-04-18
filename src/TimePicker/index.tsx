import { Time } from '../@types';
import { adjustSelectable, generateTimeArray } from '../util/time';
import { Dropdown, DropdownMenu, DropdownOption, DropdownToggle } from '../common/dropdown/Dropdown';
import DynamicRender from '../common/DynamicRender';
import styled, { css } from 'styled-components';

export type TimePickerType = {
    timeInterval?: number;
    placeholder?: string;
    onClickTime: (time: string) => void;
    selectedTime: string;
    minTime?: string;
    maxTime?: string;
    filterTime?: (time: Time) => boolean;
    selected: Date;
    excludeTimes?: Date[];
};

const TimePicker = ({
    timeInterval = 60,
    placeholder,
    onClickTime,
    selectedTime,
    minTime,
    maxTime,
    filterTime,
    selected,
    excludeTimes,
}: TimePickerType) => {
    // <--! interval 단위로 시간 배열을 만들어준다 !-->
    let timeList = generateTimeArray(timeInterval, selected);

    if (minTime) {
        timeList = timeList.filter((time) => time.label >= minTime);
    }

    if (maxTime) {
        timeList = timeList.filter((time) => time.label <= maxTime);
    }

    if (excludeTimes) {
        timeList = adjustSelectable(timeList, excludeTimes);
    }

    const handleClickTime = (value: string) => {
        onClickTime(value);
    };

    const renderOption = (time: Time) => {
        const result = filterTime ? filterTime(time) : true;

        return (
            <div key={time.label} onClick={() => handleClickTime(time.label)}>
                <Option value={time.label} disabled={!time.selectable || !result} />
            </div>
        );
    };

    return (
        <Self>
            <Dropdown>
                <Toggle disabled={!selected}>{selectedTime ? selectedTime : placeholder}</Toggle>
                <Menu>
                    <DynamicRender data={timeList} renderItem={renderOption} />
                </Menu>
            </Dropdown>
        </Self>
    );
};

export default TimePicker;

const Self = styled.div`
    padding: 0.5rem;
`;

const Toggle = styled(DropdownToggle)<{ disabled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.5rem;
    max-height: 56px;
    padding: 16px 12px 16px 16px;
    background-color: #3581ff;
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
    /* position: absolute; */
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

const Option = styled(DropdownOption)<{ disabled: boolean }>`
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
