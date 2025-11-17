import type { FormikProps } from 'formik';

export const getFieldError = <T>(formik: FormikProps<T>, fieldName: keyof T): string => {
  const touched = formik.touched[fieldName];
  const error = formik.errors[fieldName];
  return touched && error ? String(error) : '';
};
