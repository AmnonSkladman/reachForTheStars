/////////////
//Objects
var fields = $('.item'); // All planets
var container = $('#sun'); // Sun
var mercury = $("#mercury"); // Mercury
var venus = $("#venus"); // Venus
var earth = $("#earth"); // Earth
var mars = $("#mars"); // Mars
var jupiter = $("#jupiter"); // Mars

////////////////
//Technical
var radius = 300; // adjust to move out items in and out 
var merRad = 140; // Radius for Mercury
var venRad = 180; // Radius for Venus
var earRad = 220; // Radius for Earth
var marRad = 260; // Radius for Mars
var jupRad = 330; // Radius for Mars

var width = container.width(); // width of the sun
var height = container.height(); // height of the sun

var angle = 0;
var step = (2 * Math.PI) / fields.length;
var merStep =  (2 * Math.PI) / mercury.length;
var venStep =  (2 * Math.PI) / venus.length;
var earStep = (2 * Math.PI) / earth.length;
var marStep = (2 * Math.PI) / mars.length;
var jupStep = (2 * Math.PI) / jupiter.length;

//////////////////////////
//Functions - Orbit

//MERCURY
(function(){
    var x = Math.round(width / 2 + merRad * Math.cos(angle) - mercury.width() / 2);
    var y = Math.round(height / 2 + merRad * Math.sin(angle) - mercury.height() / 2);
    
    mercury.css({
        left: x + 'px',
        top: y + 'px'
    });
    
    angle += merStep;
})();

//VENUS
(function(){
    var x = Math.round(width / 2 + venRad * Math.cos(angle) - venus.width() / 2);
    var y = Math.round(height / 2 + venRad * Math.sin(angle) - venus.height() / 2);
    
    venus.css({
        left: x + 'px',
        top: y + 'px'
    });
    
    angle += venStep;
})();

//EARTH
(function(){
    var x = Math.round(width / 2 + earRad * Math.cos(angle) - earth.width() / 2);
    var y = Math.round(height / 2 + earRad * Math.sin(angle) - earth.height() / 2);
    
    earth.css({
        left: x + 'px',
        top: y + 'px'
    });
    
    angle += earStep;
})();

//MARS
(function(){
    var x = Math.round(width / 2 + marRad * Math.cos(angle) - mars.width() / 2);
    var y = Math.round(height / 2 + marRad * Math.sin(angle) - mars.height() / 2);
    
    mars.css({
        left: x + 'px',
        top: y + 'px'
    });
    
    angle += marStep;
})();

//JUPITER
(function(){
    var x = Math.round(width / 2 + jupRad * Math.cos(angle) - jupiter.width() / 2);
    var y = Math.round(height / 2 + jupRad * Math.sin(angle) - jupiter.height() / 2);
    
    jupiter.css({
        left: x + 'px',
        top: y + 'px'
    });
    
    angle += jupStep;
})();

//////////////////////////
//Functions - Info

function test () {
    console.log("I've been clicked!");
}