import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import HackerRoom from '../components/HackerRoom.jsx';

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Adnan <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Full-Stack Engineer & Solutions Architect</p>

                {/* Added a subtitle showcasing key expertise */}
                <p className="sm:text-xl text-lg text-center text-gray-400 max-w-2xl mx-auto">
                    Specializing in enterprise applications, cloud infrastructure, and scalable solutions
                </p>

                {/* Added tech badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['Java', 'Spring Boot', 'React', 'Python', 'Node.js', 'AWS'].map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-800 text-gray-200 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <Leva hidden />
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                        {/*<HeroCamera isMobile={isMobile}>*/}
                        {/*    <HackerRoom*/}
                        {/*        scale={sizes.deskScale}*/}
                        {/*        position={sizes.deskPosition}*/}
                        {/*        rotation={[0.1, -Math.PI, 0]}*/}
                        {/*    />*/}
                        {/*</HeroCamera>*/}

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex flex-col items-center gap-4">
                {/* Added a brief stats section */}
                <div className="flex gap-8 justify-center flex-wrap">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-white">12+</p>
                        <p className="text-sm text-gray-400">Projects Delivered</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-white">10+</p>
                        <p className="text-sm text-gray-400">Certifications</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-white">5+</p>
                        <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                </div>

                <a href="#about" className="w-fit">
                    <Button
                        name="Let's build something amazing"
                        isBeam
                        containerClass="sm:w-fit w-full sm:min-w-96"
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;