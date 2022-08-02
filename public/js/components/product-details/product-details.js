export function ProductDetails(product) {
    const { name, imageUrl, description, price } = product;
    let quantity = 0;
    return `<h1>Détails de ${name}</h1>
<div class="container">
    <div class="row">
    <div class="col-4">
      <img src="${imageUrl}" class="img-fluid" alt="...">
</div>
    <div class="col-8">
    <h2>Description</h2>
    <p>${description}</p>
    <p>${price} €</p>
    <p>Quantité : <input oninput="increaseQuantity(this.value)" type="number" value="${quantity}" /></p>
    <button onclick="addToBasket(product)">Ajouter au panier</button>
</div>
    
</div>
</div>
</div>
`;
}

function increaseQuantity(value) {
    if (value <= 0) return;
    quantity++;
    console.log(quantity);
}

function addToBasket(quantity) {
    const basket = JSON.parse(localStorage.getItem('panier'));
}
