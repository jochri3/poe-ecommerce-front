export function ProductItem(product) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-image-box"><img src="${product.imageUrl}" class="card-img-top" alt="..."></div>
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.price} €</p>
    <a href="#" class="btn btn-primary">Voir</a>
  </div>
</div>`;
}
