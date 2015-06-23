$(document).ready(function () {

    $("#header").ready(function () {
        $("#header").slideDown(1000, function () {
            // Animation complete.
        });
    });
 

    document.querySelector("#nav-toggle")
      .addEventListener("click", function () {
          this.classList.toggle("active");
          $("#Navigation").slideToggle("fast");
      });




});