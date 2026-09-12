'use client';

import { Application, Entity } from '@playcanvas/react';
import { Camera, Collision, Light, Render, RigidBody, Script } from '@playcanvas/react/components';
import { useApp, useAppEvent, useMaterial } from '@playcanvas/react/hooks';
import type { Entity as PcEntity } from 'playcanvas';
import { useRef } from 'react';
import * as pc from 'playcanvas';
// @ts-ignore
import { CameraControls } from 'playcanvas/scripts/esm/camera-controls.mjs';

interface InputEvents {
  keyDown: (key: string) => void
  keyUp: (key: string) => void
  mouseClick: (x: number, y: number) => void
  mouseMove: (x: number, y: number) => void
}

function Scene() {  
  
  const app = useApp();

  const userInputObject: { [key: string]: boolean } = {"w": false, "a": false, "s": false, "d": false};
    
  const cube = useRef<PcEntity>(null);
  const plane = useRef<PcEntity>(null);
  
  const onUpdate = (dt: number) => {
      // cube.current?.rotate(10 * dt, 20 * dt, 30 * dt);

      // Movement of the player
      // TODO handle user strafing (w + d)
      const handlePlayerMovement = () => {
        if (userInputObject["w"]) {
          cube?.current?.translate(0, 0, -0.5)
        }
        if (userInputObject["s"]) {
          cube?.current?.translate(0, 0, 0.5)
        }
        if(userInputObject["a"]) {
          cube?.current?.translate(-0.5, 0, 0)
        }
        if(userInputObject["d"]) {
          cube?.current?.translate(0.5, 0, 0)
        }
        if(userInputObject["Shift"]) {
          cube?.current?.translate(0, -0.5, 0)
        }
        if(userInputObject[" "]) {
          cube?.current?.translate(0, 0.5, 0)
        }
      }

      // handlePlayerMovement();
    }


    // Rotate the cube according to the delta time since the last frame
    useAppEvent('update', (dt: number) => onUpdate(dt));
    
    app.keyboard = new pc.Keyboard(window);
    app.keyboard.preventDefault = true;

    app.keyboard.on(pc.EVENT_KEYDOWN, (key => {
      userInputObject[`${key.event.key}`] = true;
    }));
    
    app.keyboard.on(pc.EVENT_KEYUP, (key => {
      userInputObject[`${key.event.key}`] = false;
    }));

    return (
        <>
            {/* Ground plane */}
            <Entity key="ground" position={[0, -0.6, 0]} scale={[100, 0.1, 100]}>
              <Render type='box'/>
              <RigidBody type="static" friction={0.5} />
              <Collision type="box" halfExtents={[5, 0.1, 5]} />
            </Entity>

            <Entity name="camera" position={[0, 0, 5]}>
                <Camera clearColor="#8099e6" />
                <Script script={CameraControls}/>
            </Entity>
            <Entity name="light" rotation={[30, 0, 0]}>
                <Light type="directional" />
            </Entity>


            <Entity name="cube" ref={cube}>
                <Render type="box" />
            </Entity>

            {/* UI */}
            {/*
            <div className="overlay">
              <button onClick={addBox}>Add Box</button>
            </div> */}
        </>
    );
}

export default function PlayCanvasView() {
    return (
        <Application usePhysics>
          <Scene />
        </Application>
    );
}