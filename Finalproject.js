function allowDrop(ev) {
    ev.preventDefault();
}
function bigImg(x,beans) {
    x.style.height = "140px";
    x.style.width = "120px";

}
function normalImg(x,beans) {
    x.style.height = "120px";
    x.style.width = "100px";

}
function increase(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}
function decrease(x) {
    x.style.height = "70px";
    x.style.width = "70px";
}


function showPage(shown, hidden, hidden2, hidden3,hidden4,hidden5,hidden6) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  document.getElementById(hidden2).style.display='none';
  document.getElementById(hidden3).style.display='none';
  document.getElementById(hidden4).style.display='none';
  document.getElementById(hidden5).style.display='none';
  document.getElementById(hidden6).style.display='none';
  return false;
}


var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};

(function(todo, data, $) {

    var defaults = {
            todoTask: "todo-task",
            todoHeader: "task-header",
            todoDate: "task-date",
            todoDescription: "task-description",
            taskId: "task-",
            formId: "todo-form",
            dataAttribute: "data",
            deleteDiv: "delete-div"
        }, codes = {
            "1" : "#pending",
            "2" : "#inProgress",
            "3" : "#completed"
        };

    todo.init = function (options) {

        options = options || {};
        options = $.extend({}, defaults, options);

        $.each(data, function (index, params) {
            generateElement(params);
        });

        $.each(codes, function (index, value) {
            $(value).droppable({
                drop: function (event, ui) {
                        var element = ui.helper,
                            css_id = element.attr("id"),
                            id = css_id.replace(options.taskId, ""),
                            object = data[id];

                            // Removing old element
                            removeElement(object);

                            // Changing object code
                            object.code = index;

                            // Generating new element
                            generateElement(object);

                            // Updating Local Storage
                            data[id] = object;
	

                            localStorage.setItem("todoData", JSON.stringify(data));

                            // Hiding Delete Area
                            $("#" + defaults.deleteDiv).hide();
                    }
            });
        });

        // Adding drop function to delete div
        $("#" + options.deleteDiv).droppable({
            drop: function(event, ui) {
                var element = ui.helper,
                    css_id = element.attr("id"),
                    id = css_id.replace(options.taskId, ""),
                    object = data[id];

                // Removing old element
                removeElement(object);

                // Updating local storage
                delete data[id];
                localStorage.setItem("todoData", JSON.stringify(data));

                // Hiding Delete Area
                $("#" + defaults.deleteDiv).hide();
            }
        })

    };

    // Add Task
    var generateElement = function(params){
        var parent = $(codes[params.code]),
            wrapper;

        if (!parent) {
            return;
        }

        wrapper = $("<div />", {
            "class" : defaults.todoTask,
            "id" : defaults.taskId + params.id,
            "data" : params.id
        }).appendTo(parent);

        $("<div />", {
            "class" : defaults.todoHeader,
            "text": params.Project
        }).appendTo(wrapper);

        $("<div />", {
            "class" : defaults.todoDate,
            "text": params.date
        }).appendTo(wrapper);

        $("<div />", {
            "class" : defaults.todoDescription,
            "text": params.description
        }).appendTo(wrapper);

      wrapper.draggable({
            start: function() {
                $("#" + defaults.deleteDiv).show();
            },
            stop: function() {
                $("#" + defaults.deleteDiv).hide();
            },
          revert: "invalid",
          revertDuration : 200
        });

    };

    // Remove task
    var removeElement = function (params) {
        $("#" + defaults.taskId + params.id).remove();
    };

    todo.add = function() {
        var inputs = $("#" + defaults.formId + " :input"),
            errorMessage = "Task can not be empty",
            id, Project, description, date, tempData;

        if (inputs.length !== 4) {
            return;
        }

        Project = inputs[0].value;
        description = inputs[1].value;
        date = inputs[2].value;

        if (!Project) {
            generateDialog(errorMessage);
            return;
        }

        id = new Date().getTime();

        tempData = {
            id : id,
            code: "1",
            Project: Project,
            date: date,
            description: description
        };

        // Saving element in local storage
        data[id] = tempData;
        localStorage.setItem("todoData", JSON.stringify(data));

        // Generate Todo Element
        generateElement(tempData);

        // Reset Form
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
    };

    var generateDialog = function (message) {
        var responseId = "response-dialog",
            Project = "Message",
            responseDialog = $("#" + responseId),
            buttonOptions;

        if (!responseDialog.length) {
            responseDialog = $("<div />", {
                    Project: Project,
                    id: responseId
            }).appendTo($("body"));
        }

        responseDialog.html(message);

        buttonOptions = {
            "Ok" : function () {
                responseDialog.dialog("close");
            }
        };

      responseDialog.dialog({
            autoOpen: true,
            width: 400,
            modal: true,
            closeOnEscape: true,
            buttons: buttonOptions
        });
    };


    todo.clear = function () {
        data = {};
        localStorage.setItem("todoData", JSON.stringify(data));
        $("." + defaults.todoTask).remove();
    };

})(todo, data, jQuery);
                   
    todo.save = function() {

    }
