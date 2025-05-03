import { TuserResponseSchema } from "@/validators/period.validators"
import { Select } from "../ui/select.ui"
import { useForm } from 'react-hook-form'
import { INTERVAL_ENUM, intervalEnumOptions } from "@/enums/interval.enum"
import { ORIGIN_ENUM, originEnumOptions } from "@/enums/origin.enum"
import Form from "../ui/form"
import { Button } from "../ui/button"

type THomeFiltersComponent = {
  onSubmit: (values: TuserResponseSchema) => void
  loading?: boolean
}

export const HomeFiltersComponent = ({ onSubmit, loading }: THomeFiltersComponent) => {
  const form = useForm<TuserResponseSchema>()

  const handleSubmit = (values: TuserResponseSchema) => {
    console.log('values', values)

    onSubmit(values)
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-wrap gap-4 my-4">
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[19%]">
        <Form.Label>
          Agrupar por:
        </Form.Label>
        <Select
          options={intervalEnumOptions}
          onValueChange={(value: string[]) => form.setValue("interval", value[0] as INTERVAL_ENUM)}
          className="w-full"
        />
        {form.formState.errors.interval && (
          <Form.Error>{form.formState.errors.interval?.message}</Form.Error>
        )}
      </Form.Field>
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[19%]">
        <Form.Label>
          Origem:
        </Form.Label>
        <Select
          options={originEnumOptions}
          onValueChange={(value: string[]) => form.setValue("origin", value[0] as ORIGIN_ENUM)}
          className="w-full"
        />
        {form.formState.errors.origin && (
          <Form.Error>{form.formState.errors.origin?.message}</Form.Error>
        )}
      </Form.Field>
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[19%]">
        <Form.Label>
          Data de:
        </Form.Label>
        <Form.InputDate
          // value={form.watch("from")}
          onChange={(e) => form.setValue("from", e)}
        />
        {form.formState.errors.from && (
          <Form.Error>{form.formState.errors.from?.message}</Form.Error>
        )}
      </Form.Field>
      <Form.Field className="w-full md:max-w-[12rem] lg:max-w-[19%]">
        <Form.Label>
          Data até:
        </Form.Label>
        <Form.InputDate
          //value={form.watch("to")}
          onChange={(e) => form.setValue("to", e)}
        />
        {form.formState.errors.to && (
          <Form.Error>{form.formState.errors.to?.message}</Form.Error>
        )}
      </Form.Field>

      <Button
        type="submit"
        className="mt-auto min-w-[12rem]"
        disabled={loading}
      >
        {loading ? "Aplicando..." : "Aplicar"}
      </Button>
    </form>
  )
}