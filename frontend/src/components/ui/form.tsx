import { cn } from "@/lib/utils"
import { Select } from './select.ui'
import { InputDate } from './input-date'

type TLabel = {
} & React.ComponentProps<"label">

const Label = (props: TLabel) => {
  return <label {...props} className={cn("text-sm text-gray-600", props.className)} />
}

type TField = {
} & React.ComponentProps<"div">

const Field = (props: TField) => {
  return <div {...props} className={cn("", props.className)} />
}


type TError = {
} & React.ComponentProps<"span">

const Error = (props: TError) => {
  return <span {...props} className={cn("text-xs text-red-700", props.className)} />
}


export default {
  Label,
  Field,
  Select,
  InputDate,
  Error
}