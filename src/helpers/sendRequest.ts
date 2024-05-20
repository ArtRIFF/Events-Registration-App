export const sendRequest = async (url: string, method = "GET", config: RequestInit | undefined = undefined)  => {
    return await fetch(url, {
      method,
      ...config,
    }).then((response) => {
      if (response.ok) {
        if (method === "GET" || method === "POST" || method === "PUT") {
          return response.json();
        }
        return response;
      } else {
        throw new Error("error");
      }
    })
  };
  