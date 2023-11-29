import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useMemo, useRef } from "react";
import { Object3D } from "three";
import switchLight from "../context/Context";

export default function Sparks({ count }: any) {
  const [lightLamp] = useAtom(switchLight);

  const mesh = useRef<any>();
  const sparksPosition = useRef<any>(1000);
  const light = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const dummy = useMemo(() => new Object3D(), []);
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 0.5 + Math.random() * 0.2;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -0.0001 + Math.random() * 0.0001;
      const yFactor = -0.0001 + Math.random() * 0.0001;
      const zFactor = -0.0001 + Math.random() * 0.0001;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  // The innards of this hook will run every frame

  // TODO try to add GSAP
  const offsetSparkles = () => {
    if (!lightLamp) {
      sparksPosition.current = sparksPosition.current - 10;
      if (sparksPosition.current <= 1) {
        sparksPosition.current = 1;
      }
      return;
    }

    if (lightLamp) {
      sparksPosition.current = sparksPosition.current + 10;
      if (sparksPosition.current >= 1000) {
        sparksPosition.current = 1000;
      }
    }
  };

  useFrame((_) => {
    offsetSparkles();
    // console.log("sparksPosition.current", sparksPosition.current);
    // Makes the light follow the mouse
    // light.current.position.set(
    //   mouse.current[0] / aspect,
    //   -mouse.current[1] / aspect,
    //   0
    // );
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      // particle.mx += (mouse.current[0] - particle.mx) * 0.01;
      // particle.my += (mouse.current[1] * -1 - particle.my) * 0.01;
      // Update the dummy object
      dummy.position.set(
        (particle.mx / 100) * a +
          xFactor +
          Math.cos((t / sparksPosition.current) * factor) +
          (Math.sin(t * 1) * factor) / 4,
        (particle.my / 100) * b +
          yFactor +
          Math.sin((t / sparksPosition.current) * factor) +
          (Math.cos(t * 2) * factor) / 4,
        (particle.my / 100) * b +
          zFactor +
          Math.cos((t / sparksPosition.current) * factor) +
          (Math.sin(t * 3) * factor) / 4
      );
      dummy.scale.set(s / 20, s / 20, s / 20);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      if (!mesh.current) return;
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <group position={[-0.95, 0.3, -0.28]}>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronBufferGeometry attach="geometry" args={[0.1, 0]} />
        <meshPhongMaterial toneMapped={false} color={[1, 1.1, 1]} />
      </instancedMesh>
    </group>
  );
}
