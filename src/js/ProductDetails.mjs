import { setLocalStorage } from "./utils.mjs";

// Generates the HTML structure for the product details dynamically. Takes product data and converts it into HTML to display on the page.
function renderProductTemplate(product) {
    return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
      <h2 class="divider">${product.NameWithoutBrand}</h2>
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
export default class ProductDetails{
    constructor(productId, dataSource){
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
        setLocalStorage("so-cart", this.product);
    }

    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
    }
}