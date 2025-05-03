import { z } from 'zod'
import { INTERVAL_ENUM } from '../enums/interval.enum';
import { validateDateFormat } from '../utils/date.utils';
import { ORIGIN_ENUM } from '@/enums/origin.enum';

export const userResponseSchema = z.object({
  interval: z.nativeEnum(INTERVAL_ENUM).optional().default(INTERVAL_ENUM.SEMESTER),
  from: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato yyyy-MM-dd"
  }),
  to: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato yyyy-MM-dd"
  }),
  status: z.number().optional(),
  origin: z.nativeEnum(ORIGIN_ENUM).optional(),
})

export type TuserResponseSchema = z.infer<typeof userResponseSchema>


export const userResponseOriginSchema = z.object({
  from: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato yyyy-MM-dd"
  }),
  to: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato yyyy-MM-dd"
  }),
  status: z.number().optional(),
  origin: z.nativeEnum(ORIGIN_ENUM).optional(),
})

export type TuserResponseOriginSchema = z.infer<typeof userResponseOriginSchema>