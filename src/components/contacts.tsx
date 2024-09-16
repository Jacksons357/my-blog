import hanshake from '../assets/img/handshake.jpg'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { MdOutlineEmail } from 'react-icons/md'
import { FaCopy } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

const infoCards = [
  {
    title: 'Email',
    icon: MdOutlineEmail,
    content: 'Contato@devjackson.tech',
  },
  {
    title: 'Celular',
    icon: FaWhatsapp,
    content: '(11) 99315-4203',
  },
]

export function Contacts() {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      toast({
        title: 'Email copiado!',
        duration: 2000,
      })
    })
  }

  return (
    <section className="my-5 space-y-5">
      <h1 className="text-3xl font-semibold border-b pb-3">Contato</h1>
      <div className="p-3 flex justify-center gap-4">
        <div>
          <img
            className="rounded-lg"
            src={hanshake}
            alt="uma imagem de aperto de mãos em led"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-muted-foreground font-semibold">
            Entre em contato comigo:
          </h2>
          {infoCards.map(info => (
            <Card key={info.content} className="flex w-[350px] relative">
              <CardHeader>
                <CardTitle className="flex gap-1 items-center">
                  <info.icon size={20} />
                  {info.title}:
                </CardTitle>
                <CardDescription className="pb-1">
                  {info.content}
                </CardDescription>
              </CardHeader>
              {info.title === 'Email' ? (
                <FaCopy
                  className={`absolute top-2 right-2 cursor-pointer hover:text-muted-foreground transition-colors duration-200 ${copied ? 'text-secondary-foreground' : ''}`}
                  onClick={() => copyToClipboard(info.content)}
                  aria-label={`Copiar ${info.title}`}
                />
              ) : (
                <FaExternalLinkAlt
                  className="absolute top-2 right-2 cursor-pointer hover:text-muted-foreground transition-colors duration-200"
                  onClick={() =>
                    window.open(
                      'https://wa.me/5511993154203?text=Ol%C3%A1%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%20e%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20podemos%20trabalhar%20juntos.',
                      '_blank'
                    )
                  }
                  aria-label={`Link para ${info.title}`}
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
