import { useState } from "react";
import axios, { RawAxiosRequestHeaders, AxiosResponse } from "axios";

type Request = {
	url: string;
	method: string;
	body: object | null;
	headers: RawAxiosRequestHeaders;
};

const API = "............";
axios.defaults.baseURL = API;

const useAxios = () => {
	const [data, setData] = useState<object | null>(null);
	const [error, setError] = useState<object | null>(null);
	const [loading, setLoading] = useState<boolean | null>(null);

	const request = async ({
		url,
		method,
		body = null,
		headers = {
			"Content-Type": "application/json",
		},
	}: Request) => {
		let sucessRequest: boolean;
		try {
			setLoading(true);
			setError(null);
			setData(null);
			const response: AxiosResponse<any, any> = await axios(url, {
				method: method,
				headers: headers,
				data: body,
			});
			setData(response.data);
			sucessRequest = true;
		} catch (err: any) {
			sucessRequest = false;
			setError(err);
		} finally {
			setLoading(false);
			return sucessRequest!;
		}
	};
	return { data, error, loading, request, setData, setError, setLoading };
};

export default useAxios;
