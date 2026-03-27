export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>/board/[id]/layout</div>
      <div>{children}</div>
    </div>
  );
}
