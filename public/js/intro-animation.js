const timeline = anime.timeline();
const buttonTimeline = anime.timeline();
const primaryColor = '#3CDDD9';
const secondaryColor = '#D8D316';
const emptyText = (domNode) => $(domNode).text('');
const justifyFlex = (domNode, startOrEnd) => $(domNode).css('justify-content', `flex-${startOrEnd}`);

// template for portfolio cards
class Card {
  constructor(o){
    this.title = o.title;
    this.comment = o.comment;
    this.githubUrl = o.github;
    this.videoUrl = o.video;
    this.liveWebsiteUrl = o.liveWebsite;
    this.imageUrl = o.image;
  }
  github() {
    if (this.githubUrl) {
      return `<a href="${this.githubUrl}" target="_blank"><p>/code on github</p></a>`;
    } else {
      return '';
    };
  }
  videoWalkthrough() {
    if (this.videoUrl) {
      return `<a href="${this.videoUrl}" target="_blank"><p>/video walkthrough</p></a>`;
    } else {
      return '';
    };
  }
  liveWebsite() {
    if (this.liveWebsiteUrl) {
      return `<a href="${this.liveWebsiteUrl}" target="_blank"><p>/live website</p></a>`;
    } else {
      return '';
    };
  }
  render() {
    $('#card-container').append(`
      <div class="card">
        <div class="card-header">
          <h2>${this.title}</h2>
          <p>${this.comment}</p>
          <div>
            ${this.github()}
            ${this.videoWalkthrough()}
            ${this.liveWebsite()}
          </div>
        </div>
        <a href="${this.liveWebsiteUrl}" target="_blank"><img src="./public/images/${this.imageUrl}">
      </div>
    `);
  }
};

// define portfolio cards
const serfboard = new Card({
  title: 'serfboard',
  comment: 'sms comments aggrigated into a dashboard',
  github: 'https://github.com/JesseHGerard/landlord',
  liveWebsite: 'https://serfboard.herokuapp.com/',
  image: 'serfboard.jpg'
});

const password = new Card({
  title: 'password',
  comment: 'utility used to create very secure, yet memorable passwords',
  github: 'https://github.com/JesseHGerard/randompassword',
  liveWebsite: 'https://jessehgerard.github.io/randompassword/',
  image: 'random.jpg'
});

const picAorB = new Card({
  title: 'picAorB',
  comment: 'crowd source answers to "A or B" questions using twitter',
  github: 'https://github.com/JesseHGerard/picAorB',
  liveWebsite: 'https://picaorb.herokuapp.com/poll/935597635561574400',
  image: 'picAorB.jpg'
});

class TFadeIn {
  constructor(element) {
    this.targets = element;
    this.opacity = 1;
    this.duration = 500;
    this.easing = 'easeInOutQuad';
    this.offset = '-=300';
  }
};

class BgColorChange {
  constructor(element, color, delay, offset) {
    this.targets = element;
    this.backgroundColor = color;
    this.duration = 800;
    this.easing = 'easeInOutQuad';
    this.delay = delay;
    this.offset = offset;
  }
};

const linkWrap = (el, url) => {
    $(`${el}`).wrap(`<a href="${url}" target="_blank"></a>`);
};

const loadPortfolioButtons = (delay) => {
  buttonTimeline
  .add({
    targets: '.pancake-text',
    delay: delay,
    opacity: 0,
    duration: 500,
    easing: 'easeInOutQuad',
    offset: '-=0',
    begin: function() {
      $(document).off();
    },
    complete: function() {
      justifyFlex('.pancake', 'start');
      $('#t1').text("Portfolio");
      $('#t2').text("linkedIn").css('font-weight', '200');
      $('#t3').text("twitter").css('font-weight', '200');
      $('#t4').text("email").css('font-weight', '200');

      // define button functionality
      $('#p1').on('click touchstart', function() {
        mainUp();
        makePortfolio();
        makeTab();
      });
      linkWrap('#p2', 'https://www.linkedin.com/in/jessehgerard');
      linkWrap('#p3', 'https://twitter.com/jessehg');
      linkWrap('#p4', );
    }
  })
  .add(new BgColorChange('#p1', primaryColor, 500, '-=0'))
  .add(new BgColorChange('#p2', '#58D1CE', 0, '-=600'))
  .add(new BgColorChange('#p3', '#74C5C3', 0, '-=600'))
  .add(new BgColorChange('#p4', '#90B8B7', 0, '-=600'))
  .add(new TFadeIn('#t1'))
  .add(new TFadeIn('#t2'))
  .add(new TFadeIn('#t3'))
  .add(new TFadeIn('#t4'))
};


const makeTab = () => {
  let tab = $(`
  <div class="tab">
    <h2>Jesse Gerard</h2>
  </div>`)
  .css('top', '-20%');

  $('#all').append(tab);

  anime({
    targets: '.tab',
    delay: 1000,
    top: '0%',
    duration: 1000,
    easing: 'easeInOutQuad'
  });

  $('.tab').on('click touchstart', function() {
    $('html').animate({ scrollTop: 0 }, 'fast',
      function() {
        killTab();
        killPortfolio();
        mainDown();
      }
    )
  });
};

