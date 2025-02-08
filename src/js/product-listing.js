import { loadHeaderFooter, getParam } from "./utils.mjs";
import { updateCartCount } from "./cartCount.mjs";
import ExternalServices from './ExternalServices.mjs';
import ProductList from "./ProductList.mjs";


async function initPage() {
    await loadHeaderFooter();
    updateCartCount();  
}

const category = getParam('category');
const dataSource = new ExternalServices();
const listElement = document.querySelector('.product-list');
const listing = new ProductList(category, dataSource, listElement);

// initialize product listing
listing.init();

initPage();