import { CategoryDropdownItem } from "./category-dropdown-item.js";

export function CategoryDropdownList(categories) {
  return categories.reduce(
    (html, category) => html + CategoryDropdownItem(category),
    ""
  );
}
