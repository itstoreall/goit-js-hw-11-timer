/**
 * 
 * Создай плагин настраиваемого таймера, который 
 * ведет обратный отсчет до предварительно 
 * определенной даты. Такой плагин может 
 * использоваться в блогах и интернет-магазинах, 
 * страницах регистрации событий, во время 
 * технического обслуживания и т. д.
 * 
 * Плагин ожидает следующую HTML-разметку и 
 * показывает четыре цифры: дни, часы, минуты и 
 * секунды в формате XX:XX:XX:XX. Количество дней 
 * может состоять из более чем двух цифр.
 * 
 * Плагин это класс CountdownTimer, экземпляр 
 * которого создает новый таймер с настройками.
 * 
 * Для подсчета значений используй следующие 
 * готовые формулы, где time - разница между 
 * targetDate и текущей датой.
 * 
 */

class CountdownTimer {
   constructor(initialValues) {
      this.selector = initialValues.selector;
      this._targetDate = initialValues.targetDate;

      this.refs = {
         days: document.querySelector('span[data-value="days"]'),
         hours: document.querySelector('span[data-value="hours"]'),
         mins: document.querySelector('span[data-value="mins"]'),
         secs: document.querySelector('span[data-value="secs"]'),
      };
   }

   start() {
      setInterval(() => {
         
         // Текущее время (мс)
         const currentTime = Date.now();

         // Разница во времени
         const delta = this._targetDate.getTime() - currentTime;

         this.updateClockFace(delta);
      }, 1000);
   }

   updateClockFace(time) {
   const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
   this.refs.days.textContent = `${days}`;

   const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   this.refs.hours.textContent = `${hours}`;

   const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
   this.refs.mins.textContent = `${mins}`;

   const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
   this.refs.secs.textContent = `${secs}`;
   }
   
   pad(value) {
   return String(value).padStart(2, "0");
   }

   get targetDate() {
      return this._targetDate;
   }

   set targetDate(newDate) {
      this._targetDate = newDate;
   }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 17, 2019'),
});

timer.start()

timer.targetDate = new Date("Jan 01, 2021");

/* 

const refs = {
   days: document.querySelector('span[data-value="days"]'),
   hours: document.querySelector('span[data-value="hours"]'),
   mins: document.querySelector('span[data-value="mins"]'),
   secs: document.querySelector('span[data-value="secs"]'),
};

// Целевая дата
const date = new Date(1609452000000);

// Целевое время (мс)
const targetDate = date.getTime();

// Объект таймер
const timer = {
   start() {
      setInterval(() => {
         
         // Текущее время (мс)
         const currentTime = Date.now();

         // Разница во времени
         const delta = targetDate - currentTime;

         updateClockFace(delta);
      }, 1000);
   },
};

timer.start();

function updateClockFace(time) {
   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
   refs.days.textContent = `${days}`;

   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   refs.hours.textContent = `${hours}`;

   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
   refs.mins.textContent = `${mins}`;

   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
   refs.secs.textContent = `${secs}`;
};

function pad(value) {
   return String(value).padStart(2, "0");
};

*/