import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { myProjects } from '../constants';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(
            '.animatedText',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }
        );
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="c-space my-20">
            <div className="flex flex-col items-center mb-10">
                <h2 className="head-text mb-2">Featured Projects</h2>
                <p className="text-white-600 text-center max-w-2xl animatedText">
                    A showcase of my expertise in full-stack development, machine learning, and enterprise solutions
                </p>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0 w-full h-48 overflow-hidden rounded-t-xl">
                        <img
                            src={currentProject.spotlight}
                            alt="project spotlight"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="mt-48">
                        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="project logo" />
                        </div>

                        <div className="flex flex-col gap-5 text-white-600 my-5">
                            <h3 className="text-white text-2xl font-semibold animatedText">
                                {currentProject.title}
                            </h3>
                            <p className="animatedText">{currentProject.desc}</p>
                            <p className="animatedText">{currentProject.subdesc}</p>
                        </div>

                        <div className="flex items-center justify-between flex-wrap gap-5 mt-5">
                            <div className="flex items-center gap-3 flex-wrap">
                                {currentProject.tags.map((tag) => (
                                    <div
                                        key={tag.id}
                                        className="tech-logo bg-black-200 p-2 rounded-lg hover:bg-black-300 transition-colors"
                                        title={tag.name}
                                    >
                                        <img src={tag.path} alt={tag.name} className="w-8 h-8" />
                                    </div>
                                ))}
                            </div>

                            {currentProject.href && (
                                <a
                                    className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
                                    href={currentProject.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>View Project</span>
                                    <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button
                            className="arrow-btn hover:bg-black-300 transition-colors"
                            onClick={() => handleNavigation('previous')}
                            aria-label="Previous project"
                        >
                            <img src="/assets/left-arrow.png" alt="previous" />
                        </button>

                        <div className="text-white-600">
                            {selectedProjectIndex + 1} / {myProjects.length}
                        </div>

                        <button
                            className="arrow-btn hover:bg-black-300 transition-colors"
                            onClick={() => handleNavigation('next')}
                            aria-label="Next project"
                        >
                            <img src="/assets/right-arrow.png" alt="next" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full relative">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls
                            maxPolarAngle={Math.PI / 2}
                            enableZoom={false}
                            enablePan={false}
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;