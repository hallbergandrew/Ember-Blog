Blog = Ember.Application.create();

//allows one to type #/about into http request and find page rendered on screen if template has id=about
Blog.Router.map(function() {
  this.resource('about');
  this.resource('posts');
  this.resource('contact');
  this.resource('photos');
});

