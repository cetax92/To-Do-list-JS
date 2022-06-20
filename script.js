let mojiZadatci = document.getElementsByTagName("LI");

for (i = 0; i < mojiZadatci.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mojiZadatci[i].appendChild(span);
}

// Zatvori redak
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Dodaj kvaku na redak, kad kliknemo na njega
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("gotovo");
    }
  },
  false
);

// Kreiraj novu listu, kad kliknemo "Dodaj"
function noviRed() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("inputBar").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("Dodaj zadatak!");
  } else {
    document.getElementById("mojaLista").appendChild(li);
  }
  document.getElementById("inputBar").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
