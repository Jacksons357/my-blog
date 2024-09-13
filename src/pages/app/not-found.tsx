export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-6">Página não encontrada.</p>
      <a
        href="/"
        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
      >
        Voltar para a página inicial
      </a>
    </div>
  )
}
