import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    return (
      <html lang="en-US">
        <React.StrictMode>
          <Head>{this.props.styleTags}</Head>
          <body>
            <div id="notifications" />
            <Main />
            <NextScript />
          </body>
        </React.StrictMode>
      </html>
    );
  }
}
