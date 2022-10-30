import React, {ReactNode, useLayoutEffect, useRef} from 'react';

interface Props {
  isCollapsed: boolean;
  children: ReactNode;
}

function Content({isCollapsed, children}: Props): JSX.Element {
  // variables
  const contentEl = useRef(null);
  const componentHeight = useRef(200);
  console.log('componentHeight:', componentHeight.current);

  // setup
  useLayoutEffect(() => {
    // componentHeight.current = contentEl.current ? contentEl.current.scrollHeight : 0;
  }, []);

  // render
  return (
    <div
      ref={contentEl}
      className="accordion-content"
      style={isCollapsed ? {maxHeight: '0px'} : {maxHeight: `${componentHeight.current}px`}}
    >
      {children}
    </div>
  );
}

export default Content;
