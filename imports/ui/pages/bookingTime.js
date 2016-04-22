import './bookingTime.html';

Template.bookingTime.onRendered(function(){
	$('.btn-primary').hide();
});

Template.bookingTime.events({
	'change #inputTime'() {
		$('.btn-primary').show();
	},
	'click .btn-primary'() {
		FlowRouter.go('departureCity');
	}
});