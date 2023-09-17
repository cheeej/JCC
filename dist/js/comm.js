// goods list

$(function () {
  // goods display
  $(".depth1 .pp").on("click", function () {
    $(this).next(".depth2").stop().slideToggle(500);
  });
});

// main carousel
$(function () {
  $(".carousel-item").eq(0).addClass("active");
  var total = $(".carousel-item").length;
  var current = 0;
  $("#moveRight").on("click", function () {
    var next = current;
    current = current + 1;
    setSlide(next, current);
  });
  $("#moveLeft").on("click", function () {
    var prev = current;
    current = current - 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next) {
    var slide = current;
    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }
    $(".carousel-item").eq(prev).removeClass("active");
    $(".carousel-item").eq(slide).addClass("active");
    setTimeout(function () {}, 800);

    console.log("current " + current);
    console.log("prev " + prev);
  }
});

var swiper = new Swiper(".slide-goods", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// calender
var date = new Date();
var today = date.getDate();
var todayDOfW = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var dOfW = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//check for number of days in the month

function updateSchdDate(dW, m, d) {
  document.querySelector(".schedule__title--date").innerHTML =
    dOfW[dW] + ", " + months[m] + " " + d;
}

function updateMonth(m) {
  document.querySelector(".calender__month--text").innerHTML = months[m];
}

(function monthCheck(month, day, dayOfWeek) {
  updateMonth(month);
  updateSchdDate(dayOfWeek, month, day);

  var daysInM, daysInMBefore;
  if (month < 7) {
    if (month == 1) {
      //february
      if (year % 4 == 0) {
        //leap year
        daysInM = 29;
        daysInMBefore = 31;
      } else {
        daysInM = 28;
        daysInMBefore = 31;
      }
    } else {
      daysInM = 30 + ((month + 1) % 2);
      daysInMBefore = 30 + (month % 2);
    }
  } else {
    daysInM = 30 + (month % 2);
  }

  var calenderDays = document.querySelector(".calender__days");
  var smDay = 1; //same month day
  while (smDay <= daysInM) {
    var dayCell = document.createElement("div");
    dayCell.className = "calender__cell calender__cell--d";
    dayCell.addEventListener(
      "click",
      function (e) {
        if (!this.classList.contains("active")) {
          var cActive = document.querySelector(".active");
          cActive.querySelector(".active").classList.remove("active");
          cActive.classList.remove("active");
          this.classList.add("active");
          this.querySelector("p").classList.add("active");
          var cDay = String(this.querySelector("p").innerHTML);
          var cDOfW =
            ((String(this.querySelector("p").innerHTML) - today) % 7) +
            todayDOfW;
          if (cDOfW < 0) {
            cDOfW += 7;
          }
          updateSchdDate(cDOfW, month, cDay);
        }
      },
      false
    );
    var dayCellText = document.createElement("p");
    dayCellText.className = "calender__text--d";
    dayCellText.innerHTML = smDay;
    if (smDay == today) {
      dayCell.classList.add("active");
      dayCellText.classList.add("active");
    }
    dayCell.append(dayCellText);

    calenderDays.append(dayCell);
    smDay++;
  }
})(month, today, todayDOfW);

function nextMonth() {
  month++;
}

function addTask(e) {
  e.classList.toggle("active");
  e.querySelector("i").classList.toggle("active");
  var form = document.querySelector(".schedule__form");
  var check = form.classList.contains("show");
  var fChild = form.children;
  var pos = 0;
  if (check) {
    for (var element of fChild) {
      togContent(element, pos);
      pos++;
    }

    setTimeout(function () {
      form.classList.toggle("show");
      e.onclick = addTask(this);
    }, 50 * pos + 500);
  } else {
    form.classList.toggle("show");

    setTimeout(function () {
      for (var element of fChild) {
        togContent(element, pos);
        pos++;
      }
      e.onclick = addTask(this);
    }, 500);
  }
}

function togContent(elem, pos) {
  setTimeout(function () {
    elem.classList.toggle("show");
  }, 50 * pos);
}

// main history
(function () {
  var indicator = $("#indicator");
  var counter = indicator.find("span");

  var win = jQuery(window);
  if (indicator.length) {
    var moveIndicator = debounce(function () {
      var viewportHeight = $(window).height();
      var documentHeight = $(document).height();
      var hasScrolled = $(window).scrollTop();

      var percent = (hasScrolled / (documentHeight - viewportHeight)) * 100;
      indicator.css("top", percent + "%");
      counter.html(Math.floor(percent) + "%");
    }, 10);
  }

  win.on("resize scroll", moveIndicator);

  function debounce(func, wait, immediate) {
    var timeout;

    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
})();
