
import { CreditCard, Clock, Check, AlertTriangle } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PaymentDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Pagamentos Processados"
          value="347"
          description="no mês atual"
          icon={<CreditCard />}
          trend={{
            value: 12.4,
            isPositive: true,
            isGood: true
          }}
        />
        <MetricCard
          title="Tempo Médio de Pagamento"
          value="3.8 dias"
          description="após aprovação"
          icon={<Clock />}
          trend={{
            value: 0.5,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Taxa de Pagamentos no Prazo"
          value="92.5%"
          description="dentro do SLA"
          icon={<Check />}
          trend={{
            value: 1.8,
            isPositive: true,
            isGood: true
          }}
        />
        <MetricCard
          title="Pagamentos Atrasados"
          value="28"
          description="acima do SLA"
          icon={<AlertTriangle />}
          trend={{
            value: 3.2,
            isPositive: false,
            isGood: true
          }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Métricas de Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dashboard focado no monitoramento de pagamentos, incluindo tempo de processamento,
            compliance com SLA e análise de atrasos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
