import Image from "next/image";
import Text from "../ui/text";
import Seperator from "../ui/seperator";
import Button from "../ui/button";
import LongRightArrow from "../long-right-arrow";

const features = [
  {
    cover: "/company/simulation.png",
    title: "SIMULATION",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    href: "#",
  },
  {
    cover: "/company/education.png",
    title: "EDUCATION",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    href: "#",
  },
  {
    cover: "/company/self-care.png",
    title: "SELF-CARE",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    href: "#",
  },
  {
    cover: "/company/outdoor.png",
    title: "OUTDOOR",
    description:
      "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
    href: "#",
  },
];

export default function WhyHydra() {
  return (
    <section className="container py-10 flex flex-col gap-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-5">
          <div className="flex flex-col text-center lg:text-left gap-3">
            <Text className="text-3xl font-bold uppercase">Why Build</Text>
            <Text className="text-3xl font-light uppercase">With Hydra?</Text>
          </div>
          <LongRightArrow className="h-full flex items-end" />
        </div>
        <div>
          <Text>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}

type FeatureCardProps = {
  feature: {
    cover: string;
    title: string;
    description: string;
    href: string;
  };
};

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className=" bg-feature-card min-h-[5vh] w-full rounded-3xl px-7 py-8 flex flex-col gap-6 items-center justify-center">
      <div className="p-2 bg-black w-fit h-fit rounded-full">
        <div className="relative h-[130px] w-[130px] rounded-full overflow-clip">
          <Image
            src={feature.cover}
            alt="Feature Card"
            className="absolute"
            fill
            objectPosition="center"
            objectFit="cover"
          />
        </div>
      </div>

      <Text className="text-center font-bold text-xl">{feature.title}</Text>

      <Seperator variant="horizontal" className="max-w-[50%]" />

      <Text className="line-clamp-3 text-sm">{feature.description}</Text>

      <Button
        variant="secondary"
        className="bg-button-secondary text-background hover:shadow-3xl hover:text-opacity-55 transition-colors duration-200"
      >
        Try it now
      </Button>
    </div>
  );
}
