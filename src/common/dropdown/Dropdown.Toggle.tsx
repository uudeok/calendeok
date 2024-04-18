import React, { useContext, ReactNode } from 'react';
import { DropdownContext } from './Dropdown';

export const DropdownToggle: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
    const { toggleDropdown, selectedOption } = useContext(DropdownContext);
    return (
        <button onClick={toggleDropdown} {...props}>
            {selectedOption || children}
        </button>
    );
};
