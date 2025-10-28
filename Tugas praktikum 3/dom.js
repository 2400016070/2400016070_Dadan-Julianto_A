// Tambah task
function addTask() {
    let input = document.getElementById("newTask");
    let taskList = document.getElementById("taskList");

    if (input.value.trim() === "") {
        alert("Task tidak boleh kosong!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;

    let span = document.createElement("span");
    span.textContent = " ×";
    span.className = "close";
    span.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    taskList.appendChild(li);
    input.value = "";
}

// Event: tombol Add
document.getElementById("addBtn").addEventListener("click", addTask);

// Ganti warna background
document.getElementById("bgColor").addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
});

// Ubah ukuran font
let fontSize = 16;
document.getElementById("increaseFont").addEventListener("click", function () {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
});
document.getElementById("decreaseFont").addEventListener("click", function () {
    if (fontSize > 10) fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
});

// Dark mode
let dark = false;
document.getElementById("toggleDark").addEventListener("click", function () {
    dark = !dark;
    if (dark) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});

// Ganti font family
document.getElementById("fontSelect").addEventListener("change", function () {
    document.body.style.fontFamily = this.value;
});