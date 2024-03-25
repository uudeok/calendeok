## Calendeok



## 프로젝트 소개

Calendeok은 사용자 정의 가능한 datePicker 및 timePicker 기능을 제공합니다. 
이 프로젝트는 마음에 드는 datePicker 및 timePicker 라이브러리를 찾지 못해 직접 만들게 되었습니다.
Calendeok은 깔끔한 디자인과 필요에 맞게 기능을 최소화하여 사용자가 쉽게 커스터마이징할 수 있도록 구현되었습니다. 또한, 기능은 점차적으로 추가될 예정입니다.




## 배포 주소

데모 버전 : https://uudeok.github.io/


## 화면 구성


| 기본 Calendeok | timePicker 적용 |  
| ----------| --------- | 
| ![](https://velog.velcdn.com/images/o1011/post/18f25f1c-61bb-4241-8fa4-ecdccac0f510/image.gif)  |![](https://velog.velcdn.com/images/o1011/post/745798cf-5ba2-4159-8459-147a43216029/image.gif)  | 





## 주요 기능

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

**Calender**

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

Environment 

<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white">  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> 

Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

Development

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


