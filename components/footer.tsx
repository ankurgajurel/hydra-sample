import Image from "next/image";
import Text from "./ui/text";
import Seperator from "./ui/seperator";
import Button from "./ui/button";

export default function Footer() {
  const menu = ["About", "Services", "Technologies", "How to", "Join Hydra"];
  const menu2 = ["F.A.Q", "Sitemap", "Conditions", "Licenses"];
  return (
    <footer className="grid gap-10 container py-10">
      <div className="grid lg:grid-cols-7 gap-10 lg:gap-0">
        <div className="logo flex justify-center lg:justify-start">
          <Image src={"/icon-logo.svg"} height={50} width={150} alt="Logo" />
        </div>
        <Seperator />
        <nav className="h-full">
          <ul className="h-full flex flex-col gap-5 my-autox">
            {menu.map((menuItem, index) => {
              return (
                <Text
                  key={index}
                  className="text-xs uppercase font-bold hover:text-gray-300 cursor-pointer"
                >
                  {menuItem}
                </Text>
              );
            })}
          </ul>
        </nav>
        <Seperator />
        <nav className="h-full">
          <ul className="h-full flex flex-col gap-5 my-auto">
            {menu2.map((menuItem, index) => {
              return (
                <Text
                  key={index}
                  className="text-xs uppercase font-bold hover:text-gray-300 cursor-pointer"
                >
                  {menuItem}
                </Text>
              );
            })}
          </ul>
        </nav>
        <Seperator />
        <div className="my-auto flex flex-col items-between justify-between gap-5 h-full">
          <Text className="text-sm uppercase font-bold">
            Socialize with Hydra
          </Text>
          <Button
            variant="secondary"
            className="bg-button-secondary text-background hover:shadow-3xl hover:text-opacity-55 transition-colors duration-200"
          >
            Build your world
          </Button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-[#343045] via-[#C0B7E8] to-[#343045]"></div>
      <div className="text-center">
        <Text className="text-sm font-bold tracking-wide">
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{" "}
        </Text>
      </div>
    </footer>
  );
}
