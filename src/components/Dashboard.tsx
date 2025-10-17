import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertTriangle, CheckCircle2, MapPin, TrendingUp } from "lucide-react";
import StatusCard from "./StatusCard";
import EventsChart from "./EventsChart";
import RecentEvents from "./RecentEvents";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatusCard
          title="Total de Caixas"
          value="156"
          icon={MapPin}
          trend="+2 esta semana"
          variant="default"
        />
        <StatusCard
          title="Caixas Ativas"
          value="142"
          icon={CheckCircle2}
          trend="91% operacionais"
          variant="success"
        />
        <StatusCard
          title="Alertas Ativos"
          value="8"
          icon={AlertTriangle}
          trend="-3 vs. ontem"
          variant="warning"
        />
        <StatusCard
          title="Em Manutenção"
          value="6"
          icon={Activity}
          trend="4% do total"
          variant="muted"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Evolução de Eventos
            </CardTitle>
            <CardDescription>
              Número de violações detectadas nos últimos 7 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EventsChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Eventos Recentes</CardTitle>
            <CardDescription>Últimas detecções do sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentEvents />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
