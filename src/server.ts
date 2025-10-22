import { Config } from './config/index.js';
import app from './app.js';

const port = Config.PORT;
const startServer = () => {
    try {
        app.listen(Config.PORT, () => {
            console.log(`app listening on port: ${port}`);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();
