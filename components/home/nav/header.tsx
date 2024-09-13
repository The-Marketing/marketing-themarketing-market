import React from 'react';

import { ToggleDisplay } from '../../toggle/toggle-display';

const Header = () => {
  return (
    <header className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-px-6 tw-bg-background tw-shadow-sm">
      <div className="tw-flex tw-items-center">
        
        <h1 className="tw-text-2xl tw-font-bold">The Marketing</h1>
        < ToggleDisplay />

      </div>
    </header>
  )
}

export default Header;