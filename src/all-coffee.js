const featureContainer = document.querySelector("#feature-container");
const badgeContainer = document.querySelector("#badge-container");

let coffees = [];
let ingredientsArray = [
  "Espresso",
  "Long pulled espresso",
  "Short pulled espresso",
  "Coffee",
];

badgeContainer.addEventListener("click", (event) => {
  const clickedBtn = event.target.closest(".text-green-600");
  //   console.log(clickedBtn.textContent);
  const selectedIngredient = clickedBtn.textContent;
  const filteredCoffee = coffees.filter((item) =>
    item.ingredients.includes(selectedIngredient)
  );
  loadCoffeeToUI(filteredCoffee);
});

window.addEventListener("DOMContentLoaded", () => {
  featureContainer.innerHTML = `
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
        </div>
      </div>
    </div>
  `;
  getCoffee();
});

async function getCoffee() {
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  const data = await res.json();
  coffees = data;

  loadCoffeeToUI(coffees);

  ingredientsArray.forEach((item) => {
    const buttonEl = document.createElement("button");
    buttonEl.classList =
      "px-4 py-1 bg-green-200 text-green-600 font-semibold rounded-full shadow-sm hover: shadow";
    buttonEl.textContent = item;
    badgeContainer.appendChild(buttonEl);
  });
}

function loadCoffeeToUI(coffeeToLoad) {
  featureContainer.innerHTML = "";

  coffeeToLoad.forEach((item) => {
    addCardsToContainer(item);
  });
}

function addCardsToContainer(coffee) {
  const articleEl = document.createElement("artical");
  articleEl.classList.add("feature-cards");
  articleEl.innerHTML = `
    <figure class="h-52"><img class="object-cover" src=${coffee.image} loading="lazy" alt=${coffee.title}/></figure>
    <div class="card-body">
        <h2 class="card-title">
            ${coffee.title}
        <div class="badge badge-secondary">Hot</div>
        </h2>
        <p>${coffee.description}</p>
        <div class="card-actions justify-end">
        <div class="badge badge-outline">${coffee.ingredients[0]}</div>
        </div>
    </div>
    `;
  featureContainer.appendChild(articleEl);
}
