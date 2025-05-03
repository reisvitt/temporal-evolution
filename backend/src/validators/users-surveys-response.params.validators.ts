import { z } from 'zod'
import { INTERVAL_ENUM } from '../enums/interval.enum';
import { validateDateFormat } from '../utils/date.utils'

export const usersSurveysResponseParamsSchema = z.object({
  interval: z.nativeEnum(INTERVAL_ENUM).optional().default(INTERVAL_ENUM.SEMESTER),
  from: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato yyyy-MM-dd"
  }),
  to: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato yyyy-MM-dd"
  }),
  status: z.number().optional(),
  origin: z.string().optional()
})

export type TUsersSurveysResponseParams = z.infer<typeof usersSurveysResponseParamsSchema>


export const usersSurveysResponseByOriginSchema = z.object({
  from: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato DD/MM/YYYY"
  }),
  to: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato DD/MM/YYYY"
  }),
  status: z.number().optional(),
  origin: z.string().optional()
})

export type TUsersSurveysResponseByOrigin = z.infer<typeof usersSurveysResponseByOriginSchema>