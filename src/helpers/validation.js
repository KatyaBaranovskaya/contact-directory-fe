export const validate = (schema, data) => {
  const { error } = schema.validate(data, { abortEarly: false });

  if (!error) {
    return { errors: {}, isValid: true };
  }

  const errors = error.details.reduce(( acc, { path, message }) => ({
    ...acc,
    [path.join('.')]: message,
  }), {});

  return { errors, isValid: false };
};
