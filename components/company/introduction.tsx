import LongRightArrow from "../long-right-arrow";
import Text from "../ui/text";

export default function Introduction() {
  return (
    <section className="container py-10 flex flex-col gap-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex">
          <div className="flex flex-col text-center lg:text-left gap-3">
            <Text className="text-3xl font-bold uppercase">Introduction</Text>
            <Text className="text-3xl font-light uppercase">To Hydra VR</Text>
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
    </section>
  );
}
