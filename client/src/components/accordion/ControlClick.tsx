import React from 'react';
import Chevron from './Chevron';

interface Props {
  title: string;
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
}

function ControlClick({title, isCollapsed, toggleIsCollapsed}: Props): JSX.Element {
  return (
    <button
      className={`accordion-control-click ${
        isCollapsed ? 'accordion-control-click-closed' : 'accordion-control-click-opened'
      }`}
      type="button"
      onClick={toggleIsCollapsed}
    >
      <h2>{title}</h2>
      <span className={isCollapsed ? 'chevron-icon-wrapper-closed' : 'chevron-icon-wrapper-opened'}>
        <Chevron />
      </span>
    </button>
  );
}

export default ControlClick;
