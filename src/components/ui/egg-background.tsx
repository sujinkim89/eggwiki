import { useEffect, useRef } from "react";

export default function EggBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let eggs: any[] = [];
    let particles: any[] = [];
    const mouse = { x: -2000, y: -2000 };
    const eggCount = 30;

    const colors = [
      { base: "#87CEEB", light: "#E0F6FF", dark: "#4682B4" }, // 하늘색
      { base: "#87CEFA", light: "#B0E0E6", dark: "#4169E1" }, // 밝은 하늘색
      { base: "#B0E0E6", light: "#E0F7FF", dark: "#5F9EA0" }, // 파우더 블루
      { base: "#ADD8E6", light: "#F0F8FF", dark: "#4682B4" }, // 연한 하늘색
      { base: "#AFEEEE", light: "#E0FFFF", dark: "#48D1CC" }, // 팔레 터콰이즈
      { base: "#B0C4DE", light: "#E6E6FA", dark: "#6495ED" }, // 라이트 스틸 블루
      { base: "#87CEFA", light: "#D1ECF1", dark: "#4682B4" }, // 라이트 스카이 블루
    ];

    /* ================= PARTICLES ================= */

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      gravity = 0.2;
      opacity = 1;
      color: string;
      rotation = 0;
      rotationSpeed = 0;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 15;
        this.speedY = (Math.random() - 0.5) * 15;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.opacity -= 0.02;
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        
        // Draw as small egg shell piece
        ctx.beginPath();
        ctx.moveTo(-this.size, -this.size * 0.5);
        ctx.lineTo(this.size, -this.size * 0.3);
        ctx.lineTo(this.size * 0.8, this.size);
        ctx.lineTo(-this.size * 0.7, this.size * 0.8);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
    }

    /* ================= EGGS ================= */

    class Egg {
      x = 0;
      y = 0;
      width = 0;
      height = 0;
      speed = 0;
      angle = 0;
      wobbleSpeed = 0;
      cracked = false;
      colorSet = colors[0];

      // Tail physics (for egg shell pieces)
      tailMidY = 0;
      tailEndY = 0;
      tailVelMid = 0;
      tailVelEnd = 0;
      prevX = 0;

      constructor(first = true) {
        this.init(first);
      }

      init(firstLoad: boolean) {
        this.width = Math.random() * 20 + 30;
        this.height = this.width * 1.3; // Egg is taller than wide
        this.x = Math.random() * canvas.width;
        this.y = firstLoad
          ? Math.random() * canvas.height
          : canvas.height + this.height + 200;

        this.colorSet = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 1 + 0.4;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.angle = Math.random() * Math.PI * 2;
        this.cracked = false;

        this.prevX = this.x;
        this.tailMidY = this.height + 20;
        this.tailEndY = this.height + 60;
        this.tailVelMid = 0;
        this.tailVelEnd = 0;
      }

      drawEggPath() {
        // Draw egg shape using bezier curves for more accurate form
        ctx.beginPath();
        const w = this.width / 2;
        const h = this.height / 2;
        
        // Start from top
        ctx.moveTo(0, -h);
        // Top curve (wider)
        ctx.bezierCurveTo(w * 0.6, -h, w, -h * 0.3, w, 0);
        // Right side
        ctx.bezierCurveTo(w, h * 0.2, w * 0.7, h * 0.6, 0, h);
        // Bottom curve (pointed)
        ctx.bezierCurveTo(-w * 0.7, h * 0.6, -w, h * 0.2, -w, 0);
        // Left side
        ctx.bezierCurveTo(-w, -h * 0.3, -w * 0.6, -h, 0, -h);
        ctx.closePath();
      }

      drawCrack() {
        // Draw multiple crack lines for more realistic breaking effect
        ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        
        // Main cracks radiating from center
        ctx.moveTo(0, -this.height * 0.3);
        ctx.lineTo(this.width * 0.2, this.height * 0.1);
        
        ctx.moveTo(0, -this.height * 0.2);
        ctx.lineTo(-this.width * 0.15, this.height * 0.15);
        
        ctx.moveTo(this.width * 0.1, -this.height * 0.25);
        ctx.lineTo(-this.width * 0.1, this.height * 0.2);
        
        ctx.moveTo(-this.width * 0.1, -this.height * 0.2);
        ctx.lineTo(this.width * 0.15, this.height * 0.1);
        
        // Additional smaller cracks
        ctx.moveTo(this.width * 0.05, -this.height * 0.15);
        ctx.lineTo(this.width * 0.2, -this.height * 0.05);
        
        ctx.moveTo(-this.width * 0.1, -this.height * 0.1);
        ctx.lineTo(-this.width * 0.2, this.height * 0.05);
        
        ctx.stroke();
      }

      drawString() {
        const dx = this.x - this.prevX;
        this.prevX = this.x;

        const stiffness = 0.08;
        const damping = 0.85;
        const gravity = 0.35;

        const midTarget = this.height + 20 + Math.abs(dx) * 8;
        this.tailVelMid += (midTarget - this.tailMidY) * stiffness;
        this.tailVelMid *= damping;
        this.tailMidY += this.tailVelMid;

        const endTarget = this.height + 60 + Math.abs(dx) * 14;
        this.tailVelEnd += (endTarget - this.tailEndY) * stiffness;
        this.tailVelEnd *= damping;
        this.tailVelEnd += gravity;
        this.tailEndY += this.tailVelEnd;

        const sway = Math.sin(this.angle * 1.8) * 6 + dx * 4;

        ctx.beginPath();
        ctx.moveTo(0, this.height / 2 + 5);
        ctx.bezierCurveTo(
          sway,
          this.tailMidY * 0.5,
          -sway,
          this.tailMidY,
          sway * 0.6,
          this.tailEndY
        );
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      crack() {
        if (this.cracked) return;
        this.cracked = true;

        // Create more particles for egg breaking effect
        const particleCount = 40 + Math.floor(Math.random() * 20); // 40-60 particles
        
        for (let i = 0; i < particleCount; i++) {
          // Use shell color (sky blue)
          const color = this.colorSet.base;
          const particle = new Particle(this.x, this.y, color);
          particles.push(particle);
        }

        setTimeout(() => this.init(false), 1000 + Math.random() * 1000);
      }

      update() {
        if (this.cracked) return;

        this.y -= this.speed;
        this.angle += this.wobbleSpeed;
        this.x += Math.sin(this.angle * 0.6) * 0.8;

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const radius = Math.max(this.width, this.height) / 2;
        if (Math.sqrt(dx * dx + dy * dy) < radius + 10) {
          this.crack();
        }

        if (this.y < -this.height - 200) this.init(false);

        this.draw();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.sin(this.angle) * 0.06);

        // 🪢 String/shadow
        this.drawString();

        // 🥚 Egg body
        this.drawEggPath();
        const grad = ctx.createRadialGradient(
          -this.width * 0.2,
          -this.height * 0.3,
          this.width * 0.1,
          0,
          0,
          Math.max(this.width, this.height) * 1.2
        );
        grad.addColorStop(0, this.colorSet.light);
        grad.addColorStop(0.5, this.colorSet.base);
        grad.addColorStop(1, this.colorSet.dark);
        ctx.fillStyle = grad;
        ctx.globalAlpha = 0.85;
        ctx.fill();

        // Add subtle highlight
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.beginPath();
        ctx.ellipse(-this.width * 0.15, -this.height * 0.2, this.width * 0.15, this.height * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw face if not cracked
        if (!this.cracked) {
          ctx.save();
          ctx.globalAlpha = 1;
          
          // Eyes
          const eyeSize = this.width * 0.08;
          const eyeY = -this.height * 0.15;
          const eyeSpacing = this.width * 0.15;
          
          // Left eye
          ctx.fillStyle = "#000000";
          ctx.beginPath();
          ctx.arc(-eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Right eye
          ctx.beginPath();
          ctx.arc(eyeSpacing, eyeY, eyeSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Eye highlights
          ctx.fillStyle = "#FFFFFF";
          const highlightSize = eyeSize * 0.3;
          ctx.beginPath();
          ctx.arc(-eyeSpacing + eyeSize * 0.3, eyeY - eyeSize * 0.3, highlightSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(eyeSpacing + eyeSize * 0.3, eyeY - eyeSize * 0.3, highlightSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Smile
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = 2;
          ctx.beginPath();
          const smileY = -this.height * 0.05;
          const smileWidth = this.width * 0.25;
          ctx.arc(0, smileY, smileWidth, 0.2, Math.PI - 0.2);
          ctx.stroke();
          
          ctx.restore();
        }

        // Draw crack if cracked
        if (this.cracked) {
          this.drawCrack();
        }

        ctx.restore();
      }
    }

    /* ================= LOOP ================= */

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      eggs = [];
      for (let i = 0; i < eggCount; i++) {
        eggs.push(new Egg(true));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(p => p.opacity > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      eggs.forEach(e => e.update());

      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-zinc-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
