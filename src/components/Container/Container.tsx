import css from "./Container.module.css";

type Props = {
  children: React.ReactElement;
}

export const Container = ({ children }: Props) => {
  return <div className={css.container}>{children}</div>;
};
