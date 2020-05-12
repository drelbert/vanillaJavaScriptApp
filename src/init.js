function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert(
    "Number of options selected: " + howMany(document.selectForm.musicTypes)
  );
});

let laserBtn = document.getElementById("laserBtn");
laserBtn.addEventListener("click", function () {
  alert("Lasers Activated Darth!");
});
