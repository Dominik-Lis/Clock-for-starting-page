function timeNow() {
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	if (hour < 10) {
		hour = "0" + hour;
	}
	if (min < 10) {
		min = "0" + min;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}

	let time = hour + ":" + min + ":" + sec + "";

	document.getElementById("clock").innerText = time;
}
setInterval(timeNow, 1000);

// function dateNow() {
//  let date2 = new Date();
// 	let day = date2.getDay;
// 	let month = date2.getMonth;
// 	let year = date2.geFullYear;

// 	if (day < 10) {
// 		day = "0" + day;
// 	}
// 	if (month < 10) {
// 		month = "0" + month;
// 	}
// 	if (year > 2050) {
// 		year = "wtf?";
// 	}

// 	let date = day + ":" + month + ":" + year + "";

// 	document.getElementById("calendar").innerText = date2;
// }
// setInterval(dateNow, 1000);
