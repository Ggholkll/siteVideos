// Get a handle to the playerssss
var playerssss = document.querySelectorAll("#gossVideo") ? document.querySelectorAll("#gossVideo") : document.querySelector("#gossVideo") ;
var btnPlayPause = document.getElementById("btnPlayPause");
var btnMute = document.getElementById("btnMute");
var topProgressBare = document.querySelectorAll("#top-progress-bar") ? document.querySelectorAll("#top-progress-bar") : document.querySelector("#top-progress-bar");
var bottomProgressBar = document.getElementById("bottom-progress-bar");
var PlayButton = document.querySelectorAll("#PlayButton") ? document.querySelectorAll("#PlayButton") : document.querySelector("#PlayButton") ;
localStorage.setItem(
  "endBtn",
  `<i id="PlayButtonIcon" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`
);
localStorage.setItem( 
  "pauseBtn",
  `<i id="PlayButtonIcon" class="fas fa-play" aria-hidden="true"></i> keep Watching `
);
localStorage.setItem(
  "playBtn",
  `<i id="PlayButtonIcon" class="fas fa-pause" aria-hidden="true"></i> &nbsp; You're Watching `
);
localStorage.setItem(
  "initialBtn",
  `<i id="PlayButtonIcon" class="fas fa-play"></i> &nbsp;Play Video`
);
var canvas = document.querySelectorAll('#canvasId') ? document.querySelectorAll("#canvasId") : document.querySelector("#canvasId"); 
let context ; 
if (canvas.length ) { 
  context = [] ; 
  for (let i = 0 ; i < canvas.length ; i++ ) {
  context[i] = canvas[i].getContext("2d"); 
  } 
   
} else { 
  context = canvas.getContext("2d"); 
}

let historyList = JSON.parse(window.localStorage.getItem("historyVideos"));
let randomVideo = Math.floor(Math.random() * historyList.length);
let indexPlay = 0 ; 
let categorys = [
    'actions' , 'comics' , 'catastrophic' , 'adventure'  
]
let videos = [
    '../02.mp4' , '../src/S2-4.mp4' , '../src/S2-2.mp4'  , '../src/S1-4.mp4' 
] ; 
// let video = $('#videoSourceModal').attr('src', historyList[randomVideo].videoSrc)
function addvidss(index) {
  let playerssss1 = document.querySelectorAll("#gossVideo").length ? document.querySelectorAll("#gossVideo") : document.querySelector("gossVideo") ;
  if (playerssss1.length) {
  $(playerssss1).get(index).load();
    $(playerssss1).get(index).play(); 
    indexPlay = index ; 
    $(playerssss1).attr("src", `${videos[index]}`); 
    $(playerssss1).attr("data-theme", `${categorys[index]}`); 
   
  } else {
     $(playerssss1).get(0).load();
  $(playerssss1).get(0).play();
  $(playerssss1).attr("src", `${"../02.mp4"}`); 
  console.log("video", historyList[randomVideo].videoSrc); 
  }
  
}
window.addEventListener("load", function () {
  if (PlayButton.length) {
   for (let i  = 0 ; i < PlayButton.length ; i++ ) {   
    if (topProgressBare[i] && topProgressBare[i].value === 0) { 
      PlayButton[i].innerHTML = localStorage.getItem("initialBtn"); 
    } else if (topProgressBare[i].value > 0 && topProgressBare[i].value <= 99) {
    PlayButton[i].innerHTML = localStorage.getItem("pauseBtn"); 
   } else {
    PlayButton[i].innerHTML = localStorage.getItem("endBtn"); 
   }
  }
}
  // for canvas draw
  if (localStorage.getItem("image")) {
    let img = new Image();
    img.src = localStorage.getItem("image");
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
  }
  // for video watch count
  for (let i = 0 ; i < PlayButton.length ; i++ ) { 
    if (localStorage.getItem("watchCount" + `${i}`) > 0) {
    document.querySelectorAll("#watched .status")[i].innerHTML = " I Watched";
    document.querySelectorAll("#watched .statusCount")[i].innerHTML =
      localStorage.getItem("watchCount" + `${i}`);   
   }
  }
  
});

if (playerssss.length) { 
  for (let i = 0 ; i < playerssss.length ; i++ ) { 
     playerssssin = playerssss[i] ; 
  playerssssin.addEventListener("timeupdate",  function () {
      updateProgressBar1(indexPlay) ; 
  }  , false);
playerssss[i].addEventListener( 
  "play",
  function () { 
    playerssss[i].onended = function () {
      if (document.querySelectorAll("#watched .statusCount")[indexPlay].innerText == "") {
        document.querySelectorAll("#watched .statusCount")[indexPlay].innerHTML = 0; 
        document.querySelectorAll("#watched .status")[indexPlay].innerHTML = "watched"; 
      }

      document.querySelectorAll("#watched .statusCount")[indexPlay].innerHTML =
        parseInt(document.querySelectorAll("#watched .statusCount")[indexPlay].innerHTML) + 1;
      localStorage.setItem(
        "watchCount" + `${indexPlay}`, 
        document.querySelectorAll("#watched .statusCount")[indexPlay].innerText
      );
    }; 
    PlayButton[indexPlay].innerHTML = localStorage.getItem("playBtn");
  },

  false
);
}

} else {
  playerssss.addEventListener("timeupdate", updateProgressBar1, false);
  playerssss.addEventListener( 
  "play",
  function () {
    playerssss.onended = function () {
      if (document.querySelector("#watched .statusCount").innerText == "") {
        document.querySelector("#watched .statusCount").innerHTML = 0;
        document.querySelector("#watched .status").innerHTML = "watched";
      }
      document.querySelector("#watched .statusCount").innerHTML =
        parseInt(document.querySelector("#watched .statusCount").innerHTML) + 1;
      localStorage.setItem(
        "watchCount",
        document.querySelector("#watched .statusCount").innerText
      );
    };
    PlayButton.innerHTML = localStorage.getItem("playBtn");
  },
  false
);
}

