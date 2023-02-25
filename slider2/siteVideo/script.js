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

  $(".flickfeedSlider").on("init", yususus);
  $(".flickfeedSlider").on("init", assignSlidesOrigin);
  $(".flickfeedSlider").on("afterChange", assignSlidesOrigin); 
  $(".flickfeedSlider").on("beforeChange", mobilePauseVideo);

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

  $(".flickfeed").slick(getSliderSettings());
  
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
        vidElement.classList.add("mpp-hidden1");
        // vidElement.classList.add("mpp-hidden");
      },
      false
    );
  });
});

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

function getSliderSettings2() {
  console.log("calling sliderSetting");
  return {
    dots: true,
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

let seasonOne = [
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "1",
    category: 'Horror' , 
    actors: 'Clark Gable' , 
    studios: 'Worner Bross' ,  
    videoSrc: "./02.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "2",
    category: 'Documentary' , 
    actors: 'Marlon Brano' ,  
    studios: 'Columbia Pictures' , 
    videoSrc: "src/S1-2.mp4", 
    imgSrc: "./03.jpg", 
    episodeTitle: "Title2Season One E2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "3",
    category: 'Dramatic' , 
    actors: 'Tom Hanks'  ,
    studios: 'Paramount Pictures' , 
    videoSrc: "src/S1-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "4", 
    category: 'War' , 
    actors: 'Leonardo DiCaprio' , 
    studios: 'Universal Studios' , 
    checked: false,
    videoSrc: "src/S1-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "5",
    category: 'catastrophic' , 
    actors: 'Johnny Depp' , 
    studios: '20th Century Fox' , 
    checked: false,
    videoSrc: "src/S2-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "6",
    category: 'adventure' , 
    actors: 'Anthony Hopkins' , 
    studios: 'Walt Disnay Pictures' , 
    videoSrc: "src/S2-2.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "7",
    category: 'comics' ,
    actors: 'Tow Cruise' ,  
    studios: 'Columbia Pictures' , 
    videoSrc: "src/S2-3.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "8",
    category: 'actions' ,
    actors: 'Brad Pitt' ,   
    studios: 'Universal Studios' , 
    videoSrc: "src/S2-4.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 8",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  } , 
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "9", 
    category: 'actions' ,
    actors: 'Morgan Freeman' , 
    studios: 'Columbia Pictures' ,  
    videoSrc: "src/S1-4.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 8", 
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  }
];
let seasonOne1 = [
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "1",
    category: 'Horror' , 
    videoSrc: "./02.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "2",
    category: 'Documentary' ,  
    videoSrc: "src/S1-2.mp4", 
    imgSrc: "./03.jpg", 
    episodeTitle: "Title2Season One E2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "3",
    category: 'Dramatic' , 
    videoSrc: "src/S1-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "4", 
    category: 'War' , 
    checked: false,
    videoSrc: "src/S1-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "5",
    category: 'catastrophic' , 
    checked: false,
    videoSrc: "src/S2-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "6",
    category: 'adventure' , 
    videoSrc: "src/S2-2.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "7",
    category: 'comics' , 
    videoSrc: "src/S2-3.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "8",
    category: 'actions' ,  
    videoSrc: "src/S2-4.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
   {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "9",
    category: 'actions' ,  
    videoSrc: "src/S1-4.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 4", 
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  
];

let playlist = [
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "1",
    category: 'Horror' , 
    videoSrc: "src/S2-4.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "2",
    category: 'Documentary' ,  
    videoSrc: "src/S1-2.mp4", 
    imgSrc: "./03.jpg", 
    episodeTitle: "Title2Season One E2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "3",
    category: 'Dramatic' , 
    videoSrc: "src/S1-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "4", 
    category: 'War' , 
    checked: false,
    videoSrc: "src/S1-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "5",
    category: 'catastrophic' , 
    checked: false,
    videoSrc: "src/S2-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "6",
    category: 'adventure' , 
    videoSrc: "src/S2-2.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "7",
    category: 'comics' , 
    videoSrc: "src/S2-3.mp4", 
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
]

let favVideos = [];
let favVideosPlaylist = [];
let historyLists = [];
let historyPlaylist = [] ; 
let completePlaylist = [] ; 
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

function insertToHTML(index, season, elem) {
  console.log(elem.id, "insert");
  document.querySelectorAll('.homeSlider11 .plyyer')[index].insertAdjacentHTML('beforeend' , 
  `<source src="${elem.videoSrc}">`) ;
   document.querySelectorAll('.homeSlider11 .plyyer')[index].classList.add('_active') ; 
  document.querySelectorAll('.homeSlider11 .buttons1')[index].setAttribute('key' , elem.videoSrc) ; 
  document.querySelectorAll('.homeSlider11 .plus1')[index].setAttribute('key' , elem.videoSrc) ;
  document.querySelectorAll('#top-progress-bar')[index].value = `${elem.progress}` ;
  document.querySelectorAll('.mpp-buttons span')[index].setAttribute('key' , elem.id ) ; 
   document.querySelectorAll('.mpp-buttons span')[index].setAttribute('data-src' , elem.videoSrc) ;   
  document.querySelectorAll('.homeSlider11 .Episode')[index].insertAdjacentHTML('afterbegin' , ` <h1 class="h4"> ${elem.episodeTitle} </h1> `)
   /*document.querySelectorAll('#homeVideo2')[index].insertAdjacentHTML('afterend' , `<div class="studios studios__block">
                        <div class="studios__title">
                          studios: 
                        </div>
                        <div class="studios__text">
                          ${elem.studios} 
                        </div>
              </div>`) ; */ 
  // initVideos()
} 

  async function start (len) { 
  const res = await fetch('http://localhost:7000/api/like') ; 
  const data = await res.json() ; 
  data.forEach(item => 
    !localStorage.getItem(`video_like_${item.id}`)
    ? localStorage.setItem(`video_like_${item.id}` , true)
    : '' 
  ) ; 
   
  console.log(data) ; 
  if (data.length < len) {
    await fetch('http://localhost:7000/api/like' , {
    method: 'POST' , 
    body: {
      likeCount: 0 
    }
  }) ; 
  } else {
    await start2() ; 
  }

  const res_view = await fetch('http://localhost:7000/api/view') ; 
  const data_view = await res_view.json() ;  
 
  if (data_view.length < len) {
    await fetch('http://localhost:7000/api/view' , {
    method: 'POST' , 
    body: {
      ViewCount: 0 
    }
  }) ; 
  } else {
    startViews() ; 
  }

  const res_dislike = await fetch('http://localhost:7000/api/dislike') ; 
  const data_dislike = await res_dislike.json() ;  
  data_dislike.forEach(item =>
    !localStorage.getItem(`video_dislike_${item.id}`)
    ? localStorage.setItem(`video_dislike_${item.id}` , true) 
    : ''
  ) ; 
  
  if (data_dislike.length < len) {
    await fetch('http://localhost:7000/api/dislike' , {
    method: 'POST' , 
    body: {
      dislikeCount: 0 
    }
  }) ; 
  } else {
   startDislikes() ; 
  }
 
}

async function startPlaylist(len) {
  let res = await fetch('http://localhost:7000/api/PlaylistRatings') ; 
  let data = await res.json() ; 
  data.forEach(i => {
    if (!localStorage.getItem(`playlist_dislike_${i.id}`) || localStorage.getItem(`playlist_dislike_${i.id}`) === "undefined") {
      localStorage.setItem(`playlist_dislike_${i.id}` , true) ; 
    }
    if (!localStorage.getItem(`playlist_like_${i.id}`) || localStorage.getItem(`playlist_like_${i.id}`) === "undefined") {
      localStorage.setItem(`playlist_like_${i.id}` , true) ; 
    }
  })
  
  if (data.length < len) {
    await fetch('http://localhost:7000/api/PlaylistRatings' , {
      method: 'POST' , 
      body: {
        view: 0 , 
        like: 0 , 
        dislike: 0 
      }
    }) 
   
  } else {
    startPlaylistRatings() ; 
  } 
}

async function startPlaylistRatings() {
  let res = await fetch('http://localhost:7000/api/PlaylistRatings') ; 
  let data = await res.json() ; 
  data.sort((a, b) => b.like - a.like) ; 
  const playVideo = document.querySelectorAll('.gossHistory__column_one .card__row .videoList') ; 
  const videoModals = document.querySelectorAll('.modalsVideo__list .videoList') ; 
  const videoPlaylistLike = document.querySelector('.video-playlists') ; 
  const videoPlaylistView = document.querySelector('.video-playlists__views')  ; 
  const videosLikesCount = document.querySelectorAll('.videos-likes .back') ; 
  const playlistVideoViewCount = document.querySelectorAll('.playlist-video__view-count') ; 
  const playlistVideoLikesCount = document.querySelectorAll('.playlist-video__likes-count') ; 
 
  const modalsVideosModals = document.querySelectorAll('.modalsVideo__main-video .modal-player__item .vjs-tech') ;  
  
  data.forEach((item , i) => {
    let index = item.id - 1 ; 
    let itemSeries = playlist[index] ; 
    playVideo[index].setAttribute('onclick' , `insertReactVideoToPlaylist(${item.id})`) ; 
    videoModals[index].setAttribute('onclick' , `insertReactVideoToPlaylist(${item.id})`) ; 
    modalsVideosModals[index].setAttribute('onended' , `putVideoView(${item.id})`) ; 
    if (videoPlaylistLike.classList.contains('slick-slider')) {
      document.querySelectorAll(`[data-idratinglike="${item.id}"]`).forEach(im => {
        im.querySelector('.playlist-video__likes-count').innerHTML = item.like + " like" ; 
      }) 
       
    } else {
       videoPlaylistLike.insertAdjacentHTML('beforeend' , `
    <article class="mpp-playlist-content card yuii favi" data-idratinglike="${item.id}" style="width: 100%; display: inline-block;">
    <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="${itemSeries.videoSrc}#t=2" data-target="_blank" data-title="Neon Sign Kit">
       <div class="mpp-inner">
          <div class="mpp-content">
          <div class="rating-play__like rating-play__int" style="color: #f22 ; position: absolute ; top: 5px ; right: 5px ; z-index: 238239832 ; font-size: 20px ; "> ${i + 1} </div> 
             
             <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">
             <div class="mpp-media">
                <video class=" mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" muted="">
                  <source src="${itemSeries.videoSrc}"> 
                </video> 
             </div>
             <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                <div class="mute-video" onclick="addmutes()"></div>
             </div>
          </div>
          <div class="back d-flex flex-column cont">
             <div class="back-content">
                <div class="mpp-controls mpp-block">
                   <div class="mpp-contr-btn mpp-link-icon mpp-top mpp-button-play" data-tooltip="Play Now">
                      <svg class="buttons1" key="${itemSeries.videoSrc}" onclick="playPauseVideoPlaylist(this); runVideoPlaylist(this); insertReactVideoToPlaylist(${item.id}); "> 
                         <use xlink:href="#svg-link"></use>
                      </svg>
                      <span key="${itemSeries.id}" style="display: none;">${itemSeries.id}</span>
                   </div>
                   <div key="main-${itemSeries.id}" id="" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                      <svg class="plus plus1" key="${itemSeries.videoSrc}" onclick="getVideoKey(this)">
                         <use id="" href="#svg-zoom"></use>
                      </svg>
                   </div>
                   <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                      <svg>
                         <use xlink:href="#svg-share"></use>
                      </svg>
                   </div>
                </div>
                <p class="Episode">E1 "Getting Started"</p>
             </div>
          </div>
          <div class="playlist-video__likes-count" style="text-align: center ; "> ${item.like} like </div> 
       </div>
    </div>

 </article>
    `
    )  
      
    }
   
    
  })

  if (!videoPlaylistLike.classList.contains('slick-slider')) {
     insertPlalistsRating('.video-playlists') ; 
  }
  
  let res_view = await fetch('http://localhost:7000/api/PlaylistRatings') ; 
  let data_view = await res_view.json() ; 
  data_view.sort((a , b) => b.view - a.view) ; 
  data_view.forEach((item , i) => {
    let index = item.id - 1 ; 
    let itemSeries = playlist[index] ; 
    if (videoPlaylistView.classList.contains('slick-slider')) {
      document.querySelectorAll(`[data-idratingview="${item.id}"]`).forEach(im => {
        im.querySelector('.playlist-video__view-count').innerHTML = item.view + " View" ;   
      }) 
    } else {
      videoPlaylistView.insertAdjacentHTML('beforeend' , ` 
    <article class="mpp-playlist-content card yuii favi" data-idratingview="${item.id}" style="width: 100%; display: inline-block;">
    <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="${itemSeries.videoSrc}#t=2" data-target="_blank" data-title="Neon Sign Kit">
       <div class="mpp-inner">
          <div class="mpp-content">
          <div class="rating-playlist__view rating-play__int" style="position: absolute ; color: #49ff ;  top: 5px ; right: 5px ; z-index: 238239832 ; font-size: 20px ; "> ${i + 1} </div> 
             <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">
             <div class="mpp-media">
                <video class=" mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" muted="">
                  <source src="${itemSeries.videoSrc}"> 
                </video> 
             </div>
             <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                <div class="mute-video" onclick="addmutes()"></div>
             </div>
          </div>
          <div class="back d-flex flex-column cont">
             <div class="back-content">
                <div class="mpp-controls mpp-block">
                   <div class="mpp-contr-btn mpp-link-icon mpp-top mpp-button-play" data-tooltip="Play Now">
                      <svg class="buttons1" key="${itemSeries.videoSrc}" onclick="playPauseVideoPlaylist(this); runVideoPlaylist(this); insertReactVideoToPlaylist(${item.id}) "> 
                         <use xlink:href="#svg-link"></use>
                      </svg>
                      <span key="${itemSeries.id}" style="display: none;">${itemSeries.id}</span>
                   </div>
                   <div key="main-${itemSeries.id}" id="" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                      <svg class="plus plus1" key="${itemSeries.videoSrc}" onclick="getVideoKey(this)">
                         <use id="" href="#svg-zoom"></use>
                      </svg>
                   </div>
                   <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                      <svg>
                         <use xlink:href="#svg-share"></use>
                      </svg>
                   </div>
                </div>
                <p class="Episode">E1 "Getting Started"</p>
             </div>
          </div>
          <div class="playlist-video__view-count" style="text-align: center ; "> ${item.view} View </div> 
       </div>
    </div>

 </article>
    `
      ) ; 
      }
    
  })
  if (!videoPlaylistView.classList.contains('slick-slider')) {
    insertPlalistsRating('.video-playlists__views') ; 
  }
   

 
}

function insertPlalistsRating(classRatings) {
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
$(classRatings).on("init", yususus);
$(classRatings).on("init", assignSlidesOrigin);
$(classRatings).on("afterChange", assignSlidesOrigin); 
$(classRatings).on("beforeChange", mobilePauseVideo);
$(classRatings).slick(getSliderSettings2()); 
}

async function putVideoView(id) {
  await fetch('http://localhost:7000/api/PlaylistView' , {
    method: 'PUT' , 
    body: JSON.stringify({ 
      id
    }) , 
    headers: { 
      'Content-type': 'application/json' 
    }
  }) 
  insertReactVideoToPlaylist(id) ; 
}

async function insertReactVideoToPlaylist(id) {
  let res = await fetch(`http://localhost:7000/api/PlaylistRating/${id}`) ; 
  let data = await res.json() ; 
  let activeLike = '' ; 
  if (localStorage.getItem(`playlist_like_${id}`) === 'false') {
    activeLike = '_active-likes' ; 
  }
  const reactVideo = document.querySelector('.react__video') ; 
  reactVideo.style.display = 'inline-flex' ; 
  reactVideo.innerHTML = ` 
  <div class="view-play" style="padding: 0px 10px ;  display: flex ; align-items: flex-end ; "> 
    <div class="title__view-play" style="color: #fff ; font-size: 20px ; padding: 0px 10px ;" > View  <span class="view-play__count" style="font-size: 17px ; "> ${data.view} </span> </div>
  </div>
  <div class="like-play" style=" padding: 0px 10px ;  " > 
    <div class="title__like-play ${activeLike}" style="color: #fff ; font-size: 20px ; padding: 0px 10px ;" onclick="putLikePlay(${data.id})"> like   <span class="like-play__count " style="font-size: 17px ; "> ${data.like} </sapn>
  </div>
    </div>
  <div class="dislike-play" style="padding: 0px 10px ; " onclick="putDislikePlay(${data.id})"> 
    <div class="title__dislike-play" style="color: #fff ; font-size: 20px ; padding: 0px 10px ;"> Dislike  <span class="dislike-play__count" style="font-size: 17px ; "> ${data.dislike} </span> </div> 
  </div>
  `
  startPlaylistRatings() ;
}

async function putDislikePlay(id) {
  let isActive = 'true' ; 
  if (localStorage.getItem(`playlist_dislike_${id}`)) {
    isActive = localStorage.getItem(`playlist_dislike_${id}`) ; 
  } 

  if (localStorage.getItem(`playlist_like_${id}`) && localStorage.getItem(`playlist_like_${id}`) === 'false') {
    if (localStorage.getItem(`playlist_dislike_${id}`) === 'true') { 
        localStorage.setItem(`playlist_like_${id}` , true) ; 
        minusLikePlay(id) ; 
    }
  }
  
  console.log(localStorage.getItem(`video_like_${id}`)) ; 
   const responce = await fetch('http://localhost:7000/api/PlaylistDislike', { 
    method: 'PUT' , 
    body: JSON.stringify({
      id , 
      isActive
    }) , 
    headers: {
      'Content-type': 'application/json'
    }
  })

  let data = await responce.json() ; 
  localStorage.setItem(`playlist_dislike_${id}` , data.isActive) ; 
  insertReactVideoToPlaylist(id) ; 

}

async function minusDislikePlay(id) {
  await fetch('http://localhost:7000/api/PlaylistDislikeMinus' , {
    method: 'PUT' , 
    body: JSON.stringify({
      id
    }) , 
    headers: {
      'Content-type': 'application/json'
    }
  })
  insertReactVideoToPlaylist(id) ; 
} 

async function minusLikePlay(id) {
  await fetch('http://localhost:7000/api/PlaylistLikeMinus' , {
    method: 'PUT' , 
    body: JSON.stringify({ 
      id
    }) , 
    headers: {
      'Content-type': 'application/json'
    }
  })
  insertReactVideoToPlaylist(id) ; 
} 

async function putLikePlay(id) {
  let isActive = 'true' ; 
  if (localStorage.getItem(`playlist_like_${id}`)) {
    isActive = localStorage.getItem(`playlist_like_${id}`) ; 
  } 

  if (localStorage.getItem(`playlist_dislike_${id}`) && localStorage.getItem(`playlist_dislike_${id}`) === 'false') {
    if (localStorage.getItem(`playlist_like_${id}`) === 'true') { 
         localStorage.setItem(`playlist_dislike_${id}` , true) ; 
         minusDislikePlay(id) ; 
    } 
  }
  
  console.log(localStorage.getItem(`video_like_${id}`)) ; 
   const responce = await fetch('http://localhost:7000/api/PlaylistLike', { 
    method: 'PUT' , 
    body: JSON.stringify({
      id , 
      isActive
    }) , 
    headers: {
      'Content-type': 'application/json'
    }
  })

  let data = await responce.json() ; 
  localStorage.setItem(`playlist_like_${id}` , data.isActive) ; 
  const audioLikes = document.querySelector('.audio-likes') ; 
  audioLikes.autoplay = 'true';
  audioLikes.load();
  insertReactVideoToPlaylist(id) ; 
  

}

async function minusDislike (id) {
  const res = await fetch('http://localhost:7000/api/dislikeMinus' , {
   method: 'PUT' , 
   body: JSON.stringify({
     id
   }) , 
   headers: {
     'Content-type': 'application/json'
   }
  }) ; 
  start2() ; 
}

async function putLike(id) {
  let isActive = 'true' ; 
  if (localStorage.getItem(`video_like_${id}`)) {
    isActive = localStorage.getItem(`video_like_${id}`) ; 
  } 

  if (localStorage.getItem(`video_dislike_${id}`) && localStorage.getItem(`video_dislike_${id}`) === 'false') {
    if (localStorage.getItem(`video_like_${id}`) === 'true') { 
        localStorage.setItem(`video_dislike_${id}` , true) ; 
        minusDislike(id) ; 
    }
  }
  
  console.log(localStorage.getItem(`video_like_${id}`)) ; 
   const responce = await fetch('http://localhost:7000/api/like', { 
    method: 'PUT' , 
    body: JSON.stringify({
      id , 
      isActive
    }) , 
    headers: {
      'Content-type': 'application/json'
    }
  })

  let data = await responce.json() ; 
  localStorage.setItem(`video_like_${id}` , data.isActive) ; 
  const audioLikes = document.querySelector('.audio-likes') ; 
  audioLikes.autoplay = 'true';
  audioLikes.load(); 
  start2() ; 

}

// window.addEventListener('resize' , function () {
//   const firstersVideoLike = document.querySelectorAll('.videos-likes .firster');
//   const firstersVideoViews = document.querySelectorAll('.videos-views .firster');
//   if (firstersVideoLike.length) {
//     firstersVideoLike.forEach((item , i) =>
//       item.querySelector('.rating__int') && i < firstersVideoLike.length - 1
//       ? item.querySelector('.rating__int').remove() 
//       : ''
//     )
//   }
  
//   if (firstersVideoViews.length) {
//     firstersVideoViews.forEach((item , i) =>
//     item.querySelector('.rating__int') && i < firstersVideoViews.length - 1
//     ? item.querySelector('.rating__int').remove() 
//     : ''
//     )
//   }
// })

async function minusLike (id) {
   const res = await fetch('http://localhost:7000/api/likeMinus' , {
    method: 'PUT' , 
    body: JSON.stringify({
      id
    }) , 
    headers: {
      'Content-type': 'application/json'
    }
   }) ; 
   start2() ; 
}

async function putDislike(id) {
  let isActive = 'true' ; 
  if (localStorage.getItem(`video_dislike_${id}`)) {
    isActive = localStorage.getItem(`video_dislike_${id}`) ; 
  } 
    if (localStorage.getItem(`video_like_${id}`) && localStorage.getItem(`video_like_${id}`) === 'false') {
      if (localStorage.getItem(`video_dislike_${id}`) === 'true') { 
          localStorage.setItem(`video_like_${id}` , true) ; 
          minusLike(id) ; 
      }
    }
  
  console.log(localStorage.getItem(`video_dislike_${id}`)) ; 
   const responce = await fetch('http://localhost:7000/api/dislike', { 
    method: 'PUT' , 
    body: JSON.stringify({
      id , 
      isActive
    }) , 
    headers: {
      'Content-type': 'application/json'
    }
  })

  let data = await responce.json() ; 
  localStorage.setItem(`video_dislike_${id}` , data.isActive) ; 
  startDislikes() ; 

}

async function start2() {
   let res = await fetch('http://localhost:7000/api/like') ; 
   let data = await res.json() ; 
   data.sort((a, b) => b.like - a.like)
   console.log(data) ; 
   const playItems = document.querySelectorAll('#PlayButton') ; 
   const videosLikes = document.querySelector('.videos-likes') ;  
   const videosLikesCount = document.querySelectorAll('.videos-likes .back') ; 
  
   data.forEach((item , i) => {
    let index = item.id - 1 ;  
    let itemSeries = seasonOne[index] ; 
    if (videosLikes.classList.contains('slick-slider')) {
      const likes = document.querySelectorAll(`[data-idlikes="${item.id}"]`) ; 
      likes.forEach(i => {
         i.querySelector('.likes__counts').innerHTML = item.like + " like" ; 
      }) 
    } else {
      videosLikes.insertAdjacentHTML('beforeend' , `
      <article class="mpp-playlist-content card yuii favi" data-idlikes="${item.id}" style="width: 100%; display: inline-block;">
      <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="${itemSeries.videoSrc}#t=2" data-target="_blank" data-title="Neon Sign Kit">
         <div class="mpp-inner">
            <div class="mpp-content" > 
                <div class="rating-like rating__int" style="color: #f22 ; position: absolute ; top: 5px ; right: 5px ; z-index: 238239832 ; font-size: 20px ; "> ${i + 1} </div> 
               <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">
               <div class="mpp-media">
                  <video class=" mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" muted="">
                  </video>
               </div>
               <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                  <div class="mute-video" onclick="addmutes()"></div>
               </div>
            </div>
            <div class="back d-flex flex-column cont">
               <div class="back-content">
                  <div class="mpp-controls mpp-block">
                     <div class="mpp-contr-btn mpp-link-icon mpp-buttons-like mpp-top" data-tooltip="Play Now">
                        <svg class="buttons1" key="${itemSeries.videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
                           <use xlink:href="#svg-link"></use>
                        </svg>
                        <span key="${itemSeries.id}" style="display: none;">${itemSeries.id}</span>
                     </div>
                     <div key="main-${itemSeries.id}" id="" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                        <svg class="plus plus1" key="" onclick="getVideoKey(this)">
                           <use id="" href="#svg-zoom"></use>
                        </svg>
                     </div>
                     <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                        <svg>
                           <use xlink:href="#svg-share"></use>
                        </svg>
                     </div>
                  </div>
                  <p class="Episode">E1 "Getting Started"</p> 
               </div>
            </div> 
             <div class="likes__counts" style="text-align: center; "> ${item.like} like </div> 
      
          </div> 
      </div>    
      
   </article>
    `)
    }
    
  
    let rating = playItems[index].closest('.item').querySelector('.rating') ; 
    let activelike = '' ; 
    if (localStorage.getItem(`video_like_${item.id}`) === 'false') {
      activelike = '_active-likes' ; 
    } 
    if (rating) { 
      if (activelike) {
        rating.querySelector('.like__title').classList.add(activelike) ; 
      } else {
        if (rating.querySelector('.like__title').classList.contains('_active-likes')) {
          rating.querySelector('.like__title').classList.remove('_active-likes') ; 
        }
       }
       rating.querySelector('.like__count').innerHTML = item.like ; 
    } else {
      playItems[index].closest('.item').insertAdjacentHTML('afterbegin' , 
       `<div class="rating" style="display: flex;"> 
        <div class="like" style="display: flex; align-items: center; "> 
            <h2 class="like__title" onclick="putLike(${item.id})"  style=" cursor: pointer; color: #49ff ; padding: 0px 20px; font-size: 20px; "> like <span class="like__count" style="color: #fff ; " > ${item.like} </span> </h2>
        </div>
        </div>`
      )
    }
   
    
   })  
   if (!videosLikes.classList.contains('slick-slider')) {
     insertPlalistsRating(".videos-likes") ; 
   }
 
  const firstersVideo = document.querySelectorAll('.videos-likes .firster');
  firstersVideo.forEach((item , i) =>
    item.querySelector('.rating__int') && i < firstersVideo.length - 1
    ? item.querySelector('.rating__int').remove() 
    : ''
  )
 
  startDislikes() ; 
}

async function startDislikes() {
  let res_deslike = await fetch('http://localhost:7000/api/dislike') ; 
  let data_dislike = await res_deslike.json() ; 
  console.log(data_dislike) ; 
  const rating = document.querySelectorAll('.rating') ; 
  data_dislike.forEach(item => {
    let index = item.id - 1 ; 
    if (rating[index].querySelector('.dislike')) {
      rating[index].querySelector('.dislike .dislike__count').innerHTML = item.dislike ; 
    } else {
      rating[index].insertAdjacentHTML('beforeend' , 
      `<div class="dislike" style="display: flex; align-items: center; "> 
        <h2 class="dislike__title" onclick="putDislike(${item.id})"  style=" cursor: pointer; color: #49ff ; padding: 0px 20px; font-size: 20px; "> Dislike <span class="dislike__count" style="color: #fff ; "> ${item.dislike} </span> </h2>
        
      </div>
      `
      )
    }
    
  }) 
}

let views_count = [] ; 

async function startViews() {
  let res_view = await fetch('http://localhost:7000/api/view') ; 
  let data_view = await res_view.json() ; 
  console.log(data_view) ; 
  data_view.sort((a, b) => b.view - a.view)
  const videoViews = document.querySelector('.videos-views') ; 
  const videoViewsCount = document.querySelectorAll('.videos-views .back') ; 
  
  data_view.forEach((item , i) => {
    let index = item.id - 1 ; 
    const rating = document.querySelectorAll('.rating') ;  
    let itemSeries = seasonOne[index] ; 
    if (videoViews.classList.contains('slick-slider')) {
        const view = document.querySelectorAll(`[data-idviews="${item.id}"]`) ; 
        view.forEach(i => 
          i.querySelector('.view__count').innerHTML = item.view + " View" 
        ) 
    } else {
      videoViews.insertAdjacentHTML('beforeend' , ` 
            <article class="mpp-playlist-content card yuii favi" data-idviews="${item.id}" style="width: 100%; display: inline-block;">
            <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="${itemSeries.videoSrc}#t=2" data-target="_blank" data-title="Neon Sign Kit">
              <div class="mpp-inner">
                  <div class="mpp-content"> 
                  <div class="rating-view rating__int" style="position: absolute ; top: 5px ; right: 5px ; color: #49ff ;  z-index: 28893239 ; font-size: 20px ; "> ${i + 1} </div> 

                    <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">
                    <div class="mpp-media">
                        <video class=" mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" muted="">
                        </video>
                    </div>
                    <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                        <div class="mute-video" onclick="addmutes()"></div>
                    </div>
                  </div>
                  <div class="back d-flex flex-column cont">
                    <div class="back-content">
                        <div class="mpp-controls mpp-block">
                          <div class="mpp-contr-btn mpp-link-icon mpp-buttons-like mpp-top" data-tooltip="Play Now">
                              <svg class="buttons1" key="${itemSeries.videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
                                <use xlink:href="#svg-link"></use>
                              </svg>
                              <span key="${itemSeries.id}" style="display: none;">${itemSeries.id}</span>
                          </div>
                          <div key="main-${itemSeries.id}" id="" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                              <svg class="plus plus1" key="" onclick="getVideoKey(this)">
                                <use id="" href="#svg-zoom"></use>
                              </svg>
                          </div>
                          <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                              <svg>
                                <use xlink:href="#svg-share"></use>
                              </svg>
                          </div>
                        </div>
                        <p class="Episode">E1 "Getting Started"</p>
                    </div>
                  </div> 
                  <div class="view__count" style="text-align: center;"> ${item.view} View </div> 
                </div> 
            </div>    
            
        </article>
          `)
    }
    
    
    if (rating[index].querySelector('.views')) {
      rating[index].querySelector('.views .views__count').innerHTML = item.view ; 
    } else {
      rating[index].insertAdjacentHTML('afterbegin' , 
      `<div class="views" style="display: flex; align-items: center; "> 
        <h2 class="views__title" style="cursor: pointer; color: #49ff ; padding: 0px 20px; font-size: 20px; "> View <span class="views__count" style="color: #fff ; "> ${item.view} </span> </h2>  
      </div>
      `
      )
    }
   
  })  
  if (!videoViews.classList.contains('slick-slider')) {
    insertPlalistsRating('.videos-views') ; 
  }

const firstersVideo = document.querySelectorAll('.videos-views .firster'); 
firstersVideo.forEach((item , i) =>
    item.querySelector('.rating__int') && i < firstersVideo.length - 1
    ? item.querySelector('.rating__int').remove() 
    : ''
)

}

async function insertViews(id) {
  const res = await fetch('http://localhost:7000/api/view' , {
    method: 'PUT' , 
    body: JSON.stringify({
      id 
    }) , 
    headers: {
      'Content-type': 'application/json' 
    }
  }) ; 
  startViews() ; 
}

for (let i = 0 ; i < playlist.length ; i++) { 
  try {
    startPlaylist(playlist.length)
  } catch (e) {
    console.log(e) ; 
  }
}


for (let i = 0 ; i < seasonOne.length ; i++) { 
  insertToHTML(i, 1, seasonOne[i]);  
  start(seasonOne.length) ; 
}



let videoPlay = [] ; 
 
function insertToVideo (category , index) {
  let category1 = '' ; 
  let n = 0 ; 
  document.querySelectorAll('.homeSlider1')[index].innerHTML = '' ;    
  for (let i = 0 ; i < seasonOne.length ; i++) {
     if (category === seasonOne[i].category) { 
     
      
    
      document.querySelectorAll('.homeSlider1')[index].insertAdjacentHTML('beforeend' , `<article class="mpp-playlist-content plays card yuii favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible mpp-videos" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner"> 
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${seasonOne[i].imgSrc}" src="${seasonOne[i].imgSrc}">
                         <div class="mpp-media"> 
                            <video class="mpp-video mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
                              <source src="${seasonOne[i].videoSrc}">
                            </video>
                         </div>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video" onclick= "addmutes()"></div>
                         </div><div class="item progress-item">

                      </div>
                      </div>
                      
                      <div class="back d-flex flex-column cont backs">
                         <div class="back-content backs-content">
                            <div class="mpp-controls"> 
                               <div class="mpp-contr-btn mpp-link-icon mpp-buttons-bars mpp-top" data-tooltip="Play Now">
                                  <svg key="${seasonOne[i].videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
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
                       <div class="videoName"> 
                          ${seasonOne[i].episodeTitle} 
                       </div>
                   </div>
                </div>

             </article>
    `) ; 
     }
      

    
  if (document.querySelectorAll('.homeSlider1 .slick-list')[i]) {
    document.querySelectorAll('.homeSlider1 .slick-list')[i].remove() ; 
  } 
  }
  
}
function run() { 
    

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
  let flg = true ; 
  if (window.localStorage.getItem("favVideos") ) {
    JSON.parse(window.localStorage.getItem("favVideos")).forEach(
    (element, index) => {
      // $(".flickfeed2").slick("slickRemove", slideIndex - 1);
      console.log(element, "element");
      if (element.checked) {
        
        $(".flickfeed2").slick("unslick");
        if (window.localStorage.getItem("favVideosPlaylist") && flg) {
          JSON.parse(window.localStorage.getItem("favVideosPlaylist")).forEach(item => 
            insertToFav2(item.def , item.title , item.classPlaylist)
          )
        }
        flg = false ; 
        insertToFav(index + 1, 1, element);
        $(".flickfeed2").slick(
          "slickAdd",
          "",
          $(".flickfeed2").slick(getSliderSettings()) - 1
        );
        document.querySelector(`[key=main-${element.id}]`).children[0].remove();
        $(`[key=main-${element.id}]`).find(".plus").remove();
        $(`[key=main-${element.id}]`).append(
          '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
        );
      }
    }

  );

  
  favVideos = JSON.parse(window.localStorage.getItem("favVideos")); 
  console.log(favVideos, "favVideojs"); 
  }
}

// Run Video Button that show the main div for video
function runVideo(elem) {
  let player = document.getElementById("gossVideo");
  $("#btnTrigger").click();
  var id = $(elem).attr("key");
  player.closest('.modal-player__item').classList.add('modal-player__item--active') ; 
  var ido = $(elem).next().attr("key"); 
  console.log(id, "video id");
   setTimeout(() => {
    $(player).get(0).load();
    $(player).get(0).play(); 
   } , 1);
  $(player).attr("src", id);
   player.closest('.modal').classList.add('show') ;  
   player.closest('.modal').style.display = 'block' ;  
   document.querySelector('.modal-backdrop').style.display = 'block' ;

  setTimeout(() =>  
    player.closest('.modal-player__item-video').classList.add('_active') 
    , 1)
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
      $(".videoSingle").slick("slickRemove", slideIndex - 1);
      if (slideIndex !== 0) {
        slideIndex--;
      }
    });

    $(".videoSingle").slick("refresh");
    historyLists.forEach((row) => {
      console.log(historyLists, "row"); 
      $(".videoSingle").slick("unslick");
      insertToHistoryOrCompleted("#historySlider", 0, row);
      $(".videoSingle").slick(
        "slickAdd",
        "",
        $(".videoSingle").slick(getSliderSettings()) - 1 
      );
    });
  }

}

