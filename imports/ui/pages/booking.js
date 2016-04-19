import './booking.html';

// function updateMonthYear() {
// 	$month.html( cal.getMonthName() );
// 	$year.html( cal.getYear() );
// }


Template.booking.onRendered(function() {

				this.cal = $( '#calendar' ).calendario( {
						onDayClick : function( $el, $contentEl, dateProperties ) {

							console.log('dateProperties',dateProperties);

							for( var key in dateProperties ) {
								console.log( key + ' = ' + dateProperties[ key ] );
							}

							var tanggal = new Date(dateProperties['year'],dateProperties['month'],dateProperties['day']);

							console.log('tanggal',tanggal);



						},
						caldata : {}
					} );

					this.$month = $( '#custom-month' ).html( this.cal.getMonthName() );
					this.$year = $( '#custom-year' ).html( this.cal.getYear() );


});

Template.booking.helpers({
	goSignin(){
		FlowRouter.go('/signin');
	},

	updateMonthYear(event, instance) {
		$month.html( instance.cal.getMonthName() );
		$year.html( instance.cal.getYear() );
	},

});

Template.booking.events({
	'click #custom-next'(event, instance) {
		instance.cal.gotoNextMonth( Template.booking.helpers.updateMonthYear );
	},

	'click #custom-prev'(event, instance) {
		instance.cal.gotoPreviousMonth( Template.booking.helpers.updateMonthYear );
	},

	'click #custom-current'(event, instance) {
		instance.cal.gotoNow( Template.booking.helpers.updateMonthYear );
	},

});
