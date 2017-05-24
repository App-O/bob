import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {Form, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';

import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import {Page} from '../../components/page.js'


require('./home.less');




module.exports = class Home extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
	};





	render() {
		var style = {};


		return (
			<div id="home">
				<h1 style="color='white'">
					bOb
				</h1>
			</div>
		);
	}

};
