import './settings.html';

Template.settings.helpers({
	goSignin(){
		FlowRouter.go('/signin');
	}
})
