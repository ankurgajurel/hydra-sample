import Image from "next/image";
import Button from "./ui/button";
import Text from "./ui/text";

export default function Navbar() {
  const menu = ["About", "Services", "Technologies", "How to"];
  return (
    <header className="container py-10 flex items-center justify-between">
      <div className="logo">
        <Image src={"/logo.svg"} height={50} width={150} alt="Logo" />
      </div>
      <nav className="menu">
        <ul className="flex gap-5">
          {menu.map((menuItem, index) => {
            return (
              <Text key={index} className="text-xs uppercase font-bold">
                {menuItem}
              </Text>
            );
          })}
        </ul>
      </nav>
      <div className="cta flex gap-5">
        <Button>CONTACT US</Button>
        <Button
          variant="secondary"
          className="bg-header-button-secondary text-background"
        >
          JOIN HYDRA
        </Button>
      </div>
    </header>
  );
}
