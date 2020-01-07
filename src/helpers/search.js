export const filterSearchParams = (searchParams) => {
  return  Object.keys(searchParams).reduce((acc, key) => {
    if (!searchParams[key]) {
      return acc;
    }

    return {
      ...acc,
      [key]: searchParams[key],
    };
  }, {});
};
