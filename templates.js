  var templates = {};

  templates.products = [
  "<article data-index= '<%= idx %>'>",
  "<h2><%= name %></h2>",
  "<img src='<%= image %>'>",
  "<p><%= description %></p>" ,
  "<blockquote><%= price %></blockquote>",
  "<p><button class='deletePost'>Delete</button></p>",
  "<p><button class='editProduct'>Save Changes</button></p>",
  "</article>"

  ].join("");

  templates.sidebar = "<p><%= selftext %></p>";
