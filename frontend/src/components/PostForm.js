import React, { Component } from 'react';

class PostForm extends Component{
    
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(e.target.name + ': ' + e.target.value)
    }
    
    render(){
        return(
            <div>
                <div className="modal fade" id="postModal" tabindex="-1" role="dialog" aria-labelledby="postModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="postModalLabel">Create a New Post:</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label>Title:</label>
                                <input type='text' name="title" placeholder="Title" required value={this.props.post.title} onChange={this.handleChange}/>
                            <label>Review:</label>
                                <input type='text' name="review" required value={this.props.post.review} onChange={this.handleChange}/>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default PostForm;