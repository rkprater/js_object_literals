 var tractorPage = {

   init: function () {
     tractorPage.initStyling();
     tractorPage.initEvents();
   },

   initStyling: function () {
     console.log("styling loaded correctly");
     tractorPage.addAllProducts(products);
   },

   initEvents: function () {
     console.log("styling loaded correctly");
   },

   addProduct: function(product, index, array) {
       $("section").append(
         "<article>" +
         "<h2>" + product.name + "</h2>" +
         "<img src='" + product.image + "'>" +
         "<p>" + product.description + "</p>" +
         "<blockquote>" + product.price + "</blockquote>" +
         "</article>"
       );
   },

   addAllProducts: function (productsData) {
     productsData.forEach(tractorPage.addProduct);
   },

 };
 

 $(document).ready(function () {
   tractorPage.init();
 });
