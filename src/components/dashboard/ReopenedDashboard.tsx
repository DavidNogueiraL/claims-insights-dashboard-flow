
import { AlertCircle, DollarSign, Clock, FileText } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ReopenedDashboard() {
  const recentReopeningsData = [
    { 
      id: 'OCR-12345',
      clientName: 'João Silva',
      reason: 'Documentação Incorreta',
      status: 'Em Análise'
    },
    { 
      id: 'OCR-12346',
      clientName: 'Maria Oliveira',
      reason: 'Valor Contestado',
      status: 'Pendente'
    },
    { 
      id: 'OCR-12347',
      clientName: 'Pedro Santos',
      reason: 'Escopo do Sinistro',
      status: 'Em Análise'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total de Reaberturas"
          value="286"
          description="no último trimestre"
          icon={<AlertCircle />}
          trend={{
            value: 12,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Taxa de Reabertura"
          value="3.2%"
          description="de todas as ocorrências"
          icon={<FileText />}
          trend={{
            value: 0.8,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Tempo Médio de Resolução"
          value="4.5 dias"
          description="após reabertura"
          icon={<Clock />}
          trend={{
            value: 1.2,
            isPositive: false,
            isGood: true
          }}
        />
        <MetricCard
          title="Impacto Financeiro"
          value="R$ 152,450"
          description="custos adicionais"
          icon={<DollarSign />}
          trend={{
            value: 8.5,
            isPositive: true,
            isGood: false
          }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reaberturas Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReopeningsData.map((row, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{row.id}</p>
                  <p className="text-sm text-gray-600">{row.clientName}</p>
                  <p className="text-sm text-gray-500">{row.reason}</p>
                </div>
                <Badge 
                  variant="outline"
                  className={`
                    ${row.status === 'Em Análise' ? 'border-blue-500 text-blue-600' : ''}
                    ${row.status === 'Pendente' ? 'border-yellow-500 text-yellow-600' : ''}
                  `}
                >
                  {row.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