function runv(eleo) {
  let player = document.querySelector("#gossVideo");
  $("#btnTrigger").click();
  var id = $(eleo).attr("key");
  console.log(id, "video id");
  $(player).get(0).load();
  player.closest('.modal-player__item').classList.add('modal-player__item--active') ; 
  $(player).get(0).play();
  $(player).attr("src", id);
  setTimeout(() => player.play() , 1);
  $(player).attr("src", id);
   player.closest('.modal').classList.add('show') ;  
   player.closest('.modal').style.display = 'block' ;  
   document.querySelector('.modal-backdrop').style.display = 'block' ;

  setTimeout(() =>  
    player.closest('.modal-player__item-video').classList.add('_active') 
    , 1)
}

function runVideoPlaylist(elem) {
  let player = document.getElementById("gossVideoPlay");
   $(".btnTrigger").click();
  var id = $(elem).attr("key");
  var ido = $(elem).next().attr("key");
  console.log(id, "video id"); 
  player.closest('.modal-player__item').classList.add('modal-player__item--active') ; 
 
  $(player).get(0).load();
  $(player).get(0).play();
  $(player).attr("src", id);
   setTimeout(() => player.play() , 1); 
   $(player).attr("src", id);
   player.closest('.modal').classList.add('show') ;  
   player.closest('.modal').style.display = 'block' ;  
   document.querySelector('.modal-backdrop').style.display = 'block' ;

  setTimeout(() =>  
    player.closest('.modal-player__item-video').classList.add('_active') 
    , 1)
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
  historyPlaylist = [
    ...historyPlaylist,
    // ...historyLists.filter((iop) => {
    //   return listys.includes(iop.id) ? null : iop;
    // }),
    ...playlist.filter((row) => {
      let exist = false;
      if (row.videoSrc === id) {
        historyPlaylist.forEach((e) => {
          if (e.videoSrc === id) {
            exist = true;
          }
        });
        return !exist;
      }
    }),
  ];

  if (historyPlaylist.length >= 1) {
    let slideIndex = historyPlaylist.length;
    historyPlaylist.forEach(() => {
      $(".videoPlaylist").slick("slickRemove", slideIndex - 1);
      if (slideIndex !== 0) {
        slideIndex--;
      }
    });

    $(".videoPlaylist").slick("refresh");
    historyPlaylist.forEach((row) => {
      console.log(historyLists, "row"); 
      $(".videoPlaylist").slick("unslick"); 
      insertToPlaylist(".videoPlaylist" ,  0, row);
      $(".videoPlaylist").slick(
        "slickAdd",
        "",
        $(".videoPlaylist").slick(getSliderSettings()) - 1 
      );
    });
  }
}

