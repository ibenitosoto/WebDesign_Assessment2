/* 
    //hover over the big images to show text on the left hand side and change opacity to 1
$("#hoverMe1").hover(function () {
    $("#hoverMe1").css("background-color", "yellow");
    $("#hoverMe2").css("background-color", "yellow")
},

    function () {
        $("#pToImg1").hide();
        $("#mainImg1").css("opacity", "0.3");
    });


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
 */

