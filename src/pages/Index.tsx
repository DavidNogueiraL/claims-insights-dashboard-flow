
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format, subDays } from "date-fns";
import { FiltersSidebar } from "@/components/dashboard/FiltersSidebar";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { Header } from "@/components/dashboard/Header";
import { ReopenedDashboard } from "@/components/dashboard/ReopenedDashboard";
import { DurationDashboard } from "@/components/dashboard/DurationDashboard";
import { PaymentDashboard } from "@/components/dashboard/PaymentDashboard";
import { ApprovalDashboard } from "@/components/dashboard/ApprovalDashboard";
import { SalvageDashboard } from "@/components/dashboard/SalvageDashboard";
import { toast } from "sonner";

const Index = () => {
  const [activeDashboard, setActiveDashboard] = useState("reopened");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  const getDashboardTitle = () => {
    switch (activeDashboard) {
      case "reopened":
        return {
          title: "Dashboard de Reaberturas de Ocorrências",
          description: "Análise e monitoramento de métricas relacionadas à reabertura de ocorrências",
        };
      case "duration":
        return {
          title: "Dashboard de Duração de Ocorrências",
          description: "Análise de tempos de processamento e resolução de ocorrências",
        };
      case "payment":
        return {
          title: "Dashboard de Métricas de Pagamento",
          description: "Monitoramento de pagamentos, prazos e valores liquidados",
        };
      case "approval":
        return {
          title: "Dashboard de Fluxo de Aprovações",
          description: "Análise de tempos e processos de aprovação de ocorrências",
        };
      case "salvage":
        return {
          title: "Dashboard de Recuperação de Salvados",
          description: "Monitoramento de valores recuperados e taxas de aproveitamento de salvados",
        };
      default:
        return {
          title: "Dashboard de Análise de Sinistros",
          description: "Visão completa das métricas operacionais de sinistros",
        };
    }
  };

  const renderActiveContent = () => {
    switch (activeDashboard) {
      case "reopened":
        return <ReopenedDashboard />;
      case "duration":
        return <DurationDashboard />;
      case "payment":
        return <PaymentDashboard />;
      case "approval":
        return <ApprovalDashboard />;
      case "salvage":
        return <SalvageDashboard />;
      default:
        return <ReopenedDashboard />;
    }
  };

  const handleFilterApply = () => {
    let dateMessage = "todas as datas";
    if (dateRange?.from) {
      dateMessage = dateRange.to
        ? `${format(dateRange.from, "dd/MM/yyyy")} até ${format(dateRange.to, "dd/MM/yyyy")}`
        : `a partir de ${format(dateRange.from, "dd/MM/yyyy")}`;
    }

    toast.success("Filtros aplicados", {
      description: `Exibindo dados para ${dateMessage}`,
    });
  };

  const handleFilterReset = () => {
    setDateRange({
      from: subDays(new Date(), 30),
      to: new Date(),
    });
    
    toast.info("Filtros redefinidos", {
      description: "Exibindo valores padrão dos últimos 30 dias",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-white border-b px-4 py-3">
        <h1 className="text-xl font-bold text-insurance-primary">Insurance Analytics Dashboard</h1>
      </div>

      <DashboardNav 
        activeDashboard={activeDashboard}
        onDashboardChange={setActiveDashboard}
      />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <FiltersSidebar 
            activeDashboard={activeDashboard}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onFilterApply={handleFilterApply}
            onFilterReset={handleFilterReset}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <Header 
            title={getDashboardTitle().title}
            description={getDashboardTitle().description}
          />
          
          {renderActiveContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