function runVideoPlaylist2(elem) {
  var id = $(elem).attr("key");
  var ido = $(elem).next().attr("key");
  console.log(id, "video id");
  
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
  historyPlaylist = [
    ...historyPlaylist,
    // ...historyLists.filter((iop) => {
    //   return listys.includes(iop.id) ? null : iop;
    // }),
    ...playlist.filter((row) => {
      let exist = false;
      if (row.videoSrc === id) {
        historyPlaylist.forEach((e) => {
          if (e.videoSrc === id) {
            exist = true;
          }
        });
        return !exist;
      }
    }),
  ];

  if (historyPlaylist.length >= 1) {
    let slideIndex = historyPlaylist.length;
    historyPlaylist.forEach(() => {
      $(".videoPlaylist").slick("slickRemove", slideIndex - 1);
      if (slideIndex !== 0) {
        slideIndex--;
      }
    });

    $(".videoPlaylist").slick("refresh");
    historyPlaylist.forEach((row) => {
      console.log(historyLists, "row"); 
      $(".videoPlaylist").slick("unslick");
      insertToPlaylist(".videoPlaylist" , 0, row);
      $(".videoPlaylist").slick(
        "slickAdd",
        "",
        $(".videoPlaylist").slick(getSliderSettings()) - 1 
      );
    });
  }
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

function getVideoKey2(def, title , classPlaylist) {
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
  // ] ; 

  const playlistClss = document.querySelector('.'+classPlaylist) ; 

  onFavoriteClick() ; 

  if (playlistClss) return 

  let favPlaylist = {
    def: def , 
    title: title , 
    classPlaylist: classPlaylist 
  }

    favVideosPlaylist.push(favPlaylist) ; 

    $(".flickfeed2").slick("refresh");
      $(".flickfeed2").slick("unslick"); 
      insertToFav2(def  , title , classPlaylist)  ; 
      $(".flickfeed2").slick(
        "slickAdd",
        "",
        $(".flickfeed2").slick(getSliderSettings()) - 1
      );
  

  window.localStorage.setItem("favVideosPlaylist", JSON.stringify(favVideosPlaylist));
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
function insertToFav(index, season, elem) {
  console.log(elem, "slsl");
  console.log(favVideos, "Salls");
  $("#favSlider").append(`<article class="mpp-playlist-content card favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="${elem.videoSrc}#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb"  alt="Neon Sign Kit" data-thumb-src="${
                           elem.imgSrc
                         }" src="${elem.imgSrc}">
                         <div class="mpp-media">
                            <video onended="endvid(this)" onmouseenter="closebackele(this)" class="mpp-video mpp-hidden iolla " preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" ${
                              $(".mute-video").hasClass("unmute-video")
                                ? null
                                : (muted = "false")
                            }>
                            
                                <source src="${elem.videoSrc}">
                            </video>
                            <i 
                            key="${elem.videoSrc}"
                            id="removeId-${elem.id}"
                            style="font-size: 3em;
                            position: absolute;
                            top: 39%;
                            z-index:1000;
                            cursor: pointer;
                            right: 43%;" class="fas fa-times-circle fa-2xl removeIcon"                              onclick="removeFromCart(this)">
                            </i>
                         </div>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                         <div class="mute-video ${
                           $(".mute-video").hasClass("unmute-video")
                             ? "unmute-video"
                             : " "
                         }" onclick="addmutes();">
                         </div>
                         </div>
                      </div>
                      <div class="back flex-column favback" style="display: none">
                         <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon mpp-top mpp-tope mpp-buttons3" data-tooltip="Play Now">
                                  <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
                                     <use xlink:href="#svg-link"></use>
                                  </svg>
                                  <span key="${
                                    elem.id
                                  }" style="display: none;" >${elem.id}</span>
                               </div>
                               <div class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Remove From List">
                                  <svg key="${elem.videoSrc}" id="removeId-${
    elem.id
  }" onclick="removeFromCart(this)">
                                     <use xlink:href="#svg-delete"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>
             </article>
`);
  if ($(".mute-video").hasClass("unmute-video")) {
    $("video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
  // initVideos()
}
// Show and hide => home and favorite Screens
/*
window.addEventListener('resize' , function () {
  let Width2 = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
  
  if (Width2 > 1400 && Width2 < 1600) {
    location.reload() ; 
  } else if (Width2 > 1024) {
    location.reload() ; 
  } else if (Width2 > 768 ) {
    location.reload() ; 
  } else if (Width2 > 480 ) {  
    location.reload() ; 
  }
  
})
*/
function onHomeClick() {
  $("#HomeScreen").css("display", "block");
  $(".wraphome").css("display", "block");
  $(".completehome").css("display", "block");
  $(".historyhome").css("display", "block");
  $(".parent").css("display", "block"); 
  $(".flickfeed2").slick("refresh");
  $(".flickfeed2").slick("unslick");
  $(".flickfeed2").slick(
    "slickAdd",
    "",
    $(".flickfeed2").slick(getSliderSettings()) - 1
  );
  // $("#FavoriteScreen").css("display", "none");
  //remove the Slick for a temporary time if the user Gonna
  // $(".flickfeed2").slick("unslick");
}

function insertToFav2(playlistDef  , titlePlaylist , classTitle) {
  
  $("#favSlider").append(`<article class="mpp-playlist-content card favi ${classTitle}">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg"  data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb"  alt="Neon Sign Kit" data-thumb-src="" src="./03.jpg">
                         <div class="mpp-media">
                         </div>
                         </div>
                         <div class="back flex-column favback" style="display: none">
                         <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn ${classTitle+'btn'} mpp-link-icon mpp-top mpp-tope mpp-buttons3" data-tooltip="Play Now">
                                  <svg key="" onclick="${playlistDef}">
                                     <use xlink:href="#svg-link"></use>
                                  </svg>
                                  <span key="" style="display: none;" ></span>
                               </div>
                               <div class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Remove From List">
                                  <svg key="" id="removeId" onclick="removeFromCart(this)">
                                     <use xlink:href="#svg-delete"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${titlePlaylist}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                      </div>
                   </div>
                   <div class="title__playlist" style="text-align: center;"> ${titlePlaylist} </div>
                </div>
             </article>
`);
 if ($(".mute-video").hasClass("unmute-video")) {
    $("video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
}



function onFavoriteClick() {
  $(".wraphome").css("display", "none");
  $(".completehome").css("display", "none");
  $(".historyhome").css("display", "none");
  $("#FavoriteScreen").css("display", "block");
  $(".parent").css("display", "none");
  $(".flickfeed2").slick("refresh");
  $(".flickfeed2").slick("unslick");
  $(".flickfeed2").slick(
    "slickAdd",
    "",
    $(".flickfeed2").slick(getSliderSettings()) - 1
  );
}

function onLandingClick() {
  window.location.href = "./landing/index.html";
}

// remove from a list popUp a modal , that verify user action => Delete , cancel : on Cancel DO Nothing and hide the modal
let tagElement = "";
let tagId = "";
let removedImage = "";
let removedVideo = "";
let removedVideoId = "";
let removedVideoTitle = "";

function removeFromCart(elem) {
  var id = $(elem).attr("key");
  console.log(id.replace("mp4", "png"), "remove");
  removedImage = id.replace("mp4", "png");
  removedVideo = id;
  removedVideoId = $(elem).attr("id").slice(9);
  seasonOne.forEach((elem) => {
    console.log(removedVideoId, elem.id, elem, "sskiwo");
    if (removedVideoId === elem.id) {
      removedVideoTitle = elem.episodeTitle;
    }
  });
  console.log(removedImage, "removedImage");
  $("#modalImage").attr("src", removedImage);
  $("#modalDivTitle").text(removedVideoTitle);
  console.log(removedVideoTitle, "Ssa");
  tagElement = elem;
  tagId = id;
  $(".modal1").css("display", "flex");
}

function removeFromHistory(elem) {
  var id = $(elem).attr("key");
  console.log(elem, "Ssaw");

  tagElement = elem;
  tagId = id;
  $(elem).parents("article").remove();
  historyLists = historyLists.filter((row) => {
    return row.videoSrc !== tagId;
  });
  $(".flickfeed4").slick(
    "slickRemove",
    $(tagElement).parents(":eq(5)").attr("data-slick-index")
  );

  $(".modal").css("display", "none");
  window.localStorage.setItem("historyVideos", JSON.stringify(historyLists));
}


function onRemove(elem, id) {
  console.log(elem, "hhkfthkl");
  console.log(id, "hhkfthkl");
  $(".modal1").css("display", "none");
  console.log(elem);
  favVideos = favVideos.filter((row) => {
    console.log(row.videoSrc, id);
    if (id !== row.videoSrc) {
      console.log(row, "row");
      return row;
    } else {
      Object.assign(row, { checked: false });
      document.querySelector(`[key=main-${row.id}]`).children[0].remove();
      $(`[key=main-${row.id}]`).find(".plus").remove();
      $(`[key=main-${row.id}]`).find(".chckedd").remove();
      $(`[key=main-${row.id}]`)
        .append(`<svg class="plus" key="${row.videoSrc}"  onclick="getVideoKey(this)">
                    <use id="iconAdded" href="#svg-zoom"></use>
                </svg>`);
    }
  });

  if ($(elem).parents(":eq(8)").attr("data-slick-index") == undefined) {
    $(".flickfeed2").slick(
      "slickRemove",
      $(elem).parents(":eq(6)").attr("data-slick-index")
    );
  } else {
    $(".flickfeed2").slick(
      "slickRemove",
      $(elem).parents(":eq(8)").attr("data-slick-index") 
    );
  }

  favVideosPlaylist.forEach((item , index) => {
    if (elem.parentNode.classList.contains(item.classPlaylist+'btn')) {
      favVideosPlaylist.splice(index , 1) ; 
    }
  })

  console.log($(elem).parents(":eq(6)").attr("data-slick-index"), "sopppa");
  console.log(favVideos, "Favorite");
  $(".modal1").css("display", "none");
  window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
  window.localStorage.setItem("favVideosPlaylist", JSON.stringify(favVideosPlaylist));
}

function cancel() {
  $(".modal1").css("display", "none");
}
// On delete , hide the modal and remove the video from favorite [] ,
// ===============================================================================================
// ==================================History And Complete Sliders=================================
// function insertToHistoryOrCompleted(slider, season, elem) {
//   $(slider).append(
//     `<article class="mpp-playlist-content card" key="article-${elem.id}">
//                 <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
//                    <div class="mpp-inner">
//                       <div class="mpp-content">
//                          <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${elem.imgSrc}" src="${elem.imgSrc}">
//                          <i
//                          style="font-size: 3em;
//                          position: absolute;
//                          top: 39%;
//                          z-index:1000;
//                          right: 43%;" class="fas fa-times-circle fa-2xl" id="removeIcon" key="${elem.videoSrc}" onclick="removeFromHistory(this)"></i>
//                          <div class="mpp-media">
//                             <video class="mpp-video mpp-hidden" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
//                                <source src="${elem.videoSrc}">
//                             </video>
//                          </div>
//                          <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
//                             <div class="mute-video"></div>
//                          </div>
// <div class="back d-flex flex-column">
//                        <div class="parent">
//                          <div class="bs-example" style="min-width:100%;">
//                            <div class="item">
//                              <div class="watched" id="watched">
//                               <span class="status"></span>
//                           <span style="padding:5px"></span>
//                               <span class="statusCount"></span>
//                              </div>
//                            </div>
//                            <div class="item">
//                              <button   id="PlayButton" style="min-width: 100%;" class="mybutton  border-gradient border-gradient-purple" data-toggle="modal"
//                                data-target="#homeVideo" data-backdrop="static" data-keyboard="false" onclick="playPauseVideo(this)" key='${elem.id}'>
//                                <i id="PlayButtonIcon" class="fas fa-play"> keep Watching</i></button>
//                            </div>

//                          </div>
//                       </div>
//                       </div>

//                    </div>
//                 </div>
//              </article>
// `
//   );
// }

// top-progress-bar
// <div class="item">
//  <progress id='Top-progress-bar${
//     elem.id
//   }' style="min-width:100%;" max='100' value='${
//    elem.progress
//   }'>50% played</progress>
// </div>

function insertToPlaylist(slider , season, elem) { 
  $(slider).append(
    `<article class="mpp-playlist-content card favi complea" key="article-${
      elem.id
    }">

                  <div class="mpp-playlist-item  mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="04.jpg" data-hover-path="04.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${
                           elem.imgSrc
                         }" src="${elem.imgSrc}">
                         <div class="mpp-media"> 
                            <video onended="endvid(this)" onmouseenter="closebackele(this)" class=" mpp-video mpp-hidden iolla closehid" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" ${
                              $(".mute-video").hasClass("unmute-video") 
                                ? null
                                : (muted = "false")
                            }>
                               <source src="${elem.videoSrc}">
                            </video>
                         </div>
                         <i 
                          style="font-size: 3em;
                          position: absolute;
                          top: 39%;
                          z-index:1000;
                          cursor: pointer;
                          right: 43%;" class="fas fa-times-circle fa-2xl removeIcon" id="removeIcon" key="${
                            elem.videoSrc
                          }" onclick="removeFromHistory(this)">
                          </i>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video ${
                              $(".mute-video").hasClass("unmute-video")
                                ? "unmute-video"
                                : " "
                            }" onclick= "addmutes()"></div>
                             
                         </div>
                      </div>
                      <div class="item closeprog">
                      <progress id='bottom-progress-bar-play${
                          elem.id 
                      }' style="min-width:100%;" max='100' value='${
      elem.percentage
    }'>50% played</progress>
                    </div>
                      <div class="back flex-column contt">                         
                      <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon mpp-top mpp-button-play" data-tooltip="Play Now">
                               <svg key="${elem.videoSrc}" onclick="playPauseVideoPlaylist(this); runVideoPlaylist(this);" class="mpp-buttons-top">
                               <use xlink:href="#svg-link"></use>
                            </svg>
                            <span key="${elem.id}" style="display: none;" >${
      elem.id
    }</span>
                               </div>
                               <div key="main-${
                                 elem.id
                               }" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus"  key="${elem.videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>
             </article>
`
  );

  if ($(".mute-video").hasClass("unmute-video")) {
    $(".video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
}


function insertToHistoryOrCompleted(slider, season, elem) {
  window.localStorage.setItem("historyVideos", JSON.stringify(historyLists));
  let progressClass = slider === "#completedSlider" ? 'bottom-progress-bar1' : 'bottom-progress-bar' ; 
  let mppClass = slider === "#completedSlider" ? 'mpp-buttons11' : 'mpp-buttons2' ; 
  let videoClass = slider === "#completedSlider" ? '' : 'videos1' ; 
  
  $(slider).append(
    `<article class="mpp-playlist-content card favi complea" key="article-${
      elem.id
    }">

                  <div class="mpp-playlist-item  mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="04.jpg" data-hover-path="04.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${
                           elem.imgSrc
                         }" src="${elem.imgSrc}">
                         <div class="mpp-media"> 
                            <video onended="endvid(this)" onmouseenter="closebackele(this)" class="${videoClass} mpp-video mpp-hidden iolla closehid" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" ${
                              $(".mute-video").hasClass("unmute-video") 
                                ? null
                                : (muted = "false")
                            }>
                               <source src="${elem.videoSrc}">
                            </video>
                         </div>
                         <i 
                          style="font-size: 3em;
                          position: absolute;
                          top: 39%;
                          z-index:1000;
                          cursor: pointer;
                          right: 43%;" class="fas fa-times-circle fa-2xl removeIcon" id="removeIcon" key="${
                            elem.videoSrc
                          }" onclick="removeFromHistory(this)">
                          </i>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video ${
                              $(".mute-video").hasClass("unmute-video")
                                ? "unmute-video"
                                : " "
                            }" onclick= "addmutes()"></div>
                             
                         </div>
                      </div>
                      <div class="item closeprog">
                      <progress id='${progressClass + 
                          elem.id 
                      }' style="min-width:100%;" max='100' value='${
      elem.percentage
    }'>50% played</progress>
                    </div>
                      <div class="back flex-column contt">                         
                      <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon mpp-top ${mppClass}" data-tooltip="Play Now">
                               <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runVideo(this);" class="mpp-buttons-top">
                               <use xlink:href="#svg-link"></use>
                            </svg>
                            <span key="${elem.id}" style="display: none;" >${
      elem.id
    }</span>
                               </div>
                               <div key="main-${
                                 elem.id
                               }" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus"  key="${elem.videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>
             </article>
`
  );

  if ($(".mute-video").hasClass("unmute-video")) {
    $(".video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
}


const openHistoryModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div); 
  if (completeList !== []) { 
    appendToModal( historyLists.concat(completeList) , true) ; 
  } else {
      appendToModal(historyLists) ; 
  }
};
const openCompletedModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
 appendToModal(completeList);
};
const openFavoriteModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
  appendToModal(favVideos , 'favorite'); 
};
const openHistoryModalPlaylist = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div); 
  if (completeList !== []) { 
    appendToModal( historyPlaylist.concat(completePlaylist) , true) ; 
  } else {
      appendToModal(historyPlaylist) ; 
  }
};
const openCompletedModalPlaylist = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
 appendToModal(completePlaylist);
};

const appendToModal = (videoList , bool) => {
  let element = document.querySelector("#gossHistory"); 
  element.innerHTML = "";  //<img class="mpp-thumb img-lists" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">             
   // let playindex = 0 ; 
   // let mppClassVideo = 'mpp-button-video1' ; 
   // if (bool) {
   //    mppClassVideo = 'mpp-button-video' ; 
   // } 
   // if (bool === 'favorite') {
   //  mppClassVideo = 'mpp-top mpp-buttons3' ; 
   // }
   
   videoList.forEach((elem) => { 
   // playindex++ ; 
    $("#gossHistory").append(`
    <div class="card1 card slick-slide slick-cloned slick-active lists" data-slick-index="-1" aria-hidden="false" style="width: 238px;"tabindex="-1">
                         <img class="mpp-thumb img-lists" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">
                        <video  onmouseenter="playvid(this)" onmouseleave="pusevid(this)"  class="videoList mpp-video vids" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" >
                        <source src="${elem.videoSrc}">
                        </video>
                        <div class="back flex-column backtt" style="display: none">
                         <div class="back-content" style="background-color: #191A1C;">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon" data-tooltip="Play Now">
                               <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runv(this);">
                                 <use xlink:href="#svg-link"></use>
                              </svg>
                            <span key="${elem.id}" style="display: none;" >${elem.id}</span>
                               </div>
                               <div key="main-${elem.id}" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus" key="${elem.videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
    </div>
    `);
  });

   /*
    <div class="card__row"> 
    <div class="card__item"> 
    <div class="card__index"> ${playindex} </div> 
    <div class="card1 card slick-slide slick-cloned slick-active lists" data-slick-index="-1" aria-hidden="false" style="width: 238px;"tabindex="-1">
                        <video  onmouseenter="playvid(this)" onmouseleave="pusevid(this)"  class="videoList mpp-video vids" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" >
                        <source src="${elem.videoSrc}">
                        </video>
                        <div class="back flex-column backtt" style="display: none">
                         <div class="back-content" style="background-color: #191A1C;">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon ${mppClassVideo} mpp-video" data-tooltip="Play Now">
                               <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runv(this);">
                                 <use xlink:href="#svg-link"></use>
                              </svg>
                            <span key="${elem.id}" style="display: none;" >${elem.id}</span>
                               </div>
                               <div key="main-${elem.id}" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus" key="${elem.videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>

                         </div>
                      </div>
                      <div class="prog"> 
                               <progress id='bottom-progress-bar${
                          elem.id 
                      }' style="min-width:100%;" max='100' value='${
      elem.percentage
    }'>50% played</progress>
                            </div>
    </div>
      <div class="card__content" style="padding: 10px"> 
        <div class="titles" style="font-weight: 600; font-size: 18px ; margin: 0px 0px 20px 0px ; "> ${elem.episodeTitle} </div>
        <div class="card__text">
            ${elem.desc}
        </div>
      </div>
    </div>
    </div>
   if (videoPlay != []) {
    console.log(videoPlay)  ;  
    document.querySelector('.homeSlider2').innerHTML = '' ;
     videoPlay.forEach(elem => {
      document.querySelector('.homeSlider2').insertAdjacentHTML('beforeend' , `<article class="mpp-playlist-content plays card yuii favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible mpp-videos" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner"> 
                      <div class="mpp-content"> 
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${elem.imgSrc}" src="${elem.imgSrc}">
                         <div class="mpp-media"> 
                            <video class="mpp-video mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
                              <source src="${elem.videoSrc}"> 
                            </video>
                         </div> 
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video" onclick= "addmutes()"></div>
                         </div><div class="item progress-item">

                      </div>
                      </div>
                      
                      <div class="back d-flex flex-column cont backs">
                         <div class="back-content backs-content">
                            <div class="mpp-controls"> 
                               <div class="mpp-contr-btn mpp-link-icon mpp-buttons-bars mpp-top" data-tooltip="Play Now">
                                  <svg key="${elem.videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
                                     <use xlink:href="#svg-link"></use> 
                                  </svg> 
                                  <span key="${elem.id}" style="display: none;" >${elem.id}</span>
                               </div> 
                               <div key="main-${elem.id}" id="mainVideo-${elem.id}" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus" key="${elem.videoSrc}"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg> 
                               </div> 
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg> 
                                     <use xlink:href="#svg-share"></use> 
                                  </svg> 
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1> 
                            <p class="Episode">E1 "Getting Started"</p> 
                         </div>
                      </div>
                       <div class="videoName"> 
                          ${elem.episodeTitle} 
                       </div>
                   </div>
                </div>

             </article>
    `) ; 
      }) 
   }
 */
};


function insertPlayVideo (videoSrc , category , index) {
  const mppButtonVideo = document.querySelectorAll('.mpp-button-video') ; 
  for (let i = 0 ; i < mppButtonVideo.length ; i++ ) {
   let mppButtonVideoKey = mppButtonVideo[i].querySelector('svg').getAttribute('key') ; 
    if (mppButtonVideoKey === videoSrc)  {
      for (let i = 0 ; i < seasonOne.length ; i++) {
     if (category === seasonOne[i].category) { 
      if (videoPlay.length) { 
        fl = true ; 
        for (let video = 0 ; video < videoPlay.length ; video++) { 
           if (videoPlay[video].id === seasonOne[i].id) { 
            fl = false  ; 
          }
        } 
      if (fl) {
       videoPlay.push(seasonOne[i]) ; 
      }
      } else {
          videoPlay.push(seasonOne[i]) ; 
      }
    }
  }
    }
     
  } 
    
  const homeSlider2 = document.querySelector('.homeSlider2') ;  
  homeSlider2.innerHTML = '' ; 
  if (homeSlider2.classList.contains('slick-slider')) {
    homeSlider2.classList.remove('slick-initialized') ; 
    homeSlider2.classList.remove('slick-slider') ; 
    homeSlider2.classList.remove('slick-dotted') ; 
  }
    
      // mpp-contr-btn mpp-link-icon mpp-buttons-bars mpp-top
     videoPlay.forEach(elem => {
      document.querySelector('.homeSlider2').insertAdjacentHTML('beforeend' , `
         <article class="mpp-playlist-content card yuii favi slider-index" style="width: 100%; display: inline-block; max-width: 260px;">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="${elem.videoSrc}#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">
                         <div class="mpp-media">
                            <video class=" mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" muted="">
                                <source src="${elem.videoSrc}">
                            </video>
                         </div> 
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video" onclick="addmutes()"></div>
                         </div>
                      </div>
                      <div class="back d-flex flex-column cont">
                         <div class="back-content">
                            <div class="mpp-controls mpp-block">
                               <div class="mpp-contr-btn mpp-link-icon mpp-buttons-bars mpp-top" data-tooltip="Play Now">
                                  <svg class="buttons1" key="${elem.videoSrc}" onclick="playPauseVideo(this); runVideo(this);">
                                     <use xlink:href="#svg-link"></use>
                                  </svg>
                                  <span key="${elem.id}" style="display: none;">${elem.id}</span>
                               </div>
                               <div key="main-${elem.id}" id="mainVideo-${elem.id}" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus plus1" key="" onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>

             </article>
    `) ; 
      }) 

const indexSlider = document.querySelectorAll('.slider-index') ; 
console.log(category) ; 
 if (indexSlider.length && indexSlider.length > 6) {
      document.querySelector('.homeSlider2').classList.remove('videos-playlists') ; 
      insertSwiper() ; 
 }  
}



// // ====================Progress And Video Player=============================
var player = document.getElementById("gossVideo");
var btnPlayPause = document.getElementById("btnPlayPause");
var btnMute = document.getElementById("btnMute");
var topProgressBar = document.getElementById("top-progress-bar"); 
var edited = false; 
let indexSliders = 0 ; 
let classSliders = 'flickfeedSlider' ; 

 
function insertSwiper () {
    
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

  $(".flickfeedSlider").on("init", yususus);
  $(".flickfeedSlider").on("init", assignSlidesOrigin);
  $(".flickfeedSlider").on("afterChange", assignSlidesOrigin); 
  $(".flickfeedSlider").on("beforeChange", mobilePauseVideo);

    $(".flickfeedSlider").slick(getSliderSettings());

  
}

const playlistsButton = document.querySelectorAll('.playlist__button') ; 

for (let i = 0 ; i < playlistsButton.length ; i++ ) {
  playlistsButton[i].addEventListener('click' , openPlaylistWindows) 
}

 // const modalButton = document.querySelector('.modal__button') ; 

const buttonRm = document.querySelector("#onRemove"),
  toast = document.querySelector(".toast1");
(closeIcon = document.querySelector(".close1")),
  (progress = document.querySelector(".progress"));
let timer1, timer2;
buttonRm.addEventListener("click", () => {
  toast.classList.add("active-toast");
  progress.classList.add("_activess");
  timer1 = setTimeout(() => {
    toast.classList.remove("active-toast");
  }, 5000); //1s = 1000 milliseconds 

  timer2 = setTimeout(() => {
    progress.classList.remove("_activess");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active-toast");

  setTimeout(() => {
    progress.classList.remove("_activess");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

function openPlaylistWindows () {
    document.body.style.overflow = 'hidden' ; 
    document.querySelector('.modals').classList.add('show') ; 
    document.querySelector('.modal-dialog-block').classList.add('_actives') ; 
    // playVideoItems() ; 
}

const playlistsVideo = document.querySelectorAll('.card__item video') ; 
  
let playerPlay = document.querySelector('#gossVideoPlay') ; 
      

playlistsVideo.forEach(item => {
   item.addEventListener('click' , function () {
    let mppButtonVideoSvg = item.closest('.card__item').querySelector('.mpp-button-video svg') ; 
    playPauseVideoPlaylist(mppButtonVideoSvg) ;
    runVideoPlaylist2(mppButtonVideoSvg) ; 
  })
})
  
window.addEventListener('load' , function () {
  playerPlay = document.querySelector('#gossVideoPlay') 
  setTimeout(function () {
      const videosPlay = document.querySelectorAll('.modals .videoList') ; 
      const modalsVideo = document.querySelector('.modalsVideo__main-video') ;  
      console.log(videoPlay) ;  
      let modalsListsVideo = document.querySelectorAll('.modalsVideo__list .video-long') ;  
       videosPlay.forEach((item , index) => {  
        const videoLong = item.closest('.card__item').querySelector('.video-long') ;
        let timestamp = item.duration ;
        console.log(timestamp) ;  
        if (timestamp) {
          const hours = Math.floor(timestamp / 60 / 60);
          const minutes = Math.floor(timestamp / 60) - (hours * 60); 
          const seconds = timestamp % 60; 
          let formatted = minutes + ':' + String(seconds).split('.')[0] ; 
          console.log(formatted , videoLong.length) ; 
          videoLong.innerHTML = String(formatted) ; 
          modalsListsVideo[index].innerHTML = String(formatted) ; 
        }
        // if (item.querySelector('svg')) { 
        //   let key = item.querySelector('svg').getAttribute('key')  ; 
        //   modalsVideo.insertAdjacentHTML('beforeend' , ` 
        //   <video controls="" autoplay="" name="media" class="video-modals"> 
        //       <source class="modals__source" src="${key}" type="video/mp4">
        //   </video> 
        //  `) 
        // }
        const modalsVideosModals = document.querySelectorAll('.modalsVideo__main-video .modal-player__item .vjs-tech') ;  
        function modalsPlayVideo (el) {
          playlist.forEach((element) => {
            if (element.videoSrc === el.getAttribute('src')) {
              let indexModals = parseInt(element.id) - 1 ; 
              let bottomProgressBar = document.querySelectorAll("#bottom-progress-bar-play" + (element.id)) ; 
              let percentage = Math.floor((100 / el.duration) * el.currentTime); 
              for (let i = 0 ; i < bottomProgressBar.length ; i++) {
                 bottomProgressBar[i].value = percentage ; 
                 bottomProgressBar[i].innerHTML = percentage  + "% played";  
              }
              element.progress = el.currentTime  ;  
              element.percentage = percentage; 
              
            if (percentage > 94) {
               insertPlayVideo(el.getAttribute('src') , categorysCount[indexModals].category , indexModals) ; 
            }
            console.log('2') ; 
            const cardIndexPlay = document.querySelectorAll('.modalsVideo .card__index')[indexModals] ; 
            cardIndexPlay.innerHTML = `<span> <i id="PlayButtonIcon" class="fas fa-pause playIcons" aria-hidden="true"></i> </span>` ; 
            cardIndexPlay.closest('.card__item').style.backgroundColor = '#9991' ; 
            const cardIndexPlay2 = document.querySelectorAll('.gossHistory__column .card__index')[indexModals] ; 
            cardIndexPlay2.innerHTML = `<span> <i id="PlayButtonIcon" class="fas fa-pause playIcons" aria-hidden="true"></i> </span>` ; 
            cardIndexPlay2.closest('.card__item').style.backgroundColor = '#9991' ; 

            let canvas = document.querySelector('#canvasId1') ;
            canvas.parentNode.style.display = 'block' ;
            let context = canvas.getContext('2d') ; 
            context.drawImage(el , 0, 0, canvas.width, canvas.height) ; 
            }
          })
        }
        playerPlay.addEventListener('timeupdate' , function () {
          modalsPlayVideo(this) ; 
        })
        function modalsVideos (el , index) {
          playlist.forEach((element) => { 
            if (element.videoSrc === el.querySelector('source').getAttribute('src')) { 
              let bottomProgressBar = document.querySelectorAll("#bottom-progress-bar-play" + (index + 1)) ; 
              let percentage = Math.floor((100 / el.duration) * el.currentTime); 
              for (let i = 0 ; i < bottomProgressBar.length ; i++) {
                 bottomProgressBar[i].value = percentage ; 
                 bottomProgressBar[i].innerHTML = percentage  + "% played";  
              }
               
            element.progress = el.currentTime  ;  
            element.percentage = percentage; 
           
            if (percentage > 94) {
               insertPlayVideo(el.querySelector('source').getAttribute('src') , categorysCount[index].category , index) ; 
            }

            console.log('1') ; 
            const cardIndexPlay = document.querySelectorAll('.modalsVideo .card__index')[index] ; 
            cardIndexPlay.innerHTML = `<span> <i id="PlayButtonIcon" class="fas fa-pause playIcons" aria-hidden="true"></i> </span>` ; 
            cardIndexPlay.closest('.card__item').style.backgroundColor = '#9991' ; 
            const cardIndexPlay2 = document.querySelectorAll('.gossHistory__column .card__index')[index] ; 
            cardIndexPlay2.innerHTML = `<span> <i id="PlayButtonIcon" class="fas fa-pause playIcons" aria-hidden="true"></i> </span>` ; 
            cardIndexPlay2.closest('.card__item').style.backgroundColor = '#9991' ; 

            let canvas = document.querySelector('#canvasId1') ;
            canvas.parentNode.style.display = 'block' ;
            let context = canvas.getContext('2d') ; 
            context.drawImage(el , 0, 0, canvas.width, canvas.height) ; 
            }
          })
        }
        modalsVideosModals.forEach((item , index) => {
          if (!item.closest('.modal-player__item').querySelector('#gossVideo')) {
             item.addEventListener('timeupdate' , function() {
            modalsVideos(this , index) ; 
          }) ;  
          item.addEventListener('pause' , function() {
            const cardIndexPlay = document.querySelectorAll('.modalsVideo .card__index')[index] ; 
            cardIndexPlay.innerHTML = `<span> <i
            id="PlayButtonIcon" class="fas fa-play"></i></span>` ; 
            const cardIndexPlay2 = document.querySelectorAll('.gossHistory__column .card__index')[index] ; 
            cardIndexPlay2.innerHTML = `<span> <i
            id="PlayButtonIcon" class="fas fa-play"></i></span>` ; 
          }) ; 
          item.addEventListener('ended' , function() { 
            let idRating = parseInt(item.getAttribute('data-idrating') ) ; 
            //putVideoView(idRa) ; 
          }) 
          }
         
         
        }) 
      })

      // const modalsVideos1 = document.querySelectorAll('.modalsVideo__main-video .modal-player__item') ;  
      // modalsVideos1.forEach(item => item.pause()) ; 
      // slick-slide slick-cloned slick-active lists
      const selectSeasons = document.querySelector('.selectSeasons1') ; 
      selectSeasons.addEventListener('change' , function () {
          console.log('3983842309509345' , this.value) ; 
            if (parseInt(this.value) > 1) { 
               document.querySelector('.gossHistory__column').style.display = 'none' ; 
               document.querySelector('.gossHistory__column-2').style.display = 'flex' ; 
               document.querySelector('.modalsVideo__list').style.display = 'none' ; 
               document.querySelector('.modalsVideo__list-2').style.display = 'block' ; 
            } else {
              document.querySelector('.gossHistory__column').style.display = 'flex' ; 
              document.querySelector('.gossHistory__column-2').style.display = 'none' ; 
              document.querySelector('.modalsVideo__list').style.display = 'block' ; 
              document.querySelector('.modalsVideo__list-2').style.display = 'none' ; 
            }
      })  
    }) 
      
})

const openSearchBoxButton = document.querySelectorAll('.open-search-box__button') ; 
const videosItem = document.querySelectorAll('.videos__item') ; 

openSearchBoxButton.forEach((item , index) => {
    item.addEventListener('click' , function () {
      videosItem[index].classList.add('_active-open') ; 
    })
}) 


let indexKeys = -1 ; 

const modalButton = document.querySelector('.modal__button') ; 

modalButton.addEventListener('click' , function () {
    let titlePlay = '' ; 
    this.parentNode.querySelector('h1').innerHTML.split(' ').forEach(item => 
        titlePlay += item 
    )
    document.body.style.overflow = 'auto' ; 
    document.body.style.overflowX = 'hidden' ;  
    document.querySelector('.modals').classList.remove('show') ; 
    getVideoKey2('openPlaylistWindows()' , this.parentNode.querySelector('h1').innerHTML , titlePlay.trim()) ; 
}) 

document.addEventListener('click' , function (e) {  
  const mppVideo = document.querySelectorAll('.mpp-video') ;
  
  if (e.target.closest('.mpp-video')) { 
     const cardIndex = e.target.closest('.card__item').querySelector('.card__index') ; 
     const modalsVideos = document.querySelectorAll('.modalsVideo .modal-player__item') ; 
     cardIndex.innerHTML = `<span> <i id="PlayButtonIcon" class="fas fa-pause playIcons" aria-hidden="true"></i> </span>` ; 
     e.target.closest('.card__item').style.backgroundColor = '#9991' ; 
     const buttonactive = document.querySelectorAll('.button-active') ; 
     const activeVideos = document.querySelectorAll('.modal-player__item--active') ; 

     if (buttonactive[0]) {
        buttonactive.forEach(item => item.classList.remove('button-active'))  ; 
     }
     if (activeVideos[0]) {
        activeVideos.forEach(item => item.classList.remove('modal-player__item--active'))  ; 
     }
     e.target.classList.add('button-active') ;  
     indexKeys = parseInt(e.target.parentNode.querySelector('span').getAttribute('key')) - 1 ; 
     modalsVideos[indexKeys].classList.add('modal-player__item--active') ; 
     
     const modalsVideos2 = document.querySelectorAll('.modalsVideo__main-video video') ;  
     playlist.forEach(item => 
        item.id == indexKeys + 1 
        ? modalsVideos[indexKeys].querySelector('.vjs-tech').currentTime = parseFloat(item.progress)  
        : ''
     )
     modalsVideos2.forEach(item => item.pause()) ; 
     modalsVideos[indexKeys].querySelector('.vjs-tech').play() ; 
     console.log(indexKeys) ; 
     
  }

  if (e.target.closest('.button-close')) {
    document.body.style.overflow = 'auto' ;
     document.body.style.overflowX = 'hidden' ;    
      document.querySelector('.modals').classList.remove('show') ;  
   } 

   if (e.target.closest('.mpp-button-play')) {
      console.log(e.target.parentNode.querySelector('span').getAttribute('key')) ; 
      let spanIndex = e.target.parentNode.querySelector('span').getAttribute('key') ; 
      playlist.forEach(item => 
        item.id === spanIndex 
        ? playerPlay.currentTime = parseFloat(item.progress)  
        : ''
      )
   }

    if (e.target.closest('.close')) {
       const modalsVideos2 = document.querySelectorAll('.modalsVideo__main-video video') ;  
       modalsVideos2.forEach(item => item.pause()) ; 
       playerPlay.pause() ; 
       playOut() ; 
    }

    if (e.target.closest('.toggle-playlist')) {
      const modalsPlayer = document.querySelector('.modal-player').style.position ; 
      const modalsPlayer2 = document.querySelector('.modal-player') ; 
      if (getComputedStyle(modalsPlayer2).getPropertyValue('position') === 'sticky') {
          modalsPlayer2.style.position = 'fixed' ; 
          console.log('fixed') ; 
          document.querySelector('.modalsVideo').style.overflow = 'hidden' ;    
    
      } else if (modalsPlayer2.style.position === 'fixed') {
        modalsPlayer2.style.position = 'sticky' ; 
        document.querySelector('.modalsVideo').style.overflow = 'auto' ;    
    
      } 
    }

  if (e.target.closest('.mpp-top')) {
    if (player.classList.contains('play')) {
      player.classList.remove('play') ; 
    } 
  }

  if (e.target.closest('.close')) { 
      let player = document.querySelector('#gossVideo') ;  
      const modalsVideo = document.querySelector('.modalsVideo') ; 
      setTimeout(() => {
        modalsVideo.style.display = 'none' ;  
         let modals = document.querySelectorAll('.modal-backdrop');
          modals.forEach(item => item.style.display = 'none' ) ; 
        if ( player.closest('.modal').classList.contains('show')) {
           player.closest('.modal').classList.remove('show') ;  
           player.closest('.modal').style.display = 'none' ; 
        }
        if (playerPlay.closest('.modal').classList.contains('show')) {
          playerPlay.closest('.modal').classList.remove('show') ;  
          playerPlay.closest('.modal').style.display = 'none' ;  
        }  
        if (player.closest('.modal-player__item').classList.contains('modal-player__item--active')) {
        player.closest('.modal-player__item').classList.remove('modal-player__item--active')
       
      }
      if (playerPlay.closest('.modal-player__item').classList.contains('modal-player__item--active')) {
         playerPlay.closest('.modal-player__item').classList.remove('modal-player__item--active')
      
      }
      }  , 500) ; 
      player.closest('.modal-player__item-video').classList.remove('_active') ; 
      playerPlay.closest('.modal-player__item-video').classList.remove('_active') ; 
      document.body.style.overflow = 'auto' ; 
      document.body.style.overflowX = 'hidden' ;  
      modalsVideo.classList.remove('_active') ;      
      
      player.pause() ; 
  }

  if (e.target.closest('.modal-view__button')) {
      const modalsVideo = document.querySelector('.modalsVideo') ; 
      const modalsSource = document.querySelector('.modals__source') ; 
      modalsVideo.style.display = 'block' ; 
      setTimeout(() => modalsVideo.classList.add('_active') , 1) ; 
      const activeVideos = document.querySelector('.modal-player__item--active') ; 
      if (activeVideos) {
        activeVideos.querySelector('.vjs-tech').play() ; 
      } else {
        document.querySelector('.modalsVideo .modal-player__item').classList.add('modal-player__item--active') ; 
        document.querySelector('.modalsVideo .modal-player__item--active .vjs-tech').play() 

      }
      
  }

  if (e.target.closest('.card__item video')) {
     const modalsVideo = document.querySelector('.modalsVideo') ; 
     modalsVideo.style.display = 'block' ; 
     setTimeout(() => modalsVideo.classList.add('_active') , 1) ; 
     
  }

  if (e.target.closest('.bs-example__close')) {
     const activeOpen = document.querySelectorAll('._active-open') ; 
    activeOpen.forEach(item => item.classList.remove('_active-open')) ; 
  
  }
      
}) 


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
var canvas = document.getElementById("canvasId");
let currentSelectedId = "";
let currentSelectedIdPlaylist = "" ; 

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

window.addEventListener("load", function () {
  let playerPlay = document.querySelector('#gossVideoPlay') ; 
  playerPlay.addEventListener( 
  "ended",
  function () {
    // seasonOne.forEach((ele)=>{
    //     if(currentSelectedId === ele.id){
    //       completeList.push(ele)
    //     }
    //   })
    historyPlaylist.filter((row) => currentSelectedIdPlaylist === row.id);
    // Remove From Histroy List slider
    let selectedId = "";
    historyPlaylist.forEach((row) => {
      if (currentSelectedIdPlaylist === row.id) {
        // document.querySelector(`[key=article-${row.id}]`).remove()
        let elem = $(`[key=article-${row.id}]`);
        selectedId = row.id;
        // console.log(elem.parent().parent().attr('data-slick-index'),'element')
        $(".videoPlaylist").slick(
          "slickRemove",
          elem.parent().parent().attr("data-slick-index")
        );
        // $('.flickfeed3').slick('unslick');
        //  insertToHistoryOrCompleted('#completedSlider',0,row)
        //  $('.flickfeed3').slick('slickAdd','', $('.flickfeed3').slick(getSliderSettings())-1);
      }
    });
    historyPlaylist = historyPlaylist.filter((row) => {
      return row.id !== currentSelectedIdPlaylist;
    });

    // Add To Complete List  slider
    completePlaylist = [
      ...completePlaylist,
      ...playlist.filter((row) => {
        let exist = false;
        if (row.id === selectedId) {
          completePlaylist.forEach((e) => {
            if (e.id === selectedId) {
              exist = true;
            }
          });
          return !exist;
        }
      }),
    ];

    if (completePlaylist.length >= 1) {
      console.log(completeList, "completeList");
      let slideIndex = completePlaylist.length;
      completePlaylist.forEach(() => {
        $(".completedPlaylist").slick("slickRemove", slideIndex - 1);
        if (slideIndex !== 0) {
          slideIndex--;
        }
      });

      completePlaylist.forEach((row) => {
        $(".completedPlaylist").slick("unslick");
        insertToPlaylist(".completedPlaylist", 0, row);
        $(".completedPlaylist").slick(
          "slickAdd",
          "",
          $(".completedPlaylist").slick(getSliderSettings()) - 1
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

$(playerPlay).on(
  "ended",
  function () {
    console.log("jquery");
    playerPlay.load();
  },
  false
);


playerPlay.addEventListener("ended", () => { 
  document.querySelector(".closeexit").click();
  playerPlay.currentTime = 0;
  playOut() ; 
});

});

// player.addEventListener(
//   "play",
//   function () {
//     // let PlayButton = document.getElementById("PlayButton");
//     player.onended = function () {
//       // console.log(player, "player");

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
//     if (player.ended) {
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
// player.addEventListener(
//   "pause",
//   // function () {
//   //   let PlayButton = document.getElementById("PlayButton");
//   //   PlayButton.innerHTML = localStorage.getItem("pauseBtn");
//   // },
//   false
// );

player.addEventListener( 
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




$(player).on(
  "ended",
  function () {
    console.log("jquery");
    player.load();
  },
  false
);



function playOut() {
  const cardIndex1 = document.querySelectorAll('.card__index') ; 
  cardIndex1.forEach(item => {
    if (item.querySelector('.playIcons')) {
      item.innerHTML = "" ; 
      item.innerHTML = `<span> <i
            id="PlayButtonIcon" class="fas fa-play"></i></span>` ; 
    }
   
  }) 
}



function pauseVid() {
  var percentage = Math.floor((100 / player.duration) * player.currentTime);
  if (percentage > 0 && percentage < 100) {
    // var element = document.getElementById("PlayButtonIcon");
    // var isClassExist = hasClass(element, "fa-pause");
    // console.log(isClassExist);
  }

  player.pause();
}

var playerss = document.getElementById("gossVideo");
playerss.addEventListener("ended", () => {
  document.querySelector(".closeexit").click();
  playerss.currentTime = 0;
  playOut() ; 
});


let index11 = 0 ; 

document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-buttons-top')) { 
   index11++ ;  
  } 
  
})
// Update the Icons for this specific video
function playPauseVideo(el) {
  // let PlayButton = document.getElementById("PlayButton");
  let player = document.querySelector('#gossVideo') ; 
  let id = $(el).next().attr("key");
  console.log(id, "hjhj");
  // element = PlayButton.children[0];
  console.log(player, "playButton", id, "id");
  let videoSrc = "";

  seasonOne.forEach((element) => {
    if (element.id === id) {
      videoSrc = element.videoSrc;
      currentSelectedId = element.id;
    }
  });

  $(player).get(0).load();
  $(player.children[0]).attr("src", videoSrc);
  console.log(videoSrc, "gg");
  if (player.paused || player.ended) {
    // var isClassExist = hasClass(element, "fa-play");
    if (isClassExist === true) {
      // removeClass(element, "fa-play");
      // addClass(element, "fa-pause");
      // console.log(element);
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        player.currentTime = parseFloat(ele.progress);
      }
    });
    player.play();
  } else {
    console.log(element) ; 
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      // PlayButton.innerHTML = localStorage.getItem("pauseBtn");
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        player.currentTime = parseFloat(ele.progress);
      }
    });
    // player.currentTime = parseFloat(localStorage.getItem("VideoEndedTime"))
    player.pause(); 
  }
}

function playPauseVideoPlaylist(el , fl) {
  // let PlayButton = document.getElementById("PlayButton");
  let id = $(el).next().attr("key");
  console.log(id, "hjhj");
  // element = PlayButton.children[0];
  console.log(player, "playButton", id, "id");
  let videoSrc = "";

  playlist.forEach((element) => {
    if (element.id === id) {
      videoSrc = element.videoSrc;
      currentSelectedIdPlaylist = element.id;
    }
  });

  $(playerPlay.children[0]).attr("src", videoSrc);
  console.log(videoSrc, "gg"); 
  if (playerPlay.paused || playerPlay.ended) {
    // var isClassExist = hasClass(element, "fa-play");
    // playlist.forEach((ele) => {
    //   if (ele.videoSrc === videoSrc) {
    //     playerPlay.currentTime = parseFloat(ele.progress);
    //   }
    // });
  } else {
    console.log(element) ; 
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      // PlayButton.innerHTML = localStorage.getItem("pauseBtn");
    }
    playlist.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        playerPlay.currentTime = parseFloat(ele.progress);
      }
    });
    // player.currentTime = parseFloat(localStorage.getItem("VideoEndedTime")) 
  }
}
let booleans1 = 'trues' ; 

let booleans11 = 'true11' ;
let booleans2 = 'trues'  ;
let index3 = 0 ;  
let keys1 = 0 ; 
let booleansVideoAgain = true ; 
let indexModals = -1 ; 
let booleans4 = false ; 
document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-buttons-bars')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
    booleansVideoAgain = true ;  
   
  }
  if (e.target.closest('.mpp-top')) { 
    booleans1 =  true  ;    
    booleans4 = false ; 
  }

  if (e.target.closest('.mpp-buttons11')) {
    booleans11 = true ; 
    booleans1 = true ; 
    booleans = false ; 
    booleansVideoAgain = true ; 
  } 
  if (e.target.closest('.mpp-buttons2')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
    booleansVideoAgain = true ; 
  }

  if (e.target.closest('.mpp-buttonss1')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
    booleansVideoAgain = true ; 
    
  }

  if (e.target.closest('.mpp-buttons-view')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
    booleansVideoAgain = true ; 
    
  }

  if (e.target.closest('.mpp-buttons-like')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
    booleansVideoAgain = true ; 
    
  }

   if (e.target.closest('.mpp-button-video')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
    booleansVideoAgain = true ; 
    
  }

 if (e.target.closest('.mpp-button-video1')) { 
    booleans11 = true ; 
    booleans1 = true ; 
    booleans4 = false ; 
    booleansVideoAgain = true ; 
  }


  if (e.target.closest('.mpp-buttons3')) {
    booleans1 = false ; 
    booleans4 = true ; 
    booleansVideoAgain = false ; 
    }
   
  



})
window.addEventListener('load' , function () {
  let player = document.querySelector('#gossVideo') ; 
  function updateProgressBar(keys) {
   if (booleans1)  {
      let bottomProgressBar = document.querySelectorAll(`${"#bottom-progress-bar" + keys}`) ; 
      let bottomProgressBar1 = document.getElementById(`${"bottom-progress-bar1" + keys}`) ; 
      const modalsVideosModals = document.querySelectorAll('.modalsVideo__main-video .modal-player__item .vjs-tech')[keys - 1] ;     
  let percentage = Math.floor((100 / player.duration) * player.currentTime); 
  localStorage.setItem("VideoWatchPercentage", percentage);
   
 console.log(keys) ; 
  localStorage.setItem("VideoEndedTime", player.currentTime); 
  seasonOne.forEach((element) => { 
    if (element.id === `${keys}`) { 
          if (bottomProgressBar && booleans11) {
            for (let i = 0 ; i < bottomProgressBar.length ; i++ ) {
              bottomProgressBar[i].value = percentage ; 
              bottomProgressBar[i].innerHTML = percentage  + "% played";  
            }
            
          } 
          if (booleans11) {
              bottomProgressBar1.value = percentage ; 
             bottomProgressBar1.innerHTML = percentage  + "% played"; 
        
          }
          
         
      element.progress = player.currentTime  ;  
      element.percentage = percentage;
      }
    
  });

  }
    
    
}

player.addEventListener('ended' , function () {
  insertViews(PlayIndex + 1) ; 
}) 

player.addEventListener("timeupdate", function () {
  updateProgressBar(keys1) ;  
  updateProgressBar1(PlayIndex , true , keys1) ;  

} , false);
 
})


function updateVideoTimeWithBar(nu) {
  var player = document.getElementById("gossVideo");
  // topProgressBar.value = localStorage.getItem("VideoWatchPercentage");
  // topProgressBar.innerHTML = localStorage.getItem("VideoWatchPercentage") + '% played';
  historyLists.forEach((element) => {
    let bottomProgressBar = document.getElementById(
      `bottom-progress-bar${element.id}`
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
          
        }
      });
    }
    seasonOne.forEach((element) => {
      if (currentSelectedId === element.id) { 
        player.currentTime = parseFloat(element.progress); 
      }
    });
  });
}

