function addStorage() {
    console.log("Add storage");
    var thing = document.getElementById('jar1');


    //localStorage setItem
    if ("localStorage" in window) {
        console.log(thing.value);
        localStorage.setItem(key.value, data.value, data.
    } else {
        alert("no localStorage in window");
    }
}


window.onload = function () {
    console.log("onLoad");
    var localhtml = "";

    addStorage();

    //localStorage key and getItembr
    for (var i = 0; i < localStorage.length; i++) {
        localhtml += "<li>" + localStorage.key(i) + " " +
            localStorage.getItem(localStorage.key(i)) + "</li>";
    }
    document.getElementById('localStorageData').innerHTML = localhtml;
};