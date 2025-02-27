"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/config/site-config";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!window.WebGLRenderingContext && (
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch (e) {
    return false;
  }
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if WebGL is available
    if (!isWebGLAvailable()) {
     toast.error("3D animation cannot be loaded. Please enable WebGL & graphics acceleration.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });

      return;
    }

    // Set up Three.js Scene
    const scene = new THREE.Scene();

    // Set up Camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Set up Renderer
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(450, 450);
      containerRef.current.appendChild(renderer.domElement);
    } catch (error) {
    toast.error("3D animation cannot be loaded due to WebGL initialization failure.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
});

    }

    // Create a 3D Cube
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      metalness: 0.5,
      roughness: 0.5,
      wireframe: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;
      renderer!.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (renderer) {
        renderer.dispose();
      }
      if (containerRef.current && renderer?.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Backend Developer & DevOps Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">{siteConfig.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Backend developer, DevOps specialist, college student, and kids coding coach passionate about building
              robust systems and sharing knowledge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-center items-center">
            <div
              ref={containerRef}
              className="h-[450px] w-[450px] rounded-full bg-primary/5 overflow-hidden flex items-center justify-center"
            >
              {/* 3D animation will be rendered here */}
            </div>
            {siteConfig.features.openToWork && (
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Available for opportunities</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>
      <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>

    </section>
  );
}
