import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {
	componentDidMount(){
		const id = this.props.match.params.id;
		console.log("Selected id: ",id);
		this.props.fetchPost(id);
	}
	handleDelete(){
		const id = this.props.match.params.id;
		this.props.deletePost(id,()=>{this.props.history.push("/")});
	}
	render(){
		const { post } = this.props;
		if(post){
			console.log("Fetched post: ",post);
			return (<div>
					<Link to="/"> Back to index </Link>
					<button type="button" onClick={this.handleDelete.bind(this)} className="btn btn-danger pull-xs-right"> Delete Post </button>
				   <h3> { post.title } </h3>
					<h5> Categories: { post.categories } </h5>
					<p> { post.content } </p>
				   </div>
				   );
	}else{
		return <div> Loading ... </div>;
	}
 }
}

function mapStateToProps({posts},ownProps){
	return {post:posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);