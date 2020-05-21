const timeline = anime.timeline();
const buttonTimeline = anime.timeline();
const emptyText = (elm) => $(elm).text("");
const justifyFlex = (elm, startOrEnd) =>
  $(elm).css("justify-content", `flex-${startOrEnd}`);

const color = {
  primary: "#3CDDD9",
  secondary: "#D8D316",
  scooter: "#29ACC1",
  picton: "#3EB6DB",
  aquamarine: "#67E5BB",
  java: "#26C4B5",
};

// template for portfolio cards
class Card {
  constructor(o) {
    this.title = o.title;
    this.comment = o.comment;
    this.githubUrl = o.github;
    this.videoUrl = o.video;
    this.liveWebsiteUrl = o.liveWebsite;
    this.imageUrl = o.image;
    this.color = o.color;
  }
  github() {
    if (this.githubUrl) {
      return `<a href="${this.githubUrl}" target="_blank"><p>/code on github</p></a>`;
    } else {
      return "";
    }
  }
  videoWalkthrough() {
    if (this.videoUrl) {
      return `<a href="${this.videoUrl}" target="_blank"><p>/video walkthrough</p></a>`;
    } else {
      return "";
    }
  }
  liveWebsite() {
    if (this.liveWebsiteUrl) {
      return `<a href="${this.liveWebsiteUrl}" target="_blank"><p>/live website</p></a>`;
    } else {
      return "";
    }
  }
  render() {
    let backgroundColor, readme;
    // check for new card backgroundColor
    if (this.color) {
      backgroundColor = `style="background-color: ${this.color};"`;
    }
    // check which card link to use based on gitHub url
    if (this.githubUrl) {
      readme = `${this.githubUrl}/blob/master/README.md`;
    } else {
      readme = this.liveWebsite;
    }
    $("#card-container").append(`
      <div class="card">
        <a href="${readme}" target="_blank"><div class="card-header" ${backgroundColor}>
          <h2>${this.title}</h2>
          <p class="comment">${this.comment}</p>
          <div>
            ${this.github()}
            ${this.videoWalkthrough()}
            ${this.liveWebsite()}
          </div>
        </div></a>
        <a href="${
          this.liveWebsiteUrl
        }" target="_blank"><img src="./public/images/${this.imageUrl}"></a>
      </div>
    `);
  }
}

// define portfolio cards
const serfboard = new Card({
  title: "serfboard",
  comment: "sms comments aggregated into a dashboard",
  github: "https://github.com/JesseHGerard/landlord",
  liveWebsite: "https://serfboard.herokuapp.com/",
  image: "serfboard.jpg",
  color: color.java,
});

const password = new Card({
  title: "password",
  comment: "utility for creating very secure, yet memorable passwords",
  github: "https://github.com/JesseHGerard/randompassword",
  liveWebsite: "https://jessehgerard.github.io/randompassword/",
  image: "random.jpg",
  color: color.picton,
});

const vrPhotography = new Card({
  title: "vr photos",
  comment: "tours in VR, new media for the architecture industry",
  image: "nbm.jpg",
  github: "https://github.com/JesseHGerard/vr-photography",
  video: "http://hdphoto.gallery/",
  liveWebsite: "http://hdphoto.gallery/Directory/",
  color: color.scooter,
});

const timeBender = new Card({
  title: "time bender",
  comment: "experimental multi-device vr game, made with react & react vr",
  image: "time-bender.jpg",
  github: "https://github.com/JesseHGerard/time-bender",
  liveWebsite: "https://time-bender.herokuapp.com/",
  color: color.java,
});

const testTimer = new Card({
  title: "test:timer",
  comment: "higher test scores through better time management",
  image: "test-timer.jpg",
  github: "https://github.com/JesseHGerard/test-timer",
  liveWebsite: "https://jessehgerard.github.io/test-timer/",
  color: color.scooter,
});

const sudoku = new Card({
  title: "sudoku solver",
  comment: "rust and webassemby, lightning fast in the browser",
  github: "https://github.com/JesseHGerard/sudoku",
  liveWebsite: "https://jessehgerard.github.io/sudoku/",
  image: "sudoku.jpg",
  color: color.aquamarine,
});

