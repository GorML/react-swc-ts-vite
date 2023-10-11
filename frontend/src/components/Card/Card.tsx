import cn from "@/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-white rounded-xl p-2", className)}>{children}</div>
  );
};

export default Card;
