const tasks = document.querySelector("#todo");
const complete = document.querySelector("#completed");
const input = document.querySelector("#input");

const counter = document.querySelector('#task-count');

document.querySelector("#add").addEventListener("click", () => {
  item = document.createElement("li");
  item.innerHTML = `<label> <input type="checkbox"> ${input.value} </label>`;
  addClick(item);
  tasks.append(item);
  updateCounter();
  input.value = "";
  input.focus();

});

function addClick(item) {
  item.querySelector("input").addEventListener("click", () => {
   complete.append(item);
   item.querySelector("input").disabled = true;
   updateCounter();
  });
}

function updateCounter(){
    counter.textContent = tasks.querySelectorAll('li').length;
}