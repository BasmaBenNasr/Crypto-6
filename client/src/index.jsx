import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CryptoGraph from './components/CryptoGraph.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
}

ReactDOM.render(<App />, document.getElementById('CryptoCurr'));
