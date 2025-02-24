import { useState } from 'react';
import { clientReviews } from '../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Quote } from 'lucide-react';

const Clients = () => {
    const [hoveredId, setHoveredId] = useState(null);

    useGSAP(() => {
        gsap.fromTo(
            '.review-card',
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }
        );
    }, []);

    return (
        <section className="c-space my-20">
            <div className="flex flex-col items-center mb-12">
                <h3 className="head-text mb-4">Client Testimonials</h3>
                <p className="text-white-600 text-center max-w-2xl">
                    Feedback from professionals I've had the pleasure of working with
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {clientReviews.map((item) => (
                    <div
                        key={`review-${item.id}`}
                        className="review-card relative p-6 rounded-xl bg-black-200 border border-black-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="absolute top-4 right-4 text-white-400">
                            <Quote
                                size={24}
                                className={`transition-transform duration-300 ${
                                    hoveredId === item.id ? 'rotate-12' : ''
                                }`}
                            />
                        </div>

                        <div className="space-y-6">
                            <p className="text-white-800 font-light leading-relaxed relative">
                                {item.review}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-black-300">
                                <div className="flex gap-4 items-center">
                                    <div className="relative">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-transparent transition-all duration-300 hover:border-white-400"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">
                                            {item.name}
                                        </p>
                                        <p className="text-white-500 text-sm">
                                            {item.position}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img
                                            key={index}
                                            src="/assets/star.png"
                                            alt="rating star"
                                            className={`w-4 h-4 transition-all duration-300 ${
                                                hoveredId === item.id
                                                    ? 'transform hover:scale-125'
                                                    : ''
                                            }`}
                                            style={{
                                                transform: hoveredId === item.id
                                                    ? `rotate(${Math.random() * 20 - 10}deg)`
                                                    : 'none'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;