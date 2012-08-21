$('#home').on('pageinit', function(){
    
	$('#loadServer').on('click', function(){
		console.log("Now");
		$.ajax({
			"url": "_view/maps",
			"dataType": "json",
			"success": function (data) {
				console.log(data);
				$.each(data.rows, function(index, schedules){
					console.log(schedules);
					var major = schedules.doc.major;
					var cName = schedules.doc.cName;
					var cSection = schedules.doc.cSection;
					var topicAndSec = schedules.doc.topicAndSec;
					var todaysDate = schedules.doc.todaysDate;
					var dueDate = schedules.doc.dueDate;
					var numOfWeeks = schedules.doc.numOfWeeks;
					var classOptView = schedules.doc.classOptView;
					var numOfCredits = schedules.doc.numOfCredits;
					var teachName = schedules.doc.teachName;
					var teachEmail = schedules.doc.teachEmail;
					var teachPhone = schedules.doc.teachPhone;
					var option = schedules.doc.option;
					var note = schedule.doc.note;
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(major)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(cName)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(cSection)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(topicAndSec)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(todaysDate)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(dueDate)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(numOfWeeks)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(classOptView)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(numOfCredits)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(teachName)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(teachEmail)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(teachPhone)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(option)
						)
					);
					$('#schedulesServerList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(note)
						)
					);
				});
				//Once added all items, need to have JQM to refresh the page to update any new styles/changes.
				$('#schedulesServerList').listview('refresh');
			}
		});
	});
});

