export const metadata = {
  title: 'Registrarme',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
