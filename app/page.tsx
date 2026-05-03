"use client";

import Panel from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { SolarSystemVisualization } from "@/components/planets/SolarSystemVisualization";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-bg-primary">
      
      <div className="grid grid-cols-2 gap-6 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Explore.<br />Discover.<br />
            <span className="text-accent-primary">Invest.</span>
          </h1>

          <p className="text-gray-400 mb-6">
            Navigate the universe. Discover planetary resources.
            Trade in the interplanetary economy.
          </p>

          <Button>Launch Explorer</Button>
        </div>

        {/* Right Visual */}
        <Panel className="h-[400px] flex items-center justify-center">
          <SolarSystemVisualization />
        </Panel>

      </div>

      {/* Market Preview */}
      <div className="mt-10 grid grid-cols-4 gap-4">
        <Panel>Iron ↑ 4.3%</Panel>
        <Panel>Helium-3 ↑ 2.1%</Panel>
        <Panel>Water Ice ↓ 1.4%</Panel>
        <Panel>Nickel ↑ 3.7%</Panel>
      </div>

    </main>
  );
}