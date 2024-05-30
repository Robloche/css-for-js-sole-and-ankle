import React from 'react';
import styled from 'styled-components';

import {WEIGHTS} from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({sortId, setSortId}) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42}/>
        <ShoeSidebar/>
      </LeftColumn>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label='Sort'
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </Select>
        </Header>
        <Spacer size={34}/>
        {/*<ShoeGrid />*/}
      </MainColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    align-items: baseline;
    display: flex;
    gap: 64px;
`;

const LeftColumn = styled.div``;

const MainColumn = styled.div`
    display: flex;
    flex: 1;
`;

const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex: 1;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
