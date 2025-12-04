import { Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BridgeSection = () => {
  return (
    <div className="space-y-6">
      {/* Section 1: Hook */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-3">
          💭 재미로 본 테스트였는데... 왜 이렇게 정확하죠?
        </h3>
        <div className="bg-muted/50 rounded-xl p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            PMS 기간 동안 당신이 겪는 감정 변화는 <span className="text-rose font-medium">단순한 성격 문제가 아닙니다.</span>
            <br />이건 당신의 난소가 보내는 정확한 신호입니다.
          </p>
        </div>
      </div>

      {/* Section 2: Why PMS gets worse */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          📉 왜 갈수록 PMS가 더 심해지는 걸까요?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">생리 전, 우리 몸에서는 이런 일이 벌어집니다:</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
            <span className="text-xl">📉</span>
            <div>
              <p className="text-sm font-medium text-foreground">에스트로겐 급락</p>
              <p className="text-xs text-muted-foreground">→ 기분이 바닥으로</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
            <span className="text-xl">📉</span>
            <div>
              <p className="text-sm font-medium text-foreground">프로게스테론 감소</p>
              <p className="text-xs text-muted-foreground">→ 불안과 예민함 폭발</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
            <span className="text-xl">🧠</span>
            <div>
              <p className="text-sm font-medium text-foreground">뇌의 혼란</p>
              <p className="text-xs text-muted-foreground">→ "행복 호르몬이 왜 갑자기 사라졌지?"</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose/10 to-violet/10 rounded-xl p-4 border border-rose/20">
          <p className="text-sm text-muted-foreground leading-relaxed">
            평소라면 이 하강이 완만하게 일어나지만,
            <br /><span className="text-rose font-medium">난소 기능이 떨어지면 호르몬이 롤러코스터처럼 요동칩니다.</span>
            <br /><br />뇌는 이 불규칙한 변동을 견디지 못하고,
            <br />PMS 증상은 점점 더 심해지고 통제 불능 상태가 됩니다.
          </p>
        </div>
      </div>

      {/* Section 3: Warning */}
      <div className="bg-gradient-to-br from-rose/20 to-violet/20 border border-rose/30 rounded-2xl p-5">
        <h3 className="font-display text-lg text-rose mb-4">
          🚨 지금 당신이 PMS로 느끼는 건 "난소의 경고음"입니다
        </h3>
        
        <div className="bg-card/80 rounded-xl p-4 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            "요즘 왜 이렇게 감정 기복이 심하지?"
            <br />"예전엔 이 정도는 아니었는데..."
            <br /><br />이 변화는 우연이 아닙니다.
            <br /><span className="text-rose font-medium">당신의 난소 시계가 빨라지고 있다는 과학적 신호입니다.</span>
          </p>
        </div>

        <div className="bg-card rounded-xl p-4 text-center">
          <span className="text-3xl mb-3 block">🔬</span>
          <p className="text-base font-display text-rose mb-2">심리테스트는 시작일 뿐입니다</p>
          <p className="text-sm text-muted-foreground">
            테스트로 당신의 유형을 알았다면,
            <br />이제 <strong className="text-foreground">왜 그런지</strong>를 숫자로 확인할 차례입니다.
          </p>
        </div>
      </div>

      {/* Section 4: Hormone Tests */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          📊 라보 여성 호르몬 3종 검사
        </h3>

        <div className="space-y-4">
          {/* AMH */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🏦</span>
              </div>
              <div>
                <p className="font-medium text-foreground">AMH (난소 나이)</p>
                <p className="text-xs text-muted-foreground">통장 잔고 확인하기</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">무엇을 알려주나요?</strong> 난소에 남은 난자의 양 (통장에 돈이 얼마나 남았는지)</p>
              <p><strong className="text-foreground">당신이 얻는 것:</strong> 임신 가능 기간의 실제 마감일을 숫자로 확인</p>
            </div>
            <div className="mt-3 p-3 bg-primary/5 rounded-lg">
              <p className="text-xs text-primary">💡 "앞으로 몇 년 더 쓸 수 있는 건지 통장 잔액을 보는 것과 같아요"</p>
            </div>
          </div>

          {/* FSH */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🚨</span>
              </div>
              <div>
                <p className="font-medium text-foreground">FSH (난포자극호르몬)</p>
                <p className="text-xs text-muted-foreground">난소의 비명 소리 측정기</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">무엇을 알려주나요?</strong> 난소가 얼마나 힘들게 일하는지 (뇌가 난소를 얼마나 채찍질하는지)</p>
              <p><strong className="text-foreground">당신이 얻는 것:</strong> FSH가 높다 = 난소가 "더 이상 못 버티겠어!" 하고 있다는 증거</p>
            </div>
            <div className="mt-3 p-3 bg-rose/5 rounded-lg">
              <p className="text-xs text-rose">💡 "배터리 5% 남은 폰처럼, 난소가 과부하 상태라는 경고등이에요"</p>
            </div>
          </div>

          {/* E2 */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🎭</span>
              </div>
              <div>
                <p className="font-medium text-foreground">E2 (에스트로겐)</p>
                <p className="text-xs text-muted-foreground">기분 조절 리모컨</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">무엇을 알려주나요?</strong> 현재 호르몬 균형 상태 (행복 호르몬이 제대로 나오는지)</p>
              <p><strong className="text-foreground">당신이 얻는 것:</strong> PMS와 갱년기 증상의 근본 원인 파악</p>
            </div>
            <div className="mt-3 p-3 bg-violet/5 rounded-lg">
              <p className="text-xs text-violet">💡 "감정 롤러코스터의 속도를 조절하는 스위치예요"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Benefits */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          💡 이 검사로 알 수 있는 것들
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground"><strong className="text-foreground">왜 요즘 PMS가 심해졌는지</strong> (호르몬 불균형의 증거)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground"><strong className="text-foreground">난소 나이는 몇 살인지</strong> (실제 나이 ≠ 난소 나이)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground"><strong className="text-foreground">임신 계획을 언제까지 세워야 하는지</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground"><strong className="text-foreground">갱년기가 언제쯤 올 것 같은지</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground"><strong className="text-foreground">지금 당장 뭘 해야 하는지</strong> (맞춤 솔루션)</span>
          </li>
        </ul>
      </div>

      {/* Section 6: CTA Box */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          🎯 불안을 데이터로 바꾸세요
        </h3>
        <div className="bg-muted/50 rounded-xl p-4 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            "나중에 아이 갖고 싶은데... 괜찮을까?"
            <br />"이 짜증, 평생 이렇게 살아야 하나?"
            <br />"갱년기는 언제 오는 거지?"
            <br /><br /><span className="text-rose font-medium">이런 질문들에 '아마도'라는 답은 없습니다.</span>
            <br />숫자로 확인하고, 계획을 세우고, 내 삶의 통제권을 되찾으세요.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-violet/10 rounded-xl p-4 border border-primary/20">
          <h4 className="font-medium text-foreground mb-3">🏥 간단한 혈액 검사 하나면 됩니다</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">소요 시간</span>
              <span className="font-medium text-foreground">5분</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">결과</span>
              <span className="font-medium text-foreground">3~5일 이내</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">필요한 것</span>
              <span className="font-medium text-foreground">생리 시작 2~3일째 방문</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Testimonials */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          💬 "검사 받은 사람들은 이렇게 말합니다"
        </h3>
        <div className="space-y-3">
          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-sm text-muted-foreground italic mb-2">
              "AMH 수치 보고 충격받았지만, 오히려 마음이 편해졌어요. 이제 뭘 해야 할지 명확하니까요."
            </p>
            <p className="text-xs text-muted-foreground">— 32세, 직장인</p>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-sm text-muted-foreground italic mb-2">
              "FSH가 높게 나와서 난자 동결 바로 결정했어요. 6개월만 늦었어도 후회했을 것 같아요."
            </p>
            <p className="text-xs text-muted-foreground">— 29세, 프리랜서</p>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-sm text-muted-foreground italic mb-2">
              "PMS가 심한 게 내 탓이 아니었구나. 호르몬 치료 시작하고 인생이 달라졌어요."
            </p>
            <p className="text-xs text-muted-foreground">— 35세, 마케터</p>
          </div>
        </div>
      </div>

      {/* Section 8: Final CTA */}
      <div className="bg-gradient-card border-2 border-primary/30 rounded-3xl p-6 shadow-lg">
        <h3 className="font-display text-lg text-foreground text-center mb-4">
          ✨ 당신의 난소는 지금 이 순간에도 나이를 먹고 있습니다
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
          심리테스트는 재밌었지만,
          <br /><strong className="text-foreground">진짜 당신의 미래는 데이터가 결정합니다.</strong>
          <br /><br />불안한 채로 시간을 보낼 것인가,
          <br />명확한 숫자로 내 인생의 주도권을 잡을 것인가.
          <br /><br /><strong className="text-foreground">선택은 당신의 몫입니다.</strong>
        </p>

        <div className="space-y-3">
          <Button variant="premium" size="lg" className="w-full">
            <Sparkles className="w-5 h-5" />
            혜택 받고 시작하기
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            상품 바로 구경하기
          </Button>
        </div>
      </div>

      {/* Section 9: P.S. */}
      <div className="bg-violet/10 border border-violet/30 rounded-2xl p-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">💌 P.S.</strong>
          <br /><br />이 글을 읽고 있다는 건, 이미 당신이 자신의 몸에 관심을 갖기 시작했다는 뜻이에요.
          <br />그 첫걸음이 정말 대단하고, 당신은 충분히 현명한 사람입니다.
          <br /><br />이제 한 걸음만 더 나아가면,
          <br />숫자로 확인된 안정감과 명확한 계획을 가질 수 있어요.
          <br /><br /><strong className="text-rose">당신의 난소 건강, 지금 바로 챙기세요. 🌸</strong>
        </p>
      </div>
    </div>
  );
};
