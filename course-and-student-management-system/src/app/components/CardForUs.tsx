import React from 'react';
import { URL } from 'url';
interface Props {
  name: string;
  stack: string;
  image: URL;
}
export const CardForUs = ({ image, name, stack }: Props) => {
  return <div>CardForUs</div>;
};
