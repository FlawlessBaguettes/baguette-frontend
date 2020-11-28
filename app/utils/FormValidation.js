export function validateDateOfBirth(dob) {
	if (dob == undefined) {
		return "Please enter a valid date of birth";
	}
	return true;
}

export function validateEmail(email) {
	if (email == "") {
		return "Please enter an email address";
	}

	var mailformat = /^\S+@\S+\.\S+$/;
	if (!email.match(mailformat)) {
		return "Please enter a valid email address";
	}
	return true;
}

export function validateFirstName(firstName) {
	if (firstName == "") {
		return "Please enter a first name";
	}
	return true;
}

export function validateLastName(lastName) {
	if (lastName == "") {
		return "Please enter a last name";
	}
	return true;
}

export function validatePasswordStrong(password) {
	if (password.length < 8) {
		return "Please enter a password of at least 8 characters";
	}

	return true;
}

export function validatePasswordWeak(password) {
	if (password.length == 0) {
		return "Please enter your password";
	}

	return true;
}

export function validateUsername(username) {
	if (username == "") {
		return "Please enter a username";
	}
	return true;
}
