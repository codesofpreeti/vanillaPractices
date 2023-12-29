var add= document.getElementById("add");
var rels = document.querySelector("h5");
// var remove= document.getElementById("remove");
var check =0;

add.addEventListener("click", function(){
    if(check ==0 ){
        rels.innerHTML = "Friends";
        rels.style.color ="green";
        add.style.backgroundColor = "#dadada";
        add.style.color ="black"
        add.innerHTML = "Remove";
        check=1;
    }
    else{ 
        rels.innerHTML ="Strangers again!";
        rels.style.color ="red";
        add.style.backgroundColor = "cadetblue";
        add.innerHTML= "Add Friend";
        add.style.color ="#fff"
        check=0;
    }
})
// remove.addEventListener("click", function(){
//     rels.innerHTML = "Strangers again";
// })