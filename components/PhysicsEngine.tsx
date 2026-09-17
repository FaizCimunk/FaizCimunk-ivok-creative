"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function PhysicsEngine() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const width = sceneRef.current.clientWidth;
    const height = 600;

    // create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        background: "transparent",
        wireframes: false,
      },
    });
    renderRef.current = render;

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create floor and walls
    const ground = Bodies.rectangle(width / 2, height + 25, width * 2, 50, { 
      isStatic: true,
      render: { visible: false }
    });
    const wallLeft = Bodies.rectangle(-25, height / 2, 50, height * 2, { 
      isStatic: true,
      render: { visible: false }
    });
    const wallRight = Bodies.rectangle(width + 25, height / 2, 50, height * 2, { 
      isStatic: true,
      render: { visible: false }
    });
    const ceiling = Bodies.rectangle(width / 2, -50, width * 2, 50, { 
      isStatic: true,
      render: { visible: false }
    });

    Composite.add(world, [ground, wallLeft, wallRight, ceiling]);

    // Create falling objects (the balls)
    const objects = [];
    for (let i = 0; i < 12; i++) {
      // The radius of our collision circle
      const radius = 45 + Math.random() * 25; 
      const x = Math.random() * (width - 100) + 50;
      // Spawn them just inside the container (y=50) so they don't take long to fall
      const y = Math.random() * 100 + 50;

      objects.push(
        Bodies.circle(x, y, radius, {
          restitution: 0.9, // bounciness
          friction: 0.005,
          density: 0.04,
          render: {
            sprite: {
              texture: "/bola.png",
              // Scale the image based on its actual height (approx 369px) so the ball diameter matches the image height
              xScale: (radius * 2) / 369,
              yScale: (radius * 2) / 369,
            },
          },
        })
      );
    }
    Composite.add(world, objects);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // handle resize
    const handleResize = () => {
      if (!sceneRef.current || !renderRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      
      renderRef.current.bounds.max.x = newWidth;
      renderRef.current.options.width = newWidth;
      renderRef.current.canvas.width = newWidth;
      
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: height + 25 });
      Matter.Body.setPosition(wallRight, { x: newWidth + 25, y: height / 2 });
      Matter.Body.setPosition(ceiling, { x: newWidth / 2, y: -50 });
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  return (
    <section className="relative w-full h-[600px] bg-[#000000] overflow-hidden border-t border-b border-neutral-900 cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none radial-gradient-fallback"></div>
      <div className="absolute top-12 left-0 w-full text-center pointer-events-none z-10 px-4">
        <h2 className="font-syne text-3xl md:text-5xl font-bold text-white mb-2">Interaksi Bebas</h2>
        <p className="text-neutral-400 font-manrope text-sm md:text-base">Gunakan mouse Anda untuk melempar dan menarik bola-bola kaca ini.</p>
      </div>
      <div ref={sceneRef} className="w-full h-full relative z-20" />
    </section>
  );
}
