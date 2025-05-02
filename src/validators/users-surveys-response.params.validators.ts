import { z } from 'zod'
import { INTERVAL_ENUM } from '../enums/interval.enum';
import { validateDateFormat } from '../utils/date.utils'

export const usersSurveysResponseParamsSchema = z.object({
  interval: z.nativeEnum(INTERVAL_ENUM).optional().default(INTERVAL_ENUM.SEMESTER),
  from: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato DD/MM/YYYY"
  }),
  to: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato DD/MM/YYYY"
  })
})

export type TUsersSurveysResponseParams = z.infer<typeof usersSurveysResponseParamsSchema>