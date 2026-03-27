export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>/board/layoutTest</div>
      <div>{children}</div>
    </div>
  );
}
