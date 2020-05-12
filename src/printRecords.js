var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

var name = document.createElement("ul");

var fragment = document.createDocumentFragment();

function getStudenById(studentId) {
  return studentRecords.find(function matchId(record) {
    return record.id == studentId;
  });
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudenById);

  records.forEach(function printRecord(record) {
    // create HTML from array data with vanilla JS.
    var li = document.createElement("li");
    li.textContent = `${record.name} - Paid Status:   ${
      record.paid ? "Paid" : "Not Paid"
    }`;
    list.appendChild(li);

    console.log(
      `Name: ${record.name}, Status: ${record.paid ? "Paid" : "Not Paid"}`
    );
  });

  list.appendChild(fragment);

  console.log(list);

  // Inject into the DOM
  var enrolled = document.querySelector("#enrolled");
  enrolled.appendChild(list);
}

printRecords(currentEnrollment);

// function paidStudentsToEnroll() {
//   // TODO
// }

// function remindUnpaid(recordIds) {
//   // TODO
// }

// ********************************

// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);

// console.log("----");
// remindUnpaid(currentEnrollment);
