
import { Clock, CalendarClock, Timer, AlertTriangle } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DurationDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Tempo Médio de Resolução"
          value="10.2 dias"
          description="total geral"
          icon={<Clock />}
          trend={{
            value: 1.8,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="SLA de 15 dias"
          value="89.2%"
          description="dentro do prazo"
          icon={<CalendarClock />}
          trend={{
            value: 2.5,
            isPositive: true,
            isGood: true
          }}
        />
        <MetricCard
          title="Processos Atrasados"
          value="42"
          description="acima de 15 dias"
          icon={<AlertTriangle />}
          trend={{
            value: 5.2,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Tempo de Análise Técnica"
          value="4.3 dias"
          description="gargalo principal"
          icon={<Timer />}
          trend={{
            value: 0.3,
            isPositive: true,
            isGood: false
          }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análise de Duração</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Este dashboard mostra métricas relacionadas ao tempo de processamento de ocorrências.
            Os dados incluem tempo médio de resolução, conformidade com SLA e identificação de gargalos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
