import { AddDatabase } from '@/components/AddDatabase'
import { useI18n } from '@/locales'
import { ChangeLocale } from '@/components/changeLocale'

export default function Home() {
  const t = useI18n()
  return (
    <main className='color-background grid min-h-screen place-content-center'>
      <h1 className='mb-8 inline-block select-none bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-200 bg-clip-text text-[min(12vw,12rem)] font-bold text-transparent [text-shadow:_0_40px_25px_rgb(255_255_255_/_40%)]'>
        SimpliDB Studio
      </h1>
      <AddDatabase className='mx-auto w-32' />
      <p>{t('hello')}</p>
      <ChangeLocale className='absolute left-2 top-2' />
    </main>
  )
}
