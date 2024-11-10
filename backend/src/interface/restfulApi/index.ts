import { Request, Response, Express } from 'express';
import { createServer } from 'http';

import EntryController from './controller/Entry';
import DeviceController from './controller/Device';

const index = ({ app, port }: { app: Express, port: number }): void => {
    app.get('/entry/login', EntryController.login);

    // 裝置
    app.get('/device', DeviceController.get);
    app.put('/device', DeviceController.add);
    app.post('/device', DeviceController.update);
    app.delete('/device', DeviceController.delete);
    app.get("/device", DeviceController.dataReceive)

    const apiServer = createServer(app);
    apiServer.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

export default index