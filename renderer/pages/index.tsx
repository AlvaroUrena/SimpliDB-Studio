import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  const [text, setText] = useState('')

  const handleClick = async () => {
    const req = await fetch('/api/demo')
    const res = await req.json()
    setText(res.text)
  }

  return (
    <>
      <h1 className='text-6xl'>{text}</h1>
      <Button onClick={handleClick}>Click</Button>
      <ModeToggle />
    </>
  )
}