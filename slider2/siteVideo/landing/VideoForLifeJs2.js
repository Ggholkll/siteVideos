// Get a handle to the player2
var player2 = document.getElementById('gossVideo2');
var btnPlayPause = document.getElementById('btnPlayPause');
var btnMute = document.getElementById('btnMute');
var topProgressBar2 = document.getElementById('top-progress-bar2');
var bottomProgressBar2 = document.getElementById('bottom-progress-bar2');
var PlayButton2 = document.getElementById("PlayButton2");
localStorage.setItem('endBtn2', `<i id="PlayButtonIcon2" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`)
localStorage.setItem('pauseBtn2', `<i id="PlayButtonIcon2" class="fas fa-play" aria-hidden="true"></i> Continue Watching `)
localStorage.setItem('playBtn2', `<i id="PlayButtonIcon2" class="fas fa-pause" aria-hidden="true"></i> &nbsp; Keep Watching `)
localStorage.setItem('initialBtn2', `<i id="PlayButtonIcon2" class="fas fa-play"></i> &nbsp;Play Video`)
var canvas2 = document.getElementById('canvasId2');
var context2 = canvas2.getContext('2d');

var watched = false;

window.addEventListener('load', function() {

    if (topProgressBar2.value === 0) {
        PlayButton2.innerHTML = localStorage.getItem("initialBtn2")
    } else if (topProgressBar2.value > 0 && topProgressBar2.value <= 99) {
        PlayButton2.innerHTML = localStorage.getItem('pauseBtn2')
    } else {
        PlayButton2.innerHTML = localStorage.getItem('endBtn2')
    }

        // for canvas draw

    if (localStorage.getItem("image2")) {
        let img = new Image();
        img.src = localStorage.getItem("image2");

        img.onload = function() {
            context2.drawImage(img, 0, 0);
        };
    }

     // for video watch count
   if(localStorage.getItem('watchCount2') > 0 ){
       document.querySelector('#watched2 .status').innerHTML  ='Views'
    document.querySelector('#watched2 .statusCount').innerHTML =  localStorage.getItem('watchCount2') 
      
   }
})


player2.addEventListener('timeupdate', updateprogressBar2, false);
player2.addEventListener('play', function() {
    player2.onended = function () {
        if(document.querySelector('#watched2 .statusCount').innerText == ''){
            document.querySelector('#watched2 .statusCount').innerHTML =0
            document.querySelector('#watched2 .status').innerHTML = "watched"
        }
      document.querySelector('#watched2 .statusCount').innerHTML =  parseInt(document.querySelector('#watched2 .statusCount').innerHTML) + 1
    localStorage.setItem('watchCount2',document.querySelector('#watched2 .statusCount').innerText)
   
        }

    PlayButton2.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-pause" aria-hidden="true"></i> &nbsp; Keep Watching `;
}, false);



player2.addEventListener('pause', function() {
  

    PlayButton2.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
}, false);

player2.addEventListener('ended', function() {

    PlayButton2.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`;
      

    this.pause();
}, false);

function playPauseVideo2() {
    var element = document.getElementById("PlayButtonIcon2");
    if (player2.paused || player2.ended) {
        //debugger;
        var isClassExist = hasClass(element, "fa-play");
        if (isClassExist === true) {
            removeClass(element, "fa-play");
            addClass(element, "fa-pause");
        
            PlayButton2.innerHTML = localStorage.getItem('pauseBtn2')
        }
        player2.play();
    } else {
        var isClassExist = hasClass(element, "fa-pause");
        if (isClassExist === true) {
            removeClass(element, "fa-pause");
            addClass(element, "fa-play");
        
            PlayButton2.innerHTML = localStorage.getItem('pauseBtn2')
        }
        player2.pause();
    }
}


function updateprogressBar2() {
    var percentage = Math.floor((100 / player2.duration) * player2.currentTime);
    topProgressBar2.value = percentage;
    bottomProgressBar2.value = percentage;
    topProgressBar2.innerHTML = percentage + '% played';
    bottomProgressBar2.innerHTML = percentage + '% played';
    localStorage.setItem("Video2WatchPercentage", percentage);
    localStorage.setItem("Video2EndedTime", player2.currentTime);
       canvas2.style.display = 'block';
    draw2(player2, canvas2);
}

function pauseVid2() {
    //debugger;
    var percentage = Math.floor((100 / player2.duration) * player2.currentTime);
    if (percentage > 0 && percentage < 100) {
        console.log(this)
        var element = document.getElementById("PlayButtonIcon2");
        var isClassExist = hasClass(element, "fa-pause");
        if (isClassExist === true) {
            removeClass(element, "fa-pause");
            addClass(element, "fa-play");
        
            PlayButton2.innerHTML =  localStorage.getItem('playBtn2')
        }
    }

    player2.pause();
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function toggleFullScreen2() {


    if (player2.requestFullscreen)
        if (document.fullScreenElement) {
            document.cancelFullScreen();
        } else {
            player2.requestFullscreen();
        }
    else if (player2.msRequestFullscreen)
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            player2.msRequestFullscreen();
        }
    else if (player2.mozRequestFullScreen)
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            player2.mozRequestFullScreen();
        }
    else if (player2.webkitRequestFullscreen)
        if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        } else {
            player2.webkitRequestFullscreen();
        }
    else {
        alert("Fullscreen API is not supported");

    }
}

function draw2(video, canvas) {
    context2.drawImage(video, 0, 0, canvas.width, canvas.height);

    localStorage.setItem("image2", canvas2.toDataURL("image/jpg"));
}

updateVideo3TimeWithBar();

function updateVideo3TimeWithBar() {
  
    topProgressBar2.value = localStorage.getItem("Video2WatchPercentage");
    topProgressBar2.innerHTML = localStorage.getItem("Video2WatchPercentage") + '% played';
    //bottomProgressBar2.value = localStorage.getItem("Video2WatchPercentage");
    //bottomProgressBar2.innerHTML = localStorage.getItem("Video2WatchPercentage") + '% played';
    player2.currentTime = parseFloat(localStorage.getItem("Video2EndedTime"));
      
}