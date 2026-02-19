
const list1=document.querySelector("#databox");
let list=document.querySelector("#databox");
const url = "https://api.coingecko.com/api/v3/search?query=bitcoin";

const getinfo =async()=>{

  let response = await fetch(url);
  console.log(response);

  let data1= await response.json();
  console.log(data1);

  list=data1.coins;
  console.log(list);
  
  

  list1.textContent="PETS PISDETZ";
 }

getinfo();