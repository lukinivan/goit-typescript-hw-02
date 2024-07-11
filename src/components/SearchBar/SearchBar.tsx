import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";

interface SearchBarValues {
  text: string;
}

// Початкові значення
const initialValues: SearchBarValues = {
  text: "",
};

const validationSchema = Yup.object({
  text: Yup.string().required("Please, write your request."),
});

interface SearchBarProps {
  onSubmit: (value: string) => void
}

export const SearchBar: React.FC<SearchBarProps>  = ({ onSubmit }) => {
  const handleSubmit = (value: SearchBarValues,
    action: FormikHelpers<SearchBarValues>) => {
    onSubmit(value.text);
    action.resetForm();
  };

  return (
    <header>
      <div className={css.form}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          className={css.form}
        >
          <Form>
            <Field className={css.field} type="text" name="text" />
            <ErrorMessage className={css.error} name="text" component="span" />

            <button className={css.btn} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
};
