import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    location: "Rua das Flores, 123",
    severity: "high",
    time: "Há 5 minutos",
  },
  {
    id: 2,
    location: "Av. Principal, 456",
    severity: "medium",
    time: "Há 15 minutos",
  },
  {
    id: 3,
    location: "Praça Central, 789",
    severity: "low",
    time: "Há 1 hora",
  },
  {
    id: 4,
    location: "Rua Comercial, 321",
    severity: "high",
    time: "Há 2 horas",
  },
];

const RecentEvents = () => {
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

  return (
    <ScrollArea className="h-[300px] pr-4">
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
          >
            <div className="rounded-full bg-destructive/10 p-2 mt-1">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{event.location}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {event.time}
              </div>
            </div>
            <Badge variant={getSeverityColor(event.severity) as any}>
              {getSeverityLabel(event.severity)}
            </Badge>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default RecentEvents;
