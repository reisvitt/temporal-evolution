export enum ORIGIN_ENUM {
  EMAIL = 'email',
  MOBILE = 'MOBILE',
  WHATSAPP = 'wpp',
}

export const originEnumLabels = {
  [ORIGIN_ENUM.EMAIL]: "E-mail",
  [ORIGIN_ENUM.MOBILE]: "Mobile",
  [ORIGIN_ENUM.WHATSAPP]: "Whatsapp",
}

export const originEnumOptions = Object.entries(originEnumLabels).map(item => ({
  label: item[1],
  value: item[0]
}))