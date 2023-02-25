// Get a handle to the player1
var player1 = document.querySelectorAll('#gossVideo1') ? document.querySelectorAll('#gossVideo1') : document.querySelector('#gossVideo1');
var btnPlayPause = document.getElementById('btnPlayPause');
var btnMute = document.getElementById('btnMute');
var topProgressBar1 = document.getElementById('top-progress-bar1');
var bottomProgressBar1 = document.getElementById('bottom-progress-bar1');
var PlayButton1 = document.querySelectorAll("#PlayButton1") ? document.querySelectorAll("#PlayButton1") : document.querySelector("#PlayButton1") ;
localStorage.setItem('endBtn1', `<i id="PlayButtonIcon1" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`)
localStorage.setItem('pauseBtn1', `<i id="PlayButtonIcon1" class="fas fa-play" aria-hidden="true"></i> Continue Watching `)
localStorage.setItem('playBtn1', `<i id="PlayButtonIcon1" class="fas fa-pause" aria-hidden="true"></i> &nbsp; Keep Watching `)
localStorage.setItem('initialBtn1', `<i id="PlayButtonIcon1" class="fas fa-play"></i> &nbsp;Play Video`)
var canvas1 = document.getElementById('canvasId1'); 
var context1 = canvas1.getContext('2d');

window.addEventListener('load', function() {

    if (topProgressBar1.value === 0) {
        if (PlayButton1.length) {
            for (let i = 0 ; i < PlayButton1.length ; i++) {
                 PlayButton1[i].innerHTML = localStorage.getItem("initialBtn1")
            }
        } else {
             PlayButton1.innerHTML = localStorage.getItem("initialBtn1")
        }
    } else if (topProgressBar1.value > 0 && topProgressBar1.value <= 99) {
        if (PlayButton1.length) {
            for (let i = 0 ; i < PlayButton1.length ; i++) {
                 PlayButton1[i].innerHTML = localStorage.getItem('pauseBtn1')
            }
        } else {
             PlayButton1.innerHTML = localStorage.getItem("pauseBtn1")
        }
    } else {
        if (PlayButton1.length) {
            for (let i = 0 ; i < PlayButton1.length ; i++) {
                 PlayButton1[i].innerHTML = localStorage.getItem('endBtn1')
            }
        } else {
             PlayButton1.innerHTML = localStorage.getItem('endBtn1')
        }
    }

    // for canvas draw
    if (localStorage.getItem("image1")) {
        let img = new Image();
        img.src = localStorage.getItem("image1");

        img.onload = function() {
            context1.drawImage(img, 0, 0);
        };
    }

    // for video watch count
   if(localStorage.getItem('watchCount1')){
       document.querySelector('#watched1 .status').innerHTML  ='Views'
    document.querySelector('#watched1 .statusCount').innerHTML =  localStorage.getItem('watchCount1') 
      
   }

})

// document.getElementById('btnFullScreen1').enabled = true;


        player1.addEventListener('timeupdate', updateprogressBar1, false);
player1.addEventListener('play', function() {
  
     player1.onended = function(){
      if(document.querySelectorAll('#watched1 .statusCount').innerText == ''){
            document.querySelectorAll('#watched1 .statusCount').innerHTML =0
            document.querySelectorAll('#watched1 .status').innerHTML = "watched"
        }
        
      document.querySelectorAll('#watched1 .statusCount').innerHTML =  parseInt(document.querySelector('#watched1 .statusCount').innerHTML) + 1
    localStorage.setItem('watchCount1',document.querySelector('#watched1 .statusCount').innerText)
   
    }
       
            PlayButton1.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-pause" aria-hidden="true"></i> &nbsp; Keep Watching ` ; 
        
    }, false);



player1.addEventListener('pause', function() {
    
    
    PlayButton1.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
}, false);

player1.addEventListener('ended', function() {
    
    PlayButton1.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`;
   

    this.pause();
}, false);



function playPauseVideo1() {
    var element = document.getElementById("PlayButtonIcon1");
    if (player1.paused || player1.ended) {
        //debugger;
        var isClassExist = hasClass(element, "fa-play");
        if (isClassExist === true) {
            removeClass(element, "fa-play");
            addClass(element, "fa-pause");
            
            PlayButton1.innerHTML = localStorage.getItem('pauseBtn1')

        }
        player1.play();
    } else {
        var isClassExist = hasClass(element, "fa-pause");
        if (isClassExist === true) {
            removeClass(element, "fa-pause");
            addClass(element, "fa-play");
            
            PlayButton1.innerHTML = localStorage.getItem('pauseBtn1')
        }
        player1.pause();
    }
}


function updateprogressBar1() {
    var percentage = Math.floor((100 / player1.duration) * player1.currentTime);
    topProgressBar1.value = percentage;
    bottomProgressBar1.value = percentage;
    topProgressBar1.innerHTML = percentage + '% played';
    bottomProgressBar1.innerHTML = percentage + '% played';
    localStorage.setItem("Video1WatchPercentage", percentage);
    localStorage.setItem("Video1EndedTime", player1.currentTime);
     canvas1.style.display = 'block';
    draw1(player1, canvas1);
}

function pauseVid1() {
    //debugger;
    var percentage = Math.floor((100 / player1.duration) * player1.currentTime);
    if (percentage > 0 && percentage < 100) {
        console.log(this)
        var element = document.getElementById("PlayButtonIcon1");
        var isClassExist = hasClass(element, "fa-pause");
        if (isClassExist === true) {
            removeClass(element, "fa-pause");
            addClass(element, "fa-play");
            
            PlayButton1.innerHTML = localStorage.getItem('playBtn1')
        }
    }

    player1.pause();
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
function draw1(video, canvas) {

    context1.drawImage(video, 0, 0, canvas.width, canvas.height);
    localStorage.setItem("image1", canvas1.toDataURL("image/jpg"));


}
function toggleFullScreen1() {


    if (player1.requestFullscreen)
        if (document.fullScreenElement) {
            document.cancelFullScreen();
        } else {
            player1.requestFullscreen();
        }
    else if (player1.msRequestFullscreen)
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            player1.msRequestFullscreen();
        }
    else if (player1.mozRequestFullScreen)
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            player1.mozRequestFullScreen();
        }
    else if (player1.webkitRequestFullscreen)
        if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        } else {
            player1.webkitRequestFullscreen();
        }
    else {
        alert("Fullscreen API is not supported");

    }
}



updateVideo2TimeWithBar();

function updateVideo2TimeWithBar() {
    var player1 = document.getElementById('gossVideo1');
    topProgressBar1.value = localStorage.getItem("Video1WatchPercentage");
    topProgressBar1.innerHTML = localStorage.getItem("Video1WatchPercentage") + '% played';
    bottomProgressBar1.value = localStorage.getItem("Video1WatchPercentage");
    bottomProgressBar1.innerHTML = localStorage.getItem("Video1WatchPercentage") + '% played';
    player1.currentTime = parseFloat(localStorage.getItem("Video1EndedTime"));
  
}