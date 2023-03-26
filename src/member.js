const addMember = document.querySelector("#add-member");

let userData = [];

window.addEventListener("DOMContentLoaded", () => {
  addMember.innerHTML = `
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
  getData();
});

async function getData() {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const data = await res.json();
  //   console.log(data.data[0].id);
  userData = data.data;
  //   console.log(userData);
  addMember.innerHTML = "";

  userData.forEach((item) => {
    addMemberToContainer(item);
  });
}

function addMemberToContainer(d) {
  const addElement = document.createElement("article");
  addElement.classList.add("members");
  addElement.innerHTML = `
    <figure class="px-10 pt-10">
        <img src=${d.avatar} alt="Shoes" class="rounded-full" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${d.first_name + " " + d.last_name}</h2>
        <p>${d.email}</p>
    </div>
`;
  addMember.appendChild(addElement);
}
