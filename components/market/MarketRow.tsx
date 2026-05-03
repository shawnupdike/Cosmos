export default function MarketRow({ name, price, change }) {
  return (
    <div className="flex justify-between py-2">
      <span>{name}</span>
      <span>${price}</span>
      <span className={change > 0 ? 'text-green-400' : 'text-red-400'}>
        {change}%
      </span>
    </div>
  );
}