import styled from '@emotion/styled';

export const Wrapper = styled.div({
  display: 'flex',
});

export const ListUl = styled.ul({
  margin: '0px',
  marginLeft: '50px',
  '@media (max-width: 769px)': {
    marginLeft: '22px',
    marginRight: '18px',
  },
  '@media (max-width: 426px)': {
    marginLeft: '18px',
    marginRight: '12px',
  },
  '@media (max-width: 321px)': {
    marginLeft: '12px',
    marginRight: '8px',
  },
});

export const ListLi = styled.li<{ padding?: string; border?: string; color?: string }>(
  {
    display: 'inline',
    marginRight: '5px',
    borderRadius: '4px',
  },
  ({ color }) => ({
    color,
  })
);

export const PageBox = styled.span({
  color: 'inherit',
  fontSize: '18px',
  fontStyle: 'italic',
  fontWeight: '700',
  '@media (max-width: 769px)': {
    fontSize: '16px',
  },
  '@media (max-width: 426px)': {
    fontSize: '14px',
  },
  '@media (max-width: 321px)': {
    fontSize: '12px',
  },
});
