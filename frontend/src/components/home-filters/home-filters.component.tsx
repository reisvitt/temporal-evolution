import { TuserResponseSchema } from "@/validators/period.validators"
import { Select } from "../ui/select.ui"
import { useForm } from 'react-hook-form'
import { INTERVAL_ENUM, intervalEnumOptions } from "@/enums/interval.enum"
import { ORIGIN_ENUM, originEnumOptions } from "@/enums/origin.enum"
import Form from "../ui/form"
import { Button } from "../ui/button"
import { format } from "date-fns"
import { STATUS_ENUM, statusEnumOptions } from "@/enums/status.enum"

type THomeFiltersComponent = {
  onSubmit: (values: TuserResponseSchema) => void
  loading?: boolean
}

export const HomeFiltersComponent = ({ onSubmit, loading }: THomeFiltersComponent) => {
  const form = useForm<TuserResponseSchema>({
    values: {
      interval: INTERVAL_ENUM.YEAR
    }
  })

  const handleSubmit = (values: TuserResponseSchema) => {
    const mapped = {
      interval: values.interval,
      origin: values.origin,
      status: values.status,
    }

    if (values.to) {
      Object.assign(mapped, {
        to: format(values.to, "yyyy-MM-dd")
      })
    }

    if (values.from) {
      Object.assign(mapped, {
        from: format(values.from, "yyyy-MM-dd")
      })
    }

    onSubmit(mapped)
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-wrap justify-between my-4">
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[16%]">
        <Form.Label>
          Agrupar por:
        </Form.Label>
        <Select
          options={intervalEnumOptions}
          onValueChange={(value?: string) => form.setValue("interval", value as INTERVAL_ENUM)}
          className="w-full bg-white"
          value={form.watch("interval")}
        />
        {form.formState.errors.interval && (
          <Form.Error>{form.formState.errors.interval?.message}</Form.Error>
        )}
      </Form.Field>
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[16%]">
        <Form.Label>
          Filtrar por Origem:
        </Form.Label>
        <Select
          options={originEnumOptions}
          onValueChange={(value?: string) => form.setValue("origin", value as ORIGIN_ENUM)}
          className="w-full bg-white"
          value={form.watch("origin")}
        />
        {form.formState.errors.origin && (
          <Form.Error>{form.formState.errors.origin?.message}</Form.Error>
        )}
      </Form.Field>
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[16%]">
        <Form.Label>
          Filtrar por status:
        </Form.Label>
        <Select
          options={statusEnumOptions}
          onValueChange={(value?: string) => form.setValue("status", value as unknown as STATUS_ENUM)}
          className="w-full bg-white"
          value={form.watch("status")}
        />
        {form.formState.errors.status && (
          <Form.Error>{form.formState.errors.status?.message}</Form.Error>
        )}
      </Form.Field>
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[16%]">
        <Form.Label>
          Data de:
        </Form.Label>
        <Form.InputDate
          value={form.watch("from") ? new Date(form.watch("from") as string) : undefined}
          onChange={(e) => form.setValue("from", e)}
          className="bg-white"
        />
        {form.formState.errors.from && (
          <Form.Error>{form.formState.errors.from?.message}</Form.Error>
        )}
      </Form.Field>
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[16%]">
        <Form.Label>
          Data até:
        </Form.Label>
        <Form.InputDate
          value={form.watch("to") ? new Date(form.watch("to") as string) : undefined}
          onChange={(e) => form.setValue("to", e)}
          className="bg-white"
        />
        {form.formState.errors.to && (
          <Form.Error>{form.formState.errors.to?.message}</Form.Error>
        )}
      </Form.Field>

      <Button
        type="submit"
        className="w-full mt-4 lg:mt-auto lg:max-w-[16%]"
        disabled={loading}
      >
        {loading ? "Aplicando..." : "Aplicar"}
      </Button>
    </form>
  )
}