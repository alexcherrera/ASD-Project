function (doc) {
	if(doc._id === "") {
		//emit method works the same as a return
		emit(doc._id, {
			"major"         : doc.major,
			"cName"         : doc.cName,
			"cSection"      : doc.cSection,
			"topicAndSec"   : doc.topicAndSec,
			"todaysDate"    : doc.todaysDate,
			"dueDate"       : doc.dueDate,
			"numOfWeeks"    : doc.numOfWeeks,
			"classOptView"  : doc.classOptView,
			"numOfCredits"  : doc.numOfCredits,
			"teachName"     : doc.teachName,
			"teachEmail"    : doc.teachEmail,
			"teachPhone"    : doc.teachPhone,
			"bestMthCont"   : doc.bestMthCont,
			"note"          : doc.note
		});
	}
};