import { PropsWithChildren } from "react";

interface Props {
  path: string;
  text?: string;
  className?: string;
}
/**Allows scroll into view of an element within the same page*/
export default function index({
  path,
  text,
  className,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <a
      {...rest}
      className={className}
      onClick={() => {
        document.querySelector(path)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      {text && !children && <p>{text}</p>}
      {children}
    </a>
  );
}
