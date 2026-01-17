import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Meteors } from "@/components/ui/meteors";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface Avatar {
  id: number;
  src: string;
  alt: string;
}

const AVATARS: Avatar[] = [
  { id: 1, src: "https://i.pravatar.cc/40?img=12", alt: "Customer avatar 1" },
  { id: 2, src: "https://i.pravatar.cc/40?img=32", alt: "Customer avatar 2" },
  { id: 3, src: "https://i.pravatar.cc/40?img=45", alt: "Customer avatar 3" },
  { id: 4, src: "https://i.pravatar.cc/40?img=56", alt: "Customer avatar 4" },
];

interface HeroGridSectionProps {
  avatars?: Avatar[];
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
  subtitleTop?: ReactNode | string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  className?: string;
}

export function HeroGrid({
  avatars = AVATARS,
  title = "Build, launch, and scale your product faster",
  subtitle = "A modern platform that helps teams ship better software with less effort.",
  subtitleTop,
  primaryCtaText = "Request Demo",
  secondaryCtaText = "Get Started For Free",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  className,
}: HeroGridSectionProps) {
  return (
    <section className={cn("relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-4", className)}>
      
      {/* Background transparent to match page background */}
      
      <div className="relative z-10 flex flex-col">
        <div>
          <div className="mx-auto flex min-h-[200px] max-w-[90vw] sm:max-w-[80vw] md:max-w-[600px] lg:max-w-[700px] shrink-0 flex-col items-center justify-end gap-2 px-4 pt-0 pb-1">
            {subtitleTop && (
              <div className="text-[11px] max-w-2xl text-pretty text-center text-blue-300 dark:text-blue-300 md:text-[12px] font-medium mb-1 leading-relaxed tracking-normal">
                {subtitleTop}
              </div>
            )}
            <h1 className="!max-w-screen-lg text-pretty text-center text-[22px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.3] tracking-[-0.01em] text-white dark:text-white px-2">
              {title}
            </h1>
            {subtitle && (
              <div className="w-full mt-4">
                <AnimatedTestimonials
                  testimonials={[
                    {
                      quote: "25세에 난자를 동결한 리비 윌슨은 \"난자를 냉동하고 나서야 비로소 내가 연애에 대해 얼마나 압박감을 느껴왔는지 깨달았다\"고 말합니다. 가임력 저하라는 시간적 압박에서 벗어나 삶의 자유를 누리게 된 거죠. 그녀는 25살에 퇴직연금을 인출해서 난자동결을 선택했습니다.",
                      name: "전세계 Z세대 여성들",
                      designation: "난자냉동으로 연애 압박 줄어",
                      src: "/eggfreezing/1.png",
                    },
                    {
                      quote: "이제 난자 동결은 30대 여성만의 이야기가 아닙니다. 영국 통계청에 따르면 18~24세 여성의 난자 동결 시술은 4년간 46% 증가했고, 링크드인에는 20대 커리어우먼들이 자신의 선택을 당당히 공유하고 있습니다.",
                      name: "난자냉동 3040 전유물?",
                      designation: "20대 중심으로 급격히 증가",
                      src: "/eggfreezing/front-view-smiley-woman-outdoors_52683-99864.avif",
                    },
                    {
                      quote: "더 많은 여성들이 몸과 시간의 주도권을 되찾는 선택을 하고 있어요. 아이를 포기한 것이 아니라, 삶의 속도를 스스로 선택하기 위해서였죠. 그 시작은 바로 나의 난소나이를 알고, 3대 여성호르몬을 체계적으로 분석하는 겁니다.",
                      name: "서두르거나, 포기하지 말고",
                      designation: "삶의 주도권을 선택하세요.",
                      src: "/eggfreezing/3.png",
                    },
                  ]}
                  autoplay={false}
                  className="py-2"
                />
              </div>
            )}
            
            {primaryCtaText && subtitle && (
              <div className="mt-[34px] mb-[2px] px-4">
                <a
                  href="http://pf.kakao.com/_dlxkQn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className="w-full bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white font-bold py-7 sm:py-8 rounded-xl text-[18px] sm:text-[20px] tracking-[-0.01em] shadow-lg shadow-blue-900/20 leading-[1.3] cursor-pointer flex flex-col items-center justify-center gap-1"
                    onClick={onPrimaryCtaClick}
                  >
                    <span>카톡 플친 추가하고</span>
                    <span>230만원 지원금 받기</span>
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
        {secondaryCtaText && (
          <Button
            className="max-w-sm:!border-x-0 flex w-full !border-x !border-y-0 border-slate-700/30 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-xl transition-colors duration-150 hover:from-blue-700 hover:to-purple-700 dark:border-slate-600/30 !h-14 flex-col items-center justify-center rounded-none !text-base cursor-pointer text-white"
            onClick={onSecondaryCtaClick}
          >
            {secondaryCtaText}
          </Button>
        )}
      </div>
    </section>
  );
}

export function HeroGridSection() {
  return (
    <HeroGrid
      avatars={AVATARS}
      title="Build, launch, and scale your product faster"
      subtitle="A modern platform that helps teams ship better software with less effort."
      primaryCtaText="Request Demo"
      secondaryCtaText="Get Started For Free"
    />
  );
}
