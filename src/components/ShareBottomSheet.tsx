import { useState, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Link2, Image, MessageCircle, Twitter, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

interface ShareBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shareData: {
    title: string;
    text: string;
    url: string;
    typeTitle: string;
    emoji: string;
    nickname: string;
    gender: 'male' | 'female';
  };
  resultCardRef?: React.RefObject<HTMLDivElement>;
}

declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share: {
        sendDefault: (options: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          buttons: Array<{
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }>;
        }) => void;
      };
    };
  }
}

export const ShareBottomSheet = ({
  open,
  onOpenChange,
  shareData,
  resultCardRef,
}: ShareBottomSheetProps) => {
  const [isCapturing, setIsCapturing] = useState(false);

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      toast.success("링크가 복사되었어요!");
      onOpenChange(false);
    } catch {
      toast.error("복사에 실패했어요");
    }
  };

  // 텍스트 복사 (스토리용)
  const handleCopyText = async () => {
    const text = `${shareData.emoji} 나의 PMS ${shareData.gender === 'female' ? '호르몬' : '대응'} 유형\n\n"${shareData.typeTitle}"\n\n나도 테스트하기 👇\n${shareData.url}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("텍스트가 복사되었어요! 스토리에 붙여넣기 하세요 📋");
      onOpenChange(false);
    } catch {
      toast.error("복사에 실패했어요");
    }
  };

  // 이미지 저장 (결과 카드 캡처)
  const handleSaveImage = async () => {
    if (!resultCardRef?.current) {
      toast.error("캡처할 영역을 찾을 수 없어요");
      return;
    }

    setIsCapturing(true);
    try {
      // Dynamic import html2canvas
      const html2canvas = (await import("html2canvas")).default;

      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: "#F8E8FF",
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `pms-result-${shareData.nickname}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          toast.success("이미지가 저장되었어요! 스토리에 올려보세요 📸");
        }
      }, "image/png");
      onOpenChange(false);
    } catch (error) {
      console.error("Image capture failed:", error);
      toast.error("이미지 저장에 실패했어요");
    } finally {
      setIsCapturing(false);
    }
  };

  // 카카오톡 공유
  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `나의 PMS 유형: ${shareData.typeTitle} ${shareData.emoji}`,
          description: shareData.text,
          imageUrl: "https://lovable.dev/opengraph-image-p98pqg.png",
          link: {
            mobileWebUrl: shareData.url,
            webUrl: shareData.url,
          },
        },
        buttons: [
          {
            title: "나도 테스트하기",
            link: {
              mobileWebUrl: shareData.url,
              webUrl: shareData.url,
            },
          },
        ],
      });
      onOpenChange(false);
    } else {
      // 카카오 SDK가 없으면 카카오톡 공유 URL scheme 사용 시도
      const kakaoShareUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}`;
      window.open(kakaoShareUrl, "_blank");
      onOpenChange(false);
    }
  };

  // 트위터/X 공유
  const handleTwitterShare = () => {
    const text = `${shareData.emoji} 나의 PMS ${shareData.gender === 'female' ? '호르몬' : '대응'} 유형은 "${shareData.typeTitle}"!\n\n나도 테스트하기 👇`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareData.url)}`;
    window.open(twitterUrl, "_blank");
    onOpenChange(false);
  };

  // 기타 공유 (Web Share API)
  const handleOtherShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.text,
          url: shareData.url,
        });
        onOpenChange(false);
      } catch {
        // User cancelled
      }
    } else {
      toast.error("이 기기에서는 지원되지 않아요");
    }
  };

  const shareOptions = [
    {
      icon: MessageCircle,
      label: "카카오톡",
      color: "bg-[#FEE500]",
      iconColor: "text-[#3C1E1E]",
      onClick: handleKakaoShare,
    },
    {
      icon: Link2,
      label: "링크 복사",
      color: "bg-gray-100",
      iconColor: "text-gray-700",
      onClick: handleCopyLink,
    },
    {
      icon: Image,
      label: "이미지 저장",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      iconColor: "text-white",
      onClick: handleSaveImage,
      disabled: isCapturing,
    },
    {
      icon: Twitter,
      label: "X (트위터)",
      color: "bg-black",
      iconColor: "text-white",
      onClick: handleTwitterShare,
    },
    {
      icon: MoreHorizontal,
      label: "더보기",
      color: "bg-gray-100",
      iconColor: "text-gray-700",
      onClick: handleOtherShare,
    },
  ];

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="pb-8">
        <DrawerHeader>
          <DrawerTitle className="text-center">공유하기</DrawerTitle>
        </DrawerHeader>

        <div className="px-6 pb-4">
          {/* Share Preview */}
          <div className="bg-gradient-to-r from-[#F8E8FF] to-[#E8D4F8] rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{shareData.emoji}</span>
              <div className="flex-1">
                <p className="font-bold text-foreground">{shareData.typeTitle}</p>
                <p className="text-sm text-muted-foreground">
                  {shareData.nickname}님의 결과
                </p>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="grid grid-cols-5 gap-3">
            {shareOptions.map((option) => (
              <button
                key={option.label}
                onClick={option.onClick}
                disabled={option.disabled}
                className="flex flex-col items-center gap-2 group disabled:opacity-50"
              >
                <div
                  className={`w-14 h-14 rounded-full ${option.color} flex items-center justify-center transition-transform group-active:scale-95`}
                >
                  <option.icon className={`w-6 h-6 ${option.iconColor}`} />
                </div>
                <span className="text-xs text-muted-foreground">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Copy text for story */}
          <button
            onClick={handleCopyText}
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-white rounded-xl font-medium text-sm transition-transform active:scale-[0.98]"
          >
            📋 스토리용 텍스트 복사하기
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
