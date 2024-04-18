import { useState, useRef } from 'react';
import Example from './Example';
import Example2 from './Example2';

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
            <Example />
            <Example2 calendarRef={calendarRef} setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    );
};
export default App;
