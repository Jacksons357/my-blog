import { useState } from 'react'
import { CarouselTableTransfer } from './carousel-table-transfer'

export function SectionTable() {
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')

  function handleCarouselChange(description: string, title: string) {
    setDescription(description)
    setTitle(title)
  }

  return (
    <div className="grid grid-cols-2 items-center space-x-7">
      <div className="text-muted-foreground text-sm space-y-5 tracking-wide text-justify">
        <h2 className="text-xl text-secondary-foreground">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="m-auto mt-10 text-start">
        <CarouselTableTransfer
          onChange={(description, title) => {
            handleCarouselChange(description, title)
          }}
        />
      </div>
    </div>
  )
}
