import React, { useState } from "react";

interface FormValues {
  width: number;
  height: number;
}

interface FormErrors {
  width?: string;
  height?: string;
}

const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: parseInt(value) || 0, 
    });
  };

  return {
    values,
    errors,
    handleChange,
    setErrors, 
  };
};

export default useForm;
