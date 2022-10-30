import React, {ReactNode, useLayoutEffect, useRef} from 'react';

interface Props {
  isCollapsed: boolean;
  children: ReactNode;
}

function Content({isCollapsed, children}: Props): JSX.Element {
  // variables
  const contentEl = useRef<any>(null);
  const componentHeight = useRef(0);
  console.log('componentHeight:', componentHeight.current);

  // setup
  useLayoutEffect(() => {
    componentHeight.current = contentEl.current ? contentEl.current.scrollHeight : 0;
  }, []);

  // render
  return (
    <div
      ref={contentEl}
      className="accordion-content"
      style={isCollapsed ? {maxHeight: '0px'} : {maxHeight: `${componentHeight.current}px`}}
    >
      <div>{children}</div>
    </div>
  );
}

export default Content;
