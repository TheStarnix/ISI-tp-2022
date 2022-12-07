var requeteList = document.getElementById("requeteList");
var textEntry = document.getElementById("requete");
var list_titlesuccess = ["Elementary my Dear Watson !", "Gotcha !", "Fantastic !", "Woooosh"]
var list_titlefail = ["You're not hurt, Watson?", "Oh no !", "Oh dear !", "Oh my !"]

// When the user selects a value from the list, update the text entry
textEntry.value = requeteList.value; // Initial value
requeteList.addEventListener("change", function(){
    textEntry.value = requeteList.value;
})

function successSubmit(){
    var randomNumber = Math.floor(Math.random() * 4);
    swal({
        title: list_titlesuccess[randomNumber],
        text: "La requête a bien bien été exécuté. Il n'y a eu aucun problème.",
        icon: "success",
        button: "Nickel !",
    });
}
function failSubmit(msg){
    var randomNumber = Math.floor(Math.random() * 4);
    swal({
        title: list_titlefail[randomNumber],
        text: msg,
        icon: "error",
        button: "Ouch !",
    });
}