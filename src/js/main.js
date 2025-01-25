import { loadHeaderFooter } from "./utils.mjs";
import ProductData from './ProductData.mjs';
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

// target the element where the product cards will be displayed
const listElement = document.querySelector('.product-list');

// create instances of ProductData and ProductListing
const dataSource = new ProductData("tents");
const listing = new ProductList('tents', dataSource, listElement);

// initialize product listing
listing.init();