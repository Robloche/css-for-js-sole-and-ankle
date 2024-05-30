import React from 'react';
import styled from 'styled-components';

import {COLORS, WEIGHTS} from '../../constants';

const TEXT = Object.freeze({
  'on-sale': 'Sale',
  'new-release': 'Just Released!'
});

const Flag = ({variant}) => {
  return (
    <Wrapper className={`${variant}`}>{TEXT[variant]}</Wrapper>
  );
};

const Wrapper = styled.div`
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.white};
    position: absolute;
    padding: 8px 10px;
    border-radius: 2px;
    right: -8px;
    top: 16px;

    &.on-sale {
        background-color: ${COLORS.secondary};
    }

    &.new-release {
        background-color: ${COLORS.primary};
    }
`;

export default Flag;
