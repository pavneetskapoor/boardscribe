
Template.register.events({
    'submit form': function(){
      event.preventDefault();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      Accounts.createUser({
            email: email,
            password: password
      });
      Router.go('homePage');
    }
});

Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});

// Template.homePage.events({
//   'click a': function(event){
//     $(".button-collapse").sideNav();
//   }
// });

Template.homePage.onRendered(function() {
      $(document).ready(function() {
        $('.button-collapse').sideNav('show');
      });
});
