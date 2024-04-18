import React, { useContext, ReactNode } from 'react';
import { DropdownContext } from './Dropdown';

export const DropdownMenu: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
    const { isOpen } = useContext(DropdownContext);
    return isOpen ? <div {...props}>{children}</div> : null;
};
