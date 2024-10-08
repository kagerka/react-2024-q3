import { IAnimalResponse } from '../utils/interfaces';

class API {
  static async getData(value: string): Promise<IAnimalResponse> {
    const response = await fetch(
      `https://stapi.co/api/v1/rest/animal/search??pageNumber=1&name=${value}`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const json = (await response.json()) as IAnimalResponse;
      return json;
    }
  }
}

export default API;
