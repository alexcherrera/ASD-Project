function (doc) {
	if(doc._id.substr(0,9) === "schedules") {
		//emit method works the same as a return
		emit(doc._id);
	}
};