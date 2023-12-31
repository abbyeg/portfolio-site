import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from "react";
import { DoubleSide, MeshStandardMaterial } from 'three';


const Home = () => {
  const loaded = useGLTF('/websitedemo.glb')

  let sphere = loaded.scene.children[0];
  sphere.material = new MeshStandardMaterial({ side: DoubleSide, flatShading: false }); // Set the sphere's material to MeshStandardMaterial
  let scene = loaded.scene;
  scene.background = null;
  scene.rotation.y = -Math.PI / 2; // Rotate 90 degrees clockwise
  
  return (
    <div className="h-screen -z-10" id="canvas-container">
      <Canvas camera={{ zoom: 0.8, }} >
        <Suspense fallback={null}>
          <OrbitControls enablePan={false} enableDamping={true} enableZoom={false} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} />
          <directionalLight position={[5, 5, 5]} />
          <directionalLight position={[5, 0, 0]} />
          <meshStandardMaterial />
          <primitive object={scene} scale={0.8} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;