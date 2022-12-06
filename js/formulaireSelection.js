var requeteList = document.getElementById("requeteList");
var textEntry = document.getElementById("requete");

// When the user selects a value from the list, update the text entry
textEntry.value = requeteList.value; // Initial value
requeteList.addEventListener("change", function(){
    textEntry.value = requeteList.value;
})