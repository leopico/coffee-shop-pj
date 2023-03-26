const featureContainer = document.querySelector("#feature-container");
const pickContainer = document.querySelector("#pick-container");

let coffees = [];

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
  pickContainer.innerHTML = `
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

  featureContainer.innerHTML = "";
  pickContainer.innerHTML = "";

  coffees.slice(0, 3).forEach((item) => {
    addCardsToContainer(item);
  });

  coffees.slice(0, 3).forEach((item) => {
    addCardsToPickContainer(item);
  });
}

function addCardsToContainer(coffee) {
  const articleEl = document.createElement("artical");
  articleEl.classList.add("feature-cards");
  articleEl.innerHTML = `
    <figure class="h-52"><img class="object-cover" src=${coffee.image} alt="coffee"/></figure>
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

function addCardsToPickContainer(coffee) {
  const pickEl = document.createElement("article");
  pickEl.classList = "card w-96 bg-base-100 shadow-xl image-full";
  pickEl.innerHTML = `
  <figure class="h-72"><img class="object-cover w-full" src=${coffee.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${coffee.title}</h2>
    <p>${coffee.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
`;
  pickContainer.appendChild(pickEl);
}
