import cn from "classnames";
import { Fragment } from "react/jsx-runtime";
interface UiListTypeProps {
  items: React.ReactNode[];
  placement?: "start" | "center" | "end";
  className?: string;
}

import styles from "../../ui.module.scss";

export const UiList = ({
  items,
  placement = "start",
  className = "ui-list",
}: UiListTypeProps) => {
  return (
    <div className={cn(styles[`ui-items`], styles[placement], className)}>
      {items.map((item, index: number) => (
        <Fragment key={`${className}-${index}`}>{item}</Fragment>
      ))}
    </div>
  );
};
