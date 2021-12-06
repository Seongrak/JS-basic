const items = document.querySelector(".items");
const inputItem = document.querySelector(".footer-input");
const addBtn = document.querySelector(".add-item");

function OnAdd() {
  const text = inputItem.value;
  const item = CreateItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });

  inputItem.value = "";
  inputItem.focus();
}

let id = 0;
function CreateItem(text) {
  if (text === "") {
    inputItem.focus();
    return;
  }
  const item_row = document.createElement("li");
  item_row.setAttribute("class", "item-row");
  item_row.setAttribute("data-id", id);

  item_row.innerHTML = `
        <div class="item">
            <span class="item-name">${text}</span>
            <button class="delete-item">
                <i class="far fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item-divider"></div>
    `;
  id++;

  return item_row;
}

addBtn.addEventListener("click", () => {
  OnAdd();
});

inputItem.addEventListener("keydown", (event) => {
  if (event.isComposing) {
    return;
  }
  if (event.key == "Enter") {
    OnAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const deleted = document.querySelector(`.item-row[data-id="${id}"]`);
    deleted.remove();
  }
});
