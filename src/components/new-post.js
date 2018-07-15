import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class NewPost extends Component{
	renderField(field){
		const {touched, error} = field.meta;
		const className = `form-group ${touched&&error?'has-danger':''}`;
		return(
		<div className={className}>
			<label> {field.label} </label>
			<input className="form-control" type="text" {...field.input} />
			<div className="text-help">{touched?error:""} </div>
		</div>
		);
	}
	
	renderContentField(field){
		return(
		<div className="form-group">
			<label> Content </label>
			<textarea cols="40" rows="10" className="form-control" placeholder="Content" type="text" {...field.input} />
		</div>
		);
	}
	onSubmit(values){
		this.props.createPost(values,()=>{this.props.history.push("/");});
		
	}
	render(){
		const {handleSubmit} = this.props;
		return <div className="row">
			<div className="col-md-12">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="title"
							label="Title"
						component={this.renderField}
					/>
				
				   <Field name="categories" label="Categories"
						component={this.renderField}
					/>
				
					<Field name="content" 
						label="Content"
						component={this.renderField}
					/>
				<button type="submit" className="btn btn-primary"> Save </button>
				<Link to="/" className="btn btn-danger"> Cancel </Link>
				</form>
				
				</div>
			</div>;
	}
}

function validate(values){
	let errors = {};
	if(!values.title){
		errors.title ="Enter a title!";
	}
	if(!values.categories){
		errors.categories ="Enter some categories";
	}
	if(!values.content){
		errors.content ="Enter some content please";
	}
	
	return errors;
}
export default reduxForm({validate,
	form:'PostsNewForm'
})(
	connect(null,{ createPost })(NewPost)
);
	
/*<div className="form-group">
					<label htmlFor="post_title"> Title </label>
					<input type="text" className="input-group" id="post_title" />
				</div>
				<div className="form-group">
					<label htmlFor="post_category"> Category </label>
					<input type="text" className="input-group" id="post_category" />
				</div>
				<div className="form-group">
					<label htmlFor="post_title"> Content </label>
					<textarea rows="10" cols="40" className="input-group" id="post_title" />
				</div>
				<div className="row">
					<div className="col-md-4 text-center">
						<button type="button" className="btn btn-primary pull-left"> Save </button>
					</div>
					<div className="col-md-4 text-center">
						<button type="button" className="btn btn-primary pull-right"> Cancel </button>
					</div>
				</div>
				*/	