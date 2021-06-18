# Welcome to GRAVITI PAGOS CDN:

> *At Graviti we want your products reach the people who need them most.
With our integration of **Graviti Pagos**, you will be able to offer credit for your products to low-income, unbanked users who cannot pay cash and do not have a credit card. All this with zero risk for you. Since we pay you in cash, in a single exhibition, without complications.
Increase your sales, increase your conversion and reach new markets by offering credit for your products with Graviti Pagos.*

We provided with:

- The styles to the **Paga con Graviti** button
- Our logo (in blue and white colors), in order to allow you place it where you see it better
- Some functions to make you easy and less code the integration process

Default configurations:

- Firstly, you must import our CDN at the bottom of your html

```html
<link href="https://cdn.jsdelivr.net/gh/arielcv/test-cdn@latest/gp-styles.css" rel="stylesheet">
```

- To add our **Paga con Graviti** button to your products insert in the containers where the product is located the attributes data-product and data-price and assign them the id and price of the product respectively.
  
```html
<div class="product" data-product=[productId] data-price=[productPrice]>
...
</div>
```

- If you want to place the button in a specific place create an empty div tag, apply your style and insert the attributes data-product and data-price and assign them the id and the price of the product respectively.

```html
<div class="your-own-style" data-product=[productId] data-price=[productPrice]>
</div>
```
