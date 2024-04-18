import { useState, useRef } from 'react';
import Example from './Example';
import Example2 from './Example2';
import Example3 from './Example3';
import styled from 'styled-components';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);

    const handleCalendarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // 달력 영역 외의 영역 클릭인지 확인
        if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
            setIsOpen(false); // isOpen 상태 변경
        }
    };

    return (
        <div className="flex flex-col items-center w-full h-full" onClick={handleCalendarClick}>
            <Display>
                <div>
                    <Example />
                </div>
                <div>
                    <Example3 />
                </div>
            </Display>
            <Example2 calendarRef={calendarRef} setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    );
};
export default App;

const Display = styled.div`
    display: flex;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    margin: auto;
`;
