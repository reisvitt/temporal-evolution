/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Calendar, CalendarProps } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "./popover"
import { format } from "date-fns"
import { useState } from "react"

type TInputDate = {
  value?: Date
  onChange?: (value: any) => void
} & CalendarProps

export const InputDate = ({ value, onChange, className }: TInputDate) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Popover
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full border bg-inherit hover:bg-white hover:border-gray-300 [&_svg]:pointer-events-auto text-xs",
            !value && "text-muted-foreground",
            !!value && "text-foreground",
            className,
          )}
        >
          {value ? (
            format(value, 'dd/MM/yyyy')
          ) : (
            <>Selecione a data</>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          onSelect={onChange}
          selected={value}
          mode="single"
        />
        <Button
          className="w-full"
          variant="outline"
          onClick={() => {
            setIsOpen(false)
            if (onChange) {
              onChange(undefined)
            }
          }}
        >
          Limpar
        </Button>
      </PopoverContent>
    </Popover>
  )
}