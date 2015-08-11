//App with a jar that keeps track of goal

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function bigImg(x) {
    x.style.height = "180px";
    x.style.width = "160px";
}

function normalImg(x) {
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
function show(shown, hidden, hidden2) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  document.getElementById(hidden2).style.display='none';
  return false;
}

function changeJar(){

  
    if($('#options').val() == "SchoolWork"){
      alert(schoolWork);
      //$('#picHolder').attr('src', 'cow.jpeg');
    }
    else if($('#options').val() == "Gym"){
      alert(Gym);
      //$('#picHolder').attr('src', 'pig.jpg');
    }
    else if($('#options').val() == "x"){
      alert(x);
     // $('#picHolder').attr('src', 'lamb.jpg');
    }
    else{
      alert(y);
      //$('#picHolder').attr('src', 'pony.jpg');
    }
    
    
  // Our Job is going to be adding the photos to this mobile app
  
}

changePicture();
