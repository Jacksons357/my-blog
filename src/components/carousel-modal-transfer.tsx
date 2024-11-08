import { Card, CardContent, CardDescription } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import modalTransfer from '../assets/project1/modal-transfer.png'
import modalTransferProduct from '../assets/project1/modal-transfer-product.png'
import modalTransferFinish from '../assets/project1/modal-transfer-finish.png'

const imagesOpenModal = [
  {
    href: modalTransfer,
    alt: 'Imagem quando abre o modal',
    description: 'Modal para adicionar uma transferência',
  },
  {
    href: modalTransferProduct,
    alt: 'Imagem quando abre o modal',
    description: 'Digitando EAN',
  },
  {
    href: modalTransferFinish,
    alt: 'Imagem quando abre o modal',
    description: 'Todos dados preenchidos',
  },
]

export function CarouselModalTransfer() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {imagesOpenModal.map(image => (
          <CarouselItem key={image.alt}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                  <img
                    src={image.href}
                    alt={image.alt}
                    className="h-[400px] rounded-xl"
                  />
                </CardContent>
                <CardDescription className="pb-2 pl-2 -mt-3">
                  {image.description}
                </CardDescription>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12" />
      <CarouselNext className="-right-12" />
    </Carousel>
  )
}
