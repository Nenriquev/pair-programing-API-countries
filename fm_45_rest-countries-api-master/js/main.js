let btnToggleDarkMode = document.querySelector("#btn-toggle-dark-mode");
let sectionMain = document.querySelector('#countries-selection-box');

const  dataApi = async()=>{
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
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
  const population = new Intl.NumberFormat().format(element.population) 
  const text = `<div>
<div>
    <img src=${element.flags.png} alt="#">
  </div>
  <div>
    <div class="text-container1">
      <h1> ${element.name.common}</h1>
      <p>
        <span>Population: ${population}</span>
        <span id="detail-population"></span>
      </p>
      <p>
        <span>Region: ${element.region} </span>
        <span id="detail-region"></span>
      </p>
      <p><span>Capital: ${element.capital}</span>
      </p>
    </div>
  </div>
</div>`;

    sectionMain.insertAdjacentHTML("beforeend", text);
    // console.log(element);
  });
  
  btnToggleDarkMode.addEventListener("click", toggleDarkMode);

}

let filter = document.querySelector('#region-selector-title')


window.onload = init();
