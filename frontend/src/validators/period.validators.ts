import { z } from 'zod'
import { INTERVAL_ENUM } from '../enums/interval.enum';
import { validateDateFormat } from '../utils/date.utils';
import { ORIGIN_ENUM } from '@/enums/origin.enum';

export const userResponseSchema = z.object({
  interval: z.nativeEnum(INTERVAL_ENUM).optional().default(INTERVAL_ENUM.SEMESTER),
  from: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato YYYY-MM-DD"
  }),
  to: z.string().optional().refine(validateDateFormat, {
    message: "Data precista ter o formato YYYY-MM-DD"
  }),
  status: z.number().optional(),
  origin: z.nativeEnum(ORIGIN_ENUM).optional(),
})

export type TuserResponseSchema = z.infer<typeof userResponseSchema>