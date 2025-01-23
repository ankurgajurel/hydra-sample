import { cn } from "@/lib/utils";

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>;

export default function LongRightArrow({ ...props }: Props) {
  return (
    <svg
      {...props}
      width="228"
      height="100"
      viewBox="0 0 228 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <path
        d="M198.833 49.9999L157.167 49.9999M198.833 49.9999L182.167 66.6666M198.833 49.9999L182.167 33.3333"
        stroke="#C0B7E8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M157.5 50H0" stroke="#C0B7E8" strokeWidth="3" />
    </svg>
  );
}
