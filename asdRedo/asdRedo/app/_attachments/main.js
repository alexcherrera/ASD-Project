$('#home').on('pageinit', function() {
	console.log("home pg");
	
	
});
function mon1() {
	$.couch.db('asdfix').openDoc('Mondays:Schedule1', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var monAll = [];
			var len = data.length;
			var major = data.major;
			monAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            monAll.push(cName);
            var cSection = data.cSection;
            monAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            monAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            monAll.push(todaysDate);
            var dueDate = data.dueDate;
            monAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            monAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            monAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            monAll.push(numOfCredits);
            var teachName = data.teachName;
            monAll.push(teachName);
            var teachEmail = data.teachEmail;
            monAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            monAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            monAll.push(bestMthCont);
            var note = data.note;
            monAll.push(note);
            console.log(monAll);
            
            for(var i=0, l= monAll.length; i<l; i++){
            	var show = monAll[i];
            	$('#monSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#monSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function mon2() {
	$.couch.db('asdfix').openDoc('Mondays:Schedule2', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var monAll = [];
			var len = data.length;
			var major = data.major;
			monAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            monAll.push(cName);
            var cSection = data.cSection;
            monAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            monAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            monAll.push(todaysDate);
            var dueDate = data.dueDate;
            monAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            monAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            monAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            monAll.push(numOfCredits);
            var teachName = data.teachName;
            monAll.push(teachName);
            var teachEmail = data.teachEmail;
            monAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            monAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            monAll.push(bestMthCont);
            var note = data.note;
            monAll.push(note);
            console.log(monAll);
            
            for(var i=0, l= monAll.length; i<l; i++){
            	var show = monAll[i];
            	$('#monSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#monSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function tues1() {
	$.couch.db('asdfix').openDoc('Tuesdays:Schedule1', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var tuesAll = [];
			var len = data.length;
			var major = data.major;
			tuesAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            tuesAll.push(cName);
            var cSection = data.cSection;
            tuesAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            tuesAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            tuesAll.push(todaysDate);
            var dueDate = data.dueDate;
            tuesAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            tuesAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            tuesAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            tuesAll.push(numOfCredits);
            var teachName = data.teachName;
            tuesAll.push(teachName);
            var teachEmail = data.teachEmail;
            tuesAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            tuesAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            tuesAll.push(bestMthCont);
            var note = data.note;
            tuesAll.push(note);
            console.log(tuesAll);
            
            for(var i=0, l= tuesAll.length; i<l; i++){
            	var show = tuesAll[i];
            	$('#tuesSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#tuesSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function tues2() {
	$.couch.db('asdfix').openDoc('Tuesdays:Schedule2', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var tuesAll = [];
			var len = data.length;
			var major = data.major;
			tuesAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            tuesAll.push(cName);
            var cSection = data.cSection;
            tuesAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            tuesAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            tuesAll.push(todaysDate);
            var dueDate = data.dueDate;
            tuesAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            tuesAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            tuesAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            tuesAll.push(numOfCredits);
            var teachName = data.teachName;
            tuesAll.push(teachName);
            var teachEmail = data.teachEmail;
            tuesAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            tuesAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            tuesAll.push(bestMthCont);
            var note = data.note;
            tuesAll.push(note);
            console.log(tuesAll);
            
            for(var i=0, l= tuesAll.length; i<l; i++){
            	var show = tuesAll[i];
            	$('#tuesSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#tuesSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function wednes1() {
	$.couch.db('asdfix').openDoc('Wednesdays:Schedule1', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var wednesAll = [];
			var len = data.length;
			var major = data.major;
			wednesAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            wednesAll.push(cName);
            var cSection = data.cSection;
            wednesAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            wednesAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            wednesAll.push(todaysDate);
            var dueDate = data.dueDate;
            wednesAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            wednesAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            wednesAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            wednesAll.push(numOfCredits);
            var teachName = data.teachName;
            wednesAll.push(teachName);
            var teachEmail = data.teachEmail;
            wednesAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            wednesAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            wednesAll.push(bestMthCont);
            var note = data.note;
            wednesAll.push(note);
            console.log(wednesAll);
            
            for(var i=0, l= wednesAll.length; i<l; i++){
            	var show = wednesAll[i];
            	$('#wednesSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#wednesSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function wednes2() {
	$.couch.db('asdfix').openDoc('Wednesdays:Schedule2', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var wednesAll = [];
			var len = data.length;
			var major = data.major;
			wednesAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            wednesAll.push(cName);
            var cSection = data.cSection;
            wednesAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            wednesAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            wednesAll.push(todaysDate);
            var dueDate = data.dueDate;
            wednesAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            wednesAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            wednesAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            wednesAll.push(numOfCredits);
            var teachName = data.teachName;
            wednesAll.push(teachName);
            var teachEmail = data.teachEmail;
            wednesAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            wednesAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            wednesAll.push(bestMthCont);
            var note = data.note;
            wednesAll.push(note);
            console.log(wednesAll);
            
            for(var i=0, l= wednesAll.length; i<l; i++){
            	var show = wednesAll[i];
            	$('#wednesSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#wednesSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function thurs1() {
	$.couch.db('asdfix').openDoc('Thursdays:Schedule1', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var thursAll = [];
			var len = data.length;
			var major = data.major;
			thursAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            thursAll.push(cName);
            var cSection = data.cSection;
            thursAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            thursAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            thursAll.push(todaysDate);
            var dueDate = data.dueDate;
            thursAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            thursAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            thursAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            thursAll.push(numOfCredits);
            var teachName = data.teachName;
            thursAll.push(teachName);
            var teachEmail = data.teachEmail;
            thursAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            thursAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            thursAll.push(bestMthCont);
            var note = data.note;
            thursAll.push(note);
            console.log(thursAll);
            
            for(var i=0, l= thursAll.length; i<l; i++){
            	var show = thursAll[i];
            	$('#thursSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#thursSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function fri1() {
	$.couch.db('asdfix').openDoc('Fridays:Schedule1', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var friAll = [];
			var len = data.length;
			var major = data.major;
			friAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            friAll.push(cName);
            var cSection = data.cSection;
            friAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            friAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            friAll.push(todaysDate);
            var dueDate = data.dueDate;
            friAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            friAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            friAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            friAll.push(numOfCredits);
            var teachName = data.teachName;
            friAll.push(teachName);
            var teachEmail = data.teachEmail;
            friAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            friAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            friAll.push(bestMthCont);
            var note = data.note;
            friAll.push(note);
            console.log(friAll);
            
            for(var i=0, l= friAll.length; i<l; i++){
            	var show = friAll[i];
            	$('#friSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#friSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function satur1() {
	$.couch.db('asdfix').openDoc('Saturdays:Schedule1', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var saturAll = [];
			var len = data.length;
			var major = data.major;
			saturAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            saturAll.push(cName);
            var cSection = data.cSection;
            saturAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            saturAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            saturAll.push(todaysDate);
            var dueDate = data.dueDate;
            saturAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            saturAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            saturAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            saturAll.push(numOfCredits);
            var teachName = data.teachName;
            saturAll.push(teachName);
            var teachEmail = data.teachEmail;
            saturAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            saturAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            saturAll.push(bestMthCont);
            var note = data.note;
            saturAll.push(note);
            console.log(saturAll);
            
            for(var i=0, l= saturAll.length; i<l; i++){
            	var show = saturAll[i];
            	$('#saturSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#saturSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}
function sun1() {
	$.couch.db('asdfix').openDoc('Sundays:Schedule1', {
		success:function(data) {
			console.log(data);
			//$('#viewSchd').empty();
			var sunAll = [];
			var len = data.length;
			var major = data.major;
			sunAll.push(major);
			console.log(major);
			//$('#viewSchd').append(
        		//	$('<li>').text(major[0] + " " + major[1]));
            var cName = data.cName;
            sunAll.push(cName);
            var cSection = data.cSection;
            sunAll.push(cSection);
            var topicAndSec = data.topicAndSec;
            sunAll.push(topicAndSec);
            var todaysDate = data.todaysDate;
            sunAll.push(todaysDate);
            var dueDate = data.dueDate;
            sunAll.push(dueDate);
            var numOfWeeks = data.numOfWeeks;
            sunAll.push(numOfWeeks);
            var classOptView = data.classOptView;
            sunAll.push(classOptView);
            var numOfCredits = data.numOfCredits;
            sunAll.push(numOfCredits);
            var teachName = data.teachName;
            sunAll.push(teachName);
            var teachEmail = data.teachEmail;
            sunAll.push(teachEmail);
            var teachPhone = data.teachPhone;
            sunAll.push(teachPhone);
            var bestMthCont = data.bestMthCont;
            sunAll.push(bestMthCont);
            var note = data.note;
            sunAll.push(note);
            console.log(sunAll);
            
            for(var i=0, l= sunAll.length; i<l; i++){
            	var show = sunAll[i];
            	$('#sunSchd').append(
            			$('<li>').text(show));
            	console.log(show);
            }
            $('#sunSchd').listview('refresh');
		},
		error:function(status) {
			console.log(status);
		}
	});
}

$('#mondays').on('pageinit', function() {
	console.log("mondays pg");
	mon1();
	mon2();
});
$('#tuesdays').on('pageinit', function() {
	console.log("tuesdays pg");
	tues1();
	tues2();
});
$('#wednesdays').on('pageinit', function() {
	console.log("wednesdays pg");
	wednes1();
	wednes2();
});
$('#thursdays').on('pageinit', function() {
	console.log("thursdays pg");
	thurs1();
});
$('#fridays').on('pageinit', function() {
	console.log("fridays pg");
	fri1();
});
$('#saturdays').on('pageinit', function() {
	console.log("saturdays pg");
	satur1();
});
$('#sundays').on('pageinit', function() {
	console.log("saturdays pg");
	sun1();
});
	
$('#viewOpt').on('pageinit', function() {
	mon1();
	
	console.log("viewOpt pg");
	
	
});

$('#addSchd').on('pageinit', function() {
	//$('#collegeForm').empty();
	$('#collegeForm').each(function(){
		  this.reset();
	});

	console.log("addColl pg");
	
	
});	

function addSchd(){
	$('#collegeForm').each (function(){
		  this.reset();
		});
	//clearForm();
	//window.location = $("#addSchd");
	//window.location.reload();
	console.log("empty");
	$('#submit').on('click', collValidate);
	
	var checkBox = "";
	var buttonRadio = "";
	console.log("quickCheck");
	//CouchDB Save Function to store the data that is being passed by info object. 
	//Create Document Portion CouchDB Part1.
	function couchDBSave (info) {
	    $.couch.db("asdfix").saveDoc(info, {
	        success: function (info){
	            console.log(info);
	            alert("Data Has Been Saved!!");
	            window.location = $("index.html/#addSchd");
	        },
	        error: function (status) {
	            console.log(status);
	        }
	    });
	    
	}
	
	//Radio Selection function:
	    function numOfCreditFun() {
	      console.log("Radio");
	    	var buttonRadio = $("#collegeForm input[type='radio']:checked").val();
	        return buttonRadio;
	    }
	//Checkbox function:
	    function bestMthContFun() {
	    	console.log("Checkboxs");
	    	checkBox = $("#collegeForm input[type='checkbox']:checked").val(); 
	        return checkBox;     
	    }
	//To save all of the information in the CouchDB.
	//Create Document Portion CouchDB Part1.
		function saveInformation () {
		    numOfCreditFun();
		    bestMthContFun();
		    var info                  = {};
		    	info.major            = ["Major Choice:", $('#departments').val()];
		        info.cName            = ["Course Name:", $('#courseName').val()];
		        info.cSection         = ["Course Section:", $('#courseSection').val()];
		        info.topicAndSec      = ["Topic and Section:", $('#topicAndSection').val()];
		        info.todaysDate       = ["Today's Date:", $('#todaysDate').val];
		        info.dueDate          = ["Due Date:", $('#dueDate').val()];
		        info.weeksOfClass     = ["Is the Class on Campus or Online:", $('#weeksOfClass').val()];
		        info.slideValue       = ["Due Date:", $('#weeksOfClass').val()];
		        info.courseNumCredits = ["Number of Credits:", numOfCreditFun];
		        info.teacherName      = ["Teacher Name:", $('#teacherName').val()];
		        info.teacherEmail     = ["Teacher Email:", $('#teacherEmail').val()];
		        info.teacherPhone     = ["Teacher Phone:", $('#teacherPhone').val()];
		        info.bestMthCont      = ["Best Method To Get In Contact:", bestMthContFun];
		        info.note             = ["Note Section:", $('#noteSection').val()];
		    //localStorage.setItem(id, JSON.stringify(info));
		    couchDBSave(info);
		}
	//Save the data that is being passed by the submitHandler:
		function collValidate(){
			var collForm = $('#collegeForm');
			collForm.validate({
			    invalidHandler: function(form, validator){},
			    submitHandler: function () {
			            saveInformation();
			    }
			});
		}
}

$('#addNavHomeId').on('click', addSchd);
$('#addMonSchdId').on('click', addSchd);
$('#addTuesSchdId').on('click', addSchd);
$('#addWednesSchdId').on('click', addSchd);
$('#addThursSchdId').on('click', addSchd);
$('#addFridId').on('click', addSchd);
$('#addSaturSchdId').on('click', addSchd);
$('#addSunSchdId').on('click', addSchd);




