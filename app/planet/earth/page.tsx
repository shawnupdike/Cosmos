"use client";

import Panel from "@/components/ui/Panel";
import MarketRow from "@/components/market/MarketRow";
import PriceChart from "@/components/ui/PriceChart";
import TradePanel from "@/components/market/TradePanel";
import { MarsGlobe } from "@/components/planets/PlanetGlobes";

export default function PlanetPage() {
  return (
    <main className="p-6 grid grid-cols-3 gap-6">

      {/* Planet */}
      <Panel className="col-span-1 h-[400px] flex items-center justify-center">
        <MarsGlobe />
      </Panel>

      {/* Economy */}
      <Panel className="col-span-2">
        <h2 className="text-xl mb-4">Planet Economy</h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <Panel>Market Cap $1.2T</Panel>
          <Panel>Volume $324B</Panel>
          <Panel>Traders 12,458</Panel>
        </div>

        <h3 className="mb-2">Top Resources</h3>
        <MarketRow name="Iron" price={142} change={4.3} />
        <MarketRow name="Water Ice" price={63} change={-1.2} />

        <PriceChart data={[
          { price: 120 }, { price: 130 }, { price: 145 }
        ]} />
      </Panel>

      {/* Trade */}
      <div className="col-span-3">
        <TradePanel />
      </div>

    </main>
  );
}