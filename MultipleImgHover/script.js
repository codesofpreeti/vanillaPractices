var elm = document.querySelectorAll(".elem");
elm.forEach(function(val){
    console.log(val.childNodes);
    val.addEventListener("mouseenter",function(){
        // val.style.backgroundColor = "red";
        console.log("Entered");
        val.childNodes[2].style.opacity = 1;
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[2].style.opacity = 0;
        // val.style.backgroundColor = "transparent";
        console.log("Left");
    })
    val.addEventListener("mousemove", function(dets){
        val.childNodes[2].style.left =dets.x + "px";
        val.childNodes[2].style.top =dets.y + "px";
    })
})

// console.log(elm);

// var firstImg = document.querySelector("#first img");

// elm.addEventListener("mousemove", function (dets) {
//   firstImg.style.left = dets.x + "px";
//   firstImg.style.top = dets.y + " px";
// });

// elm.addEventListener("mouseenter", function (dets) {
//     firstImg.style.opacity =1;
//   });