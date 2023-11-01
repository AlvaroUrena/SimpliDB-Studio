'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import { useScopedI18n } from '@/locales'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Output,
  minLength,
  object,
  string,
  ip,
  union,
  literal,
  maxLength,
  number,
  coerce,
  minValue,
  maxValue,
  custom
} from 'valibot'

export function AddDatabaseForm() {
  const t = useScopedI18n('addDatabase')

  // Schema
  const schema = object({
    name: string([
      minLength(1, t('name.error.min')),
      maxLength(20, t('name.error.max'))
    ]),
    host: union(
      [literal('localhost'), literal('LOCALHOST'), string([ip()])],
      t('host.error')
    ),
    port: coerce(
      number([minValue(1, t('port.error')), maxValue(65535, t('port.error'))]),
      Number
    ),
    username: string([
      minLength(4, t('username.error.min')),
      maxLength(30, t('username.error.max')),
      custom(
        value => value.match(/^[a-zA-Z0-9-_]+$/) !== null,
        t('username.error.specials')
      )
    ]),
    password: string([maxLength(128, t('password.error.max'))])
  })

  type SchemaType = Output<typeof schema>

  // Form Definition.
  const form = useForm<SchemaType>({
    resolver: valibotResolver(schema),
    defaultValues: {
      name: '',
      host: '',
      port: 3306,
      username: '',
      password: ''
    }
  })

  // Submit Handler.
  function onSubmit(values: SchemaType) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('name')}</FormLabel>
              <FormControl>
                <Input placeholder={t('name.placeholder')} {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid grid-cols-[2fr,1fr] gap-2'>
          <FormField
            control={form.control}
            name='host'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('host')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('host.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='port'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('port')}</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder={t('port.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-[1fr,1fr] gap-2'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('username')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('username.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('password')}</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder={t('password.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit'>{t('submit')}</Button>
      </form>
    </Form>
  )
}
