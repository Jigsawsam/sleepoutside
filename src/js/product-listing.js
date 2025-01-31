import { loadHeaderFooter, getParam } from "./utils.mjs";
import { updateCartCount } from "./cartCount.mjs";
import ProductData from './ProductData.mjs';
import ProductList from "./ProductList.mjs";


async function initPage() {
    await loadHeaderFooter();
    updateCartCount();  
}

const category = getParam('category');
const dataSource = new ProductData();
const listElement = document.querySelector('.product-list');
const listing = new ProductList(category, dataSource, listElement);

// initialize product listing
listing.init();

initPage();