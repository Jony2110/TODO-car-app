// let formCar = document.querySelector("#todoForm");
let name = document.querySelector("#carName");
let speed = document.querySelector("#speed");
let price = document.querySelector("#price");
let img = document.querySelector("#img");
let color = document.querySelector("#color");
let btn = document.querySelector("#bnt");
let todoList = document.querySelector("#todoList");
let li = document.createElement("li");

const formCar = document.querySelector("#todoForm");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let names = name.value;
  let imgs = img.value;
  let speeds = speed.value;
  let prices = price.value;
  let colors = color.value;
  name.value = "";
  img.value = "";
  speed.value = "";
  price.value = "";
  color.value = "";

  todoList.innerHTML += ` <li>  <img src=${imgs} alt="Car img">
    <h2>${names}</h2>
    <span>Speed: ${speeds}km/h</span><hr>
    <span>Price: ${prices}$</span><hr>
    <span class="color_style" >Color:   <div style="background-color:${colors} ;" class = "colorBox"></div>${colors}</span><hr>
    <button class="delet" onclick="removeItem(this)">delet</button></li>`;
  let arr = [names, speeds, prices, colors, imgs];

  console.log(JSON.stringify(arr));
  localStorage.setItem(names, JSON.stringify(arr));
});

function removeItem(element) {
  element.parentNode.remove();
}
