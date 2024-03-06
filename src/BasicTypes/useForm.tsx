import React, { useState } from "react";

interface FormValues {
  width: number;
  height: number;
}

// Utility type for form errors
type FormErrors<T> = {
  [key in keyof T]?: string;
};

// useForm hook with advanced types
const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors<FormValues>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: parseInt(value) || 0,
    });
    // Reset the error for the field when the value changes
    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  const validate = () => {
    // Example validation logic (for demonstration)
    const newErrors: FormErrors<FormValues> = {};
    if (values.width <= 0) {
      newErrors.width = "Width must be greater than 0";
    }
    if (values.height <= 0) {
      newErrors.height = "Height must be greater than 0";
    }
    // Set the new errors
    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    validate,
  };
};

export default useForm;
