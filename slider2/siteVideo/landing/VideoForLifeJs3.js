// Get a handle to the playersssss
var playersssss = document.querySelectorAll("#gossVideo").length ? document.querySelectorAll("#gossVideo") : document.querySelector("#gossVideo") ;
var btnPlayPause = document.getElementById("btnPlayPause");
var btnMute = document.getElementById("btnMute");
var topProgressBar = document.querySelectorAll("#top-progress-bar") ? document.querySelectorAll("#top-progress-bar") : document.querySelector("#top-progress-bar");
//var bottomProgressBar = document.getElementById("bottom-progress-bar"); 
let bool = true ; 
var PlayButton = document.querySelectorAll("#PlayButton").length ? document.querySelectorAll("#PlayButton") : document.querySelector("#PlayButton");
let PlayIndex = 0 ; 
let index1 = 0 ; 
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
// let video = $('#videoSourceModal').attr('src', historyList[randomVideo].videoSrc)
function addvidss(index) {
 let playersssss1 = document.querySelectorAll("#gossVideo") ? document.querySelectorAll('#gossVideo') : document.querySelector('#gossVideo') ;
  if (playersssss1.length) { 
  let videos1 ; 
  PlayIndex = index ; 
  let playyers1 = document.querySelectorAll('.plyyer source') ;
  $(playersssss1).get(index).load(); 
  $(playersssss1).get(index).play();  
 videos1 = playyers1[index + 4].src ; 
  
   $(playersssss1).attr("src", `${videos1}`);   
  console.log("video", historyList[randomVideo].videoSrc); 
  } else {
  $(playersssss1).get(0).load(); 
  $(playersssss1).get(0).play(); 
  $(playersssss1).attr("src", `${"../02.mp4"}`);  
  console.log("video", historyList[randomVideo].videoSrc);
  
  
  }
  
}
function PlayIndex1(index) {
  PlayIndex = index ;
}
if (playersssss.length ) {
  for (let i = 0 ; i < playersssss.length ; i++ ) {
    playersssss[i].addEventListener(
  "pause",
  function () {
    PlayButton[PlayIndex].innerHTML = localStorage.getItem("pauseBtn") ;
  },
  false
);
  }

} 
if (localStorage.getItem("image")) {
    let img = new Image();
    img.src = localStorage.getItem("image");
    img.onload = function () {
      for (let i = 0 ; i < context.length ; i++ ) {
         context[i].drawImage(img, 0, 0);
      }
     
    };
  }
  // for video watch count
  /*
  if (localStorage.getItem("watchCount") > 0) { 
    document.querySelector("#watched .status").innerHTML = " I Watched"; 
    document.querySelector("#watched .statusCount").innerHTML = 
      localStorage.getItem("watchCount"); 
  }
  */





function playPauseVideo1(index) {
  var element = document.getElementById("PlayButtonIcon");
  if (playersssss.paused || playersssss.ended) {
    //debugger;
    var isClassExist = hasClass(element, "fa-play");
    if (isClassExist === true) {
      removeClass(element, "fa-play");
      addClass(element, "fa-pause");
      if (PlayButton.length) {
         PlayButton[index].innerHTML = localStorage.getItem("pauseBtn");
         playersssss.play(index);
       } else {
        PlayButton.innerHTML = localStorage.getItem("pauseBtn");
        playersssss.play();
       }
    }

    
  } else {
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      if (PlayButton.length) {
         PlayButton[index].innerHTML = localStorage.getItem("pauseBtn"); 
         playersssss[index].pause(); 
       } else {
        PlayButton.innerHTML = localStorage.getItem("pauseBtn");
        playersssss.pause();
       }
     
    }
    
  }
}

