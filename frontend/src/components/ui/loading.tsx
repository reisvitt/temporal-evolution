import { cn } from "@/lib/utils";
import { type VariantProps, tv } from "tailwind-variants";

export const loading = tv({
  base: "flex flex-col items-center animate-blink",
  variants: {
    fullpage: {
      true: "min-h-[100vh] h-[100vh]",
    },
    absolute: {
      true: "absolute top-0 left-0 bottom-0 right-0 justify-center"
    }
  },
});

type TLoading = {
  imageClassName?: string;
} & React.ComponentProps<"section"> &
  VariantProps<typeof loading>;

export const Loading = ({
  fullpage,
  className,
  imageClassName,
  absolute,
  ...props
}: TLoading) => {
  return (
    <section {...props} className={cn(className, loading({ fullpage, absolute }), "blink")}>
      <img
        className={cn("w-[3%] min-w-8", imageClassName)}
        src="/database.svg"
      />
    </section>
  );
};
