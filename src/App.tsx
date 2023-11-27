import { Effects, Loader, OrbitControls } from "@react-three/drei";
import "./App.css";
import { Canvas, extend, useThree } from "@react-three/fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import { Suspense, useEffect, useState } from "react";
import { MOUSE } from "three/src/Three.js";
import { Perf } from "r3f-perf";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  BrightnessContrast,
} from "@react-three/postprocessing";

import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";

function App() {
  const [leftMouse, setLeftMouse] = useState<undefined | MOUSE>(undefined);
  const [start, setStart] = useState(false);

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

  useEffect(() => {
    if (start) {
      // audio.play();
    }
  }, [start]);

  return (
    <>
      <Canvas
        camera={{
          fov: 3,
          position: [50, 0, 0],
        }}
        shadows
      >
        {/* <Perf /> */}
        <Scene />
        <OrbitControls
          enableRotate
          mouseButtons={{
            LEFT: leftMouse,
          }}
        />
        {/* <EffectComposer>
          <BrightnessContrast contrast={0.15} />
          <Bloom luminanceThreshold={0.85} mipmapBlur />
        </EffectComposer> */}
      </Canvas>

      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  );
}

export default App;
