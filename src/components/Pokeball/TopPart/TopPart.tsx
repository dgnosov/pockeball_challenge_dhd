import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { GLTFPokeballTop } from "../../../types/types";
import DissolveMaterial from "../../DissolveMaterial";
import switchLight from "../../../context/Context";
import { useAtom } from "jotai";
import clickAudio from "../../../assets/click.mp3";
import appearAudio from "../../../assets/appear.mp3";

const click = new Audio(clickAudio);
const appear = new Audio(appearAudio);

interface ITopParts {
  handleOffsetPictures: (top: boolean) => void;
}

export function TopPart({ handleOffsetPictures }: ITopParts) {
  const { nodes, materials } = useGLTF(
    "./pockeball_top_and_button.glb"
  ) as GLTFPokeballTop;

  const { camera } = useThree();

  const [top, setTop] = useState(true);
  const [_, setLight] = useAtom(switchLight);
  const [pokeballTopOffset, setPokeballTopOffset] = useState(true);
  const [lock, setLock] = useState(false);

  const rotateCamera = () => {
    if (!top) {
      gsap.to(camera.position, {
        duration: 2,
        x: 50,
        y: 0,
        z: 0,
        ease: "power3.inOut",
        onComplete: () => (setPokeballTopOffset(true), setLight(false)),
      });
      return;
    }

    gsap.to(camera.position, {
      duration: 2,
      x: 40,
      y: 30,
      z: -10,
      ease: "power3.inOut",
      onComplete: () => (setPokeballTopOffset(false), setLight(true)),
    });
  };

  const handleOpenPokeball = () => {
    if (!lock) return;
    setLock(false);
    setTop(!top);
    rotateCamera();
    handleOffsetPictures(top);
    click.play();
    appear.play();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLock(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [lock]);

  return (
    <group dispose={null}>
      <group>
        <group
          position={[-0.003, 0, -0.002]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.961}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={materials.black_stroke}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_1.geometry}
            material={materials.Material_007}
          />
        </group>
        <group rotation={[-3.138, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere003.geometry}
            material={materials.Material_005}
            scale={pokeballTopOffset ? 1 : 0}
          >
            <DissolveMaterial
              baseMaterial={materials.Material_005}
              visible={top}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_1.geometry}
            material={materials.black_stroke}
            scale={top ? 1 : 0}
          >
            {pokeballTopOffset ? null : (
              <DissolveMaterial
                baseMaterial={materials.Material_005}
                visible={top}
              />
            )}
          </mesh>
        </group>
        <mesh
          name="button"
          onClick={() => handleOpenPokeball()}
          castShadow
          receiveShadow
          geometry={nodes.pockeball_button001.geometry}
          material={materials.Material_007}
          position={[top ? 0.003 : -0.03, 0, -0.002]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.961}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./pockeball_top_and_button.glb");
