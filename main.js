
// const axios = require('axios');

// var container = document.querySelector(".container");
var row = document.querySelector(".row");
let prom = axios.get("https://www.redbullshopus.com/products.json");


var index=0;



prom.then((response)=>{

    var productArr = response.data.products;
    for (let index = 0; index < response.data.products.length; index++){
            let divCol = document.createElement("div");        
            divCol.classList.add("col-12");
            divCol.classList.add("col-md-3");
            let divCard = document.createElement("div");
            divCard.classList.add("card");
            let img = document.createElement("img");
            img.classList.add("card-img-top");
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            row.appendChild(divCol);
            divCol.appendChild(divCard);
            divCard.appendChild(img);
            divCard.appendChild(cardBody);


            let cardImg = document.querySelectorAll(".card-img-top")[index];
            let description = document.querySelectorAll(".card-body")[index];
            let price = productArr[index].variants[0].price;
            let size = productArr[index].options[0].values;
            cardImg.src=productArr[index].images[0].src;
            // let color = productArr[index].options[1].values;
            description.innerHTML = `\$ ${price}  <br/> Size : ${size}`
    
        }
   

})

prom.catch(error=>{

});

