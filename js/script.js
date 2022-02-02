
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;

// Инициализация Swiper
new Swiper('.image-slider', {
	loop: true,
	centeredSlides: true,

});


// Data
/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value) {
	if (value < 10) {
		value = '0' + value;
	}
	return value;
}

/* функция получения текущей даты и времени */
function date_time() {
	var current_datetime = new Date();
	var targetDay = 1,
		targetDate = new Date(),
		delta = targetDay - current_datetime.getDay();
	if (delta >= 0) { targetDate.setDate(current_datetime.getDate() + delta) }
	else { targetDate.setDate(current_datetime.getDate() + 7 + delta) }

	var targetNumber = targetDate.getDate();
	var targetMonth = targetDate.getMonth();

	var day = zero_first_format(targetNumber);
	var month = zero_first_format(targetMonth + 1);
	var year = current_datetime.getFullYear();

	return day + "." + month + "." + year;
}


document.querySelector('.top-content__data').innerHTML = "<p>Распродажа до " + date_time() + "!</p>";