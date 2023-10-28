import { useChangeLocale, useCurrentLocale, locales } from '@/locales'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
export function ChangeLocale({ className }: { className?: string }) {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  type LocaleKey = keyof typeof locales
  return (
    <Select
      defaultValue={currentLocale}
      onValueChange={(value: LocaleKey) => changeLocale(value)}
    >
      <SelectTrigger className={`${className} w-max`}>
        <SelectValue placeholder='Select a Language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className='select-none'>Languages</SelectLabel>
          <SelectItem className='hover:cursor-pointer' value='en-US'>
            English
          </SelectItem>
          <SelectItem className='hover:cursor-pointer' value='es-ES'>
            Spanish
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
