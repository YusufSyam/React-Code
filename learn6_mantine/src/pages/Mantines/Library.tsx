import React from 'react';
import { Button } from '@mantine/core';

export interface ILibrary {}

const Library: React.FC<ILibrary> = ({ }) => {
  return (
    <div>
      <Button>Ini tombol Mantine</Button>
    </div>
  )
}
export default Library;