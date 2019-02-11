import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import Page from '../components/Page';
import withApollo from '../lib/withApollo';
import AppProvider from '../components/AppContext';
import ErrorBoundary from '../components/ErrorBoundary';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // expose query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apolloClient, pageProps } = this.props;

    return (
      <Container>
        <ErrorBoundary>
          <AppProvider activeTeam={pageProps.activeTeam}>
            <ApolloProvider client={apolloClient}>
              <Page>
                <Component {...pageProps} />
              </Page>
            </ApolloProvider>
          </AppProvider>
        </ErrorBoundary>
      </Container>
    );
  }
}

export default withApollo(MyApp);
