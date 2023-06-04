import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  button{
    align-items: center;
    justify-content: center;
    background: var(--gray-500);
    padding: .5rem;
    border: none;
    border-radius: .8rem;

    cursor: pointer;
    transition: ease all .5s;
    animation: close 1s;

    :hover{
      scale: 1.1;
      /* transform: rotate(.5turn); */
    }
    
    @keyframes close {
        from{
          scale: 1.2;
          opacity: 0;
        }
        to{
          scale: 1;
          opacity: 1;
        }
    }
  }
`;
