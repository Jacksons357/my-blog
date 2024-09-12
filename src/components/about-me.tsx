import { Profile } from './images'

export function AboutMe() {
  return (
    <section className="mt-5">
      <h1 className="text-secondary-foreground text-3xl font-semibold border-b pb-3">
        Mas afinal, quem sou eu?
      </h1>
      <div className="grid grid-cols-2 p-3">
        <div className="text-muted-foreground text-sm space-y-5 tracking-wide text-justify mt-20">
          <h2 className="text-2xl">
            I'm{' '}
            <span className="text-secondary-foreground font-semibold">
              {' < '}Jackson Santos {' />'}
            </span>
          </h2>
          <p>
            Natural de Suzano, São Paulo, e desde pequeno sou fascinado por
            tecnologia. Esse interesse me guiou até o desenvolvimento front-end,
            onde encontro soluções criativas para transformar ideias em
            realidade. Atualmente, estou me formando em Análise e
            Desenvolvimento de Sistemas, e constantemente busco novos
            conhecimentos, seja explorando tecnologias ou conhecendo novos
            lugares em minhas viagens.
          </p>

          <p>
            Além do universo da tecnologia, um dos meus hobbies é treinar
            musculação, o que me ajuda a manter o equilíbrio e me desafiar
            diariamente, assim como faço no meu trabalho. Amo compartilhar o que
            aprendo e acredito que ensinar e trocar experiências são
            fundamentais para o crescimento. Cada dia é uma nova oportunidade de
            aprender, superar desafios e me aproximar de meus objetivos.
          </p>
        </div>
        <div className="m-auto mt-10 text-center">
          <Profile />
          <span className="text-xs text-muted-foreground">
            Foto tirada no evento da{' '}
            <a
              href="https://nodebr.org/#/home"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              NodeBR
            </a>{' '}
            e parceria com a Microsoft 2024.
          </span>
        </div>
      </div>
    </section>
  )
}
