import Button from "./ui/button";
import Input from "./ui/input";
import Seperator from "./ui/seperator";
import Text from "./ui/text";

export default function ContactForm() {
  return (
    <section className="container border border-white rounded-3xl bg-form-background flex flex-col gap-5 py-20 px-20">
      <div className="grid gap-5 text-center">
        <Text className="font-bold text-3xl">JOIN HYDRA</Text>
        <Seperator variant="horizontal" />
        <Text className="text-3xl font-light">
          Let&apos;s Build Your VR Experience
        </Text>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-10 lg:max-w-[80%] mx-auto w-full">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Subject" className="lg:col-span-2" />
        <Input
          placeholder="Message"
          variant="textarea"
          className="lg:col-span-2"
        />
      </div>
      <Button
        variant="secondary"
        className="bg-button-secondary text-background hover:shadow-3xl hover:text-background/50 transition-colors duration-200 w-fit mx-auto px-14"
      >
        JOIN HYDRA
      </Button>
    </section>
  );
}
