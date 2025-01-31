import { loadHeaderFooter } from "./utils.mjs";
import { updateCartCount } from "./cartCount.mjs";

async function initPage() {
    await loadHeaderFooter(); 
    updateCartCount(); 
}
initPage()