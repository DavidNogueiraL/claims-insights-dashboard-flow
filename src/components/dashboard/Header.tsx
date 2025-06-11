
import { useState } from 'react';
import { CircleHelp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    
    setTimeout(() => {
      setIsExporting(false);
      toast.success("Relatório exportado com sucesso", {
        description: "O arquivo foi salvo no seu computador",
      });
    }, 2000);
  };

  return (
    <div className="flex items-center justify-between py-4 px-2">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-blue-800">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <CircleHelp className="h-5 w-5" />
        </Button>
        <Button onClick={handleExport} disabled={isExporting}>
          {isExporting ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></span>
              Exportando...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Exportar Relatório
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
