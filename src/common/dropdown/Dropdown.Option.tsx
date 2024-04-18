import React, { useContext } from 'react';
import { DropdownContext } from './Dropdown';

export const DropdownOption: React.FC<{ value: string }> = ({ value, ...props }) => {
    const { selectOption } = useContext(DropdownContext);
    return (
        <div onClick={() => selectOption(value)} {...props}>
            {value}
        </div>
    );
};
