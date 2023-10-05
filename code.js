var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["79e30a5c-eaf5-47de-a21a-00b2309e4cd8","b3c099ed-64ee-4c03-b43b-774b26444225","238f40be-1abb-49a6-8721-780c997fa2b1","c084ab7f-c7ae-4122-8852-a402973c3abf","410d449b-bda4-4b2f-b66e-0c86b8329321"],"propsByKey":{"79e30a5c-eaf5-47de-a21a-00b2309e4cd8":{"name":"stage","sourceUrl":null,"frameSize":{"x":800,"y":452},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gcr3aMHJkWlWcbEl93q6975M_G1I4W2y","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":452},"rootRelativePath":"assets/79e30a5c-eaf5-47de-a21a-00b2309e4cd8.png"},"b3c099ed-64ee-4c03-b43b-774b26444225":{"name":"singer","sourceUrl":"assets/v3/animations/TfkLvkVahSJL6BqdPD3ZjzPD5pc_ny0_3RQnjR8lPHM/b3c099ed-64ee-4c03-b43b-774b26444225.png","frameSize":{"x":640,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"_z2eZhFHXt4qqJwkEk7G7XcmHIrqZUvC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":800},"rootRelativePath":"assets/v3/animations/TfkLvkVahSJL6BqdPD3ZjzPD5pc_ny0_3RQnjR8lPHM/b3c099ed-64ee-4c03-b43b-774b26444225.png"},"238f40be-1abb-49a6-8721-780c997fa2b1":{"name":"crowd","sourceUrl":"assets/v3/animations/TfkLvkVahSJL6BqdPD3ZjzPD5pc_ny0_3RQnjR8lPHM/238f40be-1abb-49a6-8721-780c997fa2b1.png","frameSize":{"x":1920,"y":868},"frameCount":1,"looping":true,"frameDelay":4,"version":"KCRHv91Ez7VbZh9DQafEQ.Zvrg8Pf9yY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":868},"rootRelativePath":"assets/v3/animations/TfkLvkVahSJL6BqdPD3ZjzPD5pc_ny0_3RQnjR8lPHM/238f40be-1abb-49a6-8721-780c997fa2b1.png"},"c084ab7f-c7ae-4122-8852-a402973c3abf":{"name":"circle2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Uw0JPVWI0tbAreRbDMgSCEKuyvG8O3Cl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c084ab7f-c7ae-4122-8852-a402973c3abf.png"},"410d449b-bda4-4b2f-b66e-0c86b8329321":{"name":"circle1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"T4MV74Vk4zk1jis_EiQDlJ_mLN0MvstN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/410d449b-bda4-4b2f-b66e-0c86b8329321.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background("black");
fill("white");
ellipse(350, 50, 50, 50);
fill("gray");
ellipse(50, 50, 100, 50);
ellipse(200, 100, 100, 30);
ellipse(280, 50, 100, 40);
fill("gray");
rect(2,315,400,100);
var stage = createSprite(200, 230);
stage.setAnimation("stage");
stage.scale = 0.6;
var singer = createSprite(195,260);
singer.scale = 0.2;
var spotlight1 = createSprite(250,240);
var spotlight2 = createSprite(170,250);
spotlight1.setAnimation('circle1');
spotlight1.scale = 3;
spotlight1.rotation = 45;
spotlight1.alpha = 0.3;
spotlight2.setAnimation('circle2');
spotlight2.scale = 3;
spotlight2.rotation = 315;
spotlight2.alpha = 0.3;
var crowdhands = createSprite(190,355);
singer.setAnimation("singer");
crowdhands.setAnimation("crowd");
crowdhands.scale = 0.6;
drawSprites();
fill("white");
textSize(20);
text("You Rock!",100,294);
fill("white");
text("MARRY ME!",278,240);
fill('blue');
textSize(25);
text('"LOOOOOve"',115,175);


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
