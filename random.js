const loadusers =() =>{
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayusers(data))
}
loadusers();

const displayusers =(result)=> {
    const randoms =result.results;
    const randomdiv =document.getElementById("users");
    for(const random of randoms){
        const p =document.createElement("P");
        p.innerText=random.name.first;
        randomdiv.appendChild(p);
        console.log(p);
    }

}