updateVideoTimeWithBar();

////////////Toast



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
var canvas = document.querySelectorAll('.cnvax') ? document.querySelectorAll(".cnvax") : document.querySelector(".cnvax"); 
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

// slet video = $('#videoSourceModal').attr('src', historyList[randomVideo].videoSrc)
let categorysCount = [
    {
      id: '1' , 
      category: 'actions' , 
      actors: 'Clark Gable' , 
      studios: 'Worner Bross' ,  
    }, 
    {
      id: '2' , 
      category: 'comics' , 
      category: 'Documentary' , 
      actors: 'Marlon Brano' ,  
    } , 
    {
      id: '3' , 
      category: 'catastrophic' , 
      actors: 'Tom Hanks'  ,
      studios: 'Paramount Pictures' , 
    } , 
    {
      id: '4' , 
      category: 'comics' , 
      actors: 'Leonardo DiCaprio' , 
      studios: 'Universal Studios' , 
    } , 
    {
      id: '5' , 
      category: 'adventure' , 
      actors: 'Johnny Depp' , 
      studios: '20th Century Fox' , 
    } , 
    {
      id: '6' , 
      category: 'Dramatic' , 
      actors: 'Anthony Hopkins' , 
      studios: 'Walt Disnay Pictures' , 
    },
    {
      id: '7' , 
      category: 'Documentary' , 
      actors: 'Tow Cruise' ,  
      studios: 'Columbia Pictures' , 
    }, 
    {
      id: '8' , 
      category: 'War' , 
      actors: 'Brad Pitt' ,   
      studios: 'Universal Studios' , 
    }, 
    {
      id: '9' , 
      category: 'Horror' , 
      actors: 'Morgan Freeman' , 
      studios: 'Columbia Pictures' , 
    }, 
] ; 
function addvidss(index) {
 let playersssss1 = document.querySelectorAll("#gossVideo") ? document.querySelectorAll('#gossVideo') : document.querySelector('#gossVideo') ;
  if (playersssss1.length) {  
  let videos1 ; 
  PlayIndex = index ; 
  let playyers1 = document.querySelectorAll('.homeSlider11 .plyyer source') ;
  $(playersssss1).get(index).load(); 
  $(playersssss1).get(index).play();
  let span1 = document.querySelectorAll('.homeSlider11 .buttons1')[index] ; 
  runVideo(span1) ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth)  ; 
   if (Width > 1400 ) {
    videos1 = playyers1[index].src ; 
 
  } 
  if (Width < 1400 ) {
    videos1 = playyers1[index].src ; 
 
  }
  $(player).attr("data-theme", `${categorysCount[index].category}`); 
   $(player).attr("src", `${videos1}`);   
  console.log("video", historyList[randomVideo].videoSrc); 
  } else {
  $(playersssss1).get(0).load(); 
  $(playersssss1).get(0).play(); 
  $(playersssss1).attr("src", `${"../slider/02.mp4"}`);  
  console.log("video", historyList[randomVideo].videoSrc);
  
  
  }
  
}

