
import { DollarSign, Percent, TrendingUp, BarChart3 } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SalvageDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Valor Total Recuperado"
          value="R$ 487,600"
          description="mês atual"
          icon={<DollarSign />}
          trend={{
            value: 12.7,
            isPositive: true,
            isGood: true
          }}
        />
        <MetricCard
          title="Taxa de Recuperação"
          value="32.1%"
          description="sobre valor pago"
          icon={<Percent />}
          trend={{
            value: 0.8,
            isPositive: true,
            isGood: true
          }}
        />
        <MetricCard
          title="Itens em Processo"
          value="47"
          description="aguardando liquidação"
          icon={<BarChart3 />}
          trend={{
            value: 5.2,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Tempo Médio até Liquidação"
          value="24 dias"
          description="ciclo completo"
          icon={<TrendingUp />}
          trend={{
            value: 2.4,
            isPositive: false,
            isGood: true
          }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recuperação de Salvados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Monitoramento de valores recuperados através da venda de salvados,
            incluindo taxas de recuperação e tempos de liquidação.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
