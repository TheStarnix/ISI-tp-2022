var requeteList = document.getElementById("requeteList");
var textEntry = document.getElementById("requete");

// When the user selects a value from the list, update the text entry
textEntry.value = requeteList.value; // Initial value
requeteList.addEventListener("change", function(){
    textEntry.value = requeteList.value;
})

function successSubmit(){
    swal({
        title: "Elementary my Dear Watson !",
        text: "La requête a bien bien été exécuté. Il n'y a eu aucun problème.",
        icon: "success",
        button: "Nickel !",
    });
}
function failSubmit(msg){
    swal({
        title: "You're not hurt, Watson?",
        text: msg,
        icon: "error",
        button: "Ouch !",
    });
}