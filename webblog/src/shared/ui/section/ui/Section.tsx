import cn from "classnames";
interface SectionTypeProps {
  children: React.ReactNode;
  className?: string;
}
export const Section = ({ children, className = "" }: SectionTypeProps) => {
  return <section className={cn(className)}>{children}</section>;
};
