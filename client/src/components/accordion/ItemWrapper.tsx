import React, {ReactNode, useState} from 'react';
import Content from './Content';
import ControlClick from './ControlClick';

interface Props {
  title: string;
  children?: ReactNode;
}

function ItemWrapper({title, children}: Props): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="accordion-item-wrapper">
      <ControlClick title={title} isCollapsed={isCollapsed} toggleIsCollapsed={() => setIsCollapsed(!isCollapsed)} />
      {children !== null && <Content isCollapsed={isCollapsed}>{children}</Content>}
    </div>
  );
}

export default ItemWrapper;
