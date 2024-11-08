import project1 from './../assets/img/projects1.png'

import { FaExternalLinkAlt } from 'react-icons/fa'

import { Button } from './ui/button'

const imagesContent = [
  {
    title: 'Drogarias Campeã',
    description:
      '"Sistema digital de transferência de produtos desenvolvido para as Drogarias Campeã, oferecendo um controle eficiente de transferências e envios de produtos entre lojas. A solução promove maior organização e elimina a necessidade do uso de cadernos, proporcionando mais agilidade e precisão nas operações.',
    img: project1,
    alt: 'Foto do projeto de transfêrencias de produtos.',
    href: '/projects#projeto1',
  },
]

export function ProjectsResume() {
  return (
    <section className="my-10">
      <h1 className="text-secondary-foreground text-3xl font-semibold border-b pb-3">
        Projetos
      </h1>
      <div className="flex flex-col p-6 space-y-10">
        {imagesContent.map((item, index) => (
          <div
            key={item.title}
            className={`flex items-center gap-6 ${
              index % 2 === 0
                ? 'flex-row text-right '
                : 'flex-row-reverse text-left'
            }`}
          >
            <div className="w-1/2 text-rigth space-y-1">
              <h1 className="text-muted-foreground text-2xl font-semibold">
                {item.title}
              </h1>
              <p className="text-muted-foreground/50 text-justify">
                {item.description}
              </p>
              <a href={item.href} target="_blank" rel="noreferrer">
                <Button className="h-6 bg-transparent border text-xs text-muted-foreground hover:bg-muted-foreground/5 gap-1 mt-1 px-3">
                  <FaExternalLinkAlt />
                  Detalhes
                </Button>
              </a>
            </div>
            <div className="flex justify-center max-w-[600px]">
              <a href={item.href} target="_blank" rel="noreferrer">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full hover:filter hover:brightness-75 transition-all duration-500 rounded-md"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
