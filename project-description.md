###Hand-in assignment 3

In this assigment, you should write an Angular application which is written for an online sales business for sellers. I.e. the website has a list of sellers which are selling their products, each individual has a list of products (s)he is selling. The website should be able to manage both the list of individuals, as well as the list of their products.

The website should therefore have the following screens:

- The main screen, which displays a list of all sellers which are selling their products on the site
- The list should display the name of the individual, and the main product category the individual is selling.
- A dialog which allows the user of the website to add new sellers to the list, as well as edit existing sellers.
- A details screen, showing the name of a given seller, a logo or a photo of that individual, plus a set of tabs:
  - The first tab should list all the products being sold
  - The second tab should list the 10 best selling products
- There should be a dialog/page which allows the user to add/edit products

**Note:** the design of two of those screens should be similar to these:

    Sellers list: https://dl.dropboxusercontent.com/u/368343/2016-WEPO/V07/sellers.png
    Seller details page: https://dl.dropboxusercontent.com/u/368343/2016-WEPO/V07/details.png

The project should be unit tested, code coverage determines the grade for that part.

A REST API will be provided which will provide the data (see attachment).

To start it, unzip the attachment, go into the folder, and run the following commands:

    npm install
    node index.js

The following APIs are available:

    GET - /api/sellers
    Returns a list of sellers

    POST - /api/sellers
    Adds a new seller to the service. Note: the "name" property is required, "category" and "imagePath" should be provided as well, but are optional.

    GET - /api/sellers/:id
    Returns a single seller by id. Returns 404 if no such seller is found.

    GET  - /api/sellers/:id/products
    Returns all products from a given seller. Returns 404 if the seller is not found.

    POST - /api/sellers/:id/products
    Adds a new product to the given seller. Returns 404 if no seller with the given id is found. Note that the name of the product is required.

    PUT - /api/sellers/:id
    Updates seller information.

PUT - /api/sellers/:id/products/:prodId
Updates product information
 
You should use angular-cli to generate the initial project.

The following will be used for grading:

- When the user adds or edit an entity (individual/product), a toastr notification (or a should be displayed, showing if the operation succeeded or not. Similar messages should be displayed whenever something goes wrong, such as if the user tries to view a seller which doesn't exist.
- When the user views a seller which has no products, the user should be informed about this (but not necessarily using a toastr message! Check out ngb-alert from ng-bootstrap for this).
- The screens should be responsive, for instance using the bootstrap grid system (this is expecially important in the products tabs!)
- All input should be validated.

The project will be graded as follows:

    (5%) List individuals
    (10%) Add/edit individuals
    (10%) Show details about a given individual
    (10%) All products tab
    (5%) Top 10 products tab
    (10%) Add/edit product
    (10%) All input validated
    (5%) Toastr feedback after add/edit
    (5%) Responsive layout
    (30%) Unit tests for all code
    (10%) Coolness bonus

Hand in a single .zip or .rar file, containing all your code, but no node_modules! (Note: -20% for failing to do this!)