import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { trpc } from '@/utils/trpc'

export default function Home() {
  const [text, setText] = useState('')
  const listenners = trpc.getMaxListeners.useQuery()

  const handleClick = async () => {
    if (!listenners.data) {
      return <div>Loading...</div>
    }
    setText(listenners.data.toString())
  }

  return (
    <>
      <h1 className='text-6xl'>{text}</h1>
      <Button onClick={handleClick}>Click</Button>
      <ModeToggle />
    </>
  )
}
