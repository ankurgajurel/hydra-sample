import Image from "next/image";
import Button from "./ui/button";
import Text from "./ui/text";

export default function Hero() {
  return (
    <section className="container py-20 grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col gap-10 max-w-[75%] my-auto">
        <div className="grid text-5xl font-bold">
          <div className="flex gap-3">
            <Text className="bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] inline-block text-transparent bg-clip-text">
              Dive
            </Text>
            <Text>Into </Text>
            <Text>The</Text>
            <Text>Depths</Text>
          </div>
          <div className="flex gap-3">
            <Text>Of</Text>
            <Text className="bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] inline-block text-transparent bg-clip-text">
              Virtual
            </Text>
            <Text className="bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] inline-block text-transparent bg-clip-text">
              Reality
            </Text>
          </div>
        </div>
        <Text className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae
        </Text>
        <div className="flex gap-10 items-center">
          <Button
            variant="secondary"
            className="bg-button-secondary text-background uppercase py-4 px-8"
          >
            Build your world
          </Button>
          <div className="text-button-secondary h-10 w-10">
            <svg
              viewBox="0 0 46 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8333 19L2.16666 19M43.8333 19L27.1667 35.6667M43.8333 19L27.1667 2.33333"
                stroke="#C0B7E8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative flex justify-end">
        <Image
          // objectPosition="absolute"
          objectFit="cover"
          src={"/bg.png"}
          alt="hero"
          height={450}
          width={450}
          // fill
          className=""
        />
        <BgSvg />
      </div>
    </section>
  );
}

function BgSvg() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 max-w-[100vw] overflow-hidden">
      <svg
        width="736"
        height="846"
        viewBox="0 0 736 846"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M733 170C643.774 184.843 473.913 269.224 508.271 487.998C542.63 706.772 396.407 813.155 319 839"
          stroke="url(#paint0_linear_0_1)"
          stroke-width="6"
        />
        <path
          d="M738.5 420.5C491.667 408.333 -0.900015 474.9 3.49999 838.5"
          stroke="url(#paint1_linear_0_1)"
          stroke-width="6"
        />
        <path
          d="M225.193 0C221.912 140.127 259.209 433.314 434.642 485.053C610.075 536.792 613.776 746.576 593.697 845"
          stroke="url(#paint2_linear_0_1)"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="683.5"
            y1="195"
            x2="428"
            y2="761"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.276042" stop-color="#8176AF" />
            <stop offset="0.739583" stop-color="#C0B7E8" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="700.5"
            y1="412"
            x2="14.5"
            y2="777"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.213542" stop-color="#C0B7E8" />
            <stop offset="0.71875" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_1"
            x1="238.5"
            y1="39.5"
            x2="585"
            y2="814"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0104167" stop-color="#343045" />
            <stop offset="0.229167" stop-color="#C0B7E8" />
            <stop offset="0.776042" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
