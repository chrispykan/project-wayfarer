import React, { Component } from 'react';

class Cities extends Component{
    render(){
        return(
            <div>
                <Header/>
                <aside className="cityList">
                    <h3>Cities</h3>
                    <a>London </a>
                    <a>Sydney</a>
                    <a>San Francisco</a>
                    <a>Seattle</a>
                </aside>
                <section>
                    <div className="container">
                        <div className="row">
                            <h1>London</h1>
                            <h3>United Kingdom</h3>
                        </div>

                        <div className="cityImg">
                            <img alt="cityImg" src=""/>
                        </div>

                        <div className="postList row">

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#postModal">
                         Create a New Post
                        </button>
                            <h1>Posts</h1>
                            <img alt="postImg" src=""/>
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    
                    </div>
                </section>
            </div>
        )
    }

}

export default Cities;




//li border: black solid 1px; border-radius: 4px;