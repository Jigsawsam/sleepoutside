import { getLocalStorage } from "./utils.mjs";

export function updateCartCount(key = "so-cart") {
  const cartItems = getLocalStorage(key) || [];
  const cartCountElement = document.getElementById("cart-count");

  if (cartCountElement) {
    cartCountElement.textContent = cartItems.length;
  } else {
    console.warn("Cart count element not found.");
  }
}