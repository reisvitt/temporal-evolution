// funcao para validar formato DD/MM/YYYY
export const validateDateFormat = (value?: string): boolean => {
  if (!value) return true; // Permite undefined (opcional)
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(value)) return false;

  // Verificar se a data é válida
  const [day, month, year] = value.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  )
};


export const formatDateToISO = (date: string): string => {
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
};