let btnToggleDarkMode = document.querySelector("#btn-toggle-dark-mode");
let sectionMain = document.querySelector('#countries-selection-box');
const  dataApi = async()=>{
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region")
  const dataContry = await response.json()
  return dataContry;
  // console.log(dataContry);
}

function toggleDarkMode() {
  document.querySelector("html").classList.toggle("dark-mode");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon-fill");
}

async function init() {
  const data = await dataApi(); 
  data.forEach(element => {
  const text = `<div>
<div>
    <img src='' alt="#">
  </div>
  <div>
    <div class="text-container1">
      <h1>name</h1>
      <p>
        <span>Population: </span>
        <span id="detail-population"></span>
      </p>
      <p>
        <span>Region: </span>
        <span id="detail-region"></span>
      </p>
      <p><span>Capital: </span>
        <span id="detail-capital">Ul</span>
      </p>
    </div>
  </div>
</div>`;
    sectionMain.insertAdjacentHTML("beforeend", text);
    // console.log(element);
  });
  
  btnToggleDarkMode.addEventListener("click", toggleDarkMode);

}

window.onload = init();
