import { Helmet } from 'react-helmet-async'
import signIn from '../../assets/project1/sign-in.png'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { CarouselModalTransfer } from '@/components/carousel-modal-transfer'
import { CarouselTableTransfer } from '@/components/carousel-table-transfer'

export function Projects() {
  return (
    <div className="mx-auto w-[1100px]">
      <Helmet title="Projetos" />

      <section className="mt-5" id="projeto1">
        <h1 className="text-secondary-foreground text-3xl font-semibold border-b pb-3">
          Meus projetos
        </h1>
        <div className="grid grid-cols-2 p-3 gap-4">
          <div className="text-muted-foreground text-sm space-y-5 tracking-wide text-justify mt-20">
            <h2 className="text-2xl text-secondary-foreground font-semibold">
              Drogarias Campeã
            </h2>
            <p>
              Na rotina de trabalho das Drogarias Campeã, enfrentávamos um sério
              problema nas transferências de mercadorias entre lojas, pois o
              único controle existente era feito por anotações em cadernos, o
              que gerava muitas divergências. Para resolver essa questão,
              desenvolvi um sistema digital capaz de gerenciar e controlar as
              transferências de forma mais eficiente e organizada.
            </p>
            <h2 className="text-xl text-secondary-foreground">Experimente</h2>
            <div className="flex flex-col">
              <p>
                <span className="font-semibold">Login: </span>
                example
              </p>
              <p>
                <span className="font-semibold">Senha: </span>
                example
              </p>
              <a
                href="https://campea-front-end.vercel.app/sign-in"
                target="_blank"
                rel="noreferrer"
                className="mt-3 w-6 "
              >
                <Button className="h-6 bg-transparent border text-xs text-muted-foreground hover:bg-muted-foreground/5 gap-1 mt-1 px-3">
                  <FaExternalLinkAlt />
                  Acessar
                </Button>
              </a>
            </div>
          </div>
          <div className="m-auto mt-10 text-end">
            <img
              src={signIn}
              alt="tela de login da drogarias campeã"
              className="rounded-lg"
            />
            <span className="text-xs text-muted-foreground">Tela de login</span>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center mt-20">
          <div className="m-auto mt-10 text-start">
            <CarouselModalTransfer />
          </div>
          <div className="text-muted-foreground text-sm space-y-5 tracking-wide text-justify mt-20">
            <h2 className="text-xl text-secondary-foreground">
              Adicione uma nova transferência
            </h2>
            <p>
              Quando o botão de adicionar transferência é clicado, um modal será
              aberto, permitindo a inserção dos dados para uma nova
              transferência.
            </p>
            <p>
              No campo de código de barras, ao digitar um código EAN
              (obrigatoriamente EAN), uma API externa será chamada para buscar o
              nome do produto, capturando automaticamente as três primeiras
              palavras.
            </p>
            <p>
              Com todos os campos preenchidos, o botão para confirmar a adição
              da nova transferência será habilitado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center mt-20 space-x-7">
          <div className="text-muted-foreground text-sm space-y-5 tracking-wide text-justify">
            <h2 className="text-xl text-secondary-foreground">Tabela (CRUD)</h2>
          </div>
          <div className="m-auto mt-10 text-start">
            <CarouselTableTransfer />
          </div>
        </div>
      </section>
    </div>
  )
}
