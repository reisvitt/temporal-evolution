// funcao para validar formato DD/MM/YYYY
export const validateDateFormat = (value?: string): boolean => {
  if (!value) return true; // Permite undefined (opcional)
  const date = new Date(value);
  return !isNaN(date.getTime())
};


export const formatDateToISO = (date: string): string => {
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
};