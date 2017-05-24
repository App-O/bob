import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {Form, FormGroup, FormControl, FieldGroup, Glyphicon} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';

import {BackgroundImage, MainToolBar} from '../../components/ui.js'
import {Page} from '../../components/page.js'


require('./home.less');

//var X = require('images/bob.png');


module.exports = class Home extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
	};


	renderForm() {
		var style = {};
		style.textAlign = 'left';
		style.border = '1px solid';

		return (
			<Form style={style}>
				<FormGroup>
					<Checkbox>
						Handla bara om SPY > SMA50
					</Checkbox>
					<p>
						Mellan klockan XXX och XXX välj ut den starkaste sektorn
					</p>
				</FormGroup>
				<FormGroup>
					I vinnande sektor, ta ut topp XXX och köp dessa!
				</FormGroup>
				<FormGroup>
					Sätt släpande stop loss till XXX.
				</FormGroup>

			</Form>

		);


	}



	render() {
		var style = {};
		style.width = '100%';
//		style.color = 'red';
		style.textAlign = 'center';
		return (
			<div id="home">
				<div style={style}>

					<h1>
						Meet Bob! 😉
					</h1>
					<p>
						a.k.a. Best of Breed
					</p>

					<img src={require('./images/bob.png')}/>

					<Grid style={{display:'block'}}>
						<Row>
							<Col>
								{this.renderForm()}
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}

};
