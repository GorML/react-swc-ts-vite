import cn from "@utils/cn";

type NavigationRailGroupProps = {
  children: React.ReactNode;
  align: "top" | "bottom" | "center";
};

const NavigationRailGroup = (props: NavigationRailGroupProps) => {
  const { children, align } = props;
  return (
    <div
      className={cn(
        align === "top" && "mb-auto",
        align === "bottom" && "mt-auto",
        align === "center" && "my-auto"
      )}
    >
      {children}
    </div>
  );
};

export default NavigationRailGroup;
