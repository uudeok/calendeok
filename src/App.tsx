import Example from './Example';
import Example2 from './Example2';
import Example3 from './Example3';
import styled from 'styled-components';

const App = () => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <Display>
                <div>
                    <Example />
                </div>
                <div>
                    <Example2 />
                </div>
                <div>
                    <Example3 />
                </div>
            </Display>
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
