import { FaNode, FaReact } from 'react-icons/fa'
import {
  SiFastify,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { SiShadcnui } from 'react-icons/si'
import { FaGear } from 'react-icons/fa6'
import { TbApi } from 'react-icons/tb'
import { Button } from './ui/button'
import { BiLinkExternal } from 'react-icons/bi'

export function SectionResume() {
  return (
    <section className="w-full h-full space-y-20">
      <div className="m-auto text-center max-w-[600px]">
        <h1 className="text-3xl font-semibold text-secondary-foreground py-3">
          O Que Acontece nos Bastidores?
        </h1>
        <p className="text-muted-foreground">
          Nesta seção, exploraremos em detalhes o que realmente acontece nos
          bastidores: as tecnologias utilizadas, o código por trás e as APIs que
          fazem tudo funcionar.
        </p>
      </div>

      <div className="grid grid-cols-2 border-t-2 pt-10">
        <div className="space-y-4">
          <h1 className="text-2xl text-muted-foreground font-semibold text-center">
            Front End
          </h1>
          <p className="text-muted-foreground text-justify">
            Foram adotadas diversas tecnologias modernas, incluindo React, uma
            biblioteca reativa para criar interações dinâmicas com o usuário;
            ShadcnUI, para garantir um desempenho de interface otimizado; e
            Tailwind CSS, para proporcionar uma estilização mais eficiente e
            contemporânea.
          </p>
          <Button className="h-6 bg-transparent border text-xs text-muted-foreground hover:bg-muted-foreground/5 gap-1 mt-1 px-3">
            <BiLinkExternal />
            <a
              href="https://github.com/Jacksons357/campea-front-end"
              target="_blank"
            >
              Acesse o Repositório
            </a>
          </Button>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <FaReact className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
          <SiTailwindcss className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
          <SiShadcnui className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
          <SiTypescript className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-2xl text-muted-foreground font-semibold text-center">
            Back End
          </h1>
          <p className="text-muted-foreground text-justify">
            No back-end, criei uma API REST para gerenciar transferências, com
            todas as operações CRUD: criar, remover e atualizar o status de uma
            transferência. Também adicionei uma funcionalidade exclusiva para o
            administrador, que pode criar novos usuários, garantindo um controle
            de acesso seguro e eficaz. Para proteger as rotas, implementei
            autenticação via JWT, armazenando os tokens em cookies para uma
            experiência de uso segura e simplificada.
          </p>
          <p className="text-muted-foreground text-justify">
            Usei Node.js como base e escolhi o Fastify por ser um framework leve
            e de alta performance. O Prisma ORM foi uma escolha natural para
            otimizar a comunicação com o banco de dados PostgreSQL, tornando as
            consultas e interações mais eficientes. Todo esse esforço culminou
            com o deploy da API no Aiven, garantindo que ela estivesse sempre
            pronta para escalar e atender às demandas do projeto.
          </p>

          <Button className="h-6 bg-transparent border text-xs text-muted-foreground hover:bg-muted-foreground/5 gap-1 mt-1 px-3">
            <BiLinkExternal />
            <a
              href="https://github.com/Jacksons357/transfers-orders-api"
              target="_blank"
            >
              Acesse o Repositório
            </a>
          </Button>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <FaNode className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
          <SiFastify className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
          <SiPrisma className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
          <SiPostgresql className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-muted-foreground text-center">
            API's externas
          </h1>
          <p className="text-muted-foreground text-justify">
            Utilizei a API externa{' '}
            <a
              href="https://cosmos.bluesoft.com.br/api"
              target="_blank"
              className="font-semibold hover:underline transition-all"
            >
              Bluesoft Cosmos
            </a>{' '}
            para buscar produtos por meio do código de barras EAN, o que tornou
            o processo de integração e automação mais simples e eficiente. Para
            realizar as requisições, escolhi o Axios, garantindo uma comunicação
            ágil e confiável com a API e proporcionando uma experiência mais
            fluida e responsiva para o usuário.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FaGear className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
          <TbApi className="dark:hover:bg-muted-foreground/5 hover:bg-muted-foreground/15 w-20 h-20 p-2 rounded-3xl transition-all" />
        </div>
      </div>

      <div className=""></div>
    </section>
  )
}
