export default function Footer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <footer className="mt-10 pt-5 border-t border-black/10 text-[14px] text-[#8A8A8A] leading-relaxed [&_p]:mb-0">
      {children}
    </footer>
  );
}
