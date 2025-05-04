import { CodeXml, Github } from "lucide-react"

export const DevBy = () => {


  return (
    <div className="flex items-center flex-col">
      <p className="text-sm flex gap-1 items-center text-foreground" title="Desenvolvido por Vitor Reis">
        Desenvolvido por
        <span className="font-semibold text-primary">
          Vitor Reis
        </span>
        <CodeXml size={20} color="var(--color-foreground)" />
      </p>
      <a className="mt-2 text-sm flex gap-1 items-baseline"
        href="https://github.com/reisvitt"
        target="_blank"
        title="Github">
        <Github /> Github
      </a>
    </div>
  )
}