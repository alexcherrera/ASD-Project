$('#home').on('pageinit', function() {
	console.log("home pg");
	
	
});
$('#submit').on('click', collValidate);
var checkBox = "";
var buttonRadio = "";
console.log("quickCheck");
//CouchDB Save Function to store the data that is being passed by info object. 
//Create Document Portion CouchDB Part1.
function couchDBSave (info) {
    $.couch.db("asdprojectcouch").saveDoc(info, {
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