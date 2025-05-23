/* eslint-disable @typescript-eslint/no-unused-vars */

import { Server } from 'http';
import { app } from './app';
import config from './app/config';
import connectDB from './app/db/db';
import ApiError from './app/error/ApiError';
import initializeScheduledJobs from './app/jobs/schedular';

let server: Server;

const startServer = (): Promise<Server> => {
  const port = config.port || 3000;
  return new Promise<Server>(resolve => {
    server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      initializeScheduledJobs();
    });
    resolve(server);
  });
};
async function main() {
  try {
    await connectDB();

    server = await startServer();
  } catch (err) {
    throw new ApiError(500, `Failed to start server: ${err}`);
  }
}

main();

process.on('unhandledRejection', (reason, err) => {
  console.error(
    'Unhandled Rejection at caught.Shutting down the server ....',
    reason,
    err,
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.error('Unhandled Exception caught.Shutting down the server ....');
  process.exit(1);
});
