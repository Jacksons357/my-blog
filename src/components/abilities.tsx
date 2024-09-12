import { abilitiesBack, abilitiesFront } from '@/lib/abilities'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

export function Abilities() {
  return (
    <section className="mt-5">
      <h1 className="text-secondary-foreground text-3xl font-semibold border-b pb-3">
        Habilidades
      </h1>
      <div className="grid grid-cols-2 mt-6 p-3 gap-4">
        <div className="space-y-3">
          <h2 className="text-2xl text-muted-foreground mb-4 text-center">
            Front end
          </h2>
          {abilitiesFront.map(ability => (
            <Card key={ability.title}>
              <CardHeader>
                <div>
                  <ability.icon
                    className="text-secondary-foreground"
                    size={45}
                  />
                </div>
                <div className="space-y-1">
                  <CardTitle>{ability.title}</CardTitle>
                  <CardDescription>{ability.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl text-muted-foreground mb-4 text-center">
            Back end
          </h2>
          {abilitiesBack.map(ability => (
            <Card key={ability.title}>
              <CardHeader>
                <div>
                  <ability.icon
                    className="text-secondary-foreground"
                    size={45}
                  />
                </div>
                <div className="space-y-1">
                  <CardTitle>{ability.title}</CardTitle>
                  <CardDescription>{ability.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
