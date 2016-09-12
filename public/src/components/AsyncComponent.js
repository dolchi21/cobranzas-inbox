import React from 'react';

var AsyncComponent = React.createClass({
	getInitialState : function getInitialState(){
		return { Component : null }
	},
	componentWillMount : function componentWillMount(){
		setTimeout(function(){
			this.loadComponent();
		}.bind(this), 1000)
	},
	render : function render(){
		var Component = this.state.Component;

		if (!Component) {
			return <span>Loading {this.props.url} ...</span>
		}
		return <Component {...this.props.props}/>
	},
	loadComponent : function loadComponent(){
		var self = this;

		var url = this.props.url;
		
		return window.SystemJS.import(url).then(function(Component){
			self.setState({
				Component
			});
			return Component;
		});
	}
});

export default AsyncComponent;