window.addEventListener("load", function () {
  let mppLinkIcon ; 
  
  function resizeAddProg () {
    const mppLinkIcon1 = document.querySelectorAll('.mpp-link-icon') ? document.querySelectorAll('.mpp-link-icon') : document.querySelector('.mpp-link-icon') ;
  const mppLinkIcon2 = document.querySelectorAll('.mpp-buttons') ? document.querySelectorAll('.mpp-buttons') : document.querySelector('.mpp-buttons') ;
  const mppBlock = document.querySelectorAll('.mpp-block') ? document.querySelectorAll('.mpp-block') : document.querySelector('.mpp-block') ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
  
  
  if (Width > 1400 ) {
    for (let i = 0 ; i < 4 ; i++ ) {
    let mppLinkIcon3 = mppLinkIcon2[i] ; 
    mppLinkIcon3.remove() ; 
  }
  }
  if (Width < 1400) {
    for (let i = 0 ; i < 3 ; i++ ) {
    let mppLinkIcon3 = mppLinkIcon2[i] ; 
    mppLinkIcon3.remove() ; 
  }
  }
  
  mppLinkIcon =  document.querySelectorAll('.mpp-buttons') ? document.querySelectorAll('.mpp-buttons') : document.querySelector('.mpp-buttons') ; 
 } 
setTimeout(function () {
 resizeAddProg () ;
} , 1) 


  const videoMppHidden = document.querySelectorAll('.mpp-hidden') ? document.querySelectorAll('.mpp-hidden') : document.querySelector('.mpp-hidden') ; 

  for (let i = 0 ; i < topProgressBar.length ; i++) {  
  if (topProgressBar[i] && topProgressBar[i].value === 0) { 
    if (PlayButton.length) {
                 PlayButton[i].innerHTML = localStorage.getItem("initialBtn")
        } else {
             PlayButton.innerHTML = localStorage.getItem("initialBtn")
        }
          
  
  } else if (topProgressBar[i].value > 0 && topProgressBar[i].value <= 99) {
     if (PlayButton.length) {
                  PlayButton[i].innerHTML = localStorage.getItem("pauseBtn")
            
        } else {
             PlayButton.innerHTML = localStorage.getItem("pauseBtn")
        }
    
 } else {
  if (PlayButton.length) {
             PlayButton[i].innerHTML = localStorage.getItem("endBtn")
        } else {
             PlayButton.innerHTML = localStorage.getItem("endBtn")
        }
              
  } 
}
  // for canvas draw

 

if (PlayButton.length) {
  for (let i = 0 ; i < PlayButton.length ; i++ ) {
    PlayButton[i].addEventListener('click' , function () {
        addvidss(i) ; 
        playPauseVideo(i) ; 
        bool = true ; 
        PlayIndex = i ; 
        index1 = 1 ; 
    })
  }
} else {
  PlayButton.addEventListener('click' , function () { 
        addvidss() ;  
        playPauseVideo() ; 
        bool = true ; 
        index1 = 1 ; 
    }) 
} 
function clickMppLinkIcon() {
  for (let i = 0 ; i < mppLinkIcon.length ; i ++ ) { 
   mppLinkIcon[i].addEventListener('click' , function () { 
    let index = i ;  
    PlayButton[index].click() ; 

   })  
  }
} 

setTimeout(function () {
  clickMppLinkIcon() ; 
}, 2) ; 


  
  
if (playersssss.length) { 
  for (let i = 0 ; i < playersssss.length ; i++ ) {
     playersssssin = playersssss[i] ; 
  playersssssin.addEventListener("timeupdate", function() {
    updateProgressBar1(PlayIndex) ; 
  } , false);
 
playersssss[i].addEventListener( 
  "play",
  function () { 
    playersssss[i].onended = function () {
      if (document.querySelector("#watched .statusCount")[i].innerText == "") {
        document.querySelector("#watched .statusCount")[i].innerHTML = 0; 
        document.querySelector("#watched .status")[i].innerHTML = "watched"; 
      }

      document.querySelector("#watched .statusCount")[i].innerHTML =
        parseInt(document.querySelector("#watched .statusCount")[i].innerHTML) + 1;
      localStorage.setItem(
        "watchCount",
        document.querySelector("#watched .statusCount")[i].innerText
      );
    }; 
    PlayButton[PlayIndex].innerHTML = localStorage.getItem("playBtn");
  },
  false
);
}

} else {
  playersssss.addEventListener("timeupdate", updateProgressBar, false);
  playersssss.addEventListener( 
  "play",
  function () {
    playersssss.onended = function () {
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
let booleans = 'trues' ; 
document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-buttons-top') || e.target.closest('.mpp-top')) {
    booleans = false ; 
     
  } 
  if (e.target.closest('.mpp-buttons')) { 
    booleans =  true  ;   
   
  }
  if (e.target.closest('#PlayButton')) { 
    booleans =  true  ;   
   
  }


})

function updateProgressBar1(ind , boolean) { 
   if (booleans) {  
    let percantages1 ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth ) ;
  let index = parseInt(ind) ; 
  if (topProgressBar.length ) {  
     percantages1 = Math.floor((100 / playersssss[0].duration) * playersssss[0].currentTime);
       for (let i = 0 ; i < topProgressBar.length ; i++) { 
      
      if (i === index) { 
     
        topProgressBar[i].value =  percantages1;  
      topProgressBar[i].innerHTML = percantages1 + "% played"; 
      
    }
     
      
    }
    
    /*
    if (boolean) {
      for (let i = 0 ; i < topProgressBar.length ; i++) { 
      topProgressBar[i].value =  percantages1;  
      topProgressBar[i].innerHTML = percantages1 + "% played";  
       if (i !== (ind - 4)) {  
         topProgressBar[i].value =  0 ; 
         topProgressBar[i].innerHTML = 0 + "% played"; 
      } 
    }
    for (let i = 0 ; i < topProgressBar1.length ; i++ ) {
      topProgressBar1[i].value =  0 ; 
      topProgressBar1[i].innerHTML = 0 + "% played"; 
      if (i === ind) {
        topProgressBar1[i].value =  percantages1 ; 
        topProgressBar1[i].innerHTML = percantages1 + "% played"; 
      } 
    }
    }
    
    */

    
     
  } else {
    percantages1 = Math.floor((100 / playersssss.duration) * playersssss.currentTime);
    topProgressBar.value = percantages1; 
    topProgressBar.innerHTML = percantages1 + "% played";
  } 
      
  //bottomProgressBar.value = percantages1; 
  // bottomProgressBar.innerHTML = percantages1 + "% played"; 
  localStorage.setItem("VideoWatchPercentage", percantages1); 
  if (playersssss.length) {
      if (Width > 1400) {
      localStorage.setItem("VideoEndedTime", playersssss[ind].currentTime);
      canvas[ind].style.display = "block" ;  
     draw(playersssss[1] , canvas[ind] , ind); 
   
   } else {
    localStorage.setItem("VideoEndedTime", playersssss[ind].currentTime);
      canvas[ind].style.display = "block" ;  
     draw(playersssss[1] , canvas[ind] , ind); 
   
    }
      
    
    
     
  } else {
    localStorage.setItem("VideoEndedTime", playersssss.currentTime);
   canvas.style.display = "block";
   draw(playersssss , canvas);
  }
  
  }
  
}
});
function pauseVid() {
  //debugger;

  var percantages1 = Math.floor((100 / playersssss.duration) * playersssss.currentTime);
  if (percantages1 > 0 && percantages1 < 100) {
    var element = document.getElementById("PlayButtonIcon");
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");

      PlayButton[0].innerHTML = localStorage.getItem("playBtn");
    }
  }

  playersssss[0].pause(); 
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
  if (playersssss.requestFullscreen)
    if (document.fullScreenElement) {
      document.cancelFullScreen();
    } else {
      playersssss.requestFullscreen();
    }
  else if (playersssss.msRequestFullscreen)
    if (document.msFullscreenElement) {
      document.msExitFullscreen();
    } else {
      playersssss.msRequestFullscreen();
    }
  else if (playersssss.mozRequestFullScreen)
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
    } else {
      playersssss.mozRequestFullScreen();
    }
  else if (playersssss.webkitRequestFullscreen)
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    } else {
      playersssss.webkitRequestFullscreen();
    }
  else {
    alert("Fullscreen API is not supported");
  }
}

function draw(video, canvas , index) {

  context[index].drawImage(video, 0, 0, canvas.width, canvas.height); 
  localStorage.setItem("image", canvas[index].toDataURL("image/jpg"));
}

updateVideo1TimeWithBar();

function updateVideo1TimeWithBar() { 
  var playersssss = document.getElementById("gossVideo");
  topProgressBar.value = historyList[randomVideo].progress; 
  topProgressBar.innerHTML = historyList[randomVideo].percantages1;
  //bottomProgressBar.value = historyList[randomVideo].progress;
  //bottomProgressBar.innerHTML =
   // historyList[randomVideo].percantages1 + "% played";

  playersssss.currentTime = parseFloat(localStorage.getItem("VideoEndedTime")); 
}
