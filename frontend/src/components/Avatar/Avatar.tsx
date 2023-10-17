import cn from "@utils/cn";

type AvatarProps = {
  src?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const defaultStyles = "rounded-full w-10 h-10";

const Avatar = (props: AvatarProps) => {
  const { className, ...other } = props;
  return (
    <div>
      <img className={cn(defaultStyles, className)} {...other} />
    </div>
  );
};

export default Avatar;
