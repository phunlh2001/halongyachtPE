
var msgArray = []

function checkData() {
	msgArray = []
	var tour = document.getElementById('txtTour').value
	var	phone = document.getElementById('txtName').value
	var name = document.getElementById('txtPhone').value
	var travel = document.getElementById('txtTravel').value

	if (tour == "") {
		msgArray.push("The Tour is Required")
	}
	if (name == "") {
		msgArray.push("The name is Required")
	}
	if (phone == "") {
		msgArray.push("The phone is Required")
	}
	if (travel == "") {
		msgArray.push("The travel is Required")
	}

	if (msgArray > 0) {
		for (var item of msgArray) {
			alert(item)
		}
	}
}