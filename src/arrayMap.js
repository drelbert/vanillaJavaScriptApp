var students = ["Notify Non Paid", "Prep Code Examples", "Confirm Yoda Intro"];

var inject = document.querySelector("#students");

// Create markup
inject.innerHTML =
  "<ul>" +
  students
    .map(function renderToDo(student) {
      return "<li>" + student + "</li>";
    })
    .join("") +
  "</ul>";
