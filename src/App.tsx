import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Lights from "./components/Lights";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas camera={{ fov: 40 }} shadows={true}>
      {/* <Perf /> */}
      <Scene />
      <Lights />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
