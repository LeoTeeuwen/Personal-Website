// components/PlayCanvasView.tsx
'use client';
import { useEffect, useRef } from 'react';
import * as pc from 'playcanvas';

export default function PlayCanvasView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize standalone PlayCanvas Application
    const app = new pc.Application(canvasRef.current);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    app.start();

    // Setup base camera
    const camera = new pc.Entity('camera');
    camera.addComponent('camera', { clearColor: new pc.Color(0.1, 0.1, 0.1) });
    camera.setPosition(0, 0, 5);
    app.root.addChild(camera);

    // Setup basic light
    const light = new pc.Entity('light');
    light.addComponent('light');
    light.setEulerAngles(45, 45, 0);
    app.root.addChild(light);

    // Setup rotating cube
    const cube = new pc.Entity('cube');
    cube.addComponent('model', { type: 'box' });
    app.root.addChild(cube);

    const onUpdate = (dt: number) => {
      cube.rotate(10 * dt, 20 * dt, 30 * dt);
    };
    app.on('update', onUpdate);

    // Cleanup logic on unmount
    return () => {
      app.off('update', onUpdate);
      app.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
