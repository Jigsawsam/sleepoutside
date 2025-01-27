import { loadHeaderFooter } from "./utils.mjs";
import { updateCartCount } from "./cartCount.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

async function initPage() {
    await loadHeaderFooter(); // Ensure the header/footer are loaded first
    updateCartCount(); // Update the cart count in the header
    
    // Render the cart contents
    const cart = new ShoppingCart("so-cart", ".product-list");
    cart.renderCartContents();
  }
  
  initPage();