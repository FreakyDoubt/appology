import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import FloatingSticker from "@/components/FloatingSticker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import stickerStar from "@/assets/sticker-star.png";
import stickerHeart from "@/assets/sticker-heart.png";
import stickerCloud from "@/assets/sticker-cloud.png";
import backgroundMusic from "@/assets/background-music.mp3";

const Landing = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [recipients, setRecipients] = useState("Pipu & Pipi");
  const [sender, setSender] = useState("dobi");
  const [message, setMessage] = useState("Maafin aku ya kalau ada salah kata atau perbuatan yang bikin kalian nggak nyaman atau sedih...");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenMessage = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
    navigate("/pesan", { 
      state: { recipients, sender, message } 
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center" style={{
      background: "linear-gradient(135deg, hsl(15 100% 75%), hsl(45 100% 80%), hsl(350 100% 85%))"
    }}>
      {/* Decorative floating stickers */}
      <div className="fixed top-10 left-10 opacity-60">
        <FloatingSticker src={stickerStar} alt="Star sticker" size="sm" />
      </div>
      <div className="fixed top-32 right-20 opacity-60">
        <FloatingSticker src={stickerCloud} alt="Cloud sticker" size="sm" delay />
      </div>
      <div className="fixed bottom-20 left-16 opacity-60">
        <FloatingSticker src={stickerHeart} alt="Heart sticker" size="sm" delay />
      </div>
      <div className="fixed bottom-32 right-12 opacity-60">
        <FloatingSticker src={stickerStar} alt="Star sticker" size="sm" />
      </div>
      <div className="fixed top-1/2 left-10 opacity-40">
        <FloatingSticker src={stickerHeart} alt="Heart sticker" size="sm" />
      </div>
      <div className="fixed top-1/3 right-10 opacity-40">
        <FloatingSticker src={stickerCloud} alt="Cloud sticker" size="sm" delay />
      </div>

      {/* Main content */}
      <div className={`max-w-2xl w-full px-6 transition-all duration-1000 transform ${
        showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-primary/20">
          <div className="mb-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 animate-bounce-slow">
              💌
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Buat Pesan Spesial
            </h2>
          </div>

          {/* Form */}
          <div className="space-y-6 mb-8">
            <div className="space-y-2">
              <Label htmlFor="recipients" className="text-lg font-semibold text-foreground">
                Untuk Siapa? 💝
              </Label>
              <Input
                id="recipients"
                value={recipients}
                onChange={(e) => setRecipients(e.target.value)}
                placeholder="Contoh: Pipu & Pipi"
                className="text-lg p-6 border-2 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sender" className="text-lg font-semibold text-foreground">
                Dari Siapa? ✍️
              </Label>
              <Input
                id="sender"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="Contoh: dobi"
                className="text-lg p-6 border-2 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg font-semibold text-foreground">
                Pesan Kamu 💌
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis pesan maafmu di sini..."
                rows={4}
                className="text-lg p-6 border-2 border-primary/20 focus:border-primary resize-none"
              />
            </div>
          </div>

          <div className="my-6 flex justify-center gap-3">
            <FloatingSticker src={stickerHeart} alt="Heart" size="sm" delay />
            <FloatingSticker src={stickerStar} alt="Star" size="sm" />
            <FloatingSticker src={stickerHeart} alt="Heart" size="sm" delay />
          </div>

          <div className="text-center">
            <button
              onClick={handleOpenMessage}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-xl md:text-2xl font-bold text-white bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-foreground"
            >
              <span className="relative z-10">Kirim Pesan 💕</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop src={backgroundMusic} />
    </div>
  );
};

export default Landing;
