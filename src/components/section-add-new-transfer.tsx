import { useState } from 'react'
import { CarouselModalTransfer } from './carousel-modal-transfer'

export function SectionAddNewTransfer() {
  const [description, setDescription] = useState('')

  function handleCarouselChange(newDescription: string) {
    setDescription(newDescription)
  }

  return (
    <div className="grid grid-cols-2 items-center mt-20">
      <div className="m-auto mt-10 text-start">
        <CarouselModalTransfer onChange={handleCarouselChange} />
      </div>
      <div className="text-muted-foreground text-sm space-y-5 tracking-wide text-justify mt-20">
        <h2 className="text-xl text-secondary-foreground">
          Adicione uma nova transferência
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