function videoCategoryInsert(index) {
  let playersssss1 = document.querySelectorAll("#gossVideo") ? document.querySelectorAll('#gossVideo') : document.querySelector('#gossVideo') ;
  $(playersssss1).attr("data-theme", `${categorysCount[index].category}`); 
  
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
  let player = document.querySelector('#gossVideo') ; 
   function resizeAddProg () {
     const mppLinkIcon1 = document.querySelectorAll('.mpp-link-icon') ? document.querySelectorAll('.mpp-link-icon') : document.querySelector('.mpp-link-icon') ;
     const mppBlock = document.querySelectorAll('.mpp-block') ? document.querySelectorAll('.mpp-block') : document.querySelector('.mpp-block') ; 
     let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
    const videosPlaylist = document.querySelector('.videos-playlists-plays') ; 
    if (videosPlaylist.classList.contains('flickfeed')) {
      videosPlaylist.classList.remove('flickfeed') ; 
    }
    videosPlaylist.innerHTML = '' ; 
    if (videosPlaylist.classList.contains('slick-slider')) {
      videosPlaylist.classList.remove('slick-initialized') ; 
      videosPlaylist.classList.remove('slick-slider') ; 
      videosPlaylist.classList.remove('slick-dotted') ; 
    }
    console.log('3430838574095') ;
    seasonOne.forEach(item => {
      videosPlaylist.insertAdjacentHTML('beforeend' , `
      <article class="mpp-playlist-content card yuii favi" style="width: 100%; display: inline-block;">
      <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
         <div class="mpp-inner">
            <div class="mpp-content">
               <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="./03.jpg" src="./03.jpg">
               <div class="mpp-media">
                  <video class="mpp-video mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" muted="">
                  </video>
               </div>
               <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                  <div class="mute-video" onclick="addmutes()"></div>
               </div>
            </div>
            <div class="back d-flex flex-column cont">
               <div class="back-content">
                  <div class="mpp-controls mpp-block">
                     <div class="mpp-contr-btn mpp-link-icon mpp-buttons mpp-top" data-tooltip="Play Now">
                        <svg class="buttons1" key="" onclick="playPauseVideo(this); runVideo(this);">
                           <use xlink:href="#svg-link"></use>
                        </svg>
                        <span key="${item.id}" style="display: none;">${item.id}</span>
                     </div>
                     <div key="main-${item.id}" id="" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                        <svg class="plus plus1" key="" onclick="getVideoKey(this)">
                           <use id="" href="#svg-zoom"></use>
                        </svg>
                     </div>
                     <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                        <svg>
                           <use xlink:href="#svg-share"></use>
                        </svg>
                     </div>
                  </div>
                  <p class="Episode">E1 "Getting Started"</p>
               </div>
            </div>
         </div>
      </div>

   </article>
      `
      )
    })
    
    for (let i = 0 ; i < seasonOne.length ; i++) { 
      insertToHTML(i, 1, seasonOne[i]); 
    } 

    insertPlalistsRating('.videos-playlists-plays') ; 

    const mppLinkIcon2 = document.querySelectorAll('.slick-slide.slick-cloned.firster .mpp-buttons') ? document.querySelectorAll('.slick-slide.slick-cloned.firster .mpp-buttons') : document.querySelector('.slick-slide.slick-cloned.firster .mpp-buttons') ;
   if (Width) {
     for (let i = 0 ; i < mppLinkIcon2.length ; i++ ) { 
     let mppLinkIcon3 = mppLinkIcon2[i] ; 
     mppLinkIcon3.remove() ; 
   } 
   } 
   mppLinkIcon =  document.querySelectorAll('.mpp-buttons') ? document.querySelectorAll('.mpp-buttons') : document.querySelector('.mpp-buttons') ; 
  clickMppLinkIcon() ; 
 } 
setTimeout(function () {
 resizeAddProg () ; 
  
} , 1) 

window.addEventListener('resize' , resizeAddProg)  ; 

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
        seasonOne1.forEach(element => {
          if (parseInt(element.id) === (i + 1)) {
            player.currentTime = parseFloat(element.progress)
          }
        })
        keys1 = parseInt(document.querySelectorAll('.mpp-buttons span')[i].getAttribute('key')) ; 

      
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
    addvidss(i) ; 
    playPauseVideo(i) ;
     
        bool = true ; 
        PlayIndex = i ; 
        index1 = 1 ; 
        seasonOne1.forEach(element => {
          if (parseInt(element.id) === (i + 1)) {
            player.currentTime = parseFloat(element.progress)
          }
        })
    //PlayButton[index].click() ; 
    keys1 = parseInt(this.querySelector('span').getAttribute('key')) ; 
    
   })  
  }
} 

