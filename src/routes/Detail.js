import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const {
      location: { state }
    } = this.props;

    if (state) {
      return (
        <div>
          <img src={state.poster} alt={state.title} title={state.title} />
          {state.title}
          {state.year}
          {state.summary}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
