import React from 'react';
import { List } from '@phosphor-icons/react';

import { Container } from './styles';

export default function Menu({ setMenu }) {
  return (
    <Container className='flex'>
      <button 
        onClick={() => setMenu(false)} 
        className='flex'
      >
        <List size={30} color='var(--purple-200)' weight="bold" />
      </button>
    </Container>
  );
}