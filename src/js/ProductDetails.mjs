import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { updateCartCount } from "./cartCount.mjs";

// Generates the HTML structure for the product details dynamically. Takes product data and converts it into HTML to display on the page.
function productDetailsTemplate(product) {
  return `<section class="product-detail"> 
     <h3>${product.Brand.Name}</h3>
    
      <h2 class="divider">${product.NameWithoutBrand}</h2>
      <p style="padding: 5px 10px;
        border: 1px solid grey;
        color: white;
        border-radius: 5px;
        background-color: blue;
        float: right;">Discount -${product.Discount}%</p>
        
      <img
        class="divider"
        src="${product.Image}"
        alt="${product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${product.FinalPrice}</p>
      <p class="product__color">${product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
      </div></section>`;
}
// I think this is where the product’s identity and source are set up.
export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  // Fetching the product data using the product ID.
  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails("main");
    // The listener moved from product.js to here.
    document.getElementById("addToCart").addEventListener("click", this.addToCart.bind(this));
    // Without .bind(this), 'this' in the event handler would refer to the button element. .bind(this) ensures 'this' refers to the ProductDetails instance.
  }

  
  addToCart() {
    let cartContents = [];

    let cartContentItem = getLocalStorage("so-cart");
    // console.log(cartContentItem);
    
    if (cartContentItem && !!cartContentItem[0] == false) {
      // cartContents = [];
      cartContents.push(cartContentItem);
    } else if (cartContentItem && !!cartContentItem[0] == true) {
      cartContents = cartContentItem;
    }
    cartContents.push(this.product);

    console.log(cartContents);
    setLocalStorage("so-cart", cartContents);
    // update the cart count in the header dynamically.
    updateCartCount();
  }

  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
  }
}