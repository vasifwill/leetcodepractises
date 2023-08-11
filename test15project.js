const PlayButton = () => (
    <button
      aria-label="Play button"
      type="button"
      className="player-controls__btn player-controls__play-btn"
    />
  );
  
  const PauseButton = () => (
    <button
      aria-label="Pause button"
      type="button"
      className="player-controls__btn player-controls__pause-btn"
      onClick={onClick}
    />
  );
  
  const NextButton = () => (
    <button
      aria-label="Next button"
      type="button"
      className="player-controls__btn player-controls__next-btn"
    />
  );
  
  const PreviousButton = () => (
    <button
      aria-label="Previous button"
      type="button"
      className="player-controls__btn player-controls__prev-btn"
    />
  );
  
  const App = () => {
    const tracks = [
      {
        id: 1,
        name: 'Yesterday',
        artist: 'Beatles',
      },
      {
        id: 2,
        name: 'Nothing else matters',
        artist: 'Metallica',
      },
      {
        id: 3,
        name: 'Always',
        artist: 'Bon Jovi',
      },
      {
        id: 4,
        name: 'Waka Waka',
        artist: 'Shakira',
      },
    ];
    const [selectedTrack, setSelectedTrack] = React.useState({ ...tracks[0] });
    const [isPaused, setPaused] = React.useState(true);
  
    const onNextButtonClick = () => {
      // TODO: Write your code here
      
    };
    const onPreviousButtonClick = () => {
      // TODO: Write your code here
    };
  
    const renderTracks = () => tracks.map((track) => (
      <div className={`tracks-list__item ${selectedTrack.id === track.id ? 'tracks-list__item--selected' : ''}`} key={track.id}>
        <span className="tracks-list__name">{track.name}</span>
        <span className="tracks-list__artist">
          &nbsp;—&nbsp;
          {track.artist}
        </span>
      </div>
    ));
  
    return (
      <main>
        <div className="tracks-list">
          <h2 className="tracks-list__title">Tracks</h2>
          {renderTracks()}
        </div>
        <div className="player-controls">
          <PreviousButton />
          <PlayButton />
          <PauseButton onClick={setPaused(!isPaused)}/>
          <NextButton />
          <div className="player-controls__track">
            <span className="track__name">{selectedTrack.name}</span>
            <span className="track__artist">{selectedTrack.artist}</span>
          </div>
        </div>
      </main>
    );
  };
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );

  
//   CSS
* {
    box-sizing: border-box;
  }
  
  main {
    padding: 0 16px;
    font-family: sans-serif;
  }
  
  .player-controls {
    display: flex;
    flex-direction: row;
    background: rgba(255, 255, 255, 0.8);
    align-items: center;
  
    .player-controls__btn {
      border: none;
      background-color: transparent;
      width: 30px;
      height: 30px;
      margin: 6px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      opacity: .5;
  
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  
    .player-controls__play-btn {
      background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557136695174/play-right-arrow-circular-button.svg");
    }
  
    .player-controls__pause-btn {
      background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557137524244/rounded-pause-button.svg");
    }
  
    .player-controls__next-btn {
      background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557137539567/next-button.svg");
    }
  
    .player-controls__prev-btn {
      background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557138446191/previous-button.svg");
    }
  
    .player-controls__track {
      padding: 6px;
      display: flex;
      flex-direction: column;
  
      .track__name {
        font-weight: 600;
        color: black;
        line-height: 20px;
        font-size: 14px;
      }
  
      .track__artist {
        color: #777;
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  
  .tracks-list {
  
    .tracks-list__name {
      color: black;
      line-height: 20px;
      font-size: 14px;
    }
  
    .tracks-list__artist {
      color: #777;
      line-height: 20px;
      font-size: 14px;
    }
  
    .tracks-list__item {
      display: flex;
      padding: 6px;
    }
  
    .tracks-list__item--selected {
      border: 2px solid #f33;
    }
  
    .tracks-list__title {
      padding: 6px;
    }
  }
  