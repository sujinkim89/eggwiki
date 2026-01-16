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

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-sm md:max-w-2xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      {/* 슬라이드 기능 유지, PC에서도 1단 레이아웃 - md:grid-cols-2 제거 */}
      <div className="relative grid grid-cols-1 gap-6 items-center">
        {/* 이미지 슬라이드 섹션 */}
        <div>
          <div className="relative h-80 w-full">
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
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
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
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* 네비게이션 버튼 - 이미지 바로 아래 */}
          <div className="flex gap-4 justify-center" style={{ marginTop: '30px' }}>
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center group/button transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center group/button transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* 텍스트 섹션 */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col" style={{ gap: '2px' }}>
              <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-white font-sans">
                {testimonials[active].name}
              </h3>
              <p className="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-white font-sans">
                {testimonials[active].designation}
              </p>
            </div>
            <motion.p className="text-sm text-slate-100 mt-8 leading-relaxed font-sans">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
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
          <div className="flex flex-col items-center gap-3 pt-12">
            <p className="text-[10px] text-slate-400 leading-relaxed text-center font-sans">
              출처: BBC 월드서비스. 2026년 1월 7일.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
