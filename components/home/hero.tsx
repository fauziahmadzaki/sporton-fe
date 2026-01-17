import Image from "next/image";
import { Button } from "../ui/button";
import { FiFastForward, FiPlay } from "react-icons/fi";

const hero = {
  discount: {
    day: "Friday",
    amount: 50,
  },
  heading: "WEAR YOUR TOP-QUALITY SPORTSWEAR",
  subheading: `Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.`,
};

export default function Hero() {
  return (
    <section className="relative">
      <Image
        alt="Logo Basket"
        src="/images/basketball_sport_icon.png"
        width={463}
        height={463}
        className="absolute top-0 left-15 grayscale-50"
      />
      <Image
        alt="Circle"
        src="/images/ellipse.png"
        width={180}
        height={180}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2"
      />
      <div className="max-w-6xl mx-auto py-15 relative z-30 px-5 lg:px-0">
        <p className="text-primary italic  bg-primary-light px-5 py-2 rounded-full  text-sm w-fit capitalize">
          {`${hero.discount.day}, sale ${hero.discount.amount}% off`}
        </p>
        <div className="w-full md:w-xl lg:w-max lg:max-w-3xl space-y-4">
          <h1 className="text-[50px] md:text-[70px] lg:text-[95px] font-bold italic leading-14 md:leading-20   lg:leading-24 bg-linear-to-b  text-transparent from-black from-40% to-[#979797D1]  bg-clip-text">
            {hero.heading}
          </h1>
          <h2 className="text-base md:max-w-100 lg:max-w-136.5 ">
            {hero.subheading}
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Button>
              Explore More <FiFastForward size={20} />
            </Button>
            <Button variant="ghost">
              Watch Video
              <FiPlay size={20} />
            </Button>
          </div>
          <Image
            width={480}
            height={550}
            alt="Hero"
            src="/images/human-running.png"
            className="mt-20 md:mt-0 md:absolute -top-6 lg:-top-8  right-0 lg:right-42 w-90 lg:w-120"
          />
        </div>
      </div>
    </section>
  );
}
