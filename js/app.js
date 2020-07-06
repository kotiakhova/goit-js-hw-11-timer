'use strict'
const refs = { 
  clockfaceDays: document.querySelector('[data-value="days"]'),
  clockfaceHours: document.querySelector('[data-value="hours"]'),
  clockfaceMinutes: document.querySelector('[data-value="mins"]'),
  clockfaceSeconds: document.querySelector('[data-value="secs"]'),
}
const CountdownTimer = function(object) {
  this.selector = object.selector;
  this.targetDate = object.targetDate;
  this.start = function() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;



      updateClockface(deltaTime);
    }, 1000)
    
  };
};
function updateClockface (time) {

  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.clockfaceDays.textContent = days;
  refs.clockfaceHours.textContent = hours;
  refs.clockfaceMinutes.textContent = minutes;
  refs.clockfaceSeconds.textContent = seconds;
}

function pad (value) {
  return String(value).padStart(2,0)
};

const event = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

event.start();

