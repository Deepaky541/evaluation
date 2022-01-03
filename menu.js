async function data1(){
    let data = await fetch('https://themealdb.com/api/json/v1/1/categories.php')
    let res = await data.json();
    console.log(res.categories);
    upload(res.categories);
}
data1();
let dataFood = document.getElementById("data");
function upload(food)
{    dataFood.innerHTML = null;
    food.forEach((el) => {
        let div = document.createElement("id");

        let price = document.createElement("p");
        price.innerText = "Rs" +  Math.floor(Math.random() * (500 - 150) + 150);

       let img =document.createElement("img");
       img.src = el.strCategoryThumb;

       let btn =document.createElement("button");
       btn.innerHTML = "Add to Cart";

       div.append(img,price,btn);
       dataFood.appendChild(div);
    });
}