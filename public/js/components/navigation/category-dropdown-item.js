export function CategoryDropdownItem({ slug, name }) {
  return `<li><a class="dropdown-item" href="/?category=${slug}">${name}</a></li>`;
}
