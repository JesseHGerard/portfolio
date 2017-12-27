const timeline = anime.timeline();
const primaryColor = '#3CDDD9';
const secondaryColor = '#D8D316';
const emptyText = (domNode) => $(domNode).text('');
const justifyFlex = (domNode, startOrEnd) => $(domNode).css('justify-content', `flex-${startOrEnd}`);

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
    this.duration = 1000;
    this.easing = 'easeInOutQuad';
    this.delay = delay;
    // this.offset = offset;
  }
};



$(document).ready(() => {
console.log("Everything's working, thanks for checking!")

timeline
// "full stack web developer" opacity full
.add({
  targets: '#t1',
  opacity: 1,
  duration: 500,
  easing: 'easeInOutQuad',
  delay: 500,
})
.add(new TFadeIn('#t2'))
.add(new TFadeIn('#t3'))
.add(new TFadeIn('#t4'))
.add({
  targets: '#t4',
  delay: 800
})
// "really? the whole stack?"
.add([{
  targets: '.pancake-text',
  opacity: 0,
  duration: '1'
}, {
    targets: '.pancake',
    backgroundColor: secondaryColor,
    duration: '1'
}, {
  targets: '#t1',
  duration: '1',
  opacity: 1,
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
  begin: function() {
    emptyText('.pancake-text');
    justifyFlex('.pancake', 'start');
  }
})
.add({
  targets: '.pancake-text',
  begin: function() {
    $('#t2').text('yes!');
  }
})
.add({
  targets: '.pancake-text',
  delay: 300,
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
  begin: function() {
    emptyText('.pancake-text');
    justifyFlex('.pancake', 'end');
  }
})
.add({
  targets: '.pancake-text',
  duration: 1,
  begin: function() {
    $('#t1').text('so...');
  }
})
.add({
  targets: '.pancake-text',
  delay: 1000,
  duration: 1,
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
  begin: function() {
    emptyText('.pancake-text');
    justifyFlex('.pancake', 'end');
    $('#t3').text("that's so cool!");
  }
})
.add({
  targets: '.pancake-text',
  delay: 1000,
  opacity: 0,
  duration: 500,
  easing: 'easeInOutQuad',
  // offset: 0,
  complete: function() {
    emptyText('.pancake-text');
    justifyFlex('.pancake', 'end');
  }
})
.add(new BgColorChange('#p1', primaryColor, 500, null))
.add(new BgColorChange('#p2', primaryColor, 1, '-=300'))
.add(new BgColorChange('#p3', primaryColor, 1, '-=300'))
.add(new BgColorChange('#p4', primaryColor, 1, '-=300'))







// end of document ready
})
