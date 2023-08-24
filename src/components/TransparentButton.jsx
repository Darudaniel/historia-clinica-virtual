"use client"
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const TransparentButton = ({ text, action}) => {
  const CustomButton = styled(Button)({
    minWidth: '220px',
    maxWidth: '350px',
    margin: '7px',
    padding: '5px',
    boxShadow: 'none',
    color: 'var(--dark-color)',
    fontSize: '2.8rem',
    fontWeight: 'bold',
    border: '1px solid var(--secondary-color)',
    borderRadius: '4px',
  });

  return(
    <CustomButton 
      variant="outlined"
      onClick={() => {
        action()
      }}
    >
      {text}
    </CustomButton>
  )
}

export default TransparentButton