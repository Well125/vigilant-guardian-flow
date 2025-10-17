import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Plus, Signal, SignalLow, SignalZero } from "lucide-react";

const mockAssets = [
  {
    id: 1,
    name: "CX-001",
    address: "Rua das Flores, 123 - Centro",
    coordinates: "-23.5505, -46.6333",
    status: "active",
    lastCommunication: "Há 2 minutos",
    deviceId: "ESP32-A1B2C3",
  },
  {
    id: 2,
    name: "CX-002",
    address: "Av. Principal, 456 - Zona Norte",
    coordinates: "-23.5289, -46.6311",
    status: "active",
    lastCommunication: "Há 5 minutos",
    deviceId: "ESP32-D4E5F6",
  },
  {
    id: 3,
    name: "CX-003",
    address: "Praça Central, 789 - Zona Sul",
    coordinates: "-23.5629, -46.6544",
    status: "warning",
    lastCommunication: "Há 2 horas",
    deviceId: "ESP32-G7H8I9",
  },
  {
    id: 4,
    name: "CX-004",
    address: "Rua Comercial, 321 - Zona Oeste",
    coordinates: "-23.5450, -46.6800",
    status: "offline",
    lastCommunication: "Há 1 dia",
    deviceId: "ESP32-J1K2L3",
  },
];

const AssetsPanel = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Signal className="h-4 w-4" />;
      case "warning":
        return <SignalLow className="h-4 w-4" />;
      default:
        return <SignalZero className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "success";
      case "warning":
        return "warning";
      default:
        return "destructive";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Ativo";
      case "warning":
        return "Atenção";
      default:
        return "Offline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Ativos</h2>
          <p className="text-muted-foreground">Gerencie todas as caixas de passagem monitoradas</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Caixa
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Visualização no Mapa
          </CardTitle>
          <CardDescription>
            Localização geográfica de todas as caixas de passagem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground">
                Mapa interativo será exibido aqui
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {mockAssets.map((asset) => (
          <Card key={asset.id}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{asset.name}</h3>
                    <p className="text-sm text-muted-foreground">{asset.address}</p>
                  </div>
                  <Badge variant={getStatusColor(asset.status) as any} className="gap-1">
                    {getStatusIcon(asset.status)}
                    {getStatusLabel(asset.status)}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coordenadas:</span>
                    <span className="font-mono">{asset.coordinates}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dispositivo:</span>
                    <span className="font-mono">{asset.deviceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Última comunicação:</span>
                    <span>{asset.lastCommunication}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Ver Detalhes
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Editar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AssetsPanel;
