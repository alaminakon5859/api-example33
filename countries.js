const loadcountries=() =>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displaycountry(data));
}

loadcountries();


const displaycountry=(countriesall)=>{
    const countriesdiv =document.getElementById("countries");
    countriesall.forEach(country => {
        const div= document.createElement("div");
        div.classList.add("art");
        div.innerHTML=`
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadcountrybyname('${country.name}')">   Details </button>
        `;
        
        countriesdiv.appendChild(div);
        

    });
}


const loadcountrybyname =name =>{
    const url=`
    https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data=> displaycountryload(data[0]))
}

const displaycountryload=country =>{
     const countrydiv =document.getElementById("country-detailes");
     countrydiv.innerHTML=`
         <h4>name: ${country.name}</h4>   
         <p>population: ${country.population}</p> 
         <img width="200px" src="${country.flag}" > 
     `;
}