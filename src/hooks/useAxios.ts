import { useState } from "react";
import axios, { RawAxiosRequestHeaders, AxiosResponse } from "axios";

export type RequestStates = {
	data: object | null;
	error: object | null;
	loading: boolean | null;
};

type Request = {
	url: string;
	method: string;
	body?: object | null;
	headers?: RawAxiosRequestHeaders;
};

const API = "https://api-portfolio-8l3n.onrender.com/";
axios.defaults.baseURL = API;

const useAxios = () => {
	const [data, setData] = useState<RequestStates["data"]>(null);
	const [error, setError] = useState<RequestStates["error"]>(null);
	const [loading, setLoading] = useState<RequestStates["loading"]>(null);

	const request = async ({
		url,
		method,
		body = null,
		headers = {
			"Content-Type": "application/json",
		},
	}: Request) => {
		try {
			setLoading(true);
			setError(null)
			setData(null);
			const response: AxiosResponse<any, any> = await axios(url, {
				method: method,
				headers: headers,
				data: body,
			});
			setData(response.data);
		} catch (err: any) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};
	return { data, error, loading, request, setData, setError, setLoading };
};

export default useAxios;
