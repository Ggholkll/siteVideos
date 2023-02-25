jQuery(function ($) {
  function assignSlidesOrigin() {
    $(this)
      .find(".slick-slide")
      .each(function (_, slide) {
        let rect = slide.getBoundingClientRect();
        slide = $(slide);
        slide.removeClass("firster laster");
        if (rect.left < rect.width) {
          slide.addClass("firster");
        } else if (rect.right > window.innerWidth - rect.width) {
          slide.addClass("laster");
        }
      });
  }

  function mobilePauseVideo() {
    if (window.innerWidth <= 480) {
      $(".slick-current video")[0].pause();
    }
  }
  function yususus() {
    $("video").prop("muted", true);
  }

  $(".flickfeed").on("init", yususus);
  $(".flickfeed").on("init", assignSlidesOrigin);
  $(".flickfeed").on("afterChange", assignSlidesOrigin);
  $(".flickfeed").on("beforeChange", mobilePauseVideo);
  $(".flickfeed2").on("init", assignSlidesOrigin);
  $(".flickfeed2").on("afterChange", assignSlidesOrigin);
  $(".flickfeed2").on("beforeChange", mobilePauseVideo);
  $(".flickfeed4").on("init", assignSlidesOrigin);
  $(".flickfeed4").on("afterChange", assignSlidesOrigin); 
  $(".flickfeed4").on("beforeChange", mobilePauseVideo);
  $(".flickfeed3").on("init", assignSlidesOrigin);
  $(".flickfeed3").on("afterChange", assignSlidesOrigin);
  $(".flickfeed3").on("beforeChange", mobilePauseVideo);
  $(".slick-current video").addClass("mpp-hidden");
  $(".slick-current  .mpp-playlist-item-ready").removeClass(
    "mpp-playlist-item-active"
  );
  function getSliderSettings() {
    console.log("calling sliderSetting");
    return {
      dots: true,
      centerMode: true,
      centerPadding: "40px",
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      forceSlidesToScroll: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
  }

  
  /*$( ".slick-slide" ).on("mouseenter touchstart", function() {
              
       if ($(this).hasClass("firster")) {
         //  console.log('firster');
           var hoverslide = $(this);
            $(hoverslide).nextAll().addClass('furthernextslides');
          //  $(hoverslide).prevAll().addClass('prevslides'); 
        
       }else if ($(this).hasClass("laster")){
           var hoverslide = $(this);
            $(hoverslide).prevAll().addClass('furtherprevslides');
        }else{
             var hoverslide = $(this);
            $(hoverslide).nextAll().addClass('nextslides');
            $(hoverslide).prevAll().addClass('prevslides'); 
        }
        
      
    });
	
	
    
    $( ".slick-slide" ).on("mouseleave touchend", function() {
      $(this).parent().find( ".slick-slide" ).removeClass('nextslides');
    $(this).parent().find( ".slick-slide" ).removeClass('prevslides');
      $(this).parent().find( ".slick-slide" ).removeClass('furthernextslides');
      $(this).parent().find( ".slick-slide" ).removeClass('furtherprevslides');
    });*/
  var allVideoss = document.querySelectorAll("video");
  allVideoss.forEach((vidElement) => {
    vidElement.addEventListener(
      "ended",
      (event) => {
        vidElement.classList.add("mpp-hidden");
        // vidElement.classList.add("mpp-hidden");
      },
      false
    );
  });
});
let inHTMLRet = '' ; 
let slidesToScrolls = 1 ; 
let slidesToShows = 1 ; 
let funReturn = true ; 
function getSliderSettings() { 
  console.log("calling sliderSetting");
  funReturn = false ; 
  return {
    dots: true,
    centerMode: true,
    centerPadding: "40px",
    speed: 300,
    slidesToShow: 6 , 
    slidesToScroll: 6 , 
    forceSlidesToScroll: true, 
    
  };
} 

let seasonOne = [
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "1",
    theme: 'catastrophic' , 
    videoSrc: "../02.mp4", 
    imgSrc: "../src/S2-4.png", 
    episodeTitle: "Season One E1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "2",
    videoSrc: "../src/S1-2.mp4", 
    theme: 'actions' , 
   
    imgSrc: "../src/S1-2.png",
    episodeTitle: "Title2Season One E2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false, 
    id: "3", 
    videoSrc: "../src/S1-3.mp4", 
    imgSrc: "../src/S1-3.png", 
    theme: 'adventure' , 
    episodeTitle: "Season One E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "4",
    checked: false,
    theme: 'catastrophic' , 
    videoSrc: "../src/S1-3.mp4",

    imgSrc: "../src/S1-3.png",
    episodeTitle: "Season One E4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "5",
    checked: false,
    theme: 'comics' , 
    videoSrc: "../src/S2-1.mp4",  
    imgSrc: "../src/S2-1.png",  
    episodeTitle: "season 2 E 1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "6",
    theme: 'adventure' , 
    videoSrc: "../src/S2-2.mp4", 
    imgSrc: "../src/S2-2.png",
    episodeTitle: "season 2 E 2",
    episodeTime: "2:00min", 
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "7",
    theme: 'comics' , 
     videoSrc: "../src/S2-3.mp4",
    imgSrc: "../src/S2-3.png",
    episodeTitle: "season 2 E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "8",
    theme: 'actions' , 
    videoSrc: "../src/S2-4.mp4", 
    imgSrc: "../src/S2-4.png", 
    episodeTitle: "season 2 E 4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  }
];
let favVideos = [];
let historyLists = [];
let completeList = [];
let lastIndex = 0;

function endvid(eleee) {
  if (!$(eleee).parents(".slick-slide").hasClass("pupo")) {
    $(eleee).parents(".slick-slide")[0].classList.add("pupo");
    console.log("yessssssssss"); 
  }
  if (!eleee.classList.contains("mpp-hidden")) {
    eleee.classList.add("mpp-hidden");
  }

  $(eleee)
    .parents(".favi")
    .find(".mpp-playlist-item-ready")
    .removeClass("mpp-playlist-item-active");
}

function closebackele(ellee) {
  if ($(ellee).parents(".slick-slide").hasClass("pupo")) {
    $(ellee).parents(".slick-slide").removeClass("pupo"); 
  }
}

function insertToHTML(elAttr , index) { 
  console.log("insert");  
  let index1 = 0 ; 
   for (let i = 0 ; i < seasonOne.length ; i++) {
  if (seasonOne[i].theme === elAttr) { 
  console.log('addSlideeeeeeeees') ;   
    $('.homeSliders1').append(`<article class="mpp-playlist-content plays card yuii favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${seasonOne[i].imgSrc}" src="${seasonOne[i].imgSrc}">
                         <div class="mpp-media">
                            <video class="mpp-video mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
                              <source src="${seasonOne[i].videoSrc}"></sourse>
                            </video>
                         </div>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video" onclick= "addmutes()"></div>
                         </div><div class="item progress-item">

                      </div>
                      </div>
                      
                      <div class="back d-flex flex-column cont">
                         <div class="back-content">
                            <div class="mpp-controls"> 
                               <div class="mpp-contr-btn mpp-link-icon" data-tooltip="Play Now">
                                  <svg key="${seasonOne[i].videoSrc}" onclick="playPauseVideo1(this); runVideo1(this);">
                                     <use xlink:href="#svg-link"></use> 
                                  </svg> 
                                  <span key="${seasonOne[i].id}" style="display: none;" >${seasonOne[i].id}</span>
                               </div>
                               <div key="main-${seasonOne[i].id}" id="mainVideo-${seasonOne[i].id}" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus" key="${seasonOne[i].videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use> 
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${seasonOne[i].episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>

             </article>
  
`);   
      
     index1++ ; 
  }
  
 } 

 return index1 ; 
  // initVideos()
}
let indexPlay2 = 0 ; 

 $(".flickfeed").slick(getSliderSettings()); 
       
function run(boolean , elAttr , index) {
  if (boolean === true && indexPlay2 === 1 ) {   
       insertToHTML(elAttr  ) ;  
       let homeSliderClone = document.querySelector('.homeSliders1').cloneNode(true) ;
       document.querySelector('.homeSliders1').innerHTML = '' ; 
       document.querySelectorAll('#wrap')[index].innerHTML = '' ; 
       if (homeSliderClone.querySelector('.slick-list')) homeSliderClone.querySelector('.slick-list').remove() ; 
       homeSliderClone.classList.remove('homeSliders1') ; 
       document.querySelectorAll('#wrap')[index].append(homeSliderClone) ;  
        
} else {
      insertToHTML(elAttr ) ;  
       let homeSliderClone = document.querySelector('.homeSliders1').cloneNode(true) ; 
       document.querySelector('.homeSliders1').innerHTML = '' ; 
       document.querySelectorAll('#wrap')[index].innerHTML = '' ;  
       if (homeSliderClone.querySelector('.slick-list')) homeSliderClone.querySelector('.slick-list').remove() ; 
       homeSliderClone.classList.remove('homeSliders1') ;  
       document.querySelectorAll('#wrap')[index].append(homeSliderClone) ; 
}
   
  $(".flickfeed4").slick(
    "slickAdd", 
    "",
    $(".flickfeed4").slick(getSliderSettings()) - 1 
  );
  $(".flickfeed2").slick(
    "slickAdd",
    "", 
    $(".flickfeed2").slick(getSliderSettings()) - 1
  );
  $(".flickfeed3").slick( 
    "slickAdd",
    "",
    $(".flickfeed3").slick(getSliderSettings()) - 1
  );
  $(".flickfeed2").slick("refresh");
  
  }
    
// Run Video Button that show the main div for video
     
function runVideo1(elem) {
  let players = document.getElementById("gossVideo");  
  $("#btnTrigger").click();
  var id = $(elem).attr("key");  
  var ido = $(elem).next().attr("key"); 
  console.log(id, "video id"); 
  $(players).get(0).load(); 
  $(players).get(0).play(); 
  $(players).attr("src", id); 
  //   seasonOne.forEach((row)=>{
  //     if(row.videoSrc === id){

  //

  //

  let listys = completeList.map((ioi) => {
    return ioi.id;
  });

  console.log(ido, "kdfi");
  console.log(listys, "listys");
  console.log(completeList, "complate");
  console.log(historyLists, "historyLists");
  historyLists = [
    ...historyLists,
    // ...historyLists.filter((iop) => {
    //   return listys.includes(iop.id) ? null : iop;
    // }),
    ...seasonOne.filter((row) => {
      let exist = false;
      if (row.videoSrc === id) {
        historyLists.forEach((e) => {
          if (e.videoSrc === id) {
            exist = true;
          }
        });
        return !exist;
      }
    }),
  ];

  if (historyLists.length >= 1) {
    let slideIndex = historyLists.length;
    historyLists.forEach(() => {
      $(".flickfeed4").slick("slickRemove", slideIndex - 1);
      if (slideIndex !== 0) {
        slideIndex--;
      }
    });

    $(".flickfeed4").slick("refresh");
    historyLists.forEach((row) => {
      console.log(historyLists, "row");
      $(".flickfeed4").slick("unslick");
      insertToHistoryOrCompleted("#historySlider", 0, row);
      $(".flickfeed4").slick(
        "slickAdd", 
        "",
        $(".flickfeed4").slick(getSliderSettings()) - 1
      );
    });
  }
}

function runv(eleo) {
  let players = document.getElementById("gossVideo");
  $("#btnTrigger").click();
  var id = $(eleo).attr("key"); 
  console.log(id, "video id");
  $(players).get(0).load();
  $(players).get(0).play();
  $(players).attr("src", id); 
}

$("#closeButton").click(function () {
  $(".videoContainer").css("display", "none");
  console.log("closing", "closing");
  $("#videoPlayer").get(0).pause();
});

// Add Video To favorite
function getVideoKey(elem, videoSource) {
  console.log(favVideos, "favorite");
  let parent = elem.parentElement;
  let itemId = $(parent).attr("key").slice(5);
  $(elem).remove();
  if (videoSource) {
    var id = videoSource;
  } else {
    var id = $(elem).attr("key");
  }
  // favVideos = [
  //   ...favVideos,
  //   ...seasonOne.filter((row) => {
  //     let exist = false;
  //     if (row.videoSrc === id) {
  //       favVideos.forEach((e) => {
  //         if (e.videoSrc === id) {
  //           exist = true;
  //         }
  //       });
  //       return !exist;
  //     }
  //   }),
  // ];
  console.log("element", elem, itemId, "id", parent);
  seasonOne.forEach((element, index) => {
    console.log(element.id, "sss", itemId);
    if (element.id === itemId) {
      if (!favVideos.includes(element)) {
        favVideos.push(element);
        Object.assign(favVideos[favVideos.length - 1], { checked: true });
      }
    }
  });

  favVideos.forEach((element, index) => {
    $(".flickfeed2").slick("refresh");
    if (videoSource) {
      var id = videoSource;
    } else {
      var id = $(elem).attr("key");
    }
    if (itemId === element.id) {
      $(".flickfeed2").slick("unslick");
      insertToFav(index + 1, 1, element);
      $(".flickfeed2").slick(
        "slickAdd",
        "",
        $(".flickfeed2").slick(getSliderSettings()) - 1
      );
      $(`[key=main-${itemId}]`).append(
        '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
      );
      $(`[key=main-${itemId}]`).find(".plus").remove();
      $(parent).attr("data-tooltip", "Added");
      $(parent).attr("key", `main-${element.id}`);
    }
  });

  window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
  $("#alertMsg")
    .css("display", "flex")
    .fadeIn("slow", function () {
      $(this).delay(3000).fadeOut("slow");
    });
}


const undoRemoval = (elem, removedVideoId) => {
  console.log(elem, removedVideoId, "removedVideoId");
  console.log(favVideos, "favorite");
  let parent = $(`#mainVideo-${removedVideoId}`);
  // $(elem).remove();
  // if(videoSourceId){
  // var id = videoSource
  // }
  // else{
  // var id = $(elem).attr("key");
  // }
  // favVideos = [
  //   ...favVideos,
  //   ...seasonOne.filter((row) => {
  //     let exist = false;
  //     if (row.videoSrc === id) {
  //       favVideos.forEach((e) => {
  //         if (e.videoSrc === id) {
  //           exist = true;
  //         }
  //       });
  //       return !exist;
  //     }
  //   }),
  // ];
  console.log("element", elem, "id", parent);
  seasonOne.forEach((element) => {
    if (element.id === removedVideoId) {
      if (!favVideos.includes(element)) {
        console.log(!favVideos.includes());
        favVideos.push(element);
        Object.assign(favVideos[favVideos.length - 1], { checked: true });
        favVideos.forEach((element, index) => {
          $(".flickfeed2").slick("refresh");
          // if(videoSource){
          // var id = videoSource
          // }
          // else{
          // var id = $(elem).attr("key");
          // }
          if (removedVideoId === element.id) {
            $(".flickfeed2").slick("unslick");
            insertToFav(index + 1, 1, element);
            $(".flickfeed2").slick(
              "slickAdd",
              "",
              $(".flickfeed2").slick(getSliderSettings()) - 1
            );
            $(parent).append(
              '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
            );
            $(parent).attr("data-tooltip", "Added");
            $(parent).attr("key", `main-${element.id}`);
          }
        });
        window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
        $("#alertMsg")
          .css("display", "flex")
          .fadeIn("slow", function () {
            $(this).delay(3000).fadeOut("slow");
          });
      }
    }
  });
};


// change SVG Add Icon when the specific video exists in Favorite>> it should run on add and remove from list
// insertToFavortiteHTML Page with the SVG Icon Remove From List and give it a title remove from a list


// // ====================Progress And Video Player=============================


var players = document.querySelector("#gossVideo") ;  

var players1 = document.querySelectorAll("#gossVideo") ? document.querySelectorAll("#gossVideo") : document.querySelector("#gossVideo");
var btnPlayPause = document.getElementById("btnPlayPause"); 
var btnMute = document.getElementById("btnMute"); 
var topProgressBar = document.getElementById("top-progress-bar"); 
var edited = false;
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
var canvase = document.getElementById("canvasId"); 
let currentSelectedId = "";

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

const onEditClick = () => {
  console.log("clicked");
  if (!edited) {
    $(".flickfeed4 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    $(".flickfeed4 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

const onEditClickcom = () => {
  console.log("clicked");
  if (!edited) {
    $(".flickfeed3 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    $(".flickfeed3 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

const onEditClickfav = () => {
  console.log("clicked");
  if (!edited) {
    console.log("clickedgghhfh");
    $(".flickfeed2 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    console.log("clickccccccccccccc");
    $(".flickfeed2 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

window.addEventListener("load", function () {});

// players.addEventListener(
//   "play",
//   function () {
//     // let PlayButton = document.getElementById("PlayButton");
//     players.onended = function () {
//       // console.log(players, "players");

//       if (document.querySelector("#watched .statusCount").innerText == "") {
//         document.querySelector("#watched .statusCount").innerHTML = 0;
//         document.querySelector("#watched .status").innerHTML = "watched";
//       }
//       document.querySelector("#watched .statusCount").innerHTML =
//         parseInt(document.querySelector("#watched .statusCount").innerHTML) + 1;
//       localStorage.setItem(
//         "watchCount",
//         document.querySelector("#watched .statusCount").innerText
//       );
//     };

//     // if (PlayButton) {
//     // PlayButton.innerHTML = localStorage.getItem("playBtn");
//     // }
//     if (players.ended) {
//       console.log("videoEnded");
//       historyLists.filter((element) => element.id !== currentSelectedId);
//     }
//   },
//   false
// );


function playvid(els) {
  els.play();
}

function pusevid(els) {
  els.pause();
}

const dismissModal = () => {
  $(".modal").modal("hide");
};
// players.addEventListener(
//   "pause",
//   // function () {
//   //   let PlayButton = document.getElementById("PlayButton");
//   //   PlayButton.innerHTML = localStorage.getItem("pauseBtn");
//   // },
//   false
// );

players.addEventListener( 
  "ended",
  function () {
    // seasonOne.forEach((ele)=>{
    //     if(currentSelectedId === ele.id){
    //       completeList.push(ele)
    //     }
    //   })
    historyLists.filter((row) => currentSelectedId === row.id);
    // Remove From Histroy List slider
    let selectedId = "";
    historyLists.forEach((row) => {
      if (currentSelectedId === row.id) {
        // document.querySelector(`[key=article-${row.id}]`).remove()
        let elem = $(`[key=article-${row.id}]`);
        selectedId = row.id;
        // console.log(elem.parent().parent().attr('data-slick-index'),'element')
        $(".flickfeed4").slick(
          "slickRemove",
          elem.parent().parent().attr("data-slick-index") 
        );
        // $('.flickfeed3').slick('unslick');
        //  insertToHistoryOrCompleted('#completedSlider',0,row) 
        //  $('.flickfeed3').slick('slickAdd','', $('.flickfeed3').slick(getSliderSettings())-1);
      }
    });
    historyLists = historyLists.filter((row) => {
      return row.id !== currentSelectedId;
    });

    // Add To Complete List  slider
    completeList = [
      ...completeList,
      ...seasonOne.filter((row) => {
        let exist = false;
        if (row.id === selectedId) {
          completeList.forEach((e) => {
            if (e.id === selectedId) {
              exist = true;
            }
          });
          return !exist;
        }
      }),
    ];

    if (completeList.length >= 1) {
      console.log(completeList, "completeList");
      let slideIndex = completeList.length;
      completeList.forEach(() => {
        $(".flickfeed3").slick("slickRemove", slideIndex - 1);
        if (slideIndex !== 0) {
          slideIndex--;
        }
      });

      completeList.forEach((row) => {
        $(".flickfeed3").slick("unslick");
        insertToHistoryOrCompleted("#completedSlider", 0, row);
        $(".flickfeed3").slick(
          "slickAdd",
          "",
          $(".flickfeed3").slick(getSliderSettings()) - 1
        );
      });
    }

    // intialize new Flickfeed

    // if (PlayButton) {
    //   // PlayButton.innerHTML = localStorage.getItem("endBtn");
    // }
    this.pause();
  },
  false
);

let indexPlay1 = 0 ; 



$(players).on(
  "ended",
  function () {
    console.log("jquery");
    players.load();
  },
  false
);

function pauseVid() {
  var percentage = Math.floor((100 / players1[0].duration) * players1[0].currentTime);
  if (percentage > 0 && percentage < 100) { 
    // var element = document.getElementById("PlayButtonIcon");
    // var isClassExist = hasClass(element, "fa-pause");
    // console.log(isClassExist);
  }

  players1[0].pause(); 
}

var playersss = document.getElementById("gossVideo");
playersss.addEventListener("ended", () => {
  document.querySelector(".closeexit").click();
  playersss.currentTime = 0;
});
if (PlayButton.length) {
  for (let i = 0 ; i < PlayButton.length ; i++ ) {
    PlayButton[i].addEventListener('click' , function () {
        indexPlay1 = i ; 
          indexPlay2++ ;  
        
    })
  }
}
// Update the Icons for this specific video
function playPauseVideo1(el) {  
  // let PlayButton = document.getElementById("PlayButton"); 
  let id = $(el).next().attr("key"); 
  console.log(id, "hjhj");
  // element = PlayButton.children[0];
  console.log(players, "playButton", id, "id");
  let videoSrc = "";

  seasonOne.forEach((element) => {
    if (element.id === id) {
      videoSrc = element.videoSrc;
      currentSelectedId = element.id;
    }
  });

  $(players).get(0).load();
  $(players.children[0]).attr("src", videoSrc);
  console.log(videoSrc, "gg");
  if (players.paused || players.ended) {
    // var isClassExist = hasClass(element, "fa-play");
    if (isClassExist === true) {
      // removeClass(element, "fa-play");
      // addClass(element, "fa-pause");
      // console.log(element);
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        players.currentTime = parseFloat(ele.progress);
      }
    });
    players.play();
  } else {
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      // PlayButton.innerHTML = localStorage.getItem("pauseBtn");
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        players.currentTime = parseFloat(ele.progress);
      }
    });
    // players.currentTime = parseFloat(localStorage.getItem("VideoEndedTime"))
    players.pause();
  }
}


 function updateProgressBar(index) {
  let bottomProgressBar = document.getElementById(
    `${"bottom-progress-bar" + currentSelectedId}`
  );

  let TopProgressBar = document.getElementById(
    `${"Top-progress-bar" + currentSelectedId}`
  );
  players1[index].classList.remove('mpp-hidden') ; 

  let percentage = Math.floor((100 / players1[0].duration) * players1[0].currentTime);
  console.log("percentage", percentage, players1.duration, players1.currentTime);  
  if (percentage === 100) { 
      run(true , players1[index].dataset.theme , indexPlay1) ;  
  } 
  console.log(players1[index]) ; 
  
  
  
  localStorage.setItem("VideoWatchPercentage", percentage); 
  localStorage.setItem("VideoEndedTime", players1[0].currentTime); 
   seasonOne.forEach((element) => {
    if (element.id === currentSelectedId) {
      if (bottomProgressBar) {
        bottomProgressBar.value = percentage;
        bottomProgressBar.innerHTML = percentage + "% played";
      }
      if (TopProgressBar) {
        TopProgressBar.value = percentage;
        TopProgressBar.innerHTML = percentage + "% played";
      }
      element.progress = player.currentTime;
      element.percentage = percentage;
    }
  });
}
for (let i = 0 ; i < players1.length ; i++ ) {  
  players1[i].addEventListener("timeupdate", function () {
    updateProgressBar(i) ;  
  }, false);  
}

function updateVideoTimeWithBar(nu) {
  var players = document.getElementById("gossVideo"); 
  // topProgressBar.value = localStorage.getItem("VideoWatchPercentage");
  // topProgressBar.innerHTML = localStorage.getItem("VideoWatchPercentage") + '% played';
  historyLists.forEach((element) => {
    let bottomProgressBar = document.getElementById(
      `bottom-progress-bar${element.id}`
    );
    let TopProgressBar = document.getElementById(
      `Top-progress-bar${element.id}`
    );

    if (bottomProgressBar) {
      seasonOne.forEach((element) => {
        if (currentSelectedId === element.id) {
          bottomProgressBar.value = nu;
          bottomProgressBar.innerHTML = element.percentage + "% played";
        }
      });
    }
    if (TopProgressBar) {
      seasonOne.forEach((element) => {
        if (currentSelectedId === element.id) {
          TopProgressBar.value = nu;
          TopProgressBar.innerHTML = element.percentage + "% played";
        }
      });
    }
    seasonOne.forEach((element) => {
      if (currentSelectedId === element.id) {
        players.currentTime = parseFloat(element.progress);
      }
    });
  });
}

updateVideoTimeWithBar();

////////////Toast

const button = document.querySelector("#onRemove"),
  toast = document.querySelector(".toast1");
(closeIcon = document.querySelector(".close1")),
  (progress = document.querySelector(".progress"));
let timer1, timer2;
button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");
  console.log(toast, button, "fired");
  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

function addmutes() {
  console.log("hello ");
  if ($(".mute-video").hasClass("unmute-video")) {
    console.log("yes");
    $("video").prop("muted", true);
    $(".mute-video").removeClass("unmute-video");
  } else {
    console.log("no");
    $("video").prop("muted", false);
    $(".mute-video").addClass("unmute-video");
  }
}

$(document).ready(function () {
  var colsebackall = document.querySelectorAll(".flickfeed video");
  colsebackall.forEach((vidElement) => {
    vidElement.addEventListener(
      "ended",
      (event) => {
        if (!vidElement.classList.contains("mpp-hidden")) {
          vidElement.classList.add("mpp-hidden");
        }
        $(vidElement).parents(".slick-slide").addClass("pupo"); 
        $(vidElement)
          .parents(".favi") 
          .find(".mpp-playlist-item-ready") 
          .removeClass("mpp-playlist-item-active"); 
      },
      false
    );
  });

  document.querySelectorAll(".slick-slide").forEach((aaaaaoo) => {
    aaaaaoo.addEventListener("mouseenter", () => {
      if ($(aaaaaoo).hasClass("pupo")) {
        $(aaaaaoo).removeClass("pupo");
      }
    });
  });

  $(".chckedd").parent().find("plus").css("display", "none");
});
