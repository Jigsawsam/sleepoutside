import { loadHeaderFooter, getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
import { updateCartCount } from "./cartCount.mjs";

async function initPage() {
  await loadHeaderFooter(); 
  updateCartCount(); 

  const productId = getParam('product');
  const dataSource = new ProductData('tents');
  const product = new ProductDetails(productId, dataSource);

  product.init(); // Initialize the product details
}

initPage(); 