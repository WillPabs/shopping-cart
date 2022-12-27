# shopping-cart

This application allows a user to surf through a list of various products. The user is able to pick a product, with a specific quantity, and add it to their cart. The user is able at anytime to view their cart and checkout.

## Frontend

### Views

#### Homepage
- Displays a welcome banner and a list of products to choose from. The products will be square shaped cards.

#### Shop Page
- Shop page will display a list of products. The products will be paginated and display 10 at a time. The page will also include a shopping cart component that is on the right side of the page.

#### Payment Page
- Displays a vertical list of products in the cart with their image, description, price, and quantity. At the end the total price is shown.

### Components

#### Homepage
- header
- footer
- has a welcome banner component
- products list

#### Card
- image
- name
- description
- number input with add button

#### Searchbar
- text input

#### Shopping Cart
- product list
- checkout button

#### Header
- links to each product

#### Footer
- copyright info
- links to each product

### Services

#### Cart Api
- get cart
- update cart
- delete cart
- update product in cart
- delete product in cart

#### Product Api
- get all products
- get products by type
- get product by id

## Backend

### Routes

#### Homepage
- / GET
- /home GET 

#### Shop
- /shop GET
- /shop/:productType GET

#### Cart
- /cart GET
- /cart POST
- /cart PATCH
- /cart DELETE
- /cart/:productId PATCH
- /cart/:productId DELETE

#### Payment
- /pay GET
- /pay POST

### Controller

#### Shop
- get shop
    - return random list of product types
- get shop by product type
    - return list of products by type

#### Cart
- get cart
- create cart
- update cart
- delete cart
- update product in cart
- delete product in cart

### Model

#### Product
- id
- name
- description
- image
- price
- availableQuantity

#### Cart
- id
- products
- calculateTotal()
    - multiply each product by its price and quantity, then add each

### Repository

#### Product
- get product by type
- get all products
- get product by id