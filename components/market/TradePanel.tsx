import React from "react";
import Panel from "../ui/Panel";
import { Button } from "../ui/Button";

export default function TradePanel() {
  return (
    <Panel>
      <div className="flex gap-4 items-center">
        <input
          placeholder="Amount"
          className="p-2 bg-black/30 rounded w-40"
        />
        <Button variant="buy">Buy</Button>
        <Button variant="sell">Sell</Button>
      </div>
    </Panel>
  );
}