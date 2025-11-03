import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons';

interface HeroProps {
    onNavigate: (page: 'services') => void;
}

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

        const setupCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-1').trim();
        const rgbColor = hexToRgb(accentColor) || { r: 99, g: 102, b: 241 };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                
                // Mouse collision detection
                let dx = (mouse.x ?? -1000) - this.x;
                let dy = (mouse.y ?? -1000) - this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                if (distance < mouse.radius + this.size) {
                    if (this.x < (mouse.x ?? this.x)) this.x -= 2;
                    if (this.x > (mouse.x ?? this.x)) this.x += 2;
                    if (this.y < (mouse.y ?? this.y)) this.y -= 2;
                    if (this.y > (mouse.y ?? this.y)) this.y += 2;
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        const init = () => {
            particles = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.5)`;
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                 ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const handleResize = () => {
            setupCanvas();
            init();
        };

        setupCanvas();
        init();
        animate();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-deep-color)] text-center overflow-hidden pt-24 pb-12">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-on-scroll fade-up">
                        <span className="inline-block bg-indigo-500/10 text-indigo-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            Innovate. Transform. Succeed.
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--text-color)] mb-6 leading-tight animate-on-scroll fade-up stagger-1">
                        AI-Powered Solutions for Modern Enterprises
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-muted)] mb-10 animate-on-scroll fade-up stagger-2">
                        We leverage cutting-edge technology and deep industry expertise to help you solve complex challenges, unlock growth, and build for the future.
                    </p>
                    <div className="animate-on-scroll fade-up stagger-3">
                        <button
                            onClick={() => onNavigate('services')}
                            className="inline-flex items-center justify-center bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/20"
                        >
                            Explore Our Services
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;