import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
background: -webkit-linear-gradient(to right, #453534, #346643);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #935346, #835499); 
padding: 10px;
font-weight:bold;
color: #FFFFFF;
`;

const TextoHeader = styled.h1`
font-size: 2rem;
margin:0;
font-family: 'Slabo 27px', serif;
text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
  }
 
export default Header;