class TFadeIn {
  constructor(element) {
    this.targets = element;
    this.opacity = 1;
    this.duration = 500;
    this.easing = "easeInOutQuad";
    this.offset = "-=300";
  }
}

class BgColorChange {
  constructor(element, color, delay, offset) {
    this.targets = element;
    this.backgroundColor = color;
    this.duration = 800;
    this.easing = "easeInOutQuad";
    this.delay = delay;
    this.offset = offset;
  }
}

const linkWrap = (el, url) => {
  $(`${el}`).wrap(`<a href="${url}" target="_blank"></a>`);
};

const portfolioButtonOn = () => {
  $("#p1").on("click touchstart", function () {
    $("#p1").off();
    mainUp();
    makePortfolio();
    makeTab();
  });
};

const loadPortfolioButtons = (delay) => {
  buttonTimeline
    .add({
      targets: ".pancake-text",
      delay: delay,
      opacity: 0,
      duration: 500,
      easing: "easeInOutQuad",
      offset: "-=0",
      begin: function () {
        $(document).off();
      },
      complete: function () {
        justifyFlex(".pancake", "start");
        $("#t1").text("portfolio");
        $("#t2").text("linkedin").css("font-weight", "200");
        $("#t2").append($(`<img src="public/images/external.svg">`));
        $("#t3").text("twitter").css("font-weight", "200");
        $("#t3").append($(`<img src="public/images/external.svg">`));
        $("#t4").text("github").css("font-weight", "200");
        $("#t4").append($(`<img src="public/images/external.svg">`));

        // define button functionality
        portfolioButtonOn();
        linkWrap("#p2", "https://www.linkedin.com/in/jessehgerard");
        linkWrap("#p3", "https://twitter.com/jessehg");
        linkWrap("#p4", "https://github.com/JesseHGerard");
      },
    })
    .add(new BgColorChange("#p1", color.primary, 500, "-=0"))
    .add(new BgColorChange("#p2", "#58D1CE", 0, "-=600"))
    .add(new BgColorChange("#p3", "#74C5C3", 0, "-=600"))
    .add(new BgColorChange("#p4", "#90B8B7", 0, "-=600"))
    .add(new TFadeIn("#t1"))
    .add(new TFadeIn("#t2"))
    .add(new TFadeIn("#t3"))
    .add(new TFadeIn("#t4"));
};

const makeTab = () => {
  let tab = $(`
    <div class="tab-container">
      <div class="gradient"></div>
      <div class="tab">
        <h2>Jesse Gerard</h2>
      </div>
    </div>
  `).css("top", "-20%");

  $("#all").append(tab);

  anime({
    targets: ".tab-container",
    delay: 1500,
    top: "0%",
    duration: 1000,
    easing: "easeInOutQuad",
  });

  $(".tab").on("click touchstart", function () {
    $(".tab").off();
    $("html").animate({ scrollTop: 0 }, "fast", function () {
      killTab();
      killPortfolio();
      portfolioButtonOn();
      mainDown();
    });
  });
};

const killTab = () => {
  $(".tab").off();
  anime({
    targets: ".tab-container",
    delay: 1000,
    top: "-20%",
    duration: 1000,
    easing: "easeOutQuad",
    complete: function () {
      $(".tab").remove();
    },
  });
};

const makePortfolio = () => {
  let portfolioContainer = $(`
    <div id="portfolio-container">
      <h1 class="title">porfolio</h1>
      <div id="card-container"></div>
    </div>`).css("top", "100vh");

  $("#all").append(portfolioContainer);
  sudoku.render();
  testTimer.render();
  timeBender.render();
  password.render();
  serfboard.render();
  vrPhotography.render();

  anime({
    targets: "#portfolio-container",
    top: "0",
    duration: 2000,
    easing: "easeInOutQuad",
  });
};

const killPortfolio = () => {
  anime({
    targets: "#portfolio-container",
    top: "100vh",
    delay: 500,
    duration: 2000,
    easing: "easeInOutQuad",
    complete: function () {
      $("#portfolio-container").remove();
    },
  });
};

