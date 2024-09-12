import { Helmet } from 'react-helmet-async'

export function About() {
  return (
    <>
      <Helmet title="Sobre" />

      <main className="mx-auto w-[1100px]">
        <div>
          <h1>Quem sou eu?</h1>
        </div>
      </main>
    </>
  )
}
