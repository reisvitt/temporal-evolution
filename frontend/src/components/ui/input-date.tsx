/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Calendar, CalendarProps } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { format } from "date-fns"

type TInputDate = {
  value?: Date
  onChange?: (value: any) => void
} & CalendarProps

export const InputDate = ({ value, onChange, className, ...props }: TInputDate) => {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full border bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto",
            !props.selected && "text-muted-foreground",
            className,
          )}
        >
          {value ? (
            format(value, "PPP")
          ) : (
            <span>Selecione a data</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          onSelect={onChange}
          selected={value}
          mode="single"
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}