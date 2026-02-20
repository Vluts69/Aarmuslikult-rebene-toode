let btc=document.querySelector('div.selector option[value=BTC]');
let info2=document.querySelector("#price");
let logo = document.querySelector("#logo");
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&x_cg_demo_api_key=CG-8HcHiQvHAsjmq29FgruU8vwD";
const button = document.querySelector("#nup");

const getinfo =async()=>{

  let response = await fetch(url);
  console.log(response);

  let data1= await response.json();
  console.log(data1);

  let rtp= data1[0].current_price;
  let name= data1[0].name;
  //let name= data1.coins[1].id;
  let logo1 = data1[0].image;

  console.log(rtp);
  //console.log(id1);
  //console.log(name);

 // info.textContent= ("Nimi: " + id1);

  //info.textContent= ("Nimi: " + id1);
  //onsole.log(info);


//button.addEventListener("click", function() {
  
  info2.textContent= ("Nimi: " + name);
  
  //info.textContent= ("Price: " + rtp);


 //logo.textContent= (logo);

  console.log("clicked");
  

//});
  
}
getinfo();