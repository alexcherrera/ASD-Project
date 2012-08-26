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
	
	
$('#viewOpt').on('pageinit', function() {
	mon1();
	
	console.log("viewOpt pg");
	
	
});
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