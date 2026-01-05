export default function Date({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <p className="text-[#8A8A8A] text-[14px] mb-4">
      {children}
    </p>
  );
}
