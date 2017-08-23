import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import AboutDeatail from './AboutDeatail'
export default class About extends Component {
	render(){
		return(
			<div>
				<h3>i am about page</h3>
				<ul>
					<li><Link to='/about/zzb000'>zzb</Link></li>
					<li><Link to='/about/zzb1111'>zzb1</Link></li>
					<li><Link to='/about/zzb2222'>zzb2</Link></li>
					<li><Link to='/about/zzb3333'>zzb3</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}