

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

     $('section').on('click', 'showEditForm', function (event) {
       $(this).closest('article').find('.form').toggleClass('active');
     });

     $('section').on('click', '.deletePost', tractorPage.deletePost);

     $('section').on('click', 'editWholePost', tractorPage.updatePost);

   },

   createPost: function () {
     var newProduct = {
       name: $('.box input[name="name"]').val(),
       image: $('.box input[name="image"]').val(),
       description: $('.box textarea[name="description"]').val(),
       price: $('.box input[name="price"]').val(),
       isPublished: true

     };

     products.push(newProduct);
     tractorPage.addAllProducts(products);


     $(".box input").val("");
     $(".box textarea").val("");
   },

   updatePost: function () {

     var thisIndex = $(this).closest('article').data('index');

     var updatedPost = {
       name: $(this).closest('article').find('input.editTitle').val(),
       image: $(this).closest('article').find('input.editImage').val(),
       description: $(this).closest('article').find('input.editDescription').val(),
       price: $(this).closest('article').find('input.editPrice').val(),
       isPublished: true
     };

     products.splice(thisIndex, 1, updatedPost);
     tractorPage.addAllPosts(products);
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
