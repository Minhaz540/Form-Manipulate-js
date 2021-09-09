function confirmSave() {
	window.alert("1 row added for education");
}

var stateTextField = document.getElementById("state");
function showHideCustomDegree(value) {
	if (value == "Custom Degree") {
		stateTextField.disabled = false;
	} else {
		stateTextField.value = null;
		stateTextField.disabled = true;
	}
}

var monthField = document.getElementById("selectMonth");
var yearField = document.getElementById("selectYear");
function enableDisableGraduationDate(event) {
	if (event.checked == true) {
		monthField.value = "Month";
		yearField.value = "Year";
		monthField.disabled = true;
		yearField.disabled = true;
	} else {
		monthField.disabled = false;
		yearField.disabled = false;
	}
}
