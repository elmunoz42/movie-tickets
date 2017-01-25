//business logic

function MovieObject (name, description, time, price) {
  this.name = name;
  this.description = description;
  this.time = time;
  this.price = price;
}

var SpaceBallsObject = new MovieObject("SpaceBalls", "Planet Spaceballs' President Skroob sends Lord Dark Helmet to steal planet Druidia's abundant supply of air to replenish their own, and only Lone Starr can stop them.", "8pm", "$7.00" );

var RogueOneObject = new MovieObject("RogueOne", "The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow." , "7pm", "$10.00" );

var FlubberObject = new MovieObject("Flubber", "An absent-minded professor discovers 'flubber,' a rubber-like super-bouncy substance.", "9pm", "$7.00" );

var movieLibrary = [SpaceBallsObject, RogueOneObject, FlubberObject];


// user interface logic
$(document).ready(function() {
  console.log("hello");
  $("form#intakeForm").submit(function(event) {
    event.preventDefault();
    console.log("submitted");
    var userAge = $("#customerAge").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    var movieLibraryIndex = $("#movieSelection").val();

    console.log("customerAge: " + userAge);///debugg
    console.log("startTime: " + startTime);///debugg
    console.log("endTime: " + endTime);///debugg
    console.log("movieSelection: " + movieSelection); ///debugg
    console.log("movieLibrary[movieLibraryIndex].description" + movieLibrary[movieLibraryIndex].description);///debugg

    $("#movieTitle").text(movieLibrary[movieLibraryIndex].name);
    $("#movieDescription").text(movieLibrary[movieLibraryIndex].description);
    $("#movieDetails").show();
    $("#movieTime").text(movieLibrary[movieLibraryIndex].time);
    $("#moviePrice").text(movieLibrary[movieLibraryIndex].price);

  });
});
