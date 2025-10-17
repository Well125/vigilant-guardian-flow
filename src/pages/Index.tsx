import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, AlertTriangle, MapPin, FileText } from "lucide-react";
import Dashboard from "@/components/Dashboard";
import EventsPanel from "@/components/EventsPanel";
import AssetsPanel from "@/components/AssetsPanel";
import ReportsPanel from "@/components/ReportsPanel";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Sistema de Monitoramento</h1>
                <p className="text-sm text-muted-foreground">Caixas de Passagem IoT</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 mx-auto">
            <TabsTrigger value="dashboard" className="gap-2">
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Eventos</span>
            </TabsTrigger>
            <TabsTrigger value="assets" className="gap-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Ativos</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Relatórios</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <Dashboard />
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <EventsPanel />
          </TabsContent>

          <TabsContent value="assets" className="space-y-6">
            <AssetsPanel />
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <ReportsPanel />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
