import React from 'react';
import { ChildWithRawApi } from './ChildWithRawApi';
import { ChildWithWrapper } from './ChildWithWrapper';
import { ChildWithLocalWrapper } from './ChildWithLocalWrapper';
import './Parent.css';

export const Parent: React.FC = () => {
  return (
    <div className='parent'>
      <h4>Raw API</h4>
      <div className='group'>
        <ChildWithRawApi color='aliceblue'>This is aliceblue</ChildWithRawApi>
        <ChildWithRawApi color='cornflowerblue'>
          This is cornflowerblue
        </ChildWithRawApi>
        <ChildWithRawApi color='lightpink'>This is lightpink</ChildWithRawApi>
      </div>

      <h4>Global Wrapper</h4>
      <div className='group'>
        <ChildWithWrapper color='aliceblue'>This is aliceblue</ChildWithWrapper>
        <ChildWithWrapper color='cornflowerblue'>
          This is cornflowerblue
        </ChildWithWrapper>
        <ChildWithWrapper color='lightpink'>This is lightpink</ChildWithWrapper>
      </div>

      <h4>Local Wrapper</h4>
      <div className='group'>
        <ChildWithLocalWrapper color='aliceblue'>
          This is aliceblue
        </ChildWithLocalWrapper>
        <ChildWithLocalWrapper color='cornflowerblue'>
          This is cornflowerblue
        </ChildWithLocalWrapper>
        <ChildWithLocalWrapper color='lightpink'>
          This is lightpink
        </ChildWithLocalWrapper>
      </div>
    </div>
  );
};
