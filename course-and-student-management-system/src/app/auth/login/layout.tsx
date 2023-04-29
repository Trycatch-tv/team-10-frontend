export const metadata = {
  title: 'Iniciar sesion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
