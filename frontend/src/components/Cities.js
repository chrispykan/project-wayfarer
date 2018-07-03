import React, { Component } from 'react';
class Cities extends Component{
    render(){
        return(
            <div className="container cityPage">
              <div className="row cityRow">
                <div className="col-5">
                <aside>
                    <h3>Cities</h3>
                    <a className="cityNameLink" href="#">
                      <div className="cityList">
                          <img className="thumbnailCityImg" alt="LondonImg" src="/images/london.jpg"/>
                          <span className="asideCityName">London </span>
                      </div>
                    </a>
                    <a className="cityNameLink" href="#">
                      <div className="cityList">
                          <img className="thumbnailCityImg" alt="SydneyImg" src="/images/sydney.jpg"/>
                          <span className="asideCityName">Sydney</span>
                      </div>
                    </a>
                    <a className="cityNameLink" href="#">
                      <div className="cityList">
                          <img  className="thumbnailCityImg"alt="SFImg" src="/images/bay-bridge.jpg"/>
                          <span className="asideCityName">San Francisco</span>
                      </div>
                    </a>
                    <a className="cityNameLink" href="#">
                      <div className="cityList">
                          <img className="thumbnailCityImg" alt="SeattleImg" src="/images/seattle.jpg"/>
                          <span className="asideCityName">Seattle</span>
                      </div>
                    </a>
                </aside>
                    </div>
                    <div className="col-7">
                    <section className="main-container">
                        <div className="row cityInfo">
                              <div className="cityCountryInfo">
                                <h1 >London</h1>
                                <h3>United Kingdom</h3>
                              </div>
                              {/* <div className="cityImageDiv"> */}
                                <img className="cityImg" alt="cityImg" src="images/london.jpg"/>
                              {/* </div> */}
                        </div>
                        <div className="postList row">
                          <section className="postAndButton">
                            <h1 className="postsTitle">Posts</h1>
                            <button type="button" className="btn btn-primary plusButton" data-toggle="postModal" data-target="#postModal">
                              +
                            </button>
                          </section>
                        <div className="postComments">
                          <img className="commentImg" alt="London" src="images/london.jpg"/>
                          <section class="postCommentDetail">
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                          </section>
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