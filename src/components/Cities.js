import React, { Component } from 'react';


class Cities extends Component{
    render(){
        return(

              <div className="container cityPage">
              <div className="row cityRow">
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
                            <div className="col-4">
                                <h1>London</h1>
                                <h3>United Kingdom</h3>
                            </div>
                          <div className="col-3 cityImg">
                              <img alt="cityImg" src="images/london.jpg" width="450" height="250"/>
                          </div>
                        </div>

                        <h1>Posts</h1>
                        <div className="postList row">

                        <button type="button" className="btn btn-primary plusButton" data-toggle="postModal" data-target="#postModal">
                        +
                        </button>

                        <div className="postComments">
                            <img alt="postImg" src="" align="left"/>
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
