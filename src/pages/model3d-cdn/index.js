import React, { useEffect, useRef, Fragment } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import TWEEN from '@tweenjs/tween.js';

import pkqjpg from '_statics/media/pikaqiu/file.jpg';

const Model3d = () => {
    const imgsArr = [];

    const content3dRef = useRef();

    // 图片加载
    const imgLoad = async () => {
        const pArr = [];
        imgsArr.forEach((item) => {
            const p = new Promise((reslove) => {
                const img = new Image();
                img.src = item;
                img.onload = () => {
                    reslove(img);
                };
            });
            pArr.push(p);
        });
        const res = await Promise.all(pArr);
        return res;
    };

    const modelLoad = () => {
        const el = content3dRef.current;
        const winWidth = 300;
        const winHeight = 300;
        el.style.cssText = `width:${winWidth}px;height:${winHeight}px`;

        // 相机
        const camera = new THREE.PerspectiveCamera(20, winWidth / winHeight, 0.1, 1000);
        // 设置相机坐标
        camera.position.set(150, 50, 300); // 侧面
        // camera.position.set(0, 50, 300); // 正面

        // 渲染器
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        // 设置渲染器的颜色和大小
        renderer.setClearColor('#000');
        // renderer.setClearAlpha(0);
        renderer.setSize(winWidth, winHeight);
        renderer.setPixelRatio(window.devicePixelRatio); // 高清设置

        // 将renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。
        // 这就是渲染器用来显示场景给我们看的<canvas>元素
        document.body.appendChild(renderer.domElement);

        // 鼠标控制旋转
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        // orbitControls.autoRotate = false;
        // orbitControls.enableZoom = false;
        orbitControls.minDistance = 200; // 最大缩放值，值越小模型越大
        orbitControls.maxDistance = 500; // 最小缩放值，值越大模型越小
        orbitControls.maxPolarAngle = Math.PI * 0.5; // 限制鼠标拖拽角度
        orbitControls.enablePan = false; // 禁止鼠标右键拖拽

        // 场景
        const scene = new THREE.Scene();

        // ------------------------------------------- 3d模型搭建 ---------------------------------------------
        // 导入obj模型
        const objLoader = new OBJLoader();
        objLoader.load('/test/pikaqiu/file.obj', (object) => {
            // 设置模型缩放比例
            object.scale.set(1, 1, 1);
            // 设置模型的坐标
            object.position.set(0, 0, 0);

            object.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    console.log(child.material);
                    // 设置模型皮肤
                    child.material.map = new THREE.TextureLoader().load('/test/pikaqiu/file.jpg');
                }
            });
            // 将模型添加到场景中
            scene.add(object);
        });

        const loader1 = new THREE.FontLoader();
        loader1.load('/test/pikaqiu/font.json', function (font) {
            console.log(font);
            const g = new THREE.TextGeometry('threejs', {
                // 设定文字字体，
                font: font,
                size: 10,
                height: 5,
            }); //计算边界，暂时不用管
            g.computeBoundingBox(); //3D文字材质
            const m = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const mesh = new THREE.Mesh(g, m); // 加入到场景中
            scene.add(mesh);
        });

        // ------------------------------------------- 3d模型搭建 ---------------------------------------------

        // 设置光源
        const light = new THREE.DirectionalLight('#ffffff', 0.5);
        light.position.set(400, 200, 300);
        scene.add(light);
        scene.add(new THREE.AmbientLight('#ffffff', 0.5));

        // 亮光光源映射
        const pointLight = new THREE.PointLight('blue', 1, 100);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        el.append(renderer.domElement);

        function render() {
            // 动画循环渲染
            requestAnimationFrame(render);
            // 渲染到页面上
            renderer.render(scene, camera);

            TWEEN.update();
        }
        render();
    };

    const init = async () => {
        await imgLoad();
        modelLoad();
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Fragment>
            <div className="content" ref={content3dRef}></div>
        </Fragment>
    );
};

export default Model3d;
