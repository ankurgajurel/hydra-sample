import Image from "next/image";
import Button from "./ui/button";
import Text from "./ui/text";

export default function Navbar() {
  const menu = ["About", "Services", "Technologies", "How to"];
  return (
    <header className="container py-10 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between">
      <div className="logo">
        <Image src={"/logo.svg"} height={50} width={150} alt="Logo" />
      </div>
      <nav className="menu">
        <ul className="flex gap-5">
          {menu.map((menuItem, index) => {
            return (
              <Text key={index} className="text-xs uppercase font-bold hover:text-gray-300 cursor-pointer">
                {menuItem}
              </Text>
            );
          })}
        </ul>
      </nav>
      <div className="cta gap-5 hidden lg:flex">
        <Button className="hover:bg-opacity-80 hover:text-gray-400 hover:border-gray-400 transition-colors duration-200">
          CONTACT US
        </Button>
        <Button
          variant="secondary"
          className="bg-button-secondary text-background hover:shadow-3xl hover:text-background/80 transition-colors duration-200"
        >
          JOIN HYDRA
        </Button>
      </div>
    </header>
  );
}
