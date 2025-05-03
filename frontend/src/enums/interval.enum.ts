export enum INTERVAL_ENUM {
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  QUARTER = 'QUARTER',
  SEMESTER = 'SEMESTER',
  YEAR = 'YEAR'
}

export const intervalEnumLabels = {
  [INTERVAL_ENUM.WEEK]: "Semana",
  [INTERVAL_ENUM.MONTH]: "Mês",
  [INTERVAL_ENUM.QUARTER]: "Trimestre",
  [INTERVAL_ENUM.SEMESTER]: "Semestre",
  [INTERVAL_ENUM.YEAR]: "Ano",
}

export const intervalEnumOptions = Object.entries(intervalEnumLabels).map(item => ({
  label: item[1],
  value: item[0]
}))