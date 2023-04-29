import './globals.css';
import AppStateProvider from './hooks/UserState';

export const metadata = {
  title: 'Home',
  description: 'Pagina acerca de nuestros cursos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  );
}
