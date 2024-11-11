import { Card, CardContent } from '@/components/ui/card'
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
import { useEffect, useState } from 'react'

const imagesOpenModal = [
  {
    href: modalTransfer,
    alt: 'Testando 01',
    title: 'Adicione uma nova transferência',
    description:
      'Quando o botão de adicionar transferência é clicado, um modal será aberto, permitindo a inserção dos dados para uma nova transferência.',
  },
  {
    href: modalTransferProduct,
    alt: 'Testando 2',
    title: 'Produto buscado via código EAN',
    description:
      'No campo de código de barras, ao digitar um código EAN (obrigatoriamente EAN), uma API externa será chamada para buscar o nome do produto, capturando automaticamente as três primeiras palavras.',
  },
  {
    href: modalTransferFinish,
    alt: 'Testando 13',
    title: 'Validação de campos obrigatórios',
    description:
      'Com todos os campos preenchidos, o botão para confirmar a adição da nova transferência será habilitado.',
  },
]

interface CarouselModalTransferProps {
  onChange: (description: string, title: string) => void
}

export function CarouselModalTransfer({
  onChange,
}: CarouselModalTransferProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (onChange) {
      onChange(
        imagesOpenModal[currentIndex].description,
        imagesOpenModal[currentIndex].title
      )
    }
  }, [currentIndex, onChange])

  return (
    <Carousel
      className="w-full max-w-xs"
      setApi={api =>
        api?.on('select', () => setCurrentIndex(api.selectedScrollSnap()))
      }
    >
      <CarouselContent>
        {imagesOpenModal.map(image => (
          <CarouselItem key={image.alt}>
            <div>
              <Card className="border-none m-0 p-0 hover:bg-transparent">
                <CardContent className="p-0 flex justify-center">
                  <img
                    src={image.href}
                    alt={image.alt}
                    className="h-[400px] rounded-xl"
                  />
                </CardContent>
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
