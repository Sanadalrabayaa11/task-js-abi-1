async function goods() {
    
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  const result = products
    .map(function (ele) {
      return `
        <div class="Prodct">
            <h3>${ele.title}</h3>
            <img src="${ele.images[0]}" alt="">
            <p>${ele.rating}</p>
            <span>$ ${ele.price}</span>
            
        </div>
           `;
    })
    .join(" ");
  document.querySelector(".products").innerHTML = result;
}

goods();
