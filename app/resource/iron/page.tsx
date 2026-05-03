"use client";

import Panel from "@/components/ui/Panel";
import PriceChart from "@/components/ui/PriceChart";
import TradePanel from "@/components/market/TradePanel";

export default function ResourcePage() {
  return (
    <main className="p-6 grid grid-cols-2 gap-6">

      <Panel>
        <h2 className="text-xl mb-2">Iron (Mars)</h2>
        <p className="text-green-400">+4.3%</p>

        <PriceChart data={[
          { price: 120 }, { price: 135 }, { price: 150 }
        ]} />
      </Panel>

      <TradePanel />

    </main>
  );
}