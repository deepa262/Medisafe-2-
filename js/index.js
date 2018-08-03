$(function(){
   WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
   WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function heartShrink(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time, repeat:4});
  tl
  .to(heart, 0.30, {width:270, height:230,scaleX:1.8,scaleY:1.8})
  .to(heart, 0.70, {width:225, height:192})
  .to(heart, 0.10, {width:270, height:230,scaleX:1.8,scaleY:1.8})
  .to(heart, 0.50, {width:225, height:192})
  .to(heart, 0.10, {width:270, height:230,scaleX:1.7,scaleY:1.7})
  .to(heart, 0.30, {width:225, height:192})
}
function text1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(texttop, 3, {opacity:0})
}
function appAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(phoneplain, 2, {opacity:0},)
}
function heartPulsate(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time, repeat:10});
  tl
    .to(heart, 0.5, {width:225,height:192} ) 
    .to(heart, 0.5, {scaleX:1.2,scaleY:1.2 } )
  
}
function text1Offscreen(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(texttop,2,{ opacity:0}, '-=0.5')
}
function logoAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(logo, 2, {opacity:0},'-=0.7')
}
function text2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(textbottom, 3, {opacity:0})
}

function app1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(phoneApp, 1, {opacity:0}, '-=1')
}

function animate(){
 heartShrink();
    text1Appear(4);
    text1Offscreen(9);
    appAppear(9);
     heartPulsate(10);
    logoAppear(11);
text2Appear(15);
    app1Appear(21);
   
}

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");

}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();