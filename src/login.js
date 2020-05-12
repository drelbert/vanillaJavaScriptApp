// employing the functional paradigm

var REQUIRED = "REQUIRED";
var MIN_LENGTH = "MIN_LENGTH";

function validate(value, flag, validatorValue) {
  if (flag == REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag == MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function createUser(userName, userPassword) {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error("Invalid, try again?");
  }
  return {
    userName: userName,
    password: password,
  };
}

function greetUser(user) {
  console.log("Hello " + user.userName);
}

function signUpHandler(event) {
  event.preventDefault();

  var usernameEntered = getUserInput("username");
  var passwordEntered = getUserInput("password");

  try {
    var newUser = createUser(usernameEntered, passwordEntered);
    console.log(newUser);
    greetUser(newUser);
  } catch (err) {
    alert(err.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  var form = document.getElementById(formId);
  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signUpHandler);
