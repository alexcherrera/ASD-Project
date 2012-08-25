function (doc) {
	if(doc._id.substr(0,16) === "Mondays:Schedule") {
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
	} else if(doc._id.substr(0,17) === "Tuesdays:Schedule") {
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
	} else if(doc._id.substr(0,19) === "Wednesdays:Schedule") {
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
	} else if(doc._id.substr(0,18) === "Thursdays:Schedule") {
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
	} else if(doc._id.substr(0,16) === "Fridays:Schedule") {
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
	} else if(doc._id.substr(0,18) === "Saturdays:Schedule") {
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