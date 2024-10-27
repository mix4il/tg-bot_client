import axios, {isAxiosError} from "axios";
import { API_URL } from "@/shared/helpers";

class HTTPService {
    client = axios.create({
        baseURL: API_URL
    })
    baseURL = API_URL

    get<Response, Params = unknown>(url: string, params?: Params) {
        try {
            return this.client
                .get<Response>(url, params)
                .catch(error => {
                    if (isAxiosError<Response>(error)) {
                        return error.response
                    }
                })
        } catch (error) {
            console.log('[ERROR]', error)
        }
    }

    post<Response, Data = unknown>(url: string, data?: Data) {
        try {
            return this.client.post<Response, Data>(url, data).catch(error => {
                if (isAxiosError(error)) {
                    return error.response
                }
            })
        } catch (error) {
            console.log('[ERROR]', error)
        }
    }

    patch<Response, Data = unknown>(url: string, data?: Data) {
        try {
            return this.client.patch<Response, Data>(url, data).catch(error => {
                if (isAxiosError(error)) {
                    return error.response
                }
            })
        } catch (error) {
            console.log('[ERROR]', error)
        }
    }

    delete<Response, Params = unknown>(url: string, params?: Params) {
        try {
            return this.client.delete<Response>(url, params).catch(error => {
                if (isAxiosError(error)) {
                    return error.response
                }
            })
        } catch (error) {
            console.log('[ERROR]', error)
        }
    }
}

export const HttpService = new HTTPService()