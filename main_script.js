let addBtn = document.getElementById("add-new");
let container = document.querySelector(".container");
let userPanel = document.querySelector(".user-data-input-panel");
let select = document.getElementById("select-data");
addBtn.addEventListener("click", () => {
  addBtn.disabled = true;
  select.classList.remove("hide");
  select.onchange = () => {
    userPanel.classList.add("hide");
    let type = select.value;
    let validTypes = ["text", "number", "date", "email", "tel", "url"];
    if (!validTypes.includes(type)) type = "text";

    let inputId = type + "-input";
    let div = document.createElement("div");
    div.className = "show-input-data";
    div.innerHTML = `
      <input type="${type}" id="${inputId}" />
      <button class="save">Save</button>
    `;
    container.appendChild(div);
    div.querySelector(".save").onclick = () => {
      let value = document.getElementById(inputId).value;
      alert(`You have entered: ${value}`);
      userPanel.classList.remove("hide");
      container.removeChild(div);
      addBtn.disabled = false;
    };
  };
});
