import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
export const metadata = {
  title: 'Perfil',
};
export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