var jarnumber=0;
var countOfJars = [];
var storedNames;

//insert text underneath each with CSS coordinates -google how to use text in javascript for html


function addHealth(){
    jarnumber+=1;
    if (jarnumber==1){
    document.getElementById("jar1").style.visibility = "visible";
	document.getElementById("titleJar1").innerHTML = 'Health';
    }
	
  
    if (jarnumber==2){;
    document.getElementById("jar2").style.visibility = "visible";
	document.getElementById("titleJar2").innerHTML = 'Health';
    }
    if (jarnumber==3){
    document.getElementById("jar3").style.visibility = "visible";
	document.getElementById("titleJar3").innerHTML = 'Health';
    }
    if (jarnumber==4){
    document.getElementById("jar4").style.visibility = "visible";
	document.getElementById("titleJar4").innerHTML = 'Health';
    }
    if (jarnumber==5){
    document.getElementById("jar5").style.visibility = "visible";
	document.getElementById("titleJar5").innerHTML = 'Health';
    }
	 if (jarnumber==6){
	document.getElementById("jar6").style.visibility = "visible";
	document.getElementById("titleJar6").innerHTML = 'Health';
    }
     if (jarnumber==7){
	document.getElementById("jar7").style.visibility = "visible";
	document.getElementById("titleJar7").innerHTML = 'Health';
    }
	 if (jarnumber==8){
	document.getElementById("jar8").style.visibility = "visible";
	document.getElementById("titleJar8").innerHTML = 'Health';
    }
	if (jarnumber==9){
	document.getElementById("jar9").style.visibility = "visible";
	document.getElementById("titleJar9").innerHTML = 'Health';
    }
	if (jarnumber==10){
	document.getElementById("jar10").style.visibility = "visible";
	document.getElementById("titleJar10").innerHTML = 'Health';
    }
	if (jarnumber==11){
	document.getElementById("jar11").style.visibility = "visible";
	document.getElementById("titleJar11").innerHTML = 'Health';
    }
	if (jarnumber==12){
	document.getElementById("jar12").style.visibility = "visible";
	document.getElementById("titleJar12").innerHTML = 'Health';
    }
	if (jarnumber==13){
	document.getElementById("jar13").style.visibility = "visible";
	document.getElementById("titleJar13").innerHTML = 'Health';
    }
	if (jarnumber==14){
	document.getElementById("jar14").style.visibility = "visible";
	document.getElementById("titleJar14").innerHTML = 'Health';
    }
	if (jarnumber==15){
	document.getElementById("jar15").style.visibility = "visible";
	document.getElementById("titleJar15").innerHTML = 'Health';
    }
	if (jarnumber>15){
	alert("Error-Shelves Full");
	}


 
 }

