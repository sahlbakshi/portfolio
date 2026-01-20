export default function Date({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <p className="text-black/40 mb-4">
      {children}
    </p>
  );
}