if (playerssss.length ) {
  for (let i = 0 ; i < playerssss.length ; i++ ) {
  playerssss[i].addEventListener( 
  "pause",          
  function () { 
    PlayButton[indexPlay].innerHTML = localStorage.getItem("pauseBtn"); 
  },
  false
);

}

} else {
  playerssss.addEventListener(
  "pause",
  function () {
    PlayButton.innerHTML = localStorage.getItem("pauseBtn");
  },
  false
);




}

if (playerssss.length ) {
  for (let i = 0 ; i < playerssss.length ; i++ ) {
  playerssss[i].addEventListener(
  "ended",
  function () {
    PlayButton[indexPlay].innerHTML = localStorage.getItem("endBtn");
       
    this.pause();
  },
  false
);
}
} else {
  playerssss.addEventListener(
  "ended",
  function () {
    PlayButton.innerHTML = localStorage.getItem("endBtn");

    this.pause();
  },
  false
);
}
if (PlayButton.length) {
  for (let i = 0 ; i < PlayButton.length ; i++ ) {
    PlayButton[i].addEventListener('click' , function () {
        addvidss(i) ; 
        playPauseVideo(i) ;
        indexPlay = i ;  
        playerssss[0].classList.remove('mpp-hidden')
  
        
    })
  }
} else {
  PlayButton.addEventListener('click' , function () { 
        addvidss() ;  
        playPauseVideo() ; 
    }) 
} 
function playPauseVideo(index) {
  var element = document.getElementById("PlayButtonIcon");
  if (playerssss.paused || playerssss.ended) {
    //debugger;
    var isClassExist = hasClass(element, "fa-play"); 
    if (isClassExist === true) {
      removeClass(element, "fa-play");
      addClass(element, "fa-pause");
      if (PlayButton.length) {
         PlayButton[index].innerHTML = localStorage.getItem("pauseBtn"); 
         playerssss.play(index); 
       } else {
        PlayButton.innerHTML = localStorage.getItem("pauseBtn");
        playerssss.play(); 
       }
    }

    
  } else {
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      if (PlayButton.length) {
         PlayButton[index].innerHTML = localStorage.getItem("pauseBtn"); 
         playerssss[index].pause(); 
       } else {
        PlayButton.innerHTML = localStorage.getItem("pauseBtn");
        playerssss.pause();
       }
     
    }
    
  }
}

let booleans11 = 'trues' ; 
document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-link-icon')) {
    booleans11 = false ; 
  }

  if (e.target.closest('#PlayButton')) {
    booleans11 = true ; 
  }
})

function updateProgressBar1(index) { 
  if (booleans11) { 
    let playerssss2 = document.querySelectorAll('#gossVideo') ? document.querySelectorAll('#gossVideo') : document.querySelector('#gossVideo'); 
  if (playerssss2[0].getAttribute('src') === videos[index]) { 
    var percentage = Math.floor((100 / playerssss[0].duration) * playerssss[0].currentTime);
    if (topProgressBare.length ) { 
      console.log('topprogressss') ; 
         topProgressBare[index].value = percentage;  
          //bottomProgressBar.value = percentage; 
         topProgressBare[index].innerHTML = percentage + "% played";
          
    }
 // bottomProgressBar.innerHTML = percentage + "% played";
  localStorage.setItem("VideoWatchPercentage", percentage); 
  localStorage.setItem("VideoEndedTime", playerssss[index].currentTime); 
  for (let i = 0 ; i < canvas.length ; i++ ) { 
    if (i == index) {  
      canvas[i].style.display = "block";
     draw(playerssss[i], canvas[i] , i);  
    }
  }
   
  }
  }
  
}

function pauseVid() {
  //debugger;
  var percentage = Math.floor((100 / playerssss.duration) * playerssss.currentTime);
  if (percentage > 0 && percentage < 100) {
    var element = document.getElementById("PlayButtonIcon");
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");

      PlayButton.innerHTML = localStorage.getItem("playBtn");
    }
  }

  playerssss.pause();
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

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}
function toggleFullScreen() {
  if (playerssss.requestFullscreen)
    if (document.fullScreenElement) {
      document.cancelFullScreen();
    } else {
      playerssss.requestFullscreen();
    }
  else if (playerssss.msRequestFullscreen)
    if (document.msFullscreenElement) {
      document.msExitFullscreen();
    } else {
      playerssss.msRequestFullscreen();
    }
  else if (playerssss.mozRequestFullScreen)
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
    } else {
      playerssss.mozRequestFullScreen();
    }
  else if (playerssss.webkitRequestFullscreen)
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    } else {
      playerssss.webkitRequestFullscreen();
    }
  else {
    alert("Fullscreen API is not supported");
  }
}

function draw(video, canvas , index) {
  context[index].drawImage(video, 0, 0, canvas.width, canvas.height);
  localStorage.setItem("image", canvas.toDataURL("image/jpg")); 
}


updateVideo1TimeWithBar();

function updateVideo1TimeWithBar() {
  var playerssss = document.getElementById("gossVideo");
  topProgressBare.value = historyList[randomVideo].progress;
  topProgressBare.innerHTML = historyList[randomVideo].percentage;
   // bottomProgressBar.value = historyList[randomVideo].progress;
   // bottomProgressBar.innerHTML =
    // historyList[randomVideo].percentage + "% played";

  playerssss.currentTime = parseFloat(localStorage.getItem("VideoEndedTime"));
}
