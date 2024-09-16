import { Contacts } from '@/components/contacts'
import { Helmet } from 'react-helmet-async'

export function Contact() {
  return (
    <>
      <Helmet title="Contato" />

      <main className="mx-auto w-[1100px]">
        <Contacts />
      </main>
    </>
  )
}
