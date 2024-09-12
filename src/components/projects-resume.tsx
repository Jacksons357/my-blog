import project1 from './../assets/img/project1.svg'
import project2 from './../assets/img/project3.svg'
import project3 from './../assets/img/project2.svg'

const imagesContent = [
  {
    title: 'Products Transfers',
    description: 'It is a long established fact that a reader will',
    img: project1,
    alt: 'Foto do projeto de transfêrencias de produtos.',
  },
  {
    title: 'Project example',
    description: 'It is a long established fact that a reader will',
    img: project2,
    alt: 'Foto do projeto de transfêrencias de produtos.',
  },
  {
    title: 'Project example 2',
    description: 'It is a long established fact that a reader will',
    img: project3,
    alt: 'Foto do projeto de transfêrencias de produtos.',
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
            <div className="w-1/2 text-rigth">
              <h1 className="text-muted-foreground text-2xl font-semibold">
                {item.title}
              </h1>
              <p className="text-muted-foreground/50">{item.description}</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={item.img} alt={item.alt} className="w-[400px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
