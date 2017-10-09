import {h, render, Component} from 'preact';
import Container from "./Container";

const root = document.getElementById('app');

// HMR
declare let module: any;
if (module.hot)
    module.hot.accept();
root.innerHTML = '';

render(<Container/>, root);