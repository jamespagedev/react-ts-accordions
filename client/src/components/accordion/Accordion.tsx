import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

function Accordion({children}: Props): JSX.Element {
  return <div className="accordion">{children}</div>;
}

export default Accordion;
