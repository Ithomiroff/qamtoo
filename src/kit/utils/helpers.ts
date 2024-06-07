const toRem = (px: number | string, base: number = 16) => {
  const tempPx = `${px}`.replace('px', '')
  return (1 / base) * parseInt(tempPx) + 'rem'
};

const isServerEnv = () => typeof window === 'undefined';

export {
  toRem,
  isServerEnv
};