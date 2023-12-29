var con = document.querySelector("#card");
var icon = document.querySelector("i");
con.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%,-50%) scale(1)";
  icon.style.opacity = 0.8;
  console.log("liked");
  setTimeout(() => {
    icon.style.opacity = 0;
    console.log("removing opacity");
  }, 1000);
  setTimeout(function () {
    icon.style.transform = "translate(-50%,-50%) scale(0)";
    console.log("removing scale");
  }, 2000);
});
