import crypto from 'crypto';
import axios from 'axios';

const basePath = 'http://gateway.marvel.com/v1/public';
const privateKey = 'bb71269aac7f1fbd07daf94bbe655a8dd2b8a46f';
const publicKey = '2d2ff31ff810a7ae324505ce31d28a0f';

export default class MarvelApi {
  static async getComics({ limit = 12, offset = 0 }) {
    const ts = new Date().getTime();
  
    const hash = crypto.createHash('md5')
      .update(ts + privateKey + publicKey)
      .digest("hex");

    const queryString = `?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    const result = await axios.get(`${basePath}/comics${queryString}`);

    return result.data;
  };
}