function addMisc(){
    jarnumber+=1;
    if (jarnumber==1){
    document.getElementById("jar1").style.visibility = "visible";
	document.getElementById("titleJar1").innerHTML = 'Misc';
	
    }
    if (jarnumber==2){;
    document.getElementById("jar2").style.visibility = "visible";
	document.getElementById("titleJar2").innerHTML = 'Misc';
    }
    if (jarnumber==3){
    document.getElementById("jar3").style.visibility = "visible";
	document.getElementById("titleJar3").innerHTML = 'Misc';
    }
    if (jarnumber==4){
    document.getElementById("jar4").style.visibility = "visible";
	document.getElementById("titleJar4").innerHTML = 'Misc';
    }
    if (jarnumber==5){
    document.getElementById("jar5").style.visibility = "visible";
	document.getElementById("titleJar5").innerHTML = 'Misc';
    }
	 if (jarnumber==6){
	document.getElementById("jar6").style.visibility = "visible";
	document.getElementById("titleJar6").innerHTML = 'Misc';
    }
     if (jarnumber==7){
	document.getElementById("jar7").style.visibility = "visible";
	document.getElementById("titleJar7").innerHTML = 'Misc';
    }
	 if (jarnumber==8){
	document.getElementById("jar8").style.visibility = "visible";
	document.getElementById("titleJar8").innerHTML = 'Misc';
    }
	if (jarnumber==9){
	document.getElementById("jar9").style.visibility = "visible";
	document.getElementById("titleJar9").innerHTML = 'Misc';
    }
	if (jarnumber==10){
	document.getElementById("jar10").style.visibility = "visible";
	document.getElementById("titleJar10").innerHTML = 'Misc';
    }
	if (jarnumber==11){
	document.getElementById("jar11").style.visibility = "visible";
	document.getElementById("titleJar11").innerHTML = 'Misc';
    }
	if (jarnumber==12){
	document.getElementById("jar12").style.visibility = "visible";
	document.getElementById("titleJar12").innerHTML = 'Misc';
    }
	if (jarnumber==13){
	document.getElementById("jar13").style.visibility = "visible";
	document.getElementById("titleJar13").innerHTML = 'Misc';
    }
	if (jarnumber==14){
	document.getElementById("jar14").style.visibility = "visible";
	document.getElementById("titleJar14").innerHTML = 'Misc';
    }
	if (jarnumber==15){
	document.getElementById("jar15").style.visibility = "visible";
	document.getElementById("titleJar15").innerHTML = 'Misc';
    }
	if (jarnumber>15){
	alert("Error-Shelves Full");
	}

	
	
    
    
}
function addHome(){
       jarnumber+=1;
    if (jarnumber==1){
    document.getElementById("jar1").style.visibility = "visible";
	document.getElementById("titleJar1").innerHTML = 'Home';
	
    }
    if (jarnumber==2){;
    document.getElementById("jar2").style.visibility = "visible";
	document.getElementById("titleJar2").innerHTML = 'Home';
    }
    if (jarnumber==3){
    document.getElementById("jar3").style.visibility = "visible";
	document.getElementById("titleJar3").innerHTML = 'Home';
    }
    if (jarnumber==4){
    document.getElementById("jar4").style.visibility = "visible";
	document.getElementById("titleJar4").innerHTML = 'Home';
    }
    if (jarnumber==5){
    document.getElementById("jar5").style.visibility = "visible";
	document.getElementById("titleJar5").innerHTML = 'Home';
    }
	 if (jarnumber==6){
	document.getElementById("jar6").style.visibility = "visible";
	document.getElementById("titleJar6").innerHTML = 'Home';
    }
     if (jarnumber==7){
	document.getElementById("jar7").style.visibility = "visible";
	document.getElementById("titleJar7").innerHTML = 'Home';
    }
	 if (jarnumber==8){
	document.getElementById("jar8").style.visibility = "visible";
	document.getElementById("titleJar8").innerHTML = 'Home';
    }
	if (jarnumber==9){
	document.getElementById("jar9").style.visibility = "visible";
	document.getElementById("titleJar9").innerHTML = 'Home';
    }
	if (jarnumber==10){
	document.getElementById("jar10").style.visibility = "visible";
	document.getElementById("titleJar10").innerHTML = 'Home';
    }
	if (jarnumber==11){
	document.getElementById("jar11").style.visibility = "visible";
	document.getElementById("titleJar11").innerHTML = 'Home';
    }
	if (jarnumber==12){
	document.getElementById("jar12").style.visibility = "visible";
	document.getElementById("titleJar12").innerHTML = 'Home';
    }
	if (jarnumber==13){
	document.getElementById("jar13").style.visibility = "visible";
	document.getElementById("titleJar13").innerHTML = 'Home';
    }
	if (jarnumber==14){
	document.getElementById("jar14").style.visibility = "visible";
	document.getElementById("titleJar14").innerHTML = 'Home';
    }
	if (jarnumber==15){
	document.getElementById("jar15").style.visibility = "visible";
	document.getElementById("titleJar15").innerHTML = 'Home';
    }
	if (jarnumber>15){
	alert("Error-Shelves Full");
	}
    
}
function addSchool(){
    jarnumber+=1;
    if (jarnumber==1){
    document.getElementById("jar1").style.visibility = "visible";
	document.getElementById("titleJar1").innerHTML = 'School';
	
    }
    if (jarnumber==2){;
    document.getElementById("jar2").style.visibility = "visible";
	document.getElementById("titleJar2").innerHTML = 'School';
    }
    if (jarnumber==3){
    document.getElementById("jar3").style.visibility = "visible";
	document.getElementById("titleJar3").innerHTML = 'School';
    }
    if (jarnumber==4){
    document.getElementById("jar4").style.visibility = "visible";
	document.getElementById("titleJar4").innerHTML = 'School';
    }
    if (jarnumber==5){
    document.getElementById("jar5").style.visibility = "visible";
	document.getElementById("titleJar5").innerHTML = 'School';
    }
	 if (jarnumber==6){
	document.getElementById("jar6").style.visibility = "visible";
	document.getElementById("titleJar6").innerHTML = 'School';
    }
     if (jarnumber==7){
	document.getElementById("jar7").style.visibility = "visible";
	document.getElementById("titleJar7").innerHTML = 'School';
    }
	 if (jarnumber==8){
	document.getElementById("jar8").style.visibility = "visible";
	document.getElementById("titleJar8").innerHTML = 'School';
    }
	if (jarnumber==9){
	document.getElementById("jar9").style.visibility = "visible";
	document.getElementById("titleJar9").innerHTML = 'School';
    }
	if (jarnumber==10){
	document.getElementById("jar10").style.visibility = "visible";
	document.getElementById("titleJar10").innerHTML = 'School';
    }
	if (jarnumber==11){
	document.getElementById("jar11").style.visibility = "visible";
	document.getElementById("titleJar11").innerHTML = 'School';
    }
	if (jarnumber==12){
	document.getElementById("jar12").style.visibility = "visible";
	document.getElementById("titleJar12").innerHTML = 'School';
    }
	if (jarnumber==13){
	document.getElementById("jar13").style.visibility = "visible";
	document.getElementById("titleJar13").innerHTML = 'School';
    }
	if (jarnumber==14){
	document.getElementById("jar14").style.visibility = "visible";
	document.getElementById("titleJar14").innerHTML = 'School';
    }
	if (jarnumber==15){
	document.getElementById("jar15").style.visibility = "visible";
	document.getElementById("titleJar15").innerHTML = 'School';
    }
	if (jarnumber>15){
	alert("Error-Shelves Full");
	}

    
}
function addWork(){
       jarnumber+=1;
    if (jarnumber==1){
    document.getElementById("jar1").style.visibility = "visible";
	document.getElementById("titleJar1").innerHTML = 'Work';
	
    }
    if (jarnumber==2){;
    document.getElementById("jar2").style.visibility = "visible";
	document.getElementById("titleJar2").innerHTML = 'Work';
    }
    if (jarnumber==3){
    document.getElementById("jar3").style.visibility = "visible";
	document.getElementById("titleJar3").innerHTML = 'Work';
    }
    if (jarnumber==4){
    document.getElementById("jar4").style.visibility = "visible";
	document.getElementById("titleJar4").innerHTML = 'Work';
    }
    if (jarnumber==5){
    document.getElementById("jar5").style.visibility = "visible";
	document.getElementById("titleJar5").innerHTML = 'Work';
    }
	 if (jarnumber==6){
	document.getElementById("jar6").style.visibility = "visible";
	document.getElementById("titleJar6").innerHTML = 'Work';
    }
     if (jarnumber==7){
	document.getElementById("jar7").style.visibility = "visible";
	document.getElementById("titleJar7").innerHTML = 'Work';
    }
	 if (jarnumber==8){
	document.getElementById("jar8").style.visibility = "visible";
	document.getElementById("titleJar8").innerHTML = 'Work';
    }
	if (jarnumber==9){
	document.getElementById("jar9").style.visibility = "visible";
	document.getElementById("titleJar9").innerHTML = 'Work';
    }
	if (jarnumber==10){
	document.getElementById("jar10").style.visibility = "visible";
	document.getElementById("titleJar10").innerHTML = 'Work';
    }
	if (jarnumber==11){
	document.getElementById("jar11").style.visibility = "visible";
	document.getElementById("titleJar11").innerHTML = 'Work';
    }
	if (jarnumber==12){
	document.getElementById("jar12").style.visibility = "visible";
	document.getElementById("titleJar12").innerHTML = 'Work';
    }
	if (jarnumber==13){
	document.getElementById("jar13").style.visibility = "visible";
	document.getElementById("titleJar13").innerHTML = 'Work';
    }
	if (jarnumber==14){
	document.getElementById("jar14").style.visibility = "visible";
	document.getElementById("titleJar14").innerHTML = 'Work';
    }
	if (jarnumber==15){
	document.getElementById("jar15").style.visibility = "visible";
	document.getElementById("titleJar15").innerHTML = 'Work';
    }
	if (jarnumber>15){
	alert("Error-Shelves Full");
	}

    
}

