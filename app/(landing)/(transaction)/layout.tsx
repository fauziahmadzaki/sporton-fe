export default function TransactionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-100 pt-5 px-5 lg:px-0 pb-35">
      {children}
    </div>
  );
}
