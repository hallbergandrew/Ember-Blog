Blog = Ember.Application.create();

//allows one to type #/about into http request and find page rendered on screen if template has id=about
Blog.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id'});
  });
  // this.resource('post', { path: ':post_id'}); Works for new page of just post.
  this.resource('contact');
  this.resource('photos');
});

Blog.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});


//This is the model, it backs a template, additionally it is connected with route
var posts = [{
  id: '1',
  title: "This is the first Post",
  author: { name: "The nunna"},
  date: new Date('12-12-2013'),
  excerpt: "This is the excerpt it should be shorter",
  body: "I this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main body"
}, {
  id: '2',
  title: 'This is the Second Post',
  author: { name: "Nested author name two"},
  date: new Date('12-12-2012'),
  excerpt: "This is the excerpt al;sdkjf;alsdkfja;sldkfja;sldk",
  body: "I this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main bodyI this is the main body"
}];
