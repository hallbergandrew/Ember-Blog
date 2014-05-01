Blog = Ember.Application.create();

//allows one to type #/about into http request and find page rendered on screen if template has id=about
Blog.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id'});
  });
  // this.resource('post', { path: ':post_id'}); Works for new page of just post.
  this.resource('contacts', function() {
    this.resource('contact', { path: ':contact_id'});
  });
  this.resource('photos');
});
//Translates model into object for template
Blog.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

Blog.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

Blog.ContactsRoute = Ember.Route.extend({
  model: function() {
    return contacts;
  }
});

Blog.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return contacts.findBy('id', params.post_id);
  }
});


//Controlls action state and responds to events from template Controller
Blog.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
      edit: function() {
        this.set('isEditing', true);
      },

      doneEditing: function() {
        this.set('isEditing', false);
      }
  }
});

Blog.ContactController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
      edit: function() {
        this.set('isEditing', true);
      },

      doneEditing: function() {
        this.set('isEditing', false);
      }
  }
});

//Helper helps handle ember formatting
Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
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
},
{
  id: '3',
  title: "The Parley Letter",
  author: { name: "d2h" },
  date: new Date('12-24-2012'),
  excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
  body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
}];

var contacts = [{
  id: '1',
  name: { first: "Andrew", last: "Hallberg" },
  position: "Web Developer"
},
{
  id: '2',
  name: { first: "Nunna", last: "Nuns"},
  position: "He the Nunna"
},
{
  id: '3',
  name: { first: "Lion", last: "Girl"},
  position: "She is the CEO"
}];
