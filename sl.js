const info2=document.querySelector("#infoks");
let logo = document.querySelector("#logo");
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&x_cg_demo_api_key=CG-8HcHiQvHAsjmq29FgruU8vwD";
const price = document.querySelector("#price");
//const coin = document.querySelector("#coins");
let coins = document.getElementById("coins");
//const ethcoin = document.getElementById("coins3");


const getinfo =async()=>{

  let response = await fetch(url);
  console.log(response);

  let data1= await response.json();
  console.log(data1);

  let rtp= data1[0].current_price;
  let name= data1[0].name;
  let logo1 = data1[0].image;

    console.log(rtp);
  
    
  

  coins.addEventListener('change', function() {
    let btc1 = coins.value;
    
    //let eth = ethcoin.value;
    
    

     
        //info2.textContent= ("Nimi: " + name);
       //price.textContent=("Price: " + rtp);
       console.log(coins);
    


 
  if (coins = "BTC") {
    info2.textContent= ("Nimi: " + name);
  }
});

  //info2.textContent= ("Nimi: " + name);
  
  //info.textContent= ("Price: " + rtp);





  
}
getinfo();