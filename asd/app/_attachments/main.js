

$('#quickSchedule').on('pageinit', function() {
	var save = $('#submit');
	var getErrorMessId = $('#errorMessages');
	var linkOfClear = $('#clear');
	var linkOfDisplay = $('#display');
	var checkBox = "";
    var buttonRadio = "";
	/*console.log("joojdw");
    var dataURL = $(this).data("url");
    console.log(dataURL);
    var sectionsURL = dataURL.splt('#');
    var urlPairs = sectionsURL[1].split('&');
    var valURL = {};*/
    
    	
    
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
    //To save all of the information in the CouchDB.
    //Create Document Portion CouchDB Part1.
    function saveInformation (key) {
    	//This function is in the case if theirs no key present.
        //Meaning this will generate a new key. 
         if (!key) {
             var id                = Math.floor(Math.random()*1000292002);
         } else { 
             //If theirs a key this conditional takes place.
             //By setting the key to the id it replaces the information.
             //Reminder!! This is the same key that has been passed by the many functions. 
             id = key;
         }
         console.log(id);
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
    //Options of displaying content:
    function visibilityOfElement (v) {
        switch (v) {
            case 'on':
                $('#quickSchedule').css('display', 'none');
                $('#clear').css('display', 'inline');
                $('#display').css('display', 'none');
                $('#add').css('display', 'inline');
                break;
            case 'off':
                $('#quickSchedule').css('display','block');
                $('#clear').css('display', 'inline');
                $('#display').css('display', 'inline');
                $('#add').css('display', 'none');
                $('#items').css('display', 'none');
                break;
            default:
                return false;
        }
    }
    //Read Documents Portion of CouchDB
    var displayData = function() {    
    	console.log("maps");
    	$('#viewschdLi').empty();
    	$.couch.db("asdprojectcouch").view("asdprojectcouch/maps", {
        	success:function(data) {
                console.log(data);
                console.log("now");
            
                $.each(data.rows, function(index, schedules) {
                    console.log(schedules);
                    var idShow = schedules.value._id;
                    var major = schedules.value.major;
                    var cName = schedules.value.cName;
                    var cSection = schedules.value.cSection;
                    var topicAndSec = schedules.value.topicAndSec;
                    var todaysDate = schedules.value.todaysDate;
                    var dueDate = schedules.value.dueDate;
                    var numOfWeeks = schedules.value.numOfWeeks;
                    var classOptView = schedules.value.classOptView;
                    var numOfCredits = schedules.value.numOfCredits;
                    var teachName = schedules.value.teachName;
                    var teachEmail = schedules.value.teachEmail;
                    var teachPhone = schedules.value.teachPhone;
                    var bestMthCont = schedules.value.bestMthCont;
                    var note = schedules.value.note;
                    var dataLi = $('<li>');
                    dataLi.attr("id", "liData");
                    var dataText = $(
                        '<h4>' + major[0] + " " + major[1] + '</h4>' +
                        '<p>' + cName[0] + " " + cName[1] + '</p>' +
                        '<p>' + cSection[0] + cSection[1] + '</p>' + 
                        '<p>' + topicAndSec[0] + " " + topicAndSec[1] + '</p>' +
                        '<p>' + todaysDate[0] + " " + todaysDate[1] + '</p>' +
                        '<p>' + dueDate[0] + " " + dueDate[1] + '</p>' +
                        '<p>' + numOfWeeks[0] + " " + numOfWeeks[1] + '</p>' + 
                        '<p>' + classOptView[0] + " " + classOptView[1] + '</p>' + 
                        '<p>' + numOfCredits[0] + " " + numOfCredits[1] + '</p>' + 
                        '<p>' + teachName[0] + " " + teachName[1] + '</p>' + 
                        '<p>' + teachEmail[0] + " " + teachEmail[1] + '</p>' + 
                        '<p>' + teachPhone[0] + " " + teachPhone[1] + '</p>' +
                        '<p>' + bestMthCont[0] + " " + bestMthCont[1] + '</p>' +
                        '<p>' + note[0] + " " + note[1] + '</p>'
                    );
                    var dataTotal = dataLi.append(dataText);
                    $('#viewschdLi').append(dataTotal);
                    console.log(dataLi);
                    save.off("click", saveInformation);
                    //Change the button of submit to Edit Schedule.
                    $('submit').val() = "Edit Schedule";
                    var editScheduleButton = $('#submit');
                    editScheduleButton.on("click", saveInfo);
                    //Get the key from local storage
                    editScheduleButton.key = this.key;
                }
            //Create Edit Link to change information that is in the local storage.
                function createEditLink (key, eLink) {
                    var linkEdit = $('<a>');
                    linkEdit.attr("href", "#");
                    linkEdit.attr("id", "editS");
                    linkEdit.attr("key", "key");
                    var textEdit = "Edit Schedule";
                    linkEdit.text(textEdit);
                    linkEdit.on("click", editSchedule);
                    //linkEdit.addEventListener("click", editSchedule);
                    //linkEdit.innerHTML = textEdit;
                    eLink.append(linkEdit);
                }
            //Create Delete Link to erase items in the local storage.
                function createDeleteLink(key, dLink) {
                    var linkDelete = $('<a>');
                    linkDelete.attr("href", "#");
                    linkDelete.attr("id", "deleteS");
                    linkDelete.attr("key", "key");
                    var textDelete = "Delete Schedule";
                    linkDelete.text(textDelete);
                    linkDelete.on("click", deleteSchedule);
                    //linkDelete.addEventListener("click", deleteSchedule);
                    //linkDelete.innerHTML = textDelete;
                    dLink.append(linkDelete);
                }
            //The event listener function for the user to delete.
                function deleteSchedule () {
                    var askToDelete = confirm("Please confirm if you want to delete this Schedule?");
                    if (askToDelete) {
                        localStorage.removeItem(this.key);
                        alert("Schedule was deleted");
                        window.location.reload();
                    } else {
                        alert("The Schedule was not deleted");
                    }
                }
                });
                //Once added all items, need to have JQM to refresh the page to update any new styles/changes.
                //$('#schedulesServerList').listview('refresh');
                
            },
            error: function () {
                alert("Error");
            }
        });
    };

    console.log("quickCheck");
    
    function resetForm(e){
        var confirmMess = confirm("Are you sure you want to erase whats in the fields?");
        if(confirmMess === true){
            console.log(confirmMess);
            //$("#reset").click(function() {
              //  $('input').removeClass("return false").addClass("return true");
            document.location.reload();
            //}
            //e.preventDefault();
        } else {
            //$("input[type='reset']").click(function() { return false; });
            alert("Your fields have NOT been delete!");
        }
        //e.preventDefault();
    }
//Delete the information from the local Storage.   
    function eraseInformation () {
        if (localStorage.length === 0){
            alert("You haven't stored any Assignment Information to erase.");
        } else {
            localStorage.clear();//Delete everything in the localStorage.
            alert("All of your Assignment Information have been deleted.");
            window.location.reload();
            return false;//Stopping the link to go anywhere when reloaded.
        }
    }
   

    //Save the data that is being passed by the submitHandler:
        function collValidate(){
            var collForm = $('#collegeForm');
        
            collForm.validate({
                invalidHandler: function(form, validator){},
                submitHandler: function () {
                    saveInformation(this);
                }
            });
        }
    //$('#submit').on("click", collValidate);
 

});

$('#home').on('pageinit', function(){
    console.log("Starting");
    $('.view').on('click', displayData);
    
});
