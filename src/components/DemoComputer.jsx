import { useRef, useEffect } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";

const DemoComputer = ({ texture, ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/computer.glb");

    const txt = useVideoTexture(texture ?? "/textures/project/project1.mp4", {
        muted: true,
        loop: true,
        start: true,
        crossOrigin: "anonymous",
    });

    useEffect(() => {
        if (txt) txt.flipY = false;
    }, [txt]);

    useGSAP(() => {
        if (!group.current) return;
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="monitor-screen"
                    geometry={nodes["monitor-screen"].geometry}
                    position={[0.127, 1.831, 0.511]}
                    rotation={[1.571, -0.005, 0.031]}
                    scale={[0.661, 0.608, 0.401]}
                >
                    <meshBasicMaterial map={txt} toneMapped={false} />
                </mesh>

                <group
                    name="Monitor-B-_computer_0"
                    position={[0.266, 1.132, 0.051]}
                    rotation={[0, -0.033, 0]}
                    scale={[0.042, 0.045, 0.045]}
                >
                    <mesh geometry={nodes["Monitor-B-_computer_0_1"].geometry} material={materials.computer} />
                    <mesh geometry={nodes["Monitor-B-_computer_0_2"].geometry} material={materials.base__0} />
                    <mesh geometry={nodes["Monitor-B-_computer_0_3"].geometry} material={materials.Material_36} />
                    <mesh geometry={nodes["Monitor-B-_computer_0_4"].geometry} material={materials.Material_35} />
                    <mesh geometry={nodes["Monitor-B-_computer_0_5"].geometry} material={materials.Material_34} />
                    <mesh geometry={nodes["Monitor-B-_computer_0_6"].geometry} material={materials.keys} />
                    <mesh geometry={nodes["Monitor-B-_computer_0_7"].geometry} material={materials.keys2} />
                    <mesh geometry={nodes["Monitor-B-_computer_0_8"].geometry} material={materials.Material_37} />
                </group>
            </group>
        </group>
    );
};

DemoComputer.propTypes = {
    texture: PropTypes.string,
};
useGLTF.preload("/models/computer.glb");
export default DemoComputer;