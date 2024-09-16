import monitor from '../assets/img/monitor-code.jpg'
import { Button } from './ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { FaWhatsapp } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

const services = [
  {
    title: 'Desenvolvimento Web',
    description: [
      'Criação de soluções completas e personalizadas para a web;',
      'Desenvolvimento de Landing Pages atrativas e otimizadas para conversão;',
      'Construção de sites dinâmicos e responsivos;',
      'Utilização das mais recentes tecnologias web;',
      'Garantia de uma experiência de usuário fluida, segura e eficiente;',
      'Foco em design intuitivo, moderno e de alta performance;',
      'Adaptação às necessidades específicas do seu negócio.',
    ],
  },
  {
    title: 'Desenvolvimento de Sistemas',
    description: [
      'Criação de sistemas personalizados e escaláveis;',
      'Desenvolvimento de aplicações robustas para automação de processos;',
      'Integração de funcionalidades e APIs para otimização de operações;',
      'Utilização de tecnologias modernas e seguras;',
      'Foco em performance, estabilidade e usabilidade do sistema;',
      'Implementação de soluções adaptadas às necessidades específicas do cliente;',
      'Suporte e manutenção contínua para garantir a evolução do sistema.',
    ],
  },
]

export function ServicesAndContact() {
  return (
    <section className="my-10">
      <h1 className="text-secondary-foreground text-3xl font-semibold border-b pb-3">
        Serviços
      </h1>
      <div className="p-3 mt-5 flex justify-around items-center">
        <img
          src={monitor}
          alt="imagem de um notebook com códigos na tela"
          className="w-[400px] rounded-xl"
        />
        <div className="space-y-3">
          <div className="space-y-3">
            {services.map(service => (
              <Card key={service.title}>
                <CardHeader className="flex flex-col">
                  <CardTitle className="">{service.title}</CardTitle>
                  <CardDescription className="text-justify">
                    {service.description.map(desc => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Button className="w-full gap-1" variant={'outline'}>
            <FaWhatsapp size={18} />
            <a
              href="https://wa.me/5511993154203?text=Ol%C3%A1%2C%20me%20interessei%20pelos%20seus%20servi%C3%A7os%20e%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20podemos%20trabalhar%20juntos."
              target="_blank"
              rel="noreferrer"
            >
              Solicitar serviço
            </a>
          </Button>
          <Button className="w-full gap-1" variant={'default'}>
            <FaExternalLinkAlt size={15} />
            <a href="/contact">Entre em contato</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
