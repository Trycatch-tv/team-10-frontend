import Header from '../components/Header';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export const metadata = {
  title: 'Cursos',
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
