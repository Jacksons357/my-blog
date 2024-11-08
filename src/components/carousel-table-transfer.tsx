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

const imagesTableModal = [
  {
    href: transferHome,
    alt: 'Tela inicial com as transferências pendentes',
    subtitle: 'Tabelas com detalhes das transferências',
    description:
      'Na tela inicial, após o login, há uma tabela que exibe todas as transferências e seus respectivos detalhes, como a data de criação, código de barras, quantidade, e, no caso de medicamentos antibióticos, as informações de lote e validade.',
  },
  {
    href: sendTransfer,
    alt: 'Imagem ',
    subtitle: 'Digitando EAN',
    description:
      'Uma das ações disponíveis é enviar a transferência. Para isso, o usuário deve carregar o XML no campo correspondente.',
  },
  {
    href: transferSuccess,
    alt: 'Imagem quando abre',
    subtitle: 'Todos dados preenchidos',
    description:
      'Após o envio, uma mensagem será exibida no canto inferior direito da tela, confirmando que a transferência foi realizada com sucesso.',
  },
  {
    href: deleteTransfer,
    alt: 'Imagem quando abre o modal',
    subtitle: 'Todos dados preenchidos',
    description:
      'Também é possível remover a transferência, se necessário. Ao clicar no ícone de lixeira, um modal será aberto para confirmar a exclusão da transferência.',
  },
]

export function CarouselTableTransfer() {
  return (
    <Carousel className="w-full max-w-[1000px]">
      <CarouselContent>
        {imagesTableModal.map(image => (
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
                  {image.subtitle}
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
