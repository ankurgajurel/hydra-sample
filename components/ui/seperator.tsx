import { cn } from "@/lib/utils";

export default function Seperator({
  variant,
}: {
  variant?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        "mx-auto from-[#343045] via-[#C0B7E8] to-[#343045]",
        variant === "horizontal" ? "h-[1px] w-full bg-gradient-to-r" : "w-[1px] h-full bg-gradient-to-b"
      )}
    />
  );
}
