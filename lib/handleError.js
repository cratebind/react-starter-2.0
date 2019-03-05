import Rollbar from 'rollbar';
import { rollbarToken } from '../config';

function handleError(error, info) {
  // only capture errors when not in production / staging environments
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'staging'
  ) {
    const rollbar = new Rollbar({
      accessToken: rollbarToken,
      captureUncaught: true,
      captureUnhandledRejections: true,
    });
    rollbar.error(error, info);
    console.error({ error, info });
  }
}

export default handleError;
