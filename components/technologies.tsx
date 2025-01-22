import Button from "./ui/button";
import Text from "./ui/text";

import { ChevronDown } from "lucide-react";

export default function Technologies() {
  return (
    <section className="container flex flex-col gap-10">
      <div className="banner container rounded-full relative h-[300px] overflow-clip">
        <img
          className="absolute left-0 -top-32 opacity-10"
          src="/tech/tech-bg.png"
          alt=""
        />
        <div className="flex justify-center items-center h-full flex-col gap-1">
          <Text className="text-3xl font-bold text-center uppercase">
            Technologies & Hardware
          </Text>
          <Text className="text-center uppercase text-2xl font-light">
            Used by Hydra Vr.
          </Text>
          <div className="absolute mx-auto bottom-0 p-2 bg-black rounded-full hover:translate-y- transition-transform duration-200">
            <Button
              variant="secondary"
              className="bg-button-secondary text-background hover:shadow-3xl hover:text-opacity-55 transition-colors duration-200 px-3 py-3"
            >
              <ChevronDown size={32} />
            </Button>
          </div>
        </div>
      </div>
      <div className="tech grid md:grid-cols-2 lg:grid-cols-4">
        {["/unreal.png", "/unity.png", "/oculus.png", "/vive.png"].map(
          (tech, index) => {
            return (
              <div key={index} className="h-full w-full opacity-[36%]">
                <img
                  className="h-32 lg:h-[60%] mx-auto"
                  src={"/tech" + tech}
                  alt=""
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
