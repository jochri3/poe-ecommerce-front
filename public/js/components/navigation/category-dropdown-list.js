import { CategoryDropdownItem } from "./category-dropdown-item";

export function CategoryDropdownList(categories) {
  return categories.reduce(
    (html, category) => html + CategoryDropdownItem(category),
    ""
  );
}
