import css from "./LoadMore.module.css";

type Props = {
  onClick: ()=> void
}

export const LoadMore = ({ onClick }: Props) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load More
    </button>
  );
};
