// // GLBModel.js
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model() {
//   const { scene } = useGLTF('/src/images/male1.glb');
//   return <primitive object={scene} />;
// }
// // const GLBModel = ({ url }) => {
// //   const { scene } = useGLTF(url);
// //   return <primitive object={scene} />;
// // };

// const ModelViewer = () => {
//   return (
//     <div style={{ width: '100%', height: '500px' }}>
//       <Canvas>
//         <Suspense fallback={null}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <Model />
         
//           <OrbitControls />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default ModelViewer;

// GLBModel.js
// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import {modelPath} from './Page2';

// const GLBModel = ({ modelPath }) => {
//     const mountRef = useRef(null);

//     useEffect(() => {
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         mountRef.current.appendChild(renderer.domElement);

//         camera.position.set(0, 1.6, 3);

//         const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
//         light.position.set(0, 200, 0);
//         scene.add(light);

//         const loader = new GLTFLoader();
//         let model;

//         loader.load(modelPath, function (gltf) {
//             model = gltf.scene;
//             scene.add(model);

//             animate();
//         });

//         const animate = () => {
//             requestAnimationFrame(animate);
//             renderer.render(scene, camera);
//         };

//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             mountRef.current.removeChild(renderer.domElement);
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [modelPath]);

//     return <div ref={mountRef}></div>;
// };

// export default GLBModel;

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLBModel = ({ modelPath }) => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;

        mountRef.current.appendChild(renderer.domElement);

        cameraRef.current.position.set(0, 1.6, 3);
        const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
        light.position.set(0, 200, 0);
        sceneRef.current.add(light);

        const loader = new GLTFLoader();
        let model;

        loader.load(modelPath, function (gltf) {
            if (model) {
                sceneRef.current.remove(model);
            }
            model = gltf.scene;
            sceneRef.current.add(model);

            animate();
        });

        const animate = () => {
            requestAnimationFrame(animate);
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        };

        const handleResize = () => {
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (rendererRef.current) {
                rendererRef.current.domElement.remove();
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [modelPath]);

    return <div ref={mountRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default GLBModel;
