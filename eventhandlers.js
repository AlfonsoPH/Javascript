$(document).ready(function(){
    $("#box-1").click(function(){
        $(this).css("background-color", "red");
        $(this).text("CLICKED!");
    });

    $("#box-2").dblclick(function(){
        $(this).css("background-color", "green");
        $(this).text("DOUBLE CLICKED!");
    });

    $("#box-3").mouseenter(function(){
        $(this).css("background-color", "blue");
        $(this).text("MOUSE ENTERED!");
    });

    $("#box-4").mouseleave(function(){
        $(this).css("background-color", "yellow");
        $(this).css("color", "black");
        $(this).text("MOUSE LEFT!");
    });

    $("#box-5").mousedown(function(){
        $(this).css("background-color", "violet");
        $(this).text("MOUSE DOWN!");
    });

    $("#box-6").mouseup(function(){
        $(this).css("background-color", "pink");
        $(this).text("MOSUE UP!");
    });

    $("#box-7").hover(function(){
        $(this).css("background-color", "gray");
        $(this).text("HOVERING!");
    }, function(){
        $(this).css("background-color", "#3498db");
        $(this).text("HOVER");
    });

    $("#box-8").focus(function(){
        $(this).css("background-color", "orange");
        $(this).text("FOCUSED!");
    });

    $("#box-9").blur(function(){
        $(this).css("background-color", "brown");
        $(this).text("BLURRED!");
    });


    $("#box-10").on({
        click: function(){
            $(this).css("background-color", "red");
        },
        dblclick: function(){
            $(this).css("background-color", "green");
        },
        mouseenter: function(){
            $(this).css("background-color", "blue");
        },
        mouseleave: function(){
            $(this).css("background-color", "yellow");
            $(this).css("color", "black");
        },
        mousedown: function(){
            $(this).css("background-color", "violet");
        },
        mouseup: function(){
            $(this).css("background-color", "pink");
        },
        focus: function(){
            $(this).css("background-color", "orange");
        },
        blur: function(){
            $(this).css("background-color", "brown");
        }
    });
});