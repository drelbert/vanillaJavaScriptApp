var rootElement = document.querySelector(".foods");

var foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco"
  },
  {
    id: 2,
    image: "🍔",
    name: "burger"
  },
  {
    id: 3,
    image: "🍆",
    name: "eggplant"
  },
  {
    id: 4,
    image: "🍎",
    name: "apple"
  },
  {
    id: 5,
    image: "🥞",
    name: "pancakes"
  }
];

class Foods {
  constructor(el, foodData) {
    this.root = el;
    this.data = foodData;
  }

  renderList() {
    this.root.addEventListener("click", event => {
      var { target } = event;
      target.remove();
    });

    var fragment = document.createDocumentFragment();

    this.data.forEach(i => {
      fragment.appendChild(this.createFoodItem(i));
    });

    this.root.appendChild(fragment);
  }

  createFoodItem(item) {
    var itemEl = document.createElement("div");
    itemEl.innerText = item.image;
    itemEl.classList.add(item.name);

    return itemEl;
  }
}

var foods = new Foods(rootElement, foodData);

foods.renderList();
