

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
     $(".form").on("click", ".updatePost", tractorPage.updatePost);
   },

   createPost: function () {
     var newProduct = {
       name: $('.box input[name="name"]').val(),
       image: $('.box input[name="image"]').val(),
       description: $('.box textarea[name="description"]').val(),
       price: $('.box input[name="price"]').val()


     };

     products.push(newProduct);
     tractorPage.addAllProducts(products);


     $(".box input").val("");
     $(".box textarea").val("");
   },

   updatePost: function (){
     event.preventDefault();
     $(".form").css({"display": "block"});
   },

   deletePost: function (event) {

     var postIndex = $(this).closest("article").data("index");

     products.splice(postIndex, 1);
     tractorPage.addAllProducts(products);
   },

   compileTmpl: function (data, tmpl) {
     var tmpl = _.template(tmpl);
     return tmpl(data);
   },

   addAllProducts: function (productsData) {
     var tmplStr = ""
     var compiledTmpl = _.template(templates.products);

     _.each(productsData, function (item, index, arr) {
       item.idx = index;
       tmplStr += compiledTmpl(item);
     });

    $("section").html(tmplStr);
  }
};

 $(document).ready(function () {
   tractorPage.init();
 });
