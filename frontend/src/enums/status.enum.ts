export enum STATUS_ENUM {
  VALID = 1,
  INVALID = 2,
  INCOMPLETE = 3,
  PENDING = 4,
  OPEN = 5,
  VIEWED = 6,
}

export const statusEnumLabels = {
  [STATUS_ENUM.VALID]: "Válido",
  [STATUS_ENUM.INVALID]: "Inválido",
  [STATUS_ENUM.INCOMPLETE]: "Incompleto",
  [STATUS_ENUM.PENDING]: "Pendente",
  [STATUS_ENUM.OPEN]: "Aberto",
  [STATUS_ENUM.VIEWED]: "Visualizou",
}

export const statusEnumOptions = Object.entries(statusEnumLabels).map(item => ({
  label: item[1],
  value: item[0]
}))