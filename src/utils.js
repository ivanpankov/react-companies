export const noop = () => {};

export const arrayToObj = arr => {
  const result = {};

  arr.forEach(item => {
    result[item.id] = item;
  });

  return result;
};

export const DATE_FORMAT = 'dd/MM/yyyy';
