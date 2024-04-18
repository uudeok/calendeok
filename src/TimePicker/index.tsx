import { Time } from '../@types';
import { adjustSelectable, generateTimeArray } from '../util/time';
import { Dropdown, DropdownMenu, DropdownOption, DropdownToggle } from '../common/dropdown/Dropdown';
import DynamicRender from '../common/DynamicRender';

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
                <DropdownOption value={time.label} />
            </div>
        );
    };

    return (
        <div>
            <Dropdown>
                <DropdownToggle>{selectedTime ? selectedTime : placeholder}</DropdownToggle>
                <DropdownMenu>
                    <DynamicRender data={timeList} renderItem={renderOption} />
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default TimePicker;
