function addItem() {
    let input = document.getElementById("add");
    let value = input.value.trim();

    if (value === "") {
        alert("Por favor, digite uma opção.");
        return;
    }

    let list = document.getElementById("op");
    let item = document.createElement("li");
    item.textContent = value;
    item.textContent += " .....................";
    item.innerHTML += ' <button class="ri" onclick="removeItem(this)">x</button>';
    list.appendChild(item);
    input.value = "";
}

function removeItem(item) {
    let li = item.parentElement;
    li.parentNode.removeChild(li);
}