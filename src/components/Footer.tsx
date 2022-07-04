import { LogoRocketseat } from "./LogoRocketseat";

export function Footer(){
  return(
    <footer className="w-full p-5 flex items-center justify-between bg-gray-700 border-b border-gray-600">
      <div className="flex items-center justify-between gap-5">
        <LogoRocketseat />
        <p>Rocketseat - Todos os direitos reservados</p>
      </div>
      <div>
        <p>Políticas de privacidade</p>
      </div>
    </footer>
  )
}