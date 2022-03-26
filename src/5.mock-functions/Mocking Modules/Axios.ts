class Axios {

  patch<T>(url: string) {
    return new Promise<T>((resolve) => {
      setTimeout(() => resolve({} as T), 1000);
    })
  }

};

const axios = new Axios();
export default axios;