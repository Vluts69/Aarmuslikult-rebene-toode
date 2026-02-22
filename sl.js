const info2=document.querySelector("#infoks");
let logo = document.querySelector("#logo");
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&x_cg_demo_api_key=CG-8HcHiQvHAsjmq29FgruU8vwD";
const price = document.querySelector("#price");
const coins = document.querySelector("#coins");
const url2 = "https://newsdata.io/api/1/market?apikey=pub_c607f58a049b4621ad87a6ce233d683b"

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
         price.textContent= ("Ara mind vali");
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
      logo.textContent= ("Vali midagi, et mind näha: ");
      
    }
      
       
        console.log(btc1);
  });





  
}
getinfo();

const getinfo2 = async()=>{


  let response2 = await fetch(url2);
  

  let data2= await response2.json();
  console.log(data2);


  let uudis = data2[6]

}
getinfo2();