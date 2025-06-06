export const generateRegistration = (locationCode) => {
  const numericCode = Math.floor(100000 + Math.random() * 900000);
  return `${locationCode.toUpperCase()}-${numericCode}`;
};
