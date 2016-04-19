import './coba.html';

Template.coba.onCreated(function cobaOnCreated() {
	this.now = new Date();
	this.month = this.now.getMonth();

	console.log(this.month);
	

	this.counter = new ReactiveDict();
	this.counter.setDefault({
		0: 0,
		1: 1,
  });

});

Template.coba.helpers({
	hari(counter){
		const instance = Template.instance();
		return instance.counter.get(counter);
	}
});

Template.coba.events({
	'click #prevMonth'(){
		const instance = Template.instance();
		instance.counter.set(0,10);
	}
});

