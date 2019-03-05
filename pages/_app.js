import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
// import Error from 'next/error';
import Rollbar from 'rollbar';
import Page from '../components/Page';
import withApollo from '../lib/withApollo';
import AppProvider from '../components/AppContext';
import ErrorFallback from '../components/ErrorFallback';
import handleError from '../lib/handleError';

class MyApp extends App {
  state = {
    hasError: false,
    errorEventId: undefined,
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // expose query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  static getDerivedStateFromProps(props, state) {
    // If there was an error generated within getInitialProps, and we haven't
    // yet seen an error, we add it to this.state here
    return {
      hasError: props.hasError || state.hasError || false,
      errorEventId: props.errorEventId || state.errorEventId || undefined,
    };
  }

  static getDerivedStateFromError() {
    // React Error Boundary here allows us to set state flagging the error (and
    // later render a fallback UI).
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    handleError(error, errorInfo);
    // Rollbar.error('Something went wrong', error);
    // console.error({ error, errorInfo });
  }

  render() {
    const { Component, apolloClient, pageProps } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // return <Error />;
      return (
        <Container>
          <ErrorFallback />
        </Container>
      );
    }

    return (
      <Container>
        <AppProvider activeTeam={pageProps.activeTeam}>
          <ApolloProvider client={apolloClient}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProvider>
        </AppProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
