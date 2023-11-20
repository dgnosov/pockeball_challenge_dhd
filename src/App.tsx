import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import { useEffect, useState } from "react";
import { MOUSE } from "three/src/Three.js";
import { useControls } from "leva";

function App() {
  const [leftMouse, setLeftMouse] = useState<undefined | MOUSE>(undefined);

  const settings = useControls("CameraTest", {
    camera: {
      y: 5,
      z: 5,
      x: 0,
    },
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "AltLeft") {
      setLeftMouse(MOUSE.LEFT);
    }
  };

  const handleKeyUp = () => {
    setLeftMouse(undefined);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <Canvas
      camera={{
        fov: 14,
        position: [settings.camera.x, settings.camera.y, settings.camera.z],
      }}
      shadows={true}
    >
      {/* <Perf /> */}
      <Scene />
      <Lights />
      <OrbitControls
        enableRotate
        mouseButtons={{
          LEFT: leftMouse,
        }}
      />
    </Canvas>
  );
}

export default App;
