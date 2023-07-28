import styled from '@emotion/styled';

export const ButtonStyle = styled.button(
  {
    height: '32px',
    width: '113px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: '0px',
    cursor: 'pointer',
  },
  ({ color }) => ({
    backgroundColor: color,
  })
);

export const ButtonSpan = styled.span(
  {
    marginLeft: '8px',
    fontSize: '13px',
    whiteSpace: 'nowrap',
  },
  ({ color }) => ({
    color: color,
  })
);
