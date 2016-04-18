import './payments.html';

Template.payments.helpers({
	goSignin(){
		FlowRouter.go('/signin');
	}
})
