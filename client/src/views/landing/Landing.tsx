import React from 'react';
import {Accordion, ItemWrapper} from 'src/components/accordion';
import data from './data.json';

// interface Props {}

function Landing(): JSX.Element {
  return (
    <div className="view-container">
      <Accordion>
        {data.accordion.items.map(item => (
          <ItemWrapper key={item.id} title={item.title}>
            <p>{item.ipsum}</p>
          </ItemWrapper>
        ))}
      </Accordion>
    </div>
  );
}

export default Landing;
