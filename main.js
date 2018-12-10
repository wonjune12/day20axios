
var row = document.querySelector(".row");
let prom = axios.get("https://www.redbullshopus.com/products.json");

prom.then((response)=>{

    for (let index = 0; index < response.data.products.length; index++){

    var productArr = response.data.products;
            //creating column
            let divCol = document.createElement("div");        
            divCol.classList.add("col-12");
            divCol.classList.add("col-md-3");

            //creating card
            let divCard = document.createElement("div");
            divCard.classList.add("card");

            //creating image
            let img = document.createElement("img");
            img.classList.add("card-img-top");

            //creating description
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            //adding to the box
            row.appendChild(divCol);
            divCol.appendChild(divCard);
            divCard.appendChild(img);
            divCard.appendChild(cardBody);


            let cardImg = document.querySelectorAll("img")[index];
            let description = document.querySelectorAll(".card-body")[index];
            let price = productArr[index].variants[0].price;
            let size = productArr[index].options[0].values;
            cardImg.src=productArr[index].images[0].src;
            description.innerHTML = `\$ ${price}  <br/> Size : ${size}`;
    
        }
   

})

prom.catch(error=>{

});

