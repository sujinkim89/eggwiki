import { motion, Variants } from "framer-motion";
import hormoneCharacters from "@/assets/hormone-characters-trio.png";
import rhaboLogoSignature from "@/assets/rhabo-logo-signature.png";
import { Button } from "@/components/ui/button";
import EggBackground from "@/components/ui/egg-background";
import { HeroGrid } from "@/components/ui/hero-grid-section";

export const MaleBridgeSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full font-pretendard relative">
      <EggBackground />
      <div className="relative z-10 bg-gradient-to-b from-[#1A1A2E] to-[#1E293B] rounded-2xl p-6 pt-12 shadow-xl overflow-hidden">
        
        {/* --- PART 1: Scientific Evidence (Merged) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-4"
        >
          {/* Hero Grid Section - Purpose Message */}
          <motion.div 
            variants={itemVariants}
            className="mb-0 -mx-6"
          >
            <HeroGrid
              subtitleTop="에그위키 x RHABO 특별 이벤트"
              title={
                <>
                  여성호르몬 검사<br />
                  출산 계획있을 때만<br />
                  하는 거 아니예요.
                </>
              }
              subtitle="전세계 Z세대 여성들, 난자냉동으로 삶의 주도권 찾아"
              primaryCtaText=""
              secondaryCtaText=""
              className="min-h-[400px]"
            />
          </motion.div>

          {/* Event Banner */}
          <motion.div 
            variants={itemVariants}
            className="mb-6 -mt-6"
          >
            <div className="bg-gradient-to-r from-blue-800/20 to-indigo-900/20 border-2 border-blue-600/50 rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full animate-pulse shadow-lg shadow-red-500/50 border border-red-400 z-10">
                ⚠️ 조기 마감 임박
              </div>
              
              {/* 지원금 정보 */}
              <div className="flex items-center justify-center gap-2 mb-4 mt-12">
                <span className="text-blue-400 text-2xl font-bold">💰</span>
                <span className="text-white font-bold text-[18px]">난자 냉동 지원금 230만원</span>
              </div>
              <div className="text-[13px] text-slate-200 leading-relaxed space-y-1.5 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>서울시 지원금 200만원</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>라보 추가 지원금 30만원</span>
                </div>
              </div>

              {/* 지원 대상 및 조건 */}
              <div className="bg-blue-900/30 rounded-lg p-4 mb-4 border border-blue-700/30">
                <h4 className="text-white text-[12px] font-bold mb-3 text-center">지원 대상 및 조건</h4>
                <div className="space-y-2 text-[11px] text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">📍</span>
                    <span><span className="text-white font-semibold">거주:</span> 주민등록상 서울시 6개월 이상 거주</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">👤</span>
                    <span><span className="text-white font-semibold">연령:</span> 만 20세~49세 여성 (생애 1회)</span>
                  </div>
                </div>
              </div>

              {/* 조기 마감 고급스러운 고지 */}
              <div className="pt-3 border-t border-blue-600/30">
                <div className="text-center space-y-1.5">
                  <p className="text-[11px] text-blue-200 font-medium">
                    본 사업은 <span className="text-white font-bold">최대 650명</span>에 한해 지원됩니다
                  </p>
                  <p className="text-[12px] text-blue-300 font-semibold">
                    조기 마감이 예상되오니 서둘러 신청해주시기 바랍니다
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="mb-2 px-4"
          >
            <a
              href="http://pf.kakao.com/_dlxkQn"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                className="w-full bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white font-bold py-7 sm:py-8 rounded-xl text-[18px] sm:text-[20px] tracking-[-0.01em] shadow-lg shadow-blue-900/20 leading-[1.3] cursor-pointer flex flex-col items-center justify-center gap-1"
                onClick={() => {
                  window.open("http://pf.kakao.com/_dlxkQn", "_blank");
                }}
              >
                <span>플친 추가하고</span>
                <span>230만원 지원금받기</span>
              </Button>
            </a>
          </motion.div>

          {/* Headline */}
          <motion.h3 
            variants={itemVariants}
            className="text-[24px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-2 font-pretendard mt-4"
          >
            여자들의 예민함이 이해가나요?
          </motion.h3>

          {/* Hero Section */}
          <motion.div 
            variants={itemVariants}
            className="relative py-2 mb-1"
          >
            <div className="text-center space-y-4 px-2">
              <h1 className="text-[17px] md:text-[21px] font-sans font-semibold text-blue-100 leading-[1.4] tracking-[-0.01em]">
                난소가 지쳐있으면,<br />매달 무너질 수밖에 없습니다.
              </h1>
            </div>
          </motion.div>
        </motion.div>

        {/* --- PART 2: CTA Bridge (Merged) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Main CTA Title */}
          <motion.div variants={itemVariants} className="text-center mb-3 font-pretendard px-2">
            <h3 className="text-[17px] md:text-[21px] font-semibold text-white mb-1 leading-[1.4] tracking-[-0.01em] font-sans">
              <span className="text-white">지금부터 여성 3대 호르몬을</span><br />
              과학적으로 관리하세요
            </h3>
          </motion.div>

          {/* 3 Major Hormones Engine */}
          <motion.div variants={itemVariants} className="mb-3">
            <div className="text-center mb-8 px-2 mt-2">
              {/* Characters Image */}
              <div className="mb-8 overflow-hidden rounded-xl">
                <img
                  src={hormoneCharacters}
                  alt="AMH, FSH, E2 호르몬 캐릭터"
                  className="w-full opacity-90 scale-[1.02] -translate-y-[2%]"
                />
              </div>
            </div>

            <div className="space-y-4">
              {/* AMH */}
              <div className="bg-[#2D3A4F] rounded-xl p-5 border border-slate-700/50 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#FF71A4] font-bold text-lg">AMH</span>
                  <span className="text-sm text-slate-300">난소 나이</span>
                  <span className="text-xs text-slate-500 ml-auto border border-slate-600 px-2 py-0.5 rounded-full">
                    내 인생의 타임라인
                  </span>
                </div>
                <p className="text-[15px] text-white font-medium mb-2 leading-snug">
                  "커리어 플랜 속 출산 계획 언제가 좋을까?"
                </p>
                <p className="text-[13px] text-slate-400 leading-relaxed">
                  막연한 계획 대신, 데이터로 내 인생의 적기를 설계하세요.
                </p>
              </div>

              {/* FSH */}
              <div className="bg-[#2D3A4F] rounded-xl p-5 border border-slate-700/50 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#FFB347] font-bold text-lg">FSH</span>
                  <span className="text-sm text-slate-300">난소 체력</span>
                  <span className="text-xs text-slate-500 ml-auto border border-slate-600 px-2 py-0.5 rounded-full">
                    난소 엔진의 에너지
                  </span>
                </div>
                <p className="text-[15px] text-white font-medium mb-2 leading-snug">
                  "30대에 벌써 조기 완경? 어떻게 대비할까?"
                </p>
                <p className="text-[13px] text-slate-400 leading-relaxed">
                  지금 난소가 과부하 상태인지, 안정적인지 확인하세요.
                </p>
              </div>
              
              {/* E2 */}
              <div className="bg-[#2D3A4F] rounded-xl p-5 border border-slate-700/50 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#B388FF] font-bold text-lg">E2</span>
                  <span className="text-sm text-slate-300">에스트로겐</span>
                  <span className="text-xs text-slate-500 ml-auto border border-slate-600 px-2 py-0.5 rounded-full">
                    여성성 조율
                  </span>
                </div>
                <p className="text-[15px] text-white font-medium mb-2 leading-snug">
                  "내 여성호르몬 수치의 밸런스는 어떨까?"
                </p>
                <p className="text-[13px] text-slate-400 leading-relaxed">
                  생리 불순, 감정 기복의 원인을 수치로 확인하세요.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RHABO Intro */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6">
              <div className="flex justify-center mb-3">
                <img
                  src={rhaboLogoSignature}
                  alt="RHABO 로고"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-center text-white font-bold text-[15px] mb-4 tracking-tight">
                전문의가 운영하는<br />여성호르몬 3종 검사
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[11px] text-white font-medium">
                <span>전문의 창업</span>
                <span>•</span>
                <span>임상 데이터 1만+ 검증</span>
              </div>
            </div>

            <div className="relative mb-6 px-4 flex justify-center">
              <img 
                  src="/Mockup_final_png.png"
                  alt="라보 앱 화면" 
                  className="w-full h-auto object-contain"
                  style={{ mixBlendMode: 'normal' }}
                />
            </div>

            {/* Benefits Section */}
            <div className="bg-[#2D3A4F] rounded-2xl p-5 mb-6 border border-slate-700/50 text-left">
              <h4 className="text-white font-bold text-center mb-4 text-[15px] tracking-tight">
                검사 후, 이런 것들이 명확해집니다
              </h4>
              <ul className="space-y-3 text-slate-300 text-[13px] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A7CFF] mt-1.5 flex-shrink-0 text-[8px]">●</span>
                  <span>
                    <span className="text-white font-medium">난소 나이</span>: 내 몸의 진짜 나이, 내 난소는 몇 살?
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A7CFF] mt-1.5 flex-shrink-0 text-[8px]">●</span>
                  <span>
                    <span className="text-white font-medium">임신 계획</span>: 커리어와 출산 사이, 인생 시간표
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A7CFF] mt-1.5 flex-shrink-0 text-[8px]">●</span>
                  <span>
                    <span className="text-white font-medium">완경기 예측</span>: 여성호르몬 엔진이 언제 멈추는지
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A7CFF] mt-1.5 flex-shrink-0 text-[8px]">●</span>
                  <span>
                    <span className="text-white font-medium">에스트로겐</span>: 기분 기복과 피부 탄력 결정 수치
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#4A7CFF] mt-1.5 flex-shrink-0 text-[8px]">●</span>
                  <span>
                    <span className="text-white font-medium">골밀도 체크</span>: 내 뼈를 지키는 호르몬이 적정한지?
                  </span>
                </li>
              </ul>
            </div>

            {/* Testimonials */}
            <div className="bg-[#2D3A4F] rounded-2xl p-5 mb-6 border border-slate-700/50 text-left">
              <p className="text-center text-white font-semibold text-[15px] mb-4 tracking-tight">
                먼저 검사받은 여성들의 이야기
              </p>
              <div className="space-y-3">
                <div className="bg-[#1E293B] rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-300 text-[13px] leading-relaxed mb-2">
                    "난소 나이가 30대 중반으로 나와서 솔직히 충격받았어요. 근데 오히려 마음이 편해졌어요. 
                    뭘 해야 할지 명확해지니까요."
                  </p>
                  <p className="text-slate-500 text-[11px]">— 32세, 직장인</p>
                </div>
                <div className="bg-[#1E293B] rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-300 text-[13px] leading-relaxed mb-2">
                    "완경에 가까워 지고 있어서, 난자 동결 바로 결정했어요. 
                    늦게 알았으면 정말 후회했을 것 같아요."
                  </p>
                  <p className="text-slate-500 text-[11px]">— 35세, 프리랜서</p>
                </div>
                <div className="bg-[#1E293B] rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-300 text-[13px] leading-relaxed mb-2">
                    "PMS가 심한 게 제 탓이 아니었더라고요. 
                    데이터로 보니까 파트너와 이야기할 때 이해받을 수 있었어요."
                  </p>
                  <p className="text-slate-500 text-[11px]">— 27세, 마케터</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-[#3B4A6B] rounded-2xl p-4 text-center mb-6">
              <p className="text-white text-[16px] font-bold tracking-tight mb-1">그녀를 위한 가장 특별한 선물</p>
              <p className="text-slate-300 text-[16px] mb-4 tracking-normal">여자의 몸의 주도권을 찾아주세요</p>
              <a
                href="http://pf.kakao.com/_dlxkQn"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white font-bold py-8 rounded-xl text-[20px] tracking-tight shadow-lg shadow-blue-900/20 leading-tight flex flex-col items-center justify-center gap-1"
                >
                  <span>플친 추가하고</span>
                  <span>230만원 지원금받기</span>
                </Button>
              </a>
            </div>

            {/* Sticky Bottom CTA removed from here */}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
