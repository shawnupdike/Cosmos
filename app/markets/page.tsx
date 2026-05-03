"use client";

import Panel from "@/components/ui/Panel";
import MarketRow from "@/components/market/MarketRow";

export default function MarketsPage() {
  return (
    <main className="p-6">

      <h1 className="text-2xl mb-6">Interplanetary Exchange</h1>

      <Panel>
        <div className="grid grid-cols-4 font-semibold mb-2">
          <span>Resource</span>
          <span>Price</span>
          <span>Change</span>
          <span>Trend</span>
        </div>

        <MarketRow name="Iron (Mars)" price={142} change={4.3} />
        <MarketRow name="Helium-3 (Jupiter)" price={876} change={2.1} />
        <MarketRow name="Water Ice (Europa)" price={63} change={-1.4} />
      </Panel>

    </main>
  );
}