const images = [
  'https://www.borussia.de/typo3temp/_processed_/csm_A64I0757_03_93c9faca98.jpg',
  'https://www.borussia.de/typo3temp/_processed_/csm_FSV_Mainz_05_-_Borussia_Herrmann_2018-04-01_CV__132__01_b00b9c97be.jpg',
  'https://www.borussia.de/typo3temp/_processed_/csm_Borussia_-_1.FC_Koeln_Kramer_2017-08-20_CV__80__07_cef43323c8.jpg',
  'https://www.borussia.de/typo3temp/_processed_/csm_zakaria_02_9d06a24d41.jpg'
],
      sliderPlace = document.querySelector('.slider-here');

createSlider(images, sliderPlace);

function createSlider(images, place) {
  const sliderWrapper = document.createElement('div'),
        slider = document.createElement('div'),
        content = document.createElement('ul'),
        controls = document.createElement('ul');

  images.forEach(function(image, index) {
  content.appendChild(createSlide(image));
  controls.appendChild(createControl(image, index));
  });

  function createControl(image, index) {
    const ctrlElem = document.createElement('li');

    ctrlElem.classList.add('slider__controls-item');
    ctrlElem.dataset.index = index;
    return ctrlElem;
  }

  function createSlide(image) {
    const slide = document.createElement('li');
    slide.classList.add('slider__image');
    slide.style.backgroundImage = `url(${image})`;
    return slide;
  }

  sliderWrapper.classList.add('slider__wrapper');
  slider.classList.add('slider');
  content.classList.add('slider__content');
  controls.classList.add('slider__controls');
  sliderWrapper.appendChild(slider);
  slider.appendChild(content);
  slider.appendChild(controls);

  place.innerHTML = '';
  place.appendChild(sliderWrapper);
  controls.addEventListener('click', function( e ) {
    const clickedElement = e.target,
          elIdx = clickedElement.dataset.index,
          activeControl = controls.querySelector('.slider__controls-item--active');

    if (activeControl) {
    activeControl.classList.remove('slider__controls-item--active');
    }

    clickedElement.classList.toggle('slider__controls-item--active');
    content.style.left = `-${elIdx*100}%`;
  });
}

var calendarBody = document.querySelector('.calendar .calendar-body');
var monthNames = document.querySelector('.month');
var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function genCalendar(date) {
  var curDay = date.getDate();
  date.setDate(1);
  var startDay = date.getDay();
  var monthNumber = date.getMonth();
  var monthCalendar = monthName[monthNumber];
  var fullYear = date.getFullYear();
  var daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()];
  var content = '';
  for(var i = 0; i < startDay; i++) {
    content += '<div id = "no-day"></div>';
  }
  for(var i = 1; i <= daysTotal; i++) {
    if(i === curDay) {
      content += '<div id = "cur-day">' + i + '</div>';
    } else {
      content += '<div>' + i + '</div>';
    }
  }
  calendarBody.innerHTML = content;
  monthNames.innerHTML = monthCalendar + ' ' + fullYear;
}
genCalendar(new Date());
