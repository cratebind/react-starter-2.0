import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

// only show loading bar after delay
class ProgressBar extends React.Component {
  static defaultProps = {
    color: '#2299DD',
    showAfterMs: 400,
    spinner: true,
  };

  timer = null;

  componentDidMount() {
    const { options } = this.props;

    if (options) {
      NProgress.configure(options);
    }

    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeEnd);
    Router.events.on('routeChangeError', this.routeChangeEnd);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    Router.events.off('routeChangeStart', this.routeChangeStart);
    Router.events.off('routeChangeComplete', this.routeChangeEnd);
    Router.events.off('routeChangeError', this.routeChangeEnd);
  }

  routeChangeStart = () => {
    const { showAfterMs } = this.props;
    clearTimeout(this.timer);
    this.timer = setTimeout(NProgress.start, showAfterMs);
  };

  routeChangeEnd = () => {
    clearTimeout(this.timer);
    NProgress.done();
  };

  render() {
    // const { color, spinner } = this.props;

    return <div />;
  }
}

export default ProgressBar;
