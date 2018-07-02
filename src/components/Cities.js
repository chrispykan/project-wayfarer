import React, { Component } from 'react';


class Cities extends Component{
    render(){
        return(
            
              <div className="container">
              <div className="row">
                <div className="col-5">
                        <aside>
                            <h3>Cities</h3>
                            <div className="cityList">
                                <img className="thumbnailCityImg" alt="LondonImg" src="/images/london.jpg"/>
                                <a>London </a>
                            </div>

                            <div className="cityList">
                                <img className="thumbnailCityImg" alt="SydneyImg" src="/images/sydney.jpg"/>
                                <a>Sydney</a>
                            </div>

                            <div className="cityList">
                                <img  className="thumbnailCityImg"alt="SFImg" src="/images/bay-bridge.jpg"/>
                                <a>San Francisco</a>
                            </div>

                            <div className="cityList"> 
                                <img className="thumbnailCityImg" alt="SeattleImg" src="/images/seattle.jpg"/>
                                <a>Seattle</a>
                            </div>
                        </aside>
                    </div>
                    <div className="col-7">
                    <section>
                        <div className="row cityInfo">
                            <div className="col-3">
                                <h1>London</h1>
                                <h3>United Kingdom</h3>
                            </div>

                        <div className="col-3 cityImg">
                            <img alt="cityImg" src=""/>
                        </div>
                        </div>
                        <button className="btn btn-info create" data-toggle="modal" data-target="#postModal">
                        Create a New Post
                        </button>
                        <h1>Posts</h1>
                        <div className="postList row">
                           <div className="col-4">
                            <img alt="postImg" src=""/>
                            </div>
                            <div className="col-8">
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </section>
                    </div>
                    </div>
                </div>
            
        )
    }

}

export default Cities;




//li border: black solid 1px; border-radius: 4px;