  var templates = {};

  templates.products = [
  "<article data-index= '<%= idx %>'>",
  "<h2><%= name %></h2>",
  "<img src='<%= image %>'>",
  "<p><%= description %></p>" ,
  "<blockquote><%= price %></blockquote>",
  "<p><button class='deletePost'>Delete</button></p>",
  "<p><button class='editProduct'>Edit</button></p>",
  "<img src='<%= image %>'>",
  "</article>"

  ].join("");

  templates.sidebar = "<p><%= selftext %></p>";
