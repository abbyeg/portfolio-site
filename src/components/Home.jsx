import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from "react";


const Home = () => {
  console.log("Rendering Home");
  const loaded = useGLTF('/websitedemo.glb')

  let sphere = loaded.scene.children[0];
  let cube = loaded.scene.children[1];
  sphere.material.transparent;
  let scene = loaded.scene;
  scene.background = null;
  console.log(scene);
  
  return (
    <div className="h-screen -z-10" id="canvas-container">
      <Canvas camera={{ zoom: 2 }} >
        <Suspense fallback={null}>
          <OrbitControls enablePan={false} enableDamping={true} enableZoom={false} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} />
          <directionalLight position={[5, 5, 5]} />
          <meshStandardMaterial  />
          <primitive object={scene} scale={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;