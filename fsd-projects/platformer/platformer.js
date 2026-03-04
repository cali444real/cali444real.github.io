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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    
createPlatform(200, 700, 100, 20, "red");
createPlatform(350, 620, 100, 20, "orange");
createPlatform(700, 630, 200, 20, "yellow");
createPlatform(200, 500, 100, 20, "green");
createPlatform(550, 450, 100, 20, "blue");
createPlatform(850, 350, 75, 20, "indigo");
createPlatform(1050, 500, 100, 20, "violet");
createPlatform(1050, 250, 100, 20, "grey");
createPlatform(1350, 400, 50, 50, "gold");

// TODO 3 - Create Collectables
createCollectable("kennedi", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("grace", 1350, 350, 0.5, 0.7);
createCollectable("database", 855, 590, 0.5, 0.7);


createCollectable("gem", 1100, 250, 0, 1, 100, 300, 2);           
    // TODO 4 - Create Cannons

createCannon("top", 400, 1500);
createCannon("top", 1250, 2000);
createCannon("right", 550, 3000);
     
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
