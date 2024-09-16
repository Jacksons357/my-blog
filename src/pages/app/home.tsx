import { Abilities } from '@/components/abilities'
import { AboutMe } from '@/components/about-me'
import { ProjectsResume } from '@/components/projects-resume'
import { ServicesAndContact } from '@/components/services-and-contact'
import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <>
      <Helmet title="Início" />

      <main className="mx-auto w-[1100px]">
        <AboutMe />

        <Abilities />

        <ProjectsResume />

        <ServicesAndContact />
      </main>
    </>
  )
}