const killTab = () => {
  $('.tab').off();
  anime({
    targets: '.tab',
    delay: 1000,
    top: '-20%',
    duration: 1000,
    easing: 'easeOutQuad',
    complete: function () {
      $('.tab').remove();
    }
  });
};

const makePortfolio = () => {
  let portfolioContainer = $(`
    <div id="portfolio-container">
      <h1 class="title">porfolio</h1>
      <div id="card-container"></div>
    </div>`)
    .css('top', '100vh');

  $('#all').append(portfolioContainer);
  serfboard.render();
  password.render();
  picAorB.render();

  anime({
    targets: '#portfolio-container',
    top: '0',
    duration: 2000,
    easing: 'easeInOutQuad'
  });
};

const killPortfolio = () => {
  anime({
    targets: '#portfolio-container',
    top: '100vh',
    delay: 500,
    duration: 2000,
    easing: 'easeInOutQuad',
    complete: function() {
      $('#portfolio-container').remove();
    }
  });
};

const mainUp = () => {
  anime({
    targets: '.main',
    translateY: '-100vh',
    duration: 2000,
    easing: 'easeInOutQuad'
  });
};

const mainDown = () => {
  anime({
    targets: '.main',
    delay: 500,
    translateY: '0',
    duration: 2000,
    easing: 'easeInOutQuad'
  });
};

const openingAnimation = () => {
  timeline
  // "full stack web developer" opacity full
  .add({
    targets: '#t1',
    opacity: 1,
    duration: 500,
    easing: 'easeInOutQuad',
    delay: 500,
    offset: '-=0'
  })
  .add(new TFadeIn('#t2'))
  .add(new TFadeIn('#t3'))
  .add(new TFadeIn('#t4'))
  .add({
    targets: '#t4',
    delay: 800,
    offset: '-=0',
  })
  // "really? the whole stack?"
  .add([{
    targets: '.pancake-text',
    opacity: 0,
    duration: '1',
    offset: '-=0'
  }, {
      targets: '.pancake',
      backgroundColor: secondaryColor,
      duration: '1',
      offset: '-=0'
  }, {
    targets: '#t1',
    duration: '1',
    opacity: 1,
    offset: '-=0',
    begin: function() {
      justifyFlex('.pancake', 'end');
      $('#t1').text('really?')
      $('#t4').text('');
    }
  }]).add({
    delay: 1000,
    targets: ['#t2', '#t3', '#t4'],
    duration: '1',
    opacity: 1,
    offset: '-=0',
    begin: function() {
      $('#t2').text('the full');
      $('#t3').text('stack?');
    }
  })
  // "yes! the full stack"
  .add({
    targets: '.pancake',
    delay: 1500,
    backgroundColor: primaryColor,
    duration: 1,
    offset: '-=0',
    begin: function() {
      emptyText('.pancake-text');
      justifyFlex('.pancake', 'start');
    }
  })
  .add({
    targets: '.pancake-text',
    offset: '-=0',
    begin: function() {
      $('#t2').text('yes!');
    }
  })
  .add({
    targets: '.pancake-text',
    delay: 300,
    offset: '-=0',
    begin: function() {
      $('#t3').text('the full');
      $('#t4').text('stack');
    }
  })
  // "not just part of the stack?"
  .add({
    targets: '.pancake',
    delay: 1000,
    backgroundColor: secondaryColor,
    duration: 1,
    offset: '-=0',
    begin: function() {
      emptyText('.pancake-text');
      justifyFlex('.pancake', 'end');
    }
  })
  .add({
    targets: '.pancake-text',
    duration: 1,
    offset: '-=0',
    begin: function() {
      $('#t1').text('so...');
    }
  })
  .add({
    targets: '.pancake-text',
    delay: 1000,
    duration: 1,
    offset: '-=0',
    begin: function() {
      $('#t2').text('you only know');
      $('#t3').text('part of');
      $('#t4').text('the stack?');
    }
  })
  // 'no! the whole stack
  .add({
    targets: '#p1',
    delay: 1000,
    backgroundColor: primaryColor,
    duration: 1,
    offset: '-=0',
    begin: function() {
      justifyFlex('#p1', 'start');
      $('#t1').text('NO!');
    }
  })
  .add({
    targets: ['#p2', '#p3', '#p4'],
    delay: 1000,
    backgroundColor: primaryColor,
    duration: 1,
    offset: '-=0',
    begin: function() {
      justifyFlex("#p2, #p3, #p4", 'start');
      emptyText('#t4');
      $('#t2').text('the whole');
      $('#t3').text('stack');
    }
  })
  // "that's so cool!"
  .add({
    targets: '.pancake',
    delay: 2000,
    backgroundColor: secondaryColor,
    duration: 1,
    offset: '-=0',
    begin: function() {
      emptyText('.pancake-text');
      justifyFlex('.pancake', 'end');
      $('#t3').text("that's so cool!");
    },
    complete: function() {
      loadPortfolioButtons(1000);
    }
  })
};







//  +++++++++++++++++++++++++++++++++++++++++++++++++++++

$(document).ready(() => {



$(document).on('click touchstart', function(){
  timeline.pause();
  loadPortfolioButtons(0);
});

openingAnimation();







// end of document ready
});
