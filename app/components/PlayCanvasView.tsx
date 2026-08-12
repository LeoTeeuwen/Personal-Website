'use client';

import { Application, Entity } from '@playcanvas/react';
import { Camera, Light, Render } from '@playcanvas/react/components';
import { useApp, useAppEvent } from '@playcanvas/react/hooks';
import type { Entity as PcEntity } from 'playcanvas';
import { useRef } from 'react';
import * as pc from 'playcanvas';

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
  
  const onUpdate = (dt: number) => {
      cube.current?.rotate(10 * dt, 20 * dt, 30 * dt);

      // Movement of the player
      // TODO handle user strafing (w + d)
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
            <Entity name="camera" position={[0, 0, 3]}>
                <Camera clearColor="#8099e6" />
            </Entity>
            <Entity name="light" rotation={[45, 0, 0]}>
                <Light type="directional" />
            </Entity>
            <Entity name="cube" ref={cube}>
                <Render type="box" />
            </Entity>
        </>
    );
}

function SceneHandler() {
  // console.log("keyboard: ", app.keyboard)
  return (
    <Scene />
  )
}

export default function PlayCanvasView() {
    return (
        <Application>
          <SceneHandler/>
        </Application>
    );
}