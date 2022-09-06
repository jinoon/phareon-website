var medium = 770;
var large = 1320;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

if (window.innerWidth > medium) {
  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

//main video
// if (window.innerWidth < large) {
//   window.document.getElementById("main-video-source").setAttribute("src", "/videos/main video_2.mp4");
//   window.document.getElementById("main-video").setAttribute("poster", "/images/main video_2.png");
//   window.document.getElementById("main-video").load();
//   window.document.getElementById("main-video").play();
// }

// window.addEventListener("resize", () => {

//   if (window.innerWidth < large) {
//     let mainVideoSrc = window.document.getElementById("main-video-source").getAttribute("src");
//     if (mainVideoSrc !== "/videos/main video_2.mp4") {
//       window.document.getElementById("main-video-source").setAttribute("src", "/videos/main video_2.mp4");
//       window.document.getElementById("main-video").setAttribute("poster", "/images/main video_2.png");
//       window.document.getElementById("main-video").load();
//       window.document.getElementById("main-video").play();
//       console.log("모바일 2");
//     }
//   } else {
//     let mainVideoSrc = window.document.getElementById("main-video-source").getAttribute("src");
//     if (mainVideoSrc !== "/videos/main video_1.mp4") {
//       window.document.getElementById("main-video-source").setAttribute("src", "/videos/main video_1.mp4");
//       window.document.getElementById("main-video").setAttribute("poster", "/images/main video_1.png");
//       window.document.getElementById("main-video").load();
//       window.document.getElementById("main-video").play();
//       console.log("데스크탑 1");
//     }
//   }
// });

//네비게이션
$(".menu").click(function (e) {
  e.preventDefault();
  $(".nav").toggleClass("show");
});

$(".nav-items").click(function (e) {
  e.preventDefault();

  var menuName = $(this).data("nav");

  var off = 100;
  if (window.innerWidth < 555) {
    off = 50;
  }

  var scrollT = $("#" + menuName).offset().top - off;
  $("html, body").animate(
    {
      scrollTop: scrollT,
    },
    1000
  );
});

$(window).scroll(function () {
  var about = $("#about");
  var whatwedo = $("#whatwedo");
  var technology = $("#technology");
  var members = $("#members");
  var contact = $("#contact");

  var stdPos = $(window).scrollTop() + $(window).height() - $(window).height() / 3;

  if (stdPos > contact.offset().top) {
    // console.log('contact');
    $(".nav-items").removeClass("on");
    $(".nav-contact").addClass("on");
  } else if (stdPos > members.offset().top) {
    // console.log('members');
    $(".nav-items").removeClass("on");
    $(".nav-members").addClass("on");
  } else if (stdPos > technology.offset().top) {
    // console.log('technology');
    $(".nav-items").removeClass("on");
    $(".nav-technology").addClass("on");
  } else if (stdPos > whatwedo.offset().top) {
    // console.log('whatwedo');
    $(".nav-items").removeClass("on");
    $(".nav-whatwedo").addClass("on");
  } else if (stdPos > about.offset().top) {
    // console.log('about');
    $(".nav-items").removeClass("on");
    $(".nav-about").addClass("on");
  }
});

//backgorund 비율
var backWidth = ($(".about").height() / 9) * 16;

if (window.innerWidth > large) {
  if ($(".about").width() > backWidth) {
    $(".background").width("100%");
    console.log("100%");
  } else {
    $(".background").width(backWidth);
    console.log(backWidth);
  }
} else {
  $(".background").width("100%");
}

$(window).resize(function () {
  backWidth = ($(".about").height() / 9) * 16;

  if (window.innerWidth > large) {
    if ($(".about").width() > backWidth) {
      $(".background").width("100%");
      console.log("100%");
    } else {
      $(".background").width(backWidth);
      console.log(backWidth);
    }
  } else {
    $(".background").width("100%");
  }
});

//테크 슬라이더
var techSlider = 1;

$(".technology-2 .next").click(function (e) {
  e.preventDefault();

  if (techSlider !== 3) {
    techSlider++;
    // console.log(techSlider);

    $(".thumbnails, .tech-desc").animate(
      {
        left: "-" + (techSlider - 1) * 100 + "%",
      },
      500
    );

    $(".desc-parts").removeClass("on");
    $(".desc-parts:nth-child(" + techSlider + ")").addClass("on");
  }
});

$(".technology-2 .pre").click(function (e) {
  e.preventDefault();

  if (techSlider !== 1) {
    techSlider--;

    $(".thumbnails, .tech-desc").animate(
      {
        left: "-" + (techSlider - 1) * 100 + "%",
      },
      500
    );

    $(".desc-parts").removeClass("on");
    $(".desc-parts:nth-child(" + techSlider + ")").addClass("on");
  }
});

//터치 네비
var techTouchStart;
var techTouchEnd;

$(".technology-2").on("touchstart", function (e) {
  techTouchStart = e.originalEvent.touches[0].pageX;
});

$(".technology-2").on("touchend", function (e) {
  techTouchEnd = e.originalEvent.changedTouches[0].pageX;

  if (techTouchEnd - techTouchStart > 40) {
    if (techSlider !== 1) {
      techSlider--;

      $(".thumbnails, .tech-desc").animate(
        {
          left: "-" + (techSlider - 1) * 100 + "%",
        },
        500
      );

      $(".desc-parts").removeClass("on");
      $(".desc-parts:nth-child(" + techSlider + ")").addClass("on");

      console.log("터치 이전");
    }
  } else if (techTouchStart - techTouchEnd > 40) {
    if (techSlider !== 3) {
      techSlider++;

      $(".thumbnails, .tech-desc").animate(
        {
          left: "-" + (techSlider - 1) * 100 + "%",
        },
        500
      );

      $(".desc-parts").removeClass("on");
      $(".desc-parts:nth-child(" + techSlider + ")").addClass("on");

      console.log("터치 다음");
    }
  }
});

$(window).resize(function () {
  if (window.innerWidth > medium) {
    techSlider = 1;
    $(".thumbnails, .tech-desc").animate(
      {
        left: 0,
      },
      0
    );

    $(".desc-parts").removeClass("on");
    $(".desc-parts:nth-child(1)").addClass("on");
  }
});

$(".desc-parts").click(function (e) {
  e.preventDefault();

  if (window.innerWidth > medium) {
    $(".desc-parts").removeClass("on");
    $(this).addClass("on");
  }
});

$(".desc-parts").mouseover(function () {
  if (window.innerWidth > medium) {
    $(".desc-parts").removeClass("on");
    $(this).addClass("on");
  }
});

//맴버 모달 슬라이더
var teamSlider = 1;

$(".members .next").click(function (e) {
  e.preventDefault();

  if (teamSlider !== 2) {
    teamSlider++;
    // console.log(teamSlider);

    $(".teams").animate(
      {
        left: "-" + (teamSlider - 1) * 100 + "%",
      },
      500
    );
    $(".team").removeClass("on");
    $(".team:nth-child(" + (teamSlider + 1) + ")").addClass("on");
    $(".team:nth-child(" + (teamSlider + 2) + ")").addClass("on");
    $(".team:nth-child(" + (teamSlider + 5) + ")").addClass("on");
    $(".team:nth-child(" + (teamSlider + 6) + ")").addClass("on");
  }
});

$(".members .pre").click(function (e) {
  e.preventDefault();

  if (teamSlider !== 1) {
    teamSlider--;
    // console.log(teamSlider);

    $(".teams").animate(
      {
        left: "-" + (teamSlider - 1) * 100 + "%",
      },
      500
    );
    $(".team").removeClass("on");
    $(".team:nth-child(" + teamSlider + ")").addClass("on");
    $(".team:nth-child(" + (teamSlider + 1) + ")").addClass("on");
    $(".team:nth-child(" + (teamSlider + 4) + ")").addClass("on");
    $(".team:nth-child(" + (teamSlider + 5) + ")").addClass("on");
  }
});

//터치 네비
var membersTouchStart;
var membersTouchEnd;

$(".members .modal-pop").on("touchstart", function (e) {
  membersTouchStart = e.originalEvent.touches[0].pageX;
});

$(".members .modal-pop").on("touchend", function (e) {
  membersTouchEnd = e.originalEvent.changedTouches[0].pageX;

  if (membersTouchEnd - membersTouchStart > 40) {
    if (teamSlider !== 1) {
      teamSlider--;
      // console.log(teamSlider);

      $(".teams").animate(
        {
          left: "-" + (teamSlider - 1) * 100 + "%",
        },
        500
      );
      $(".team").removeClass("on");
      $(".team:nth-child(" + teamSlider + ")").addClass("on");
      $(".team:nth-child(" + (teamSlider + 1) + ")").addClass("on");
      $(".team:nth-child(" + (teamSlider + 4) + ")").addClass("on");
      $(".team:nth-child(" + (teamSlider + 5) + ")").addClass("on");
    }
  } else if (membersTouchStart - membersTouchEnd > 40) {
    if (teamSlider !== 2) {
      teamSlider++;
      // console.log(teamSlider);

      $(".teams").animate(
        {
          left: "-" + (teamSlider - 1) * 100 + "%",
        },
        500
      );
      $(".team").removeClass("on");
      $(".team:nth-child(" + (teamSlider + 1) + ")").addClass("on");
      $(".team:nth-child(" + (teamSlider + 2) + ")").addClass("on");
      $(".team:nth-child(" + (teamSlider + 5) + ")").addClass("on");
      $(".team:nth-child(" + (teamSlider + 6) + ")").addClass("on");
    }
  }
});

//맴버 버튼
$(".members button").click(function (e) {
  e.preventDefault();

  $(".members .modal-pop").slideDown();
  $("html,body").addClass("modal");
});

$(".members .btn").click(function (e) {
  e.preventDefault();

  $(".members .modal-pop").slideUp();
  $("html,body").removeClass("modal");
});

//컨텍트 버튼
$(".contact button").click(function (e) {
  e.preventDefault();

  $(".contact .modal-pop").slideDown();
  $("html,body").addClass("modal");
});

$(".contact .btn").click(function (e) {
  e.preventDefault();

  $(".contact .modal-pop").slideUp();
  $("html,body").removeClass("modal");
});

//////////////////////////////////////////테크놀로지2 테크3 슬라이더
//디자인
//.contents 가로폭 지정
var exWidth = $(".tech-3").width() / 2;
if ($(window).width() > 1320) {
  exWidth = $(".tech-3").width() / 6;
} else if ($(window).width() > 770) {
  exWidth = $(".tech-3").width() / 4;
}

var contentsPadding = exWidth / 2;
var contentsWidth = exWidth * $(".tech-3 .exgemple").length;

$(".tech-3 .exgemple").width(exWidth - 30);

$(".tech-3 .contents").css({
  "padding-left": contentsPadding,
  "padding-right": contentsPadding,
});

$(".tech-3 .contents").width(contentsWidth);

//.pre.next 높이 지정
// async function getTech3Height() {
//   var prenextHeight = (await $(".tech-3").height()) + 1;
//   $(".tech-3 .pre, .tech-3 .next").height(prenextHeight);
// }

$(window).resize(function () {
  //.contents 가로폭 지정
  exWidth = $(".tech-3").width() / 2;
  if ($(window).width() > 1320) {
    exWidth = $(".tech-3").width() / 6;
  } else if ($(window).width() > 770) {
    exWidth = $(".tech-3").width() / 4;
  }

  contentsPadding = exWidth / 2;
  contentsWidth = exWidth * $(".tech-3 .exgemple").length;

  $(".tech-3 .exgemple").width(exWidth - 30);

  $(".tech-3 .contents").css({
    "padding-left": contentsPadding,
    "padding-right": contentsPadding,
  });

  $(".tech-3 .contents").width(contentsWidth);

  //.pre.next 높이 지정
  // prenextHeight = $(".tech-3").height() + 1;
  // $(".tech-3 .pre, .tech-3 .next").height(prenextHeight);

  //스크롤 맨첨으로 이동
  $(".tech-3 .contents-wrap").scrollLeft(0);
});

//기능
var photoNum = 0;

$(".tech-3 .contents-wrap").scroll(function () {
  var scrollVal = $(this).scrollLeft();

  photoNum = Math.round(scrollVal / exWidth);
  // console.log(photoNum);
  console.log($(this).scrollLeft());
});

$(".tech-3 .next").click(function (e) {
  e.preventDefault();

  var scrollTO = (photoNum + 1) * exWidth;

  $(".tech-3 .contents-wrap").animate(
    {
      scrollLeft: scrollTO,
    },
    500
  );

  // console.log(photoNum);
});

$(".tech-3 .pre").click(function (e) {
  e.preventDefault();

  var scrollTO = (photoNum - 1) * exWidth;

  $(".tech-3 .contents-wrap").animate(
    {
      scrollLeft: scrollTO,
    },
    500
  );

  // console.log(photoNum);
});

///////////////////////////////테크3 filter

$(".tech-2 .btns .btn").click(function (e) {
  e.preventDefault();

  var exClassName = "." + $(this).data("filter-name");

  $(".tech-3 .exgemple").removeClass("on");
  $(".tech-3 " + exClassName + ".exgemple").addClass("on");

  $(".tech-2 .btns .btn").removeClass("on");
  $(this).addClass("on");

  var marginLeft = $(".tech-3 .contents").css("padding-left");
  marginLeft = parseFloat(marginLeft.replace("px", "")) + 15;

  var scrollTO = $(exClassName).offset().left;

  console.log(marginLeft);
  console.log(scrollTO);
  

  // $(".tech-3 .contents-wrap").animate(
  //   {
  //     scrollLeft: scrollTO + marginLeft,
  //   },
  //   500
  // );
  
  // if ($(this).hasClass("on")) {
  //   $(".tech-3 .contents-wrap").animate(
  //     {
  //       scrollLeft: 0,
  //     },
  //     500
  //   );
  // }
});

// ent;
// fnb;
// public;
// medical;
// retail;
// exhibition;
