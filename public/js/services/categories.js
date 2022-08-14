import { CATEGORIES_BASE_URI } from '../constants.js';
import { Api } from './api';

export async function fetchCategories() {
    const response = await axios.get('http://localhost:3000/api/v1/categories');
    return response.data;
}

export class CategoriesService {
    constructor() {
        this.uri = CATEGORIES_BASE_URI;
    }

    async fetchCategories() {
        const response = await Api.get(this.uri);
        return response.data;
    }
}
