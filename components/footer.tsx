export default function Footer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <footer className="mt-10 pt-5 border-t border-black/10 text-[13px] text-black/40 leading-relaxed [&_p]:mb-2">
      {children}
    </footer>
  );
}
