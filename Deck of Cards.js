var profileData = [];
var endProgram = 0;

// First function of the program, home screen
var userChoose = function () {
	do {
	var answer = prompt("Choose one (type A, B, C, etc...) A) Enter New User...B) Look Up User By First Name...C)Look Up User By Last Name...D) Print Out All Users...E) End Program");
	answer = answer.toUpperCase();
} while (answer !== "A" && answer !== "B" && answer !== "C" && answer !== "D" && answer !== "E") 
	if (answer === "A") {
		ifA();
	} else if (answer === "B") {
		ifB();
	} else if (answer === "E") {
		endProgram = 1;
	} else if (answer === "D") {
		ifD();
	} else if (answer === "C") {
		ifC();
	}
};

// Function for choosing C on the first choice screen, searches for a user by last name, then deposits or withdrawls funds
var ifC = function () {
	var lastQuestion = prompt("Search by customer's last name:");

	for (x = 0; x < profileData.length; x++) {	
		var thisHash = profileData[x];
		if (thisHash.last === lastQuestion.toUpperCase()) {
			alert("The current balance for " + thisHash.first + " " + thisHash.last + " is $" + thisHash.amount);
			var depositQuestion = prompt("Do you want to deposit or withdrawl from " + thisHash.first + "'s account? ANSWER DEPOSIT OR WITHDRAWL");
				if (depositQuestion.toUpperCase() === "DEPOSIT") {
					var depositAmount = prompt("Amount to deposit:");
					depositAmount = parseFloat(depositAmount);
					thisHash.amount = thisHash.amount + depositAmount;
					alert(thisHash.first + " " + thisHash.last + " new balance is $" + thisHash.amount );
				} else if (depositQuestion.toUpperCase() === "WITHDRAWL") {
					var withdrawlAmount = prompt("Amount to withdrawl:");
					if (thisHash.amount - withdrawlAmount >= 0) {
						thisHash.amount = thisHash.amount - withdrawlAmount;
					} else {
						alert("Cannot Make Withdrawl, not enough funds.");
					}
					alert(thisHash.first + " " + thisHash.last + " new balance is $" + thisHash.amount);
				} else {
					alert("Please Try Again, Not A Valid Response");
				}
		}

	}
};

// Function for choosing D on the first choice screen, cycles through all users' profiles alerting of the amounts.
var ifD = function () {
	for (x = 0; x < profileData.length; x++) {
		var thisHash = profileData[x];
		alert(thisHash.first + " " + thisHash.last + " " + thisHash.amount);
	}
}

// Function for choosing B on the first choice screen, Searches for a user by first name, then deposits or withdrawls funds
var ifB = function () {
	var firstQuestion = prompt("Search by customer's first name:");

	for (x = 0; x < profileData.length; x++) {	
		var thisHash = profileData[x];
		if (thisHash.first === firstQuestion.toUpperCase()) {
			alert("The current balance for " + thisHash.first + " " + thisHash.last + " is $" + thisHash.amount);
			var depositQuestion = prompt("Do you want to deposit or withdrawl from " + thisHash.first + "'s account? ANSWER DEPOSIT OR WITHDRAWL");
				if (depositQuestion.toUpperCase() === "DEPOSIT") {
					var depositAmount = prompt("Amount to deposit:");
					depositAmount = parseFloat(depositAmount);
					thisHash.amount = thisHash.amount + depositAmount;
					alert(thisHash.first + " " + thisHash.last + " new balance is $" + thisHash.amount );
				} else if (depositQuestion.toUpperCase() === "WITHDRAWL") {
					var withdrawlAmount = prompt("Amount to withdrawl:");
					if (thisHash.amount - withdrawlAmount >= 0) {
						thisHash.amount = thisHash.amount - withdrawlAmount;
					} else {
						alert("Cannot Make Withdrawl, not enough funds.");
					}
					alert(thisHash.first + " " + thisHash.last + " new balance is $" + thisHash.amount);
				} else {
					alert("Please Try Again, Not A Valid Response");
				}
		}

	}
};



// Function for choosing A on the first choice screen
var ifA = function () {
	newUserComplete(newUserFirst(), newUserLast(), newUserBalance());
};

// Function to get user's first name
var newUserFirst = function () {
	var firstName = prompt("Enter the customer's first name");
	firstName = firstName.toUpperCase();
	return firstName;
};

// Function to get user's last name
var newUserLast = function () {
	var lastName = prompt("Enter the customer's last name");
	lastName = lastName.toUpperCase();
	return lastName;
};

// Function to get a new user's beginning balance
var newUserBalance = function () {
	do {
	var newBalance = prompt("Enter the customer's initial deposit");
	} while (isNaN(newBalance) || newBalance <= 0)
	newBalance = parseFloat(newBalance);
	return newBalance;
};

// Function to save all the user's information into a Hashtable
var newUserComplete = function(first, last, amount) {
	userProfile = {};
	userProfile["first"] = first;
	userProfile["last"] = last;
	userProfile["amount"] = amount;
	profileData.push(userProfile);
};

do {
userChoose();
} while (endProgram === 0)