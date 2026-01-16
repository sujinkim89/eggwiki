import { BridgeSection } from "@/components/BridgeSection";
import { MaleBridgeSection } from "@/components/MaleBridgeSection";
import { useQuizStore } from "@/store/quizStore";

const ResultPage = () => {
  const { gender } = useQuizStore();
  // Default to 'female' if gender is not set
  const displayGender = gender || 'female';

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="w-full max-w-md mx-auto">
        {displayGender === 'female' ? <BridgeSection /> : <MaleBridgeSection />}
      </div>
    </div>
  );
};

export default ResultPage;
