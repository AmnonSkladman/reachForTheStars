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

function info (e) {
    var overlay = $("#overlay");
    var overlayBG = $("#overlayBG");
    var overlayH1 =  $("#overlayHeader");
    var overlayP =  $("#overlayContent");
    var target = e.childNodes[0].innerHTML;
    
    overlay.fadeToggle(100);
    overlayBG.fadeToggle(100);
    overlayH1.html(target);
    
    switch (target) {
        case "Mercury":
            overlayP.html("Mercury is the closest planet to the sun and is named after the Roman deity Mercury, who was the messenger to the gods. Because it does not have an atmosphere, its surface temperature can range from -170 Celsius to 430 Celsius. Although it's roughly a third the size of Earth, its day cycle is very long at 58 days 15 hours 30 minutes. Gravity on Mercury is also about a third that of Earth's, meaning that you would weigh much less! Mercury resembles Luna, our moon, due to its surface being covered in craters, as well as due to its greyish colour.");
            break;
        case "Venus":
            overlayP.html("Venus is the second planet from the sun and is named after the Roman goddess of love and beauty. It is no mistake, as its soft, delicate colour distracts from the planet's volatile nature. The planet is covered in thick sulfuric acid clouds, and its atmosphere is dense with 96% carbon dioxide. Although it's further away from the sun than Mercury, its average surface temperature is much hotter at 462 Celsius. The surface itself is a dry desert full of rocks and volcanoes. If there ever was a hell, Venus would most likely be it.");
            break;
        case "Earth":
            overlayP.html("Earth is the third planet from the sun, and is the only planet with confirmed life on it (though other planets may have bacterial life). Earth is also the densest planet in our solar system. About 71% of its surface is covered in water, most of which is oceans. Thanks to Earth's solid iron inner core and liquid outer core, the planet generates its own magnetic field, which protects us from solar winds and cosmic rays. <br/><br/>Having formed 4 billion years ago, Earth has a rich history. Although in the past it may have looked like Mars, life eventually began to develop within the first 1 billion years, and affected Earth's atmosphere and surface. Since then, life began to evolve, and the planet changed through many different periods.");
            break;
        case "Mars":
            overlayP.html("Mars is the fourth planet from the sun, and is named after the Roman god of war. Its nickname is The Red Planet, because the iron oxide that covers its surface looks reddish to the naked eye. Speaking of its surface, it's covered in deserts, valleys, craters, and polar caps. Mars even has two famous sites - Olympus Mons, the largest volcano in the solar system, as well as Valles Marineries, one of the largest canyons in the solar system. Mars has two moons, both of which are small and irregularly-shaped. Mars is unable to hold water on its surface, because its atmospheric pressure is less than 1% than that of Earth's. However, it does hold a lot of water in the form of ice in its polar caps, as well as underground.");
            break;
        case "Jupiter":
            overlayP.html("Coming soon!");
            break;
    }
    
    $("#overlayBG").height($("#overlay").height()) ;
};