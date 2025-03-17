import cn from "classnames";

export const Button = ({ children, className, type, ...rest }) => (
  <a
    className={cn("button", className, {
      "button--outline": type === "outline",
    })}
    {...rest}
  >
    {children}
  </a>
);
