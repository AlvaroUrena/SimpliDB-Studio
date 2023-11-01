import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function AddDatabase({ className }: { className?: string }) {
  return (
    <Button
      variant='outline'
      size='icon'
      className={
        className +
        ' h-auto rounded-full border-0 bg-primary/30 outline-0 transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary'
      }
    >
      <Plus className='h-full w-full' />
    </Button>
  )
}
