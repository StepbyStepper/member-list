import React, { Component } from 'react';

class From extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			name: '',
			job: ''
		};

		this.state = this.initialState;
	}
}