const mainUp = () => {
  anime({
    targets: ".main",
    translateY: "-100vh",
    duration: 2000,
    easing: "easeInOutQuad",
  });
};

const mainDown = () => {
  anime({
    targets: ".main",
    delay: 500,
    translateY: "0",
    duration: 2000,
    easing: "easeInOutQuad",
  });
};

const openingAnimation = () => {
  timeline
    // "full stack web developer" opacity full
    .add({
      targets: "#t1",
      opacity: 1,
      duration: 500,
      easing: "easeInOutQuad",
      delay: 500,
      offset: "-=0",
    })
    .add(new TFadeIn("#t2"))
    .add(new TFadeIn("#t3"))
    .add(new TFadeIn("#t4"))
    .add({
      targets: "#t4",
      delay: 800,
      offset: "-=0",
    })
    // "really? the whole stack?"
    .add([
      {
        targets: ".pancake-text",
        opacity: 0,
        duration: "1",
        offset: "-=0",
      },
      {
        targets: ".pancake",
        backgroundColor: color.secondary,
        duration: "1",
        offset: "-=0",
      },
      {
        targets: "#t1",
        duration: "1",
        opacity: 1,
        offset: "-=0",
        begin: function () {
          justifyFlex(".pancake", "end");
          $("#t1").text("really?");
          $("#t4").text("");
        },
      },
    ])
    .add({
      delay: 1000,
      targets: ["#t2", "#t3", "#t4"],
      duration: "1",
      opacity: 1,
      offset: "-=0",
      begin: function () {
        $("#t2").text("the full");
        $("#t3").text("stack?");
      },
    })
    // "yes! the full stack"
    .add({
      targets: ".pancake",
      delay: 1500,
      backgroundColor: color.primary,
      duration: 1,
      offset: "-=0",
      begin: function () {
        emptyText(".pancake-text");
        justifyFlex(".pancake", "start");
      },
    })
    .add({
      targets: ".pancake-text",
      offset: "-=0",
      begin: function () {
        $("#t2").text("yes!");
      },
    })
    .add({
      targets: ".pancake-text",
      delay: 300,
      offset: "-=0",
      begin: function () {
        $("#t3").text("the full");
        $("#t4").text("stack");
      },
    })
    // "not just part of the stack?"
    .add({
      targets: ".pancake",
      delay: 1000,
      backgroundColor: color.secondary,
      duration: 1,
      offset: "-=0",
      begin: function () {
        emptyText(".pancake-text");
        justifyFlex(".pancake", "end");
      },
    })
    .add({
      targets: ".pancake-text",
      duration: 1,
      offset: "-=0",
      begin: function () {
        $("#t1").text("so...");
      },
    })
    .add({
      targets: ".pancake-text",
      delay: 1000,
      duration: 1,
      offset: "-=0",
      begin: function () {
        $("#t2").text("you only know");
        $("#t3").text("part of");
        $("#t4").text("the stack?");
      },
    })
    // 'no! the whole stack
    .add({
      targets: "#p1",
      delay: 1000,
      backgroundColor: color.primary,
      duration: 1,
      offset: "-=0",
      begin: function () {
        justifyFlex("#p1", "start");
        $("#t1").text("NO!");
      },
    })
    .add({
      targets: ["#p2", "#p3", "#p4"],
      delay: 1000,
      backgroundColor: color.primary,
      duration: 1,
      offset: "-=0",
      begin: function () {
        justifyFlex("#p2, #p3, #p4", "start");
        emptyText("#t4");
        $("#t2").text("the whole");
        $("#t3").text("stack");
      },
    })
    // "that's so cool!"
    .add({
      targets: ".pancake",
      delay: 2000,
      backgroundColor: color.secondary,
      duration: 1,
      offset: "-=0",
      begin: function () {
        emptyText(".pancake-text");
        justifyFlex(".pancake", "end");
        $("#t3").text("that's so cool!");
      },
      complete: function () {
        loadPortfolioButtons(1000);
      },
    });
};

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++

$(document).ready(() => {
  // listen for skip animation
  $(document).on("click touchstart", function () {
    timeline.pause();
    loadPortfolioButtons(0);
  });

  // run opeing animation
  openingAnimation();
});
