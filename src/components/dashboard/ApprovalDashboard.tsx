
import { CheckCircle, Clock, AlertCircle, Users } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ApprovalDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Taxa de Aprovação Automática"
          value="65%"
          description="do total de ocorrências"
          icon={<CheckCircle />}
          trend={{
            value: 3.5,
            isPositive: true,
            isGood: true
          }}
        />
        <MetricCard
          title="Tempo Médio de Aprovação"
          value="2.8 dias"
          description="aprovações manuais"
          icon={<Clock />}
          trend={{
            value: 0.4,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Aprovações Pendentes"
          value="42"
          description="aguardando análise"
          icon={<AlertCircle />}
          trend={{
            value: 5,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Produtividade de Aprovadores"
          value="18.5"
          description="casos/dia por pessoa"
          icon={<Users />}
          trend={{
            value: 2.2,
            isPositive: true,
            isGood: true
          }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fluxo de Aprovações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Análise do processo de aprovação, incluindo tempos, taxas de aprovação automática
            e performance dos aprovadores.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
