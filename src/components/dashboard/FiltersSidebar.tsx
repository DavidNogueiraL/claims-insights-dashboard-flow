
import { useCallback } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "@/components/dashboard/DateRangePicker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, RefreshCw } from "lucide-react";

interface FiltersSidebarProps {
  activeDashboard: string;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  onFilterApply: () => void;
  onFilterReset: () => void;
}

export function FiltersSidebar({
  activeDashboard,
  dateRange,
  setDateRange,
  onFilterApply,
  onFilterReset
}: FiltersSidebarProps) {
  const renderDashboardSpecificFilters = useCallback(() => {
    switch(activeDashboard) {
      case "reopened":
        return (
          <>
            <div className="space-y-1">
              <label className="text-sm font-medium">Tipo de Proteção</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="home">Residencial</SelectItem>
                  <SelectItem value="life">Vida</SelectItem>
                  <SelectItem value="health">Saúde</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Analista Responsável</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="ana">Ana Silva</SelectItem>
                  <SelectItem value="carlos">Carlos Santos</SelectItem>
                  <SelectItem value="mariana">Mariana Costa</SelectItem>
                  <SelectItem value="pedro">Pedro Almeida</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );
      default:
        return (
          <div className="space-y-1">
            <label className="text-sm font-medium">Filtros específicos</label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
    }
  }, [activeDashboard]);

  return (
    <Card className="w-64 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          Filtros
        </CardTitle>
        <CardDescription>Refine sua análise</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Período</label>
          <DatePickerWithRange className="w-full" dateRange={dateRange} setDateRange={setDateRange} />
        </div>

        {renderDashboardSpecificFilters()}

        <div className="pt-4 flex flex-col gap-2">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={onFilterApply}
          >
            Aplicar Filtros
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-blue-600 text-blue-600"
            onClick={onFilterReset}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Redefinir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
