import morgan from 'morgan';
import config from '../config';

const customFormat =
  ':method :url :status :res[content-length] - :response-time ms';
export const devLogger = morgan(customFormat, {
  skip: () => config.node_env !== 'development',
});
