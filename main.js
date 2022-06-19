//setInterval Tasks
//1
function printIn4Sec() {
  setInterval(() => {
    document.body.innerText += "timer ";
  }, 4000);
}
//2
function printIn6Sec() {
  setInterval(() => {
    document.body.innerHTML += "counter ";
  }, 6000);
}
//3
function printMeesageWithStopBtn() {
  var intervalId = setInterval(() => {
    document.body.innerText += "I love timer ";
  }, 6000);
  var stopBtn = document.createElement("button");
  document.body.appendChild(stopBtn);
  stopBtn.innerText = "Stop";
  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
  });
}
//4
function printTime() {
  var dateObj = new Date();
  var dateHours = dateObj.getHours();
  var dateMinutes = dateObj.getMinutes();
  var dateSeconds = dateObj.getSeconds();
  if (dateHours < 10) {
    dateHours = "0" + dateHours;
  }
  if (dateMinutes < 10) {
    dateMinutes = "0" + dateMinutes;
  }
  if (dateSeconds < 10) {
    dateSeconds = "0" + dateSeconds;
  }
  document.body.innerHTML = `<h1>${dateHours}:${dateMinutes}:${dateSeconds}</h1>`;
}
// setInterval(() => {
//   printTime();
// }, 1000);
// var inputMinutes;
//5
// var secondsCounter = 0;
// var intervalCountDownId;
// var zeroCount = false;
function printCountDown() {
  if (inputMinutes < 10) {
    if (secondsCounter < 10) {
      document.getElementById(
        "counter"
      ).innerText = `0${inputMinutes}:0${secondsCounter}`;
    } else {
      document.getElementById(
        "counter"
      ).innerText = `0${inputMinutes}:${secondsCounter}`;
    }
  } else {
    if (secondsCounter < 10) {
      document.getElementById(
        "counter"
      ).innerText = `${inputMinutes}:0${secondsCounter}`;
    } else {
      document.getElementById(
        "counter"
      ).innerText = `${inputMinutes}:${secondsCounter}`;
    }
  }
}
function shuffleCountDown() {
  if (inputMinutes == null) {
    zeroCount = false;
    inputMinutes = +document.getElementById("min_input").value;
    printCountDown();
    playCountDown();
    shuffle_btn.innerText = "STOP";
    return;
  }
  if (intervalCountDownId == null) {
    playCountDown();
    shuffle_btn.innerText = "STOP";
    return;
  }
  stopCountDown();
  shuffle_btn.innerText = "PLAY";
}
function stopCountDown() {
  clearInterval(intervalCountDownId);
  intervalCountDownId = null;
}
function playCountDown() {
  intervalCountDownId = setInterval(() => {
    if (secondsCounter == 0 && inputMinutes == 0) {
      zeroCount = true;
      clearInterval(intervalCountDownId);
    }
    printCountDown();
    if (secondsCounter == 0) {
      inputMinutes--;
      secondsCounter = 60;
    }
    secondsCounter--;
    if (zeroCount) {
      inputMinutes = null;
      shuffle_btn.innerText = "START";
      secondsCounter = 0;
    }
  }, 100);
}
//6
// var alarmIntervalId;
// var alarmHours;
// var alarmMinutes;
// var alarmSeconds = 0;
function printAlarmCounter(Hours, Minutes, Seconds) {
  if (Hours < 10) {
    Hours = "0" + Hours;
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }
  if (Seconds < 10) {
    Seconds = "0" + Seconds;
  }
  document.getElementById("Alarm").innerText = `${Hours}:${Minutes}:${Seconds}`;
}
function shuffleAlarm() {
  if (alarmIntervalId == null) {
    setAlarmClock(document.getElementById("timeInp").value);
    alarmSeconds = 0;
    startAlarm();
    shuffle_btn.innerText = "STOP";
    return;
  }
  shuffle_btn.innerText = "SET ALARM";
  stopAlarm();
}
function startAlarm() {
  alarmIntervalId = setInterval(() => {
    if (alarmHours == 0 && alarmMinutes == 0 && alarmSeconds == 0) {
      clearInterval(alarmIntervalId);
    }
    printAlarmCounter(alarmHours, alarmMinutes, alarmSeconds);
    if (alarmMinutes == 0 && alarmHours > 0) {
      alarmMinutes = 59;
      alarmHours--;
    }
    if (alarmSeconds == 0) {
      alarmSeconds = 60;
      alarmMinutes--;
    }
    alarmSeconds--;
  }, 1000);
}
function setAlarmClock(setClockTo) {
  var currentDate = new Date();
  var hour = +setClockTo.substr(0, 2);
  var minutes = +setClockTo.substr(3, 2);
  if (currentDate.getHours() > hour) {
    alarmHours = hour - currentDate.getHours() + 24;
  } else {
    alarmHours = hour - currentDate.getHours();
  }
  alarmMinutes = minutes - currentDate.getMinutes();
  if (alarmMinutes < 0) {
    alarmMinutes = 60 + alarmMinutes;
    alarmHours--;
  }
}
function stopAlarm() {
  clearInterval(alarmIntervalId);
  alarmIntervalId = null;
}
//7
// var counter = 0;
// var counterIntervalId;
function shuffleCounter() {
  if (counterIntervalId == null) {
    startCounter();
    shufflecount_btn.innerText = "STOP";
    return;
  }
  stopCounter();
  shufflecount_btn.innerText = "START";
}
function startCounter() {
  counterIntervalId = setInterval(() => {
    document.getElementById(
      "counter"
    ).innerText = `you are in this site for ${counter++} seconds `;
  }, 1000);
}
function stopCounter() {
  clearInterval(counterIntervalId);
  counterIntervalId = null;
}
function clearCounter() {
  counter = 0;
}
//8
// var namesRunIntervalId;
function shuffleRunNames() {
  if (namesRunIntervalId == null) {
    playRunNames();
    shufflenames_btn.innerText = "STOP";
    return;
  }
  stopRunNames();
  shufflenames_btn.innerText = "STOP";
}
function playRunNames() {
  var nameList = [
    "Or",
    "Abey",
    "Batel",
    "Dalia",
    "Nati",
    "Lior",
    "Daniel",
    "Solomon",
    "Znevo",
    "Daniel",
    "Yosi",
  ];
  namesRunIntervalId = setInterval(() => {
    var randomIndex = Math.floor(Math.random() * nameList.length);
    name_print.innerText = `Hello ${nameList[randomIndex]}`;
  }, 4000);
}
function stopRunNames() {
  clearInterval(namesRunIntervalId);
  namesRunIntervalId = null;
}
