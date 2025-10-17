import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Clock, MapPin, Search, Filter } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    location: "Rua das Flores, 123 - Centro",
    coordinates: "-23.5505, -46.6333",
    severity: "high",
    status: "open",
    timestamp: "2025-10-17 14:30:25",
    description: "Abertura não autorizada detectada",
  },
  {
    id: 2,
    location: "Av. Principal, 456 - Zona Norte",
    coordinates: "-23.5289, -46.6311",
    severity: "medium",
    status: "in_progress",
    timestamp: "2025-10-17 13:15:42",
    description: "Vibração anormal registrada",
  },
  {
    id: 3,
    location: "Praça Central, 789 - Zona Sul",
    coordinates: "-23.5629, -46.6544",
    severity: "low",
    status: "closed",
    timestamp: "2025-10-17 11:20:10",
    description: "Temperatura acima do normal",
  },
  {
    id: 4,
    location: "Rua Comercial, 321 - Zona Oeste",
    coordinates: "-23.5450, -46.6800",
    severity: "high",
    status: "open",
    timestamp: "2025-10-17 10:05:33",
    description: "Tentativa de acesso forçado",
  },
];

const EventsPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "warning";
      default:
        return "secondary";
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      default:
        return "Baixa";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "destructive";
      case "in_progress":
        return "warning";
      default:
        return "success";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "open":
        return "Aberto";
      case "in_progress":
        return "Em Atendimento";
      default:
        return "Fechado";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            Gestão de Eventos e Alertas
          </CardTitle>
          <CardDescription>
            Monitore e gerencie todos os eventos de violação detectados
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Severidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="high">Alta</SelectItem>
                <SelectItem value="medium">Média</SelectItem>
                <SelectItem value="low">Baixa</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="open">Aberto</SelectItem>
                <SelectItem value="in_progress">Em Atendimento</SelectItem>
                <SelectItem value="closed">Fechado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            {mockEvents.map((event) => (
              <Card key={event.id} className="border-l-4" style={{
                borderLeftColor: event.severity === "high" ? "hsl(var(--destructive))" : 
                  event.severity === "medium" ? "hsl(var(--warning))" : "hsl(var(--muted))"
              }}>
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-semibold">{event.location}</p>
                          <p className="text-xs text-muted-foreground">{event.coordinates}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {event.timestamp}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={getSeverityColor(event.severity) as any}>
                        {getSeverityLabel(event.severity)}
                      </Badge>
                      <Badge variant={getStatusColor(event.status) as any}>
                        {getStatusLabel(event.status)}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventsPanel;
