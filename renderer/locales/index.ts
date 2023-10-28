import { createI18n } from 'next-international'

export const locales = {
  'en-US': () => import('./en-US'),
  'es-ES': () => import('./es-ES')
}

export const {
  useI18n,
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
  I18nProvider,
  getLocaleProps
} = createI18n(locales)
