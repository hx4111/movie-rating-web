export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="gap-4 py-4 md:py-4">
      {children}
    </section>
  );
}
