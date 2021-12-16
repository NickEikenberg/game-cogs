import React, { useState } from 'react';
import FunctionContextComponent from '../../src/components/User/FunctionContextComponent';
import { ThemeProvider } from '../../src/components/User/ThemeContext';

export const ThemeContext = React.createContext();

export default function Context() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
