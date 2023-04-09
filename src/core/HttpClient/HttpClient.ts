export default class HttpClient {
  public static get<T>(url: string, accessToken?: string): Promise<T> {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('error');
      })
      .catch((error) => console.error(error));
  }
}
