import './home.html';

Template.home.onCreated(function(){
	if(!Meteor.loggingIn() && !Meteor.userId())
		FlowRouter.go('/signin');
});

Template.home.events({
	'click #bookDate'() {
		FlowRouter.go('booking');
	}
});