import './booking.html';


Template.booking.onRendered(function() {

	if(Session.get('booking')){
		this.cal = $( '#calendar' ).calendario( {
			onDayClick : function( $el, $contentEl, dateProperties ) {

				console.log('dateProperties',dateProperties);

				for( var key in dateProperties ) {
					console.log( key + ' = ' + dateProperties[ key ] );
				}

				var tanggal = new Date(dateProperties['year'],dateProperties['month'],dateProperties['day']);

				console.log('tanggal',tanggal);

				FlowRouter.go('/bookingTime');
			},
			caldata : {}
		} );

		this.$month = $( '#custom-month' ).html( this.cal.getMonthName() );
		this.$year = $( '#custom-year' ).html( this.cal.getYear() );

	}else{
		setTimeout(function(){

			this.cal = $( '#calendar' ).calendario( {
				onDayClick : function( $el, $contentEl, dateProperties ) {

					console.log('dateProperties',dateProperties);

					for( var key in dateProperties ) {
						console.log( key + ' = ' + dateProperties[ key ] );
					}

					var tanggal = new Date(dateProperties['year'],dateProperties['month'],dateProperties['day']);

					console.log('tanggal',tanggal);
					FlowRouter.go('/bookingTime');
				},
				caldata : {}
			} );

			this.$month = $( '#custom-month' ).html( this.cal.getMonthName() );
			this.$year = $( '#custom-year' ).html( this.cal.getYear() );
   	}, 200);
   	Session.set('booking', true);
	};

});

Template.booking.helpers({

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

	'click #custom-current'(event, instance) {
		instance.cal.gotoNow( Template.booking.helpers.updateMonthYear );
	},

});
