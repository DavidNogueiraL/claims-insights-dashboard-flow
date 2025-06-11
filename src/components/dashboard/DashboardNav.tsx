
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  RefreshCw, 
  AlertCircle, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  TrendingUp 
} from "lucide-react";

interface DashboardNavProps {
  activeDashboard: string;
  onDashboardChange: (dashboard: string) => void;
}

export function DashboardNav({ activeDashboard, onDashboardChange }: DashboardNavProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-white border-b">
      <div className="flex items-center gap-2">
        <Button
          variant={activeDashboard === "reopened" ? "default" : "ghost"}
          className={cn(
            "gap-2",
            activeDashboard === "reopened" ? "bg-blue-600 hover:bg-blue-700" : ""
          )}
          onClick={() => onDashboardChange("reopened")}
        >
          <AlertCircle className="h-4 w-4" />
          <span className="hidden md:inline">Reaberturas</span>
        </Button>
        <Button
          variant={activeDashboard === "duration" ? "default" : "ghost"}
          className={cn(
            "gap-2",
            activeDashboard === "duration" ? "bg-blue-600 hover:bg-blue-700" : ""
          )}
          onClick={() => onDashboardChange("duration")}
        >
          <Clock className="h-4 w-4" />
          <span className="hidden md:inline">Duração</span>
        </Button>
        <Button
          variant={activeDashboard === "payment" ? "default" : "ghost"}
          className={cn(
            "gap-2",
            activeDashboard === "payment" ? "bg-blue-600 hover:bg-blue-700" : ""
          )}
          onClick={() => onDashboardChange("payment")}
        >
          <CreditCard className="h-4 w-4" />
          <span className="hidden md:inline">Pagamentos</span>
        </Button>
        <Button
          variant={activeDashboard === "approval" ? "default" : "ghost"}
          className={cn(
            "gap-2",
            activeDashboard === "approval" ? "bg-blue-600 hover:bg-blue-700" : ""
          )}
          onClick={() => onDashboardChange("approval")}
        >
          <CheckCircle className="h-4 w-4" />
          <span className="hidden md:inline">Aprovações</span>
        </Button>
        <Button
          variant={activeDashboard === "salvage" ? "default" : "ghost"}
          className={cn(
            "gap-2",
            activeDashboard === "salvage" ? "bg-blue-600 hover:bg-blue-700" : ""
          )}
          onClick={() => onDashboardChange("salvage")}
        >
          <TrendingUp className="h-4 w-4" />
          <span className="hidden md:inline">Salvados</span>
        </Button>
      </div>
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isLoading}
        >
          <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
          <span className="ml-2 hidden sm:inline">Atualizar</span>
        </Button>
      </div>
    </div>
  );
}
