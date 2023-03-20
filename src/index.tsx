import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import "./index.scss";

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<App />);