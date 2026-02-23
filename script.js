const info2=document.querySelector("#infoks");
let logo = document.querySelector("#logo");
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&x_cg_demo_api_key=CG-8HcHiQvHAsjmq29FgruU8vwD";
const price = document.querySelector("#price");
const coins = document.querySelector("#coins");
const bearerToken = "AAAAAAAAAAAAAAAAAAAAALE57wEAAAAAA2TMMND2ce%2Fwg8gccXKy0et6os8%3DVGk0ALN2mHI2Y1PKfV7yx2HG8O1TynSsXvKkMPM1hAIV71fReO";
const url2 = "https://api.x.com/2/users/by/username/xdevelopers";

const getinfo =async()=>{

  let response = await fetch(url);
  console.log(response);

  let data1= await response.json();
  console.log(data1);

 //proovime logo: 

  let blogo = data1[0].image;
  let elogo= data1[1].image;
  let slogo= data1[3].image;
  let llogo= data1[11].image;
  //logo.src= blogo;

  console.log(elogo);

  //SIIN COINI NIMI:
  let namebtc= data1[0].name;
  let nameeth = data1[1].name;
  let namesol= data1[3].name;
  let nameltc= data1[11].name;

  //COIN PRICE: 
    let rtp= data1[0].current_price;
    let rtp1= data1[1].current_price;
    let rtp2= data1[3].current_price;
    let rtp3= data1[11].current_price;



   

 coins.addEventListener("change", function() {
   
      const btc1 = coins.value;
      //NIMI
      if (btc1 === "BTC") {
         info2.textContent= ("Nimi: " + namebtc);
    } 
    else if (btc1 === "ETH") {
         info2.textContent= ("Nimi: " + nameeth);
    } 
    else if (btc1 === "SOL") {
         info2.textContent= ("Nimi: " + namesol);
    }
    else if (btc1 === "LTC") {
         info2.textContent= ("Nimi: " + nameltc);
    }
    else if (btc1 === "vali") {
         info2.textContent= ("Vali midagi:) ");
    }
    //REAL TIME PRICE

     if (btc1 === "BTC") {
         price.textContent= ("Hind: " + rtp + "$");
    } 
    else if (btc1 === "ETH") {
         price.textContent= ("Hind:  " + rtp1 + "$");
    } 
    else if (btc1 === "SOL") {
         price.textContent= ("Hind:  " + rtp2 + "$");
    } 
    else if (btc1 === "LTC") {
         price.textContent= ("Hind:  " + rtp3 + "$");
    } 
    else if (btc1 === "vali") {
         price.textContent= (" ");
    }

      //LOGO
     if (btc1 === "BTC") {
         logo.textContent= (blogo);
         logo.src= blogo;
    } 
    else if (btc1 === "ETH") {
         logo.textContent= (elogo);
         logo.src= elogo;
           }
    else if (btc1 === "SOL") {
        logo.textContent= (slogo);
         logo.src= slogo;
    } 
    else if (btc1 === "LTC") {
        logo.textContent= (llogo);
         logo.src= llogo;
    } 
    else if (btc1 === "vali") {
      logo.textContent= (" ");
      
    }
      
       
        console.log(btc1);
  });





  
}
getinfo();


fetch(url2, {
  headers: { Authorization: `Bearer ${bearerToken}` }
})
  .then(res => res.json())
  .then(data => console.log(data));