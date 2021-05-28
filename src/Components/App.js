import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import 'semantic-ui-css/semantic.min.css'

const KEY = 'AIzaSyDI1_5nGR-rw_4nZ2PmpYRHLpGMNuoy2i0';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = (term) => {
    youtube
      .get('/search', {
        params: {
          part: 'snippet',
          q: term,
          key: KEY,
        },
      })
      .then((films) => {
        this.setState({
          videos: films.data.items,
          selectedVideo: films.data.items[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