setTimeout(function () {
  clickMppLinkIcon() ; 
}, 2) ; 


  
if (playersssss.length) { 
  for (let i = 0 ; i < playersssss.length ; i++ ) {
     playersssssin = playersssss[i] ; 
 player.addEventListener("timeupdate", function () {
  updateProgressBar1(PlayIndex , true , keys1) ; 
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
let indexPlay = 0 ; 
let booleans = 'trues' ; 
document.addEventListener('click' , function (e) {
  
  if (e.target.closest('.mpp-buttons-bars')) { 
    booleans =  false ;    
   
  }
  
  if (e.target.closest('#PlayButton')) { 
    booleans =  true  ;   
    booleansVideoAgain = true ; 
  }
  
  if (e.target.closest('.mpp-buttons3')) {
    booleans = false ; 
  }
  const mppButtons2 = document.querySelectorAll('.mpp-buttons2') ; 
for (let i = 0 ; i < mppButtons2.length ; i++ ) {
  mppButtons2[i].addEventListener('click' , function () {
    keys1 = parseInt(this.querySelector('span').getAttribute('key')) ; 
    for (let i = 0 ; i < mppButton.length ; i++ ) {
      let span = parseInt(mppButton[i].querySelector('span').getAttribute('key')) ; 
      if (span === keys1) { 
        PlayIndex = i ; 
        break ; 
      }
   }
      
  })
}


const mppButtonVideo = document.querySelectorAll('.mpp-button-video') ; 
const mppButton = document.querySelectorAll('.mpp-buttons') ; 
for (let i = 0 ; i < mppButtonVideo.length ; i++ ) {
  mppButtonVideo[i].addEventListener('click' , function () {
   player.classList.add('play') ; 
   keys1 = parseInt(this.querySelector('span').getAttribute('key')) ; 
   for (let i = 0 ; i < mppButton.length ; i++ ) {
      let span = parseInt(mppButton[i].querySelector('span').getAttribute('key')) ; 
      if (span === keys1) { 
        PlayIndex = i ; 
        videoCategoryInsert(PlayIndex) ; 
        indexPlay = 0 ; 
        break ; 
      }
   }
      
    
  })
}




const mppButtonBar = document.querySelectorAll('.mpp-buttons-bars') ; 
if (mppButtonBar) {
  for (let i = 0 ; i < mppButtonBar.length ; i++ ) {
  mppButtonBar[i].addEventListener('click' , function () {
    keys1 = parseInt(this.querySelector('span').getAttribute('key')) ; 
   for (let i = 0 ; i < mppButton.length ; i++ ) {
      let span = parseInt(mppButton[i].querySelector('span').getAttribute('key')) ; 
      if (span === keys1) { 
        PlayIndex = i ; 
        videoCategoryInsert(PlayIndex) ;  
        break ; 
      }
   }
  })
}
} 



const mppButtonss1 = document.querySelectorAll('.mpp-buttonss1') ; 
for (let i = 0 ; i < mppButtonss1.length ; i++ ) {
  mppButtonss1[i].addEventListener('click' , function () {
    let videos = this.querySelector('svg').getAttribute('key') ; 
    for (let i = 0 ; i < mppButton.length ; i++ ) {
      let videos2 = mppButton[i].querySelector('.buttons1').getAttribute('key') ; 
      if (videos === videos2) {
        keys1 = parseInt(mppButton[i].querySelector('span').getAttribute('key')) ; 
        let firster = document.querySelectorAll('.wraps1 .firster') ; 
          PlayIndex = i ; 
          videoCategoryInsert(PlayIndex) ; 
          break ; 
      }
   }
      
    
  })
}

const mppButtonView = document.querySelectorAll('.mpp-buttons-view') ; 
for (let i = 0 ; i < mppButtonView.length ; i++ ) {
  mppButtonView[i].addEventListener('click' , function () {
    let videos = this.querySelector('svg').getAttribute('key') ; 
    for (let i = 0 ; i < mppButton.length ; i++ ) {
      let videos2 = mppButton[i].querySelector('.buttons1').getAttribute('key') ; 
      if (videos === videos2) {
        keys1 = parseInt(mppButton[i].querySelector('span').getAttribute('key')) ; 
        let firster = document.querySelectorAll('.wraps1 .firster') ; 
          PlayIndex = i ; 
          videoCategoryInsert(PlayIndex) ; 
          break ; 
      }
   }
      
    
  })
}

const mppButtonLike = document.querySelectorAll('.mpp-buttons-like') ; 
for (let i = 0 ; i < mppButtonLike.length ; i++ ) {
  mppButtonLike[i].addEventListener('click' , function () {
    let videos = this.querySelector('svg').getAttribute('key') ; 
    for (let i = 0 ; i < mppButton.length ; i++ ) {
      let videos2 = mppButton[i].querySelector('.buttons1').getAttribute('key') ; 
      if (videos === videos2) {
        keys1 = parseInt(mppButton[i].querySelector('span').getAttribute('key')) ; 
        let firster = document.querySelectorAll('.wraps1 .firster') ; 
          PlayIndex = i ; 
          videoCategoryInsert(PlayIndex) ; 
          break ; 
      }
   }
      
    
  })
}

const mppButtons11 = document.querySelectorAll('.mpp-buttons11') ; 
for (let i = 0 ; i < mppButtons11.length ; i++ ) {
  mppButtons11[i].addEventListener('click' , function () {
    keys1 = parseInt(this.querySelector('span').getAttribute('key')) ; 
   for (let i = 0 ; i < mppButton.length ; i++ ) {
      let span = parseInt(mppButton[i].querySelector('span').getAttribute('key')) ; 
      if (span === keys1) {
        PlayIndex = i ; 
        break ; 
      }
   }
      
    
  })
}

})

function updateProgressBar1(ind , boolean , keys) { 
   
  if (booleansVideoAgain) {
   const mppButtonKey = document.querySelectorAll('.mpp-buttons')[ind].querySelector('svg').key ; 
  let percantages1 ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth ) ;
  let index = parseInt(ind) ; 
  if (topProgressBar.length ) {  
     percantages1 = Math.floor((100 / player.duration) * player.currentTime);
       seasonOne.forEach((element) => { 
        if (parseInt(element.id) === keys) { 
          element.progress = player.currentTime; 
          element.percentage = percantages1 ; 
          seasonOne.forEach((el) => { 
            if (parseInt(el.id) === keys) { 
                if (document.querySelectorAll('.mpp-buttons span')[index].getAttribute('data-src') === element.videoSrc) {
                   seasonOne1.forEach((item) => { 
                    if (parseInt(item.id) === (index + 1)) { 
                      item.progress = player.currentTime; 
                      item.percentage = percantages1 ;
                    }
                })
            } else {
              booleans = false ; 
            }
         }
      })
   }
}); 
       let mppButtonKey = document.querySelectorAll('.mpp-buttons')[index].querySelector('svg').getAttribute('key') ; 

       if (percantages1 > 94) {
        insertToVideo(playersssss[1].dataset.theme , index ) ; 
        if (!indexPlay) {
          insertPlayVideo(mppButtonKey , playersssss[1].dataset.theme , index ) ;
        }
        indexPlay++ ; 
       }

       let videoPlayer1 = document.querySelectorAll('.videos1 source')  ?  document.querySelectorAll('.videos1 source') : document.querySelector('.videos1 source')  ; 
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
      canvas[ind].style.visibility = "visible" ;  
      canvas[ind].style.opacity = "1" ; 
      draw(player , canvas[ind] , ind); 
     
   } else {
      localStorage.setItem("VideoEndedTime", playersssss[ind].currentTime);
      canvas[ind].style.visibility = "visible" ;  
      canvas[ind].style.opacity = "1" ;
      draw(player , canvas[ind] , ind); 
    }  
  } else {
    localStorage.setItem("VideoEndedTime", playersssss.currentTime);
    canvas.style.display = "block";
    draw(player , canvas);
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
if ('.php' in 'index.php') {
  console.log('js') ; 
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
 // localStorage.setItem("image", canvas.toDataURL("image/jpg")); 
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

    //render player series items
   