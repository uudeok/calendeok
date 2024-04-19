## Calendeok



## 프로젝트 소개

달력을 구성하는 데이터는 변하지 않지만 달력의 UI 는 언제든지 변경 될 수 있다는 점에 주목했습니다. 
달력을 구성하는데 필요한 데이터만 useCalendar hook 으로 제공합니다.
필요에 맞게 기능을 추가하거나 사용자가 쉽게 커스터마이징 할 수 있도록 구현되었습니다. 

혹은 Calendeok 컴포넌트를 활용하면 기본적인 스타일과 기능이 내재되어 있는 datePicker & timePicker 을 바로 사용할 수 있습니다. 
필요에 따라 useCalendar 훅을 사용해 나만의 달력을 구현하거나 Calendeok 으로 빠르고 쉽게 datePicker & timePicker 를 구현할 수 있습니다.  




## 배포 주소

데모 버전 : https://uudeok.github.io/


## 구현 화면


| useCalendar | useCalendar & Dropdown | Calendeok |
| ----------| --------- | --------- | 
|![](https://velog.velcdn.com/images/o1011/post/43665486-a933-4c3f-bcc9-5daecf93b2af/image.gif)|![](https://velog.velcdn.com/images/o1011/post/07af244b-74df-4ca1-817f-7e5f10fc6d37/image.gif)|![](https://velog.velcdn.com/images/o1011/post/98fcdc23-94f8-4836-8ef2-6f2f40d6016a/image.gif)



## useCalendar hook 사용하기

* useCalendar hook 을 사용하면 기본적인 달력 데이터를 사용할 수 있습니다. (구현화면 useCalendar 사진참고)

* 달력을 구성하는 최소한의 데이터만 제공 합니다. 필요한 기능은 추가해서 사용이 가능합니다. 

* 디자인과 데이터를 완벽히 분리해 변경에 유연합니다. 


**코드 예시 👇**

* useCalendar hook 으로 데이터를 불러온다.

```
const { prevController, nextController, curMonth, curYear, weeks, body } = useCalendar();
```

* 사용 예시
 
```
import dayjs from 'dayjs';
import useCalendar from './hooks/useCalendar';
import { useState } from 'react';

function App() {
    const { prevController, nextController, curMonth, curYear, weeks, body } = useCalendar();
    const [selected, setSelected] = useState<Date>(new Date());
    const selectedDate = dayjs(selected).format('YYYY-MM-DD');

    const handleDate = (date: Date) => {
        setSelected(date);
    };

    return (
            <div className="container">
                <div className="date">{selectedDate}</div>
                <div className="header">
                    <div>
                        {curYear}년 {curMonth + 1}월
                    </div>
                </div>

                <div className="controller">
                    <button onClick={prevController}>이전 달</button>
                    <button onClick={nextController}>다음 달</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {weeks.ko.map((week, index) => (
                                <th key={index}>{week}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="cell">
                        {body.map((rows, index) => (
                            <tr key={index}>
                                {rows.map((row) => (
                                    <td key={row.value} className={`dateCell ${selected === row.date && 'isSelected'}`}>
                                        <button onClick={() => handleDate(row.date)}>{row.date.getDate()}</button>
                                        {dayjs().isSame(row.date, 'day') && <div>Today</div>}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default App;
```


## useCalendar + Dropdown 함께 사용하기

* useCalendar hook 과 Dropdown 컴포넌트를 조합해서 Calendar 와 timePicker 를 구현할 수 있습니다. (구현화면 useCalendar + Dropdown 사진참고)


```
            <div className="container">
                <div className="controller">
                    <button onClick={prevController} valid={isVisiblePrevBtn}>
                        <SlArrowLeft />  // 월 이동 버튼은 icon 으로 변경
                    </button>
                    <div className="flex-1">
                        {curYear}년 {curMonth + 1}월
                    </div>
                    <button onClick={nextController} valid={isVisibleNextBtn}>
                        <SlArrowRight />  // 월 이동 버튼은 icon 으로 변경
                    </button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {weeks.en.map((week, index) => (
                                <th key={index}>{week}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="cell">
                        {body.map((rows, index) => (
                            <tr key={index}>
                                {rows.map((row) => (
                                    <td key={row.value} className={`dateCell ${selected === row.date && 'isSelected'}`}>
                                        <button onClick={() => handleDate(row.date)}>{row.date.getDate()}</button>
                                        {dayjs().isSame(row.date, 'day') && <div>Today</div>}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                // Dropdown 을 사용해 timePicker 를 직접 구현할 수 있다. 

                <Dropdown>
                    <Dropdown.Toggle>시간 선택</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {TIME_LIST.map((item) => (
                            <div onClick={() => handleTime(item.time)} key={item.time}>
                                <Dropdown.Option value={item.time} disabled={!selectedDate} />
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
```

## Calendeok 으로 간단하게 사용하기

* useCalendar 로 직접 구현하기 귀찮다면 Calendeok 컴포넌트를 활용하면 기본적인 스타일과 기능이 내재되어 있는 datePicker & timePicker 을 바로 사용할 수 있습니다. (구현화면 Calendeok(3) 사진참고)



```
const Example = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');

    const handleDate = (date: Date) => {
        setDate(date);
    };

    const pickDate = dayjs(date).format('YYYY-MM-DD');
    const laterOneMonth = dayjs(new Date()).add(1, 'month').toDate();

    const isOpenDay = (date: Date) => {
        const day = new Date(date).getDay();
        return day !== SUNDAY;
    };

    const filterTime = (time: Time) => {
        const current = new Date().getTime();
        const selected = new Date(time.value).getTime();

        return current < selected;
    };

    const handleTime = (time: string) => {
        setTime(time);
    };

    return (
            <div>
                <Calendeok
                    selected={date}
                    onClick={handleDate}
                    curMonthOnly={true}
                    minDate={new Date()}
                    maxDate={laterOneMonth}
                    filterDate={isOpenDay}
                    showTimePicker={true}
                    onClickTime={handleTime}
                    selectedTime={time}
                    timeInterval={30}
                    minTime="09:00"
                    maxTime="21:00"
                    filterTime={filterTime}
                    placeholder="시간 선택"
                    excludeTimes={[
                        new Date(date.setHours(12, 0, 0)),
                        new Date(date.setHours(12, 30, 0)),
                        new Date(date.setHours(13, 0, 0)),
                        new Date(2024, 2, 9, 15, 0, 0),
                    ]}
                />
            </div>
    );
};

export default Example;
```


## Calendeok 주요 기능

### datePicker 필수 옵션

```
const [date, setDate] = useState(new Date())

const handleDate = (date: Date) => {
  setDate(date)
 }

return (
  <Calender 
	onClick={handleDate}
    selected={date}
  />
 )
```

### timePicker 필수 옵션

showTimePicker 옵션을 true 로 주면 timePicker 기능이 활성화 됩니다.
timeInterval 옵션으로 시간 간격을 조정할 수 있습니다. 기본값은 60분 입니다. 

```
const [date, setDate] = useState(new Date())
const [time, setTime] = useState("")

const handleDate = (date: Date) => {
  	setDate(date)
 }
 
 const handleTime = (tiem : string) => {
 	setTime(time)
 }

return (
   <Calender 
	  onClick={handleDate}
      selected={date}
      showTimePicker={true}
      onClickTime={handleTime}
      selectedTime={time}
  />
 )

```

### 기타 옵션들

**Calendar**

| <center>Prop name</center> | <center>Description</center> |  <center>default / optional</center> |
| :- | :- | :-: |
| onClick | Function called when the user clicks an date. | default |
| value | The value option indicates the date to focus on when rendering the calendar. | optional |
| curMonthOnly | The curMonthOnly option serves to control the rendering of dates on a calendar.  | optional |
| minDate | The minDate is used to specify the earliest date that is allowed for selection. | optional |
| maxDate | The maxDate is used to define the latest date that can be selected. |  optional |
| filterDate | The filterDate function is employed to restrict the selection of a specific date. It returns a boolean value. | optional |
| dayCaption | The calendar will display these custom day captions instead of the default ones | optional |
| showTimePicker | Whether timePicker is enabled or not | optional |

<br>

**timePicker**

| <center>Prop name</center> | <center>Description</center> |  <center>default / optional</center> |
| :- | :- | :-: |
| onClickTime | A function that is called when the user clicks on the time. | default |
| selectedTime | The selectedTime option indicates the time selected. | default |
| timeInterval | The timeInterval option allows you to adjust the time intervals displayed in the time picker. The default is 60, which is displayed in 1-hour increments.  | optional |
| minTime | The minTime option specifies the minimum time that is displayed in the timePicker.  | optional |
| maxTime | The maxTime option specifies the maximum time that can be displayed in the timePicker. |  optional|
| excludeTimes | The excludeTimes option allows you to sp  ecify time slots that should be excluded or unavailable in the timePicker.  | optional |
| placeholder | The placeHolder option allows you to specify a placeholder text or phrase that is displayed in a particular field.  | optional |
| filterTime | filterTime returns a boolean, allowing you to adjust the availability in the time list based on whether the function returns true or false.  | optional |

<br>





## 기술 스택

**Environment**

<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white">  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> 

**Config**

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

**Development**

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">


## 설치 및 실행

### 1. Installation

```
$ git clone https://git@github.com:uudeok/calendeok.git
```

### 2. Install dependencies

```
$ npm install
```

### 3. Start the development server

```
$ npm start
```

### 4. Open the project in your browser

```
http://localhost:3000
```

