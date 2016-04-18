import './booking.html';

Template.booking.helpers({
	goSignin(){
		FlowRouter.go('/signin');
	}
})
