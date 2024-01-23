async function goods(){
    
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products

    const result = products.map(function(ele){
    return`
    <div class="products">
    <h2>${ele.title}</h2>
    <img src = "${ele.thumbnail}"/>
    <span>${ele.price}</span>
    <span>${ele. discountPercentage}</span>
    <span>${ele. rating}</span>
    <span>${ele.stock}</span>
   </div>
    `;
    }).join("");
    document.querySelector(".products").innerHTML=result;
    }
    goods();
 