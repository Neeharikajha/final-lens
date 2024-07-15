import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const ThreeDScene = ({ clothingPath }) => {
    const mountRef = useRef(null);
    const controls = useRef();
    const [camera, setCamera] = useState(null);
    const [renderer, setRenderer] = useState(null);

    useEffect(() => {
        let scene, humanModel;
        const loader = new GLTFLoader();
        const newRenderer = new THREE.WebGLRenderer({ antialias: true });

        const initScene = () => {
            scene = new THREE.Scene();
            const newCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            setCamera(newCamera);
            newRenderer.setSize(window.innerWidth, window.innerHeight);
            mountRef.current.appendChild(newRenderer.domElement);

            newCamera.position.set(0, 1.6, 3);
            newCamera.lookAt(0, 1.6, 0);

            const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
            light.position.set(0, 200, 0);
            scene.add(light);

            loader.load('my-react-app/src/mages/male1.glb', function (gltf) {
                humanModel = gltf.scene;
                humanModel.position.set(0, 0, 0);
                scene.add(humanModel);

                if (clothingPath) {
                    loadClothing(clothingPath);
                }

                animate();
            });
        };

        const loadClothing = (path) => {
            if (humanModel) {
                loader.load(path, function (clothingGltf) {
                    const clothingModel = clothingGltf.scene;
                    humanModel.add(clothingModel);
                });
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);
            newRenderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            newRenderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        initScene();

        setRenderer(newRenderer);

        return () => {
            if (newRenderer.domElement) {
                mountRef.current.removeChild(newRenderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [clothingPath, camera]);

    return (
        <div style={{ width: '100%', height: '100%' }} ref={mountRef}>
            {camera && renderer && (
                <OrbitControls ref={controls} args={[camera, renderer.domElement]} />
            )}
        </div>
    );
};

export default ThreeDScene;