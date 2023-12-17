

class MarvelService { 
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=8631936c097425b7c1db2fb1b0fb0245';

    getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;