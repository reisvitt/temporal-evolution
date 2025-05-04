import { Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

export const DialogInfo = () => {

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <Info color="var(--color-primary)" size={20} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Objetivo do Dashboard</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Este dashboard foi desenvolvido para monitorar e analisar o desempenho de envios de mensagens por canais (E-mail, WhatsApp e Push Notification), permitindo à equipe identificar tendências, avaliar taxas de entrega e otimizar campanhas.
        </DialogDescription>
        <DialogTitle>Dados Utilizados</DialogTitle>
        <DialogDescription>
          <ul className="list-disc ml-4 space-y-1.5">
            <li>
              <span className="font-semibold mr-1">Fonte:</span>
              <span>
                Arquivo <span className="inline-block text-primary bg-amber-100 px-1 rounded-xs">seed.sql</span> com cerca de <span className="font-semibold">10 milhões</span> de registros de envios.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-1">Tipos de Dados:</span>
              <span>
                Informações sobre envios, incluindo canal, status de entrega, data e métricas de engajamento (ex.: aberturas).
              </span>
            </li>
            <li>
              <span className="font-semibold mr-1">Origem:</span>
              <span>
                Banco de dados relacional, processado a partir do arquivo <span className="inline-block text-primary bg-amber-100 px-1 rounded-xs">seed.sql</span>.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-1">Frequência:</span>
              <span>
                Dados consolidados e atualizados sob demanda para análises históricas e em tempo real.
              </span>
            </li>
          </ul>
        </DialogDescription>
        <DialogTitle>Desafio Técnico</DialogTitle>
        <DialogDescription>
          <p>O principal desafio foi otimizar as consultas ao banco de dados para garantir respostas rápidas e eficientes, mesmo com o alto volume de registros. Isso foi alcançado por meio de:</p>
          <ul className="list-disc ml-4 mt-2 space-y-1.5">
            <li>
              Indexação estratégica das tabelas.
            </li>
            <li>
              Uso de consultas agregadas para reduzir o processamento.
            </li>
            <li>
              Cache de resultados para visualizações frequentes.
            </li>
          </ul>
        </DialogDescription>
        <DialogTitle>Valor para o Usuário</DialogTitle>
        <DialogDescription>
          <p>
            Com este dashboard, a equipe pode tomar decisões baseadas em dados de forma ágil, melhorando a eficácia das campanhas e a experiência do cliente nos canais de comunicação.
          </p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}