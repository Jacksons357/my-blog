import { Card, CardContent, CardDescription } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import transferHome from '../assets/project1/table-transfer-home.png'
import sendTransfer from '../assets/project1/table-transfer-send-transfer.png'
import transferSuccess from '../assets/project1/table-transfer-send-success.png'
import deleteTransfer from '../assets/project1/table-transfer-delete-transfer.png'

const imagesOpenModal = [
  {
    href: transferHome,
    alt: 'Tela inicial com as transferências pendentes',
    description: 'Tabelas com detalhes das transferências',
  },
  {
    href: sendTransfer,
    alt: 'Imagem ',
    description: 'Digitando EAN',
  },
  {
    href: transferSuccess,
    alt: 'Imagem quando abre',
    description: 'Todos dados preenchidos',
  },
  {
    href: deleteTransfer,
    alt: 'Imagem quando abre o modal',
    description: 'Todos dados preenchidos',
  },
]

export function CarouselTableTransfer() {
  return (
    <Carousel className="w-full max-w-[1000px]">
      <CarouselContent>
        {imagesOpenModal.map(image => (
          <CarouselItem key={image.alt}>
            <div>
              <Card className="border-none hover:bg-transparent p-0 m-0 ">
                <CardContent>
                  <img
                    src={image.href}
                    alt={image.alt}
                    className="rounded-xl w-full"
                  />
                </CardContent>
                <CardDescription className="pb-2 pr-10 -mt-3 text-end">
                  {image.description}
                </CardDescription>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3" />
      <CarouselNext className="-right-3" />
    </Carousel>
  )
}
