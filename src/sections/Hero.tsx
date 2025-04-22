import meImage from '@/assets/images/me.jpg';
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className='py-32'>
      <div className="container">
        <Image 
        src={meImage}
        className="size-[100px]"
        alt="My image" />
        <div>
          <div></div>
          <div>
            Available for new projects
          </div>
          <h1>Building exceptional user experiences</h1>
          <p>I build websites and web apps</p>
          <div>
            <button>
              <span>Explore My Works</span>
              <ArrowDown />
            </button>
            <button>
              <span>👋🏻</span>
              <span>Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};