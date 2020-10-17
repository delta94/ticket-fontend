import axios from "axios";
import { useSelector } from "react-redux";


axios.interceptors.request.use(
    res => {
        
        return res
    },
    err => {

    }
);
axios.interceptors.response.use(
    res => {
        // actionLoadding.setLoad(0)
        return res;
    },
    err => {
        // actionLoadding.setLoad(0)

        if (err.message == "Network Error") {
            // action.showMessage(I18n.t('error.server.networkError'));
        }
        if (err.response.status == 404) {
            // action.showMessage(I18n.t('error.OTP.processError'))
        }
        if (err.response.status == 401) {
            // UserService.getJWT().then(res => {
            // })

        }


        if (err.response.status == 500) {
            if (err.response.message) {
                // action.showMessage(err.response.message)
            }
            if (err.response.data && err.response.data.message) {
                // action.showMessage(err.response.data.message)
            }
            else {
                // action.showMessage(I18n.t('error.server.processError'))
            }
        }
    }
)
export const getAxios = async () => {
    
    axios.defaults.headers.common["Authorization"] = `LQN 5f78812aeb8ac1182da0ddfd`
    return axios;
}

// export const customPOST=(api : string, data : any) : Promise<any> => {
//     return  getAxios().then((axios) =>
//     axios({
//       method: "POST",
//       url: `${config.api.lendingAPI}/${api}`,
//       data: data,
//     })
//       .then((res) => {
//           return res
//       })
//       .catch((err)=>{
//         action.showMessage("Have error")
//       })
//   );
// }

// export const customGet=(api : string, params : any) : Promise<any> => {
//     return  getAxios().then((axios) =>
//     axios({
//       method: "GET",
//       url: `${config.api.lendingAPI}/${api}`,
//       data: {
//           params : params
//       },
//     })
//       .then((res) => {
//           return res
//       })
//       .catch((err)=>{
//         action.showMessage("Have error with get")
//       })
//   );
// }



// export default getAxios();