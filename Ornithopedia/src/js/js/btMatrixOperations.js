/**
 * Created by pratikgarala on 29/4/17.
 */


$("#btMatrix").on("load", function(){
   console.log("on load btMtrix");
});

$(".btBottom .btn").on("click", function(){
    var progressBar = document.querySelectorAll(".progress-indicator");
    console.log(progressBar);
});