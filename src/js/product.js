import { loadHeaderFooter, getParam } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs';
import ProductDetails from './ProductDetails.mjs';
import { updateCartCount } from "./cartCount.mjs";

async function initPage() {
  await loadHeaderFooter(); 
  updateCartCount(); 

  const dataSource = new ExternalServices('tents');
  const productId = getParam('product');
  const product = new ProductDetails(productId, dataSource);

  product.init(); // Initialize the product details
}

initPage(); 