 var tractorPage = {

   init: function () {
     tractorPage.initStyling();
     tractorPage.initEvents();
   },

   initStyling: function () {

     tractorPage.addAllProducts(products);
   },

   initEvents: function () {

     $(".box form").on("submit", function (event){
       event.preventDefault();
       tractorPage.createPost();
     });

     $("section").on("click", ".deletePost", tractorPage.deletePost);
   },

   createPost: function () {
     var newProduct = {
       name: $('.box input [name="name"]').val(),
       image: $('.box input [name="image"]').val(),
       description: $('.box textarea [name="description"]').val(),
       price: $('.box input [name="price"]').val(),

     };

     products.push(newProduct);

     tractorPage.addproduct(newProduct, products.indexOf(newProduct));

     $(".box input").val("");
     $(".box textarea").val("");
   },

   updatePost: function (){

   },

   deletePost: function (event) {

     var postIndex = $(this).closest("article").data("index");

     products.splice(postIndex, 1);

     $(this).closest("article").remove();
   },

   addProduct: function(products, index, array) {

     products.idx = index;
     var compiled = _.template(templates.products);

    $("section").append(compiled(products));

   },

   addAllProducts: function (productsData) {
     _.each(productsData, tractorPage.addProduct)
   }

 };


 $(document).ready(function () {
   tractorPage.init();
 });
