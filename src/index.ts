import ENV from '@src/common/constants/ENV';
import logger from 'jet-logger';
import server from './server';

/******************************************************************************
                                  Run
******************************************************************************/

const SERVER_START_MSG = 'Express server started on port: ' + ENV.Port.toString();

server.listen(ENV.Port, () => logger.info(SERVER_START_MSG));
