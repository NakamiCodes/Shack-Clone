import React, { useEffect } from "react";
import Phaser from "phaser";

const Simulation = () => {
  useEffect(() => {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    var game = new Phaser.Game(config);

    function preload() {
      this.load.setBaseURL("https://labs.phaser.io");

      this.load.image("logo", "assets/sprites/phaser3-logo.png");
      this.load.image("red", "assets/particles/red.png");
    }

    function create() {
      var particles = this.add.particles("red");

      // var emitter = particles.createEmitter({
      //   speed: 100,
      //   scale: { start: 1, end: 0 },
      //   blendMode: "ADD",
      // });

      var logo = this.physics.add.image(400, 100, "logo");

      logo.setVelocity(100, 200);
      logo.setBounce(1, 1);
      logo.setCollideWorldBounds(true);

      // emitter.startFollow(logo);
    }
  }, []);

  function update() {
    // Update game state each frame
  }

  return <div id="phaser-game">{/* Phaser game will be inserted here */}</div>;
};

export default Simulation;
