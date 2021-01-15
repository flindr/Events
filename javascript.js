var sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("mouseenter", function(event) {
    event.target.style.width = "10%";
});

sidebar.addEventListener("mouseleave", function(event) {
    event.target.style.width = "5%";
});

sidebar.addEventListener("click", function(event) {
    var display = event.target.classList.toggle("hide")
    // console.log(display);
    // if(display || display === "block" ) {
    //     console.log(1);
    //     display = "none";
    // }
    // else {
    //     console.log();
    //     display = "block";
    // }
});