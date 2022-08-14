export function ProductItem({
  imageUrl,
  name,
  price,
  id,
}) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-image-box"><img src="${imageUrl}" class="card-img-top" alt="..."></div>
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${price} €</p>
    <a href="/pages/product-details.html?product=${id}" class="btn btn-primary">Voir</a>
  </div>
</div>`;
}
