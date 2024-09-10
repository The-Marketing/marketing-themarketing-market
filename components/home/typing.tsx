'use client'
import TiltEffect from '@/components/home/tits-effect';
import TypingText from '@/components/home/typing-text';

const Typing: React.FC = () => {
  return (
    <div>
      <TypingText />
      <TiltEffect />
      <div className="tilt">
      <p>Inclínate al mover el ratón sobre mí!</p>
      </div>
    </div>
  );
};

export default Typing;
