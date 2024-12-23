import { Repository } from "types/Repository"
import DeviceRepo from "./DeviceRepo"
import UserRepo from "./UserRepo"
import { DataSource, DataSourceOptions } from "typeorm";
import DeviceDataRepo from "./DeviceDataRepo";

const index = (option: DataSourceOptions): Repository.Instance => {
    const appDataSource = new DataSource(option);
    appDataSource.initialize()
    return {
        Device: new DeviceRepo(appDataSource),
        DeviceData: new DeviceDataRepo(appDataSource),
        User: new UserRepo(appDataSource)
    }
}

export default index