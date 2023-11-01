import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { AddDatabaseForm } from './AddDatabaseForm'
import { AddDatabase } from './AddDatabaseButton'

export function AddDatabasePopover() {
  return (
    <Popover>
      <PopoverTrigger className='mx-auto w-fit'>
        <AddDatabase className='w-32' />
      </PopoverTrigger>
      <PopoverContent className='w-[min(50vw,52rem)]'>
        <AddDatabaseForm />
      </PopoverContent>
    </Popover>
  )
}
