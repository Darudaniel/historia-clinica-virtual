// import "@/styles/components/YouTubeVideo.css"
import React from "react";
import YouTube from "react-youtube";

export default class YouTubeVideo extends React.Component {

  render() {

    const { videoId, width } = this.props;


    const opts = {
      width: "250",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
      <div className="video-container">
        <YouTube 
          videoId={videoId} 
          opts={opts} 
          onReady={this._onReady} 
        />
      </div>
    );
  }

  _onReady(event) {
      event.target.pauseVideo();
  }
}