interface RequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: { [key: string]: string };
}

async function request<T>(url: string, options: RequestOptions): Promise<T> {
    const fetchOptions: RequestInit = {
        method: options.method,
        headers: options.headers,
    };

    if (options.body instanceof FormData) {
        // FormData handles its own content-type
        fetchOptions.body = options.body;
    } else if (options.body) {
        fetchOptions.headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            ...options.headers
        };
        fetchOptions.body = JSON.stringify(options.body);
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}

export async function get<T>(url: string): Promise<T> {
    return request<T>(url, { method: 'GET' });
}

export async function post<T>(url: string, body?: any): Promise<T> {
    return request<T>(url, { method: 'POST', body });
}

export async function put<T>(url: string, body?: any): Promise<T> {
    return request<T>(url, { method: 'PUT', body });
}

export async function remove<T>(url: string): Promise<T> {
    return request<T>(url, { method: 'DELETE' });
}

export async function uploadFile<T>(url: string, file: File, additionalData?: { [key: string]: any }): Promise<T> {
    const formData = new FormData();
    formData.append('file', file);

    if (additionalData) {
        for (const key in additionalData) {
            formData.append(key, additionalData[key]);
        }
    }

    return request<T>(url, { method: 'POST', body: formData });
}
