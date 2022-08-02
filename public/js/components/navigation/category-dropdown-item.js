export function CategoryDropdownItem({ slug, name }) {
    // return `<li><a class="dropdown-item" href="/?category=${slug}">${name}</a></li>`;
    return `<li><a id="${slug}" class="category-list dropdown-item">${name}</a></li>`;
}
