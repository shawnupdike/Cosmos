"use client";

import Panel from "@/components/ui/Panel";

export default function PortfolioPage() {
  return (
    <main className="p-6 grid grid-cols-2 gap-6">

      <Panel>
        <h2 className="text-xl">Total Value</h2>
        <div className="text-3xl">$125,430</div>
      </Panel>

      <Panel>
        <h2 className="mb-2">Assets</h2>
        <div>Iron (Mars) - $48k</div>
        <div>Helium-3 - $32k</div>
      </Panel>

    </main>
  );
}