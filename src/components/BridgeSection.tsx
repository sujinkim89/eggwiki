import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup-presentation.png";
import hormoneCharacters from "@/assets/hormone-characters-trio.png";

export const BridgeSection = () => {
  return (
    <div className="w-full">

      {/* === PHASE 1: 반전 트리거 (기존 밈 톤 마무리) === */}
      <div className="relative py-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 block">😰</span>
          <div className="space-y-1">
            <p className="text-lg font-bold text-foreground">
              PMS가 갈수록 심해지는 기분
            </p>
            <p className="text-sm text-muted-foreground">
              혹시 느끼셨나요?
            </p>
          </div>
        </motion.div>
        
        {/* Transition Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent, #1a365d)"
            }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-12 bg-[#1a365d]"
          />
        </div>

      </div>


      {/* === PHASE 2: 톤 전환 (Professional Blue) === */}
      <div className="bg-[#1a365d] py-8 px-4">

        {/* Hormone Characters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              불안을 데이터로 바꿔야 합니다.
            </h3>
            <p className="text-sm text-blue-200">
              우리 몸에는 여성 3대 호르몬이 있습니다.
            </p>
          </div>
          
          <img 
            src={hormoneCharacters} 
            alt="AMH, FSH, E2 호르몬 캐릭터" 
            className="w-full max-w-md mx-auto rounded-xl"
          />
          
          {/* Hormone Descriptions - 3 Column */}
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-white font-bold text-sm">AMH</p>
              <p className="text-blue-200 text-[10px] leading-tight">
                난소 나이
                <br />가임력의 타이머
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-white font-bold text-sm">FSH</p>
              <p className="text-blue-200 text-[10px] leading-tight">
                난포자극호르몬
                <br />난소 활동 신호
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-white font-bold text-sm">E2</p>
              <p className="text-blue-200 text-[10px] leading-tight">
                에스트로겐
                <br />여성성 조율 호르몬
              </p>
            </div>
          </div>
        </motion.div>

        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-[#4A7CFF] tracking-wider mb-2">
            RHA"BO
          </h2>
          <p className="text-sm text-blue-200">
            의사가 직접 만든
            <br />
            <span className="text-white font-medium">여성호르몬 분석 서비스</span>
          </p>
        </motion.div>

        {/* Mobile Mockup Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-transparent to-transparent z-10 pointer-events-none" />
          <img 
            src={appMockup} 
            alt="라보 앱 화면" 
            className="w-full max-w-lg mx-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a365d] to-transparent" />
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
            <h4 className="text-white font-bold text-center mb-4 text-sm">
              검사 후, 이런 것들이 명확해집니다
            </h4>
            <ul className="space-y-2 text-blue-100 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5">●</span>
                <span>
                  요즘 PMS가 왜 심해졌는지 
                  <span className="text-blue-300"> (호르몬 데이터로 확인)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5">●</span>
                <span>
                  내 난소 나이는 실제로 몇 살인지 
                  <span className="text-blue-300"> (실제 나이 ≠ 난소 나이)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5">●</span>
                <span>임신 계획이 있다면, 언제까지 준비해야 하는지</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5">●</span>
                <span>갱년기가 대략 언제쯤 시작될지</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5">●</span>
                <span>
                  지금 당장 무엇을 해야 하는지 
                  <span className="text-blue-300"> (맞춤 솔루션)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="mb-6">
            <p className="text-center text-white font-medium text-sm mb-3">
              먼저 검사받은 분들의 이야기
            </p>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-blue-100 text-xs leading-relaxed mb-1">
                  "AMH 수치 보고 솔직히 충격받았어요. 근데 오히려 마음이 편해졌어요. 
                  뭘 해야 할지 명확해지니까요."
                </p>
                <p className="text-blue-300 text-[10px]">— 32세, 직장인</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-blue-100 text-xs leading-relaxed mb-1">
                  "FSH가 높게 나와서 난자 동결 바로 결정했어요. 
                  6개월만 늦었어도 정말 후회했을 것 같아요."
                </p>
                <p className="text-blue-300 text-[10px]">— 29세, 프리랜서</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-blue-100 text-xs leading-relaxed mb-1">
                  "PMS가 심한 게 제 탓이 아니었더라고요. 
                  호르몬 관리 시작하고 진짜 인생이 달라졌어요."
                </p>
                <p className="text-blue-300 text-[10px]">— 35세, 마케터</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-white text-sm font-medium">지금 이 순간에도</p>
            <p className="text-blue-200 text-xs mb-4">난소는 나이를 먹고 있습니다.</p>

            <a 
              href="https://www.rhabo.co.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full bg-gradient-to-r from-[#4A7CFF] to-[#6B8CFF] hover:from-[#3A6CEF] hover:to-[#5B7CEF] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/30"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                10% 혜택 받고 시작하기
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
};
