"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    // PC에서도 1단 레이아웃 유지 - 최대 너비 제한
    <div className={cn("w-full max-w-md mx-auto px-4 md:px-6 py-20", className)}>
      {/* 모든 화면 크기에서 1단 세로 배치 - grid 대신 flex-col 사용 */}
      <div className="relative flex flex-col items-center gap-12 w-full">
        <div>
          {/* 이미지 컨테이너: h-80을 유지하거나 필요시 조절 */}
          <div className="relative h-80 w-full flex justify-center">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0, // 위아래 배치를 위해 점프 높이 조절
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom flex justify-center"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-auto aspect-square rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* 텍스트 영역: text-center 추가로 중앙 정렬 */}
        <div className="flex flex-col items-center text-center py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-white font-sans">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-slate-300 font-sans mt-2">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-slate-100 mt-8 max-w-lg mx-auto leading-relaxed font-sans">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          
          {/* 출처 정보 */}
          <div className="flex flex-col items-center gap-3 pt-10">
            <p className="text-[10px] text-slate-400 leading-relaxed text-center font-sans">
              출처: BBC 월드서비스. 2026년 1월 7일.
            </p>
            {/* 화살표 버튼 위치 중앙 정렬 */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="h-9 w-9 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center group/button transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-9 w-9 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center group/button transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
