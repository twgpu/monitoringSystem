import DeviceEntity from "domain/entity/DeviceEntity"

/**
 * @description app service layer params
*/
declare namespace AppServiceParams {
    interface EntryAPP {
        loginParams: {
            account: string,
            password: string
        }
    }
    interface DeviceApp {
        getParams: {}
        deleteParams: {}
        updateParams: {}
        addParams: {}
        dataReceiveParams: {}
    }
}

/**
 * @description app service layer interface
*/
declare namespace AppService {
    interface Instance {
        EntryApp: EntryApp
        DeviceApp: DeviceApp
        DataMonitorApp: DataMonitorApp
    }

    /**
     * @description 資料監控app
    */
   interface DataMonitorApp {
   }

    /**
     * @description 入口app
    */
    interface EntryApp {
        /**
         * @description 登入
         * 
         * @returns JWT token
        */
        login({ account, password }: AppServiceParams.EntryAPP["loginParams"]): string
    }

    /**
     * @description 裝置app
    */
    interface DeviceApp {
        /**
         * @description 取得裝置
         * 
         * @returns 裝置list
        */
        get(params: AppServiceParams.DeviceApp["getParams"]): DeviceEntity[]

        /**
         * @description 刪除裝置
         * 
         * @returns 是否刪除成功
        */
        delete(params: AppServiceParams.DeviceApp["deleteParams"]): boolean

        /**
         * @description 更新裝置
         * 
         * @returns 是否更新成功
        */
        update(params: AppServiceParams.DeviceApp["updateParams"]): boolean

        /**
         * @description 新增裝置
         * 
         * @returns 是否新增成功
        */
        add(params: AppServiceParams.DeviceApp["addParams"]): boolean

        /**
         * @description 資料收集 from esp32
         * 
         * @returns
        */
        dataReceive(params: AppServiceParams.DeviceApp["dataReceiveParams"]): void
    }
}