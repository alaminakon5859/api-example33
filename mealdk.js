const searchFood=()=> {
    const searchfield =document.getElementById("search-field"); 
    searchfieldtex = searchfield.value ;
    searchfield.value="";
      // search korar sathe input er lekha chole jabe

    
    if(searchfieldtex==""){
      // not found
    }
    else{
      // meals dhakoao

    };
    
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchfieldtex}
                    
    `;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data=> displaysearchresult(data.meals))

};


const displaysearchresult=(meals)=> {
    // console.log(meals);
    const searchresult =document.getElementById("search-result");
    searchresult.innerHTML="";
    // mane onno image search korar sathe ager image chole jabe

    if(meals.length==0){
        // tahole dhakabo na emon kico

    };

    meals.forEach(meal=>{
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
        <div onclick="loadidmealdetailes(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          <a class="btn btn-primary" href="${meal.strYoutube}">see more</a>
    
        </div>
      </div>
        `;
        searchresult.appendChild(div);
    }) 

};

const loadidmealdetailes=(meal)=> {
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}
               
  `;
  fetch(url)
  .then(res => res.json())
  .then(data => displaymealdetailes(data.meals[0]));
}


const displaymealdetailes =(meal)=> {
     const mealdetails =document.getElementById("meal-details");

     mealdetails.textContent="";
     // mane onno image search korar sathe ager mealdetailes  chole jabe
  
     const div =document.createElement("div");
     div.classList.add("card");
     div.innerHTML=`
       <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
       <div class="card-body">
       <h5 class="card-title">${meal.strMeal}</h5>
       <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
       <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
     
     `;

 mealdetails.appendChild(div);
     
}