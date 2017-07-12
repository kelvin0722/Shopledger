import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes  from './routes';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './semantic/dist/semantic.min.css';
//import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
