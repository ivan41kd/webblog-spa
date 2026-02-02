import cn from "classnames";
import { Fragment } from "react/jsx-runtime";
interface UiListTypeProps {
  items: React.ReactNode[];
  placement?: "start" | "center" | "end";
}

import styles from "../../ui.module.scss";

export const UiList = ({ items, placement = "start" }: UiListTypeProps) => {
  return (
    <div className={cn(styles[`ui-items`], styles[placement])}>
      {items.map((item, index: number) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  );
};
