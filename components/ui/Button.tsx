export function Button({ children, variant = 'primary' }) {
  const styles = {
    primary: "bg-accent-primary text-white",
    buy: "bg-accent-positive text-black",
    sell: "bg-accent-negative text-white"
  };

  return (
    <button className={`px-4 py-2 rounded-xl ${styles[variant]}`}>
      {children}
    </button>
  );
}