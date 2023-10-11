import cn from "@/utils/cn";
import { PiGraphFill } from "react-icons/pi";

type LogoProps = {
  className: string;
  svgClassName?: string;
  collapsed?: boolean;
};

const Logo = (props: LogoProps) => {
  const { collapsed, className, svgClassName } = props;
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <PiGraphFill className={svgClassName} />
      {!collapsed && <span>Teragraph Cloud</span>}
    </div>
  );
};

export default Logo;
