import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';
import { isProduction } from '../lib/utils';

const SENTRY_DSN = null;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidMount() {
    if (isProduction) {
      if (!SENTRY_DSN) {
        console.warning(
          'No Sentry token has been set, errors will not be reported'
        );
      } else {
        Sentry.init({
          dsn: SENTRY_DSN,
        });
      }
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    if (isProduction) {
      this.setState({ error });
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
      });
    } else {
      throw error;
    }
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error && SENTRY_DSN) {
      // render fallback UI
      return (
        <a
        // onClick={() => Sentry.showReportDialog()}
        >
          Report feedback
        </a>
      );
    }
    // when there's not an error, render children normally
    return children;
  }
}

export default ErrorBoundary;
