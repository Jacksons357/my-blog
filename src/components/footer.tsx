import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t text-white">
      <div className="max-w-5xl mx-auto py-4">
        <p className="text-secondary-foreground text-sm text-center">
          Este site foi criado com paixão e dedicação por mim, Developer{' '}
          <span className="font-semibold">Jackson</span>. Estou aqui para ajudar
          você a alcançar seus objetivos online.
        </p>

        <div className="flex justify-center space-x-4 mt-2">
          {/* Adicione ícones de redes sociais aqui, por exemplo: */}
          <a
            href="https://github.com/Jacksons357"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={20}
              className="text-secondary-foreground hover:text-muted-foreground/95"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jacksonsantosdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={20}
              className="text-secondary-foreground hover:text-muted-foreground/95"
            />
          </a>
          {/* Adicione outros ícones conforme necessário */}
        </div>
      </div>
    </footer>
  )
}
