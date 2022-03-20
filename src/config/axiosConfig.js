import axios from "axios"

const devUrl='https://ty-shop.herokuapp.com/'
const paymentGateWayUrl=''
const testUrl=''
const prodUrl=""
const axiosInstance=axios.create({
    baseURL:devUrl
})

const axioxIstancePayment=axios.create({
    baseURL:paymentGateWayUrl
})

export default axiosInstance
export {axioxIstancePayment}