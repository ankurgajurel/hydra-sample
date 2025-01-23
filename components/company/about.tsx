import Image from "next/image";
import Text from "../ui/text";
import Button from "../ui/button";

export default function About() {
  return (
    <section className="container relative py-10 grid lg:grid-cols-2 gap-10 overflow-clip place-items-center lg:place-items-start">
      <Image src="/company/about.png" width={500} height={500} alt="About" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <Text className="uppercase font-bold text-3xl">ABOUT</Text>
          <Text className="uppercase font-light text-3xl">Hydra VR</Text>
        </div>
        <Text>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </Text>
        <Button
          variant="secondary"
          className="bg-button-secondary text-background hover:shadow-3xl hover:text-opacity-55 transition-colors duration-200 w-fit"
        >
          Let&apos;s get in touch
        </Button>
      </div>
      <BgSvg />
    </section>
  );
}

function BgSvg() {
  return (
    <svg
      width="1440"
      height="504"
      viewBox="0 0 1440 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 left-12"
    >
      <path
        d="M1442.5 215C1387.5 104.333 1242.8 -83.7999 1104 49.0001C930.5 215 761.5 331.5 554.5 203.5C347.5 75.5001 34.5 175.5 -6.5 260"
        stroke="url(#paint0_linear_0_1)"
        strokeOpacity="0.13"
        strokeWidth="6"
      />
      <path
        d="M-4.5 359.5C153.667 306.167 504.6 231.5 643 359.5C816 519.5 1071.5 543.5 1186.5 431C1278.5 341 1394.17 355.833 1440.5 374.5"
        stroke="url(#paint1_linear_0_1)"
        strokeOpacity="0.13"
        strokeWidth="6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="-7"
          y1="105.5"
          x2="1443"
          y2="89.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#211E2E" />
          <stop offset="0.3125" stop-color="#C0B7E8" />
          <stop offset="0.765625" stop-color="#8176AF" />
          <stop offset="0.994792" stop-color="#211E2E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="-5"
          y1="348"
          x2="1462"
          y2="348"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#343045" />
          <stop offset="0.224242" stop-color="#C0B7E8" />
          <stop offset="0.786458" stop-color="#8176AF" />
          <stop offset="0.96875" stop-color="#343045" />
        </linearGradient>
      </defs>
    </svg>
  );
}