function showImage() {
	var ddl = document.getElementById("mySelect");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "10" || selectedValue == "20" || selectedValue == "30")
   { 
	document.getElementById("jar1").src= "http://s8.postimg.org/u6ssqwv8l/first.png";
	document.getElementById("Page1").style.display='block';
  document.getElementById("Home").style.display='none';
  document.getElementById("Page2").style.display='none';
  document.getElementById("Page3").style.display='none';
  document.getElementById("Page4").style.display='none';
   }
   if (selectedValue == "40" || selectedValue == "50" || selectedValue == "60")
   { 
	document.getElementById("jar1").src= "http://s21.postimg.org/4x2iuu0xz/second.png";
	document.getElementById("Page1").style.display='block';
  document.getElementById("Home").style.display='none';
  document.getElementById("Page2").style.display='none';
  document.getElementById("Page3").style.display='none';
  document.getElementById("Page4").style.display='none';
   }
   if (selectedValue == "70%" || selectedValue == "80%" || selectedValue == "90%")
   {
	document.getElementById("jar1").src= "http://s3.postimg.org/b8ayetqfn/third.png";
	document.getElementById("Page1").style.display='block';
  document.getElementById("Home").style.display='none';
  document.getElementById("Page2").style.display='none';
  document.getElementById("Page3").style.display='none';
  document.getElementById("Page4").style.display='none';
   }
    if (selectedValue == "100")
   {
	 document.getElementById("jar1").src= "http://s11.postimg.org/97uvq5mrn/last.png";
	   alert("Congratulations-You Finished Your Tasks!");
	   document.getElementById("Page1").style.display='block';
  document.getElementById("Home").style.display='none';
  document.getElementById("Page2").style.display='none';
  document.getElementById("Page3").style.display='none';
  document.getElementById("Page4").style.display='none';
   }
   
}
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

$("#slideshow1 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
},  3000);

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  3000);
$(document).ready(function(){

  $("#mySelect").change(function(){
  console.log ( '#change function worked' ); 
   
  showImage();  
  console.log ( '#change function worked' ); 
  });
});
////WHEN SAVING THE JARS TO LOCAL STORAGE YOU ALSO HAVE TO SAVE THE JAR NUMBER
// SWITCH BETWEEN IMAGES TO FILL UP JAR



