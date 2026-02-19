let info=document.querySelector("#databox");
let info2=document.querySelector("#databox");
const url = "https://api.coingecko.com/api/v3/search?query=bitcoin";

const getinfo =async()=>{

  let response = await fetch(url);
  console.log(response);

  let data1= await response.json();
  console.log(data1);

  let id1= data1.coins[0].id;
  let name= data1.coins[1].id;

  console.log(id1);
  console.log(name);

 // info.textContent= ("Nimi: " + id1);

  //info2.textContent= ("Coin: " + name);
  console.log(info);


const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
  
  }

getinfo();