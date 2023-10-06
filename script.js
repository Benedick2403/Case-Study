document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".LoginPop").classList.add("active");
});

document.querySelector(".LoginPop .close-btn").addEventListener("click",function(){
    document.querySelector(".LoginPop").classList.remove("active");
});

function showPass(){
    var showBtn = document.getElementById("viewPass");
    var show = document.getElementById("password");

    if (show.type == "password"){
        show.type = "text";
        showBtn.style.color = "red"
        showBtn.title = "Hide password"
    }
    else{
        show.type = "password"
        showBtn.style.color = "black"
        showBtn.title = "Show password"
    }
}

function watchVid(){
    var watch = document.getElementById("viewVid");
    var trailer = document.getElementById("trailerVid");
    var ponyoTrailer = document.getElementById("ponyoTrailer");

    if (trailer.style.opacity == 0){
        trailer.style.opacity = 1;
        trailer.style.zIndex = 3;
        ponyoTrailer.play();
    }
}

document.addEventListener("keydown", function (board) {
    if (board.keyCode == 27) {
        // Set the trailer's opacity to 0
        var trailer = document.getElementById("trailerVid");
        trailer.style.opacity = 0;
        trailer.style.zIndex = -1;
        ponyoTrailer.pause();
    }
});