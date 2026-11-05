$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(50, 450, 100, 25);
createPlatform(250, 550, 100, 25);
createPlatform(550, 450, 100, 25)
createPlatform(550, 320, 100, 25)
createPlatform(400, 200, 100, 25)
createPlatform(150, 200, 100, 25)
createPlatform(800, 450, 100, 25)
createPlatform(1000, 200, 10, 550)
createPlatform(900, 320, 100, 25)
createPlatform(1200, 125, 10, 750)
createPlatform(1325, 450, 50, 25)



    // TODO 3 - Create Collectables
createCollectable("diamond", 180, 150);
createCollectable("diamond", 1325, 420)
createCollectable("diamond", 575, 420)



    
    // TODO 4 - Create Cannons
createCannon("bottom", 1000, 1000)
createCannon("bottom", 1100, 1000)
createCannon("bottom", 300, 1000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
