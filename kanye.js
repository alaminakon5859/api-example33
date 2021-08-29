 
 const loadquotes=() => {
     fetch("https://api.kanye.rest/")
     .then(res => res.json())
     .then(data => displayquote(data))
 }

 const displayquote =(money) => {
     const blockquote = document.getElementById("quote");
     blockquote.innerText=money.quote;

 }