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

    createPlatform(200, 700, 100, 20, "violet");
    createPlatform(350, 620, 100, 20, "violet");
    createPlatform(700, 630, 200, 20, "violet");
    createPlatform(200, 500, 100, 20, "violet");
    createPlatform(550, 450, 100, 20, "violet");
    createPlatform(850, 350, 75, 20, "violet");
    createPlatform(1050, 500, 100, 20, "violet");
    createPlatform(1050, 250, 100, 20, "violet");
    createPlatform(1350, 400, 50, 50, "gold");
    createBadPlatform(700, 200, 100, 20, "violet");
    createPlatform(400, 300, 200, 20, "blue", 100, 500, 1, 100, 400, 1);
    // TODO 3 - Create Collectables
    createCollectable("gem2", 1350, 50);
    createCollectable("gem4", 200, 170, 0.5, 0.7);
    createCollectable("gem3", 1350, 350, 0.5, 0.7);
    createCollectable("gem1", 855, 590, 0.5, 0.7);
    createCollectable("gem5", 200, 100);

    createCollectable("gem", 1100, 275, 0, 1, 1000, 1300, 5);

    // TODO 4 - Create Cannons

    createCannon("top", 400, 1500);
    createCannon("top", 1250, 2000);
    createCannon("right", 550, 3000);
    createProjectile("left", 100, 1000, 10, 5);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
