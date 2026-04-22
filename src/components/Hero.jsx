import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroSection = heroRef.current;
    if (!canvas || !heroSection) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) }
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;
      varying vec2 vUv;

      vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);

          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod(i, 289.0);
          vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          float n_ = 1.0/7.0;
          vec3 ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);

          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      float fbm(vec3 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 5; i++) {
              value += amplitude * snoise(p * frequency);
              frequency *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / uResolution.y;
          vec2 p = uv;
          p.x *= aspect;

          float t = uTime * 0.15;

          vec2 mouse = uMouse;
          mouse.x *= aspect;
          float mouseDist = length(p - mouse);
          float mouseInfluence = smoothstep(0.8, 0.0, mouseDist) * 0.35;

          float warpX = fbm(vec3(p * 1.5, t * 0.8));
          float warpY = fbm(vec3(p * 1.5 + 5.0, t * 0.8));
          vec2 warped = p + vec2(warpX, warpY) * 0.35;
          warped += (mouse - p) * mouseInfluence;

          float n1 = fbm(vec3(warped * 1.2, t));
          float n2 = fbm(vec3(warped * 1.8 + 10.0, t * 1.2));
          float n3 = fbm(vec3(warped * 0.8 + 20.0, t * 0.6));
          float n4 = fbm(vec3(warped * 2.5 + 30.0, t * 0.9));

          vec3 bgLight   = vec3(0.965, 0.961, 0.980);
          vec3 lavender  = vec3(0.678, 0.604, 0.776);
          vec3 purpleMid = vec3(0.498, 0.431, 0.596);
          vec3 purpleDk  = vec3(0.200, 0.153, 0.290);
          vec3 deepPurp  = vec3(0.075, 0.027, 0.161);
          vec3 softPink  = vec3(0.92, 0.78, 0.88);
          vec3 softBlue  = vec3(0.75, 0.82, 0.95);
          vec3 warmGold  = vec3(0.95, 0.88, 0.72);

          vec3 col = bgLight;
          col = mix(col, softBlue,  smoothstep(-0.2, 0.6, n1) * 0.6);
          col = mix(col, lavender,  smoothstep(-0.1, 0.5, n2) * 0.5);
          col = mix(col, softPink,  smoothstep(0.0, 0.7, n3) * 0.45);
          col = mix(col, warmGold,  smoothstep(0.1, 0.8, n4) * 0.3);
          col = mix(col, purpleMid, smoothstep(0.3, 0.9, n1 * n2) * 0.25);

          float glow = smoothstep(0.6, 0.0, mouseDist) * 0.2;
          col += vec3(glow * 0.8, glow * 0.6, glow * 1.0);

          float vig = 1.0 - smoothstep(0.3, 1.4, length(uv - 0.5) * 1.2);
          col = mix(col * 0.92, col, vig);

          gl_FragColor = vec4(col, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const rect = heroSection.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.uResolution.value.set(rect.width, rect.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let targetMouse = { x: 0.5, y: 0.5 };
    let currentMouse = { x: 0.5, y: 0.5 };

    const handleMouseMove = (e) => {
      const rect = heroSection.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      targetMouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      targetMouse.x = 0.5;
      targetMouse.y = 0.5;
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const rect = heroSection.getBoundingClientRect();
      targetMouse.x = (touch.clientX - rect.left) / rect.width;
      targetMouse.y = 1.0 - (touch.clientY - rect.top) / rect.height;
    };

    const handleTouchEnd = () => {
      targetMouse.x = 0.5;
      targetMouse.y = 0.5;
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    heroSection.addEventListener('touchmove', handleTouchMove, { passive: true });
    heroSection.addEventListener('touchend', handleTouchEnd);

    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.04;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.04;
      uniforms.uMouse.value.set(currentMouse.x, currentMouse.y);
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          clock.start();
        } else {
          clock.stop();
        }
      });
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);

    return () => {
      window.removeEventListener('resize', resize);
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
      heroSection.removeEventListener('touchmove', handleTouchMove);
      heroSection.removeEventListener('touchend', handleTouchEnd);
      heroObserver.disconnect();
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <canvas className="hero__canvas" ref={canvasRef}></canvas>
      <div className="hero__content">
        <p className="hero__subheading">FUTURE-FOCUSED SOFTWARE DEVELOPMENT<br />&amp; DATA-DRIVEN DIGITAL MARKETING</p>
        <h1 className="hero__title">Full Service Digital<br />Solutions Company to<br />Help Your Business Scale</h1>
        <p className="hero__description">Grow your business with smarter systems, a stronger online presence, and better leads. At FUSEBOX ONLINE, we combine innovation and strategy to deliver scalable software and ROI-focused marketing for lasting success.</p>
        <a href="#quote" className="hero__btn" onClick={(e) => { e.preventDefault(); document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' }); }}>BOOK YOUR DISCOVERY CALL</a>
      </div>
      <div className="hero__live-btn">
        <span className="live-dot"></span> GO LIVE
      </div>
    </section>
  );
}

export default Hero;
