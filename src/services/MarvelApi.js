import axios from 'axios'
import CryptoJS from 'crypto-js'

const keys = require('../../keys.json')

if (!keys)
    throw new "Keys.json not found, create in root path with keys private and public"

const baseUrlMarvel = 'https://gateway.marvel.com:443/v1/public/'

export default {
    getAllComics: (limit, callback) => {
        const timestamp = Number(new Date());
        const hash      = CryptoJS.MD5(timestamp + keys.private + keys.public)

        const urlRequest = `${baseUrlMarvel}comics?ts=${timestamp}&apikey=${keys.public}&limit=${limit}&hash=${hash}`;

        axios.get(urlRequest)
        .then((comics) => {
            if (callback)
                callback(comics) 
        }).catch((err) => {
            console.log(err)
        })
    }
}