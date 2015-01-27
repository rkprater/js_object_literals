  var templates = {};

  templates.products = [
  "<article data-index= '<%= idx %>'>",
  "<h2><%= name %></h2>",
  "<img src='<%= image %>'>",
  "<p><%= description %></p>" ,
  "<blockquote><%= price %></blockquote>",
  "<p><button class='deletePost'>Delete</button></p>",
  "<button class='updatePost'>Update</button>",
  "</article>"

  ].join("");

  templates.sidebar = "<p><%= selftext %></p>";