$('#quickSchedule').on('pageinit', function(){
    //Save the data that is being passed by the submitHandler:
    var collForm = $('#collForm');
    var schedErrorsLink = $('#scheduleErrors');
    
    collForm.validate({
            invalidHandler: function(form, validator){},
            submitHandler: function () {
                    var data = collForm.serializeArray();
                    saveInformation();
            }
    })
//Variables:
var departmentMajors = ["--Choose Major--", 
                    "Architecture", 
                    "Biology", 
                    "Mathematics", 
                    "Accounting",
                    "Economics", 
                    "Computer Engineering", 
                    "Electrical Engineering"];
var optionValue = "";
var getErrorMessId = $('#errorMessages');
var linkOfClear = $('#clear');
var linkOfDisplay = $('#display');
var save = $('#submit');
//Radio Selection function. 
function numOfCreditFun () {
    var buttonRadio = $('#collegeForm').courseNumCredits;
    for (var i = 0; i < buttonRadio.length; i++){
        if (buttonRadio[i].checked){
           optionValue = buttonRadio[i].value;         
       }
    }
}
//To save all of the information in local storage.
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
    //Nothing else changes, were still going todo the getSelectionRadio function and get the local storage. 
    numOfCreditFun();
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
    localStorage.setItem(id, JSON.stringify(info));
    alert("Assignment Saved!!");
}
//In what way to display the local storage.    
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
//Automatically fills in the form if empty as a default.
//All the default information that is going to be display is coming from the json file.
function autoDefaultInfo () {
    for (var d in jsonObject) {
        var defaultID = Math.floor(Math.random()*1010001921);
        localStorage.setItem(defaultID, JSON.stringify(jsonObject[d]));
    }

}
//Safety check dor the display option.
function displayCheck () {
    if (localStorage.length === 0){
        alert("No Assignments have been saved so default information was added.");
        autoDefaultInfo();
    }
}
//The event listener function to allow the user edit the form.
function editSchedule (s) {
	var thisValKey = $(this).attr("key");
    var valueToEdit = localStorage.getItem(thisValKey);
    var info = JSON.parse(valueToEdit);
    visibilityOfElement("off");//Display the form.
    $('#departments').val() = info.major[1];
    $('#courseName').val() = info.cName[1];
    $('#courseSection').val() = info.cSection[1];
    $('#topicAndSection').val() = info.topicAndSec[1];
    $('#todaysDate').val() = info.todaysDate[1];
    $('#dueDate').val() = info.dueDate[1];
    $('#weeksOfClass').val() = info.numOfWeeks[1];
    $('#slideValue').val() = info.classOptView[1];
    var radioOption = $("input[name=courseNumCredits]");
    for (var i = 0; i < radioOption.length; i++) {
        if (radioOption[i].val() == "courseNumCredits1" && info.numOfCrdtValue[1] == "courseNumCredits1") {
            radioOption[i].attr("checked", "checked");
        } else if (radioOption[i].val() == "courseNumCredits2" && info.numOfCrdtValue[1] == "courseNumCredits2"){
            radioOption[i].attr("checked", "checked");
        } else if (radioOption[i].val() == "courseNumCredits3" && info.numOfCrdtValue[1] == "courseNumCredits3"){
            radioOption[i].attr("checked", "checked");
        } else if (radioOption[i].val() == "courseNumCredits4" && info.numOfCrdtValue[1] == "courseNumCredits4"){
            radioOption[i].attr("checked", "checked");
        }
    }
    $('#teacherName').val() = info.teachName[1];
    $('#teacherEmail').val() = info.teachEamil[1];
    $('#teachPhone').val() = info.teacherPhone[1];
    var checkOption = $("input[name=bestMethodContact]");
    for (var i = 0; i < checkOption.length; i++) {
        if (checkOption[i].val() == "sendEmail" && info.optionValue[1] == "sendEmail") {
            checkOption[i].attr("checked", "checked");
        } else if (checkOption[i].val() == "phone" && info.optionValue[1] == "phone"){
            checkOption[i].attr("checked", "checked");
        } else if (checkOption[i].val() == "office-Hours" && info.optionValue[1] == "office-Hours"){
            checkOption[i].attr("checked", "checked");
        }
    }
    $('#noteSection').val() = info.note[1];
    //Going to remove the event listener that is in the save variable.
    //save.removeEventListener("click", saveInfo);
    save.off("click", saveInfo);
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
//The Function to how the information in local storage be dispayed.
function getInfoToDisplay () {
    console.log("dis");
    visibilityOfElement("on");
    displayCheck();
    var disLink = $('#displayLink');
    var createDiv = $('<div>');
    createDiv.attr("id", "items");
    var createRoster = $('<ul>');
    createDiv.append(createRoster);
    disLink.append(createDiv);
    $('#items').show();//Just to make sure it does display.
    for (var i = 0, w = localStorage.length; i < w; i++) {
        var createFirstListTag = $('<li>');
        var createListLinks = $('<li>');
        createFirstListTag.appendTo(createRoster);
        var getKey = localStorage.key(i);
        var keyValue = localStorage.getItem(getKey);
        var localStorageObject = JSON.parse(keyValue);
        var anotherUnorderListTag = $('<ul>');
        createFirstListTag.appendTo(anotherUnorderListTag);
        getMajorIcons(localStorageObject.major[1], anotherUnorderListTag);
        for (var s in localStorageObject) {
            var createAnotherList = $('<li>');
            createAnotherList.appendTo(anotherUnorderListTag);
            var listInfoText = localStorageObject[s][0]+ " " + localStorageObject[s][1];
            createAnotherList.text(listInfoText);
            createListLinks.appendTo(anotherUnorderListTag);
        }
        createEditLink(localStorage.key(i), createListLinks);//Calling the function that will only have the edit link for the user to make corrections in the local storage.
        createDeleteLink(localStorage.key(i), createListLinks);//Calling the function that will only have the delete link.
    }
     var breakTag = $('</br>');
    breakTag.html('createDiv');
}
//This function is being called within the getInfoToDisplay function to get the correct icon of the major that was chosen.
function getMajorIcons (major, list) {
    var iconList = $('<li>');
    iconList.appendTo(list);
    var newIcon = $('<img/>');
    newIcon.attr("id", "icon");
    var iconAttribute = newIcon.attr("src", "images/" + major + ".png");
    newIcon.appendTo(iconList);

}
//Main Event Listeners
linkOfClear.on("click", eraseInformation);
linkOfDisplay.on("click", getInfoToDisplay);
save.on("click", validateField);//Change to validate to check the user input correctly before saving to local storage.
});

