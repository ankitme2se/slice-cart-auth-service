import { Config } from './config/index.js';
import app from './app.js';
import logger from './config/logger.js';
const port = Config.PORT;
const startServer = () => {
    try {
        app.listen(Config.PORT, () => {
            logger.info(`app is listening on port: ${port}`);
        });
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
};

startServer();
