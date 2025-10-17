import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Calendar } from "lucide-react";

const ReportsPanel = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Relatórios e Histórico</h2>
        <p className="text-muted-foreground">
          Gere relatórios detalhados para auditoria e análise
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Gerador de Relatórios
          </CardTitle>
          <CardDescription>
            Configure os parâmetros para gerar relatórios personalizados
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo de Relatório</label>
              <Select defaultValue="violations">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="violations">Eventos de Violação</SelectItem>
                  <SelectItem value="assets">Status de Ativos</SelectItem>
                  <SelectItem value="performance">Performance do Sistema</SelectItem>
                  <SelectItem value="maintenance">Histórico de Manutenção</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Período</label>
              <Select defaultValue="7days">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Hoje</SelectItem>
                  <SelectItem value="7days">Últimos 7 dias</SelectItem>
                  <SelectItem value="30days">Últimos 30 dias</SelectItem>
                  <SelectItem value="90days">Últimos 90 dias</SelectItem>
                  <SelectItem value="custom">Período personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Formato</label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel (XLSX)</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Localização</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as localizações</SelectItem>
                  <SelectItem value="center">Centro</SelectItem>
                  <SelectItem value="north">Zona Norte</SelectItem>
                  <SelectItem value="south">Zona Sul</SelectItem>
                  <SelectItem value="west">Zona Oeste</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full gap-2" size="lg">
            <Download className="h-4 w-4" />
            Gerar Relatório
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Relatórios Recentes</CardTitle>
          <CardDescription>Histórico de relatórios gerados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                name: "Eventos de Violação - Outubro 2025",
                date: "17/10/2025",
                type: "PDF",
              },
              {
                name: "Status de Ativos - Setembro 2025",
                date: "30/09/2025",
                type: "Excel",
              },
              {
                name: "Performance Mensal - Agosto 2025",
                date: "31/08/2025",
                type: "PDF",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {report.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">
                    {report.type}
                  </span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPanel;
