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

   addProduct: function (product, index, array) {
       $("section").append(
         "<article" +
         "<h3>" + product.title + "</h3>"
         + "<p>" + product.content + "</p>"
         + "<blockquote>" + product.author + "</blockquote>"
         + "</article>"
       );
   },

   addAllProducts: function (productsData) {
     productsData.forEach(tractorPage.addProduct);
   },

 };


 $(document).ready(function () {
   tractorPage.init();
 });
