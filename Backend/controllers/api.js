require('dotenv').config();

const axios = require('axios');

const youtubeKey = process.env.YOUTUBE_API_KEY;
const youtubeURL = process.env.youtube_api_url;
const moviesURL = process.env.movies_api_url;
const CharUrl = process.env.chars_api_url;
const BooksUrl = process.env.books_api_url;

module.exports.youtubeAPI = async (req, res) => {
    const { title } = req.query;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    console.log("This is YouTube API KEY : ", youtubeKey);
    console.log("Render Environment Variables:", process.env);

    try {
        const response = await axios.get(youtubeURL, {
            params: {
                part: 'snippet',
                q: `${title} trailer`,
                key: youtubeKey,
                type: 'video',
            },
        });

        console.log("YouTube API Response:", response.data);

        const trailer = response.data.items[0];
        res.json(trailer);
    } catch (error) {
        console.error("YouTube API Error:", error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch trailer' });
    }
}

module.exports.getMovies = async (req, res) => {
    try {
        const response = await axios.get(moviesURL);
        const Data = response.data.data;
        res.json(Data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: `${error.message}` });
    }
}

module.exports.getBooks = async (req, res) => {
    try {
        const response = await axios.get(BooksUrl);
        const Data = response.data.data;
        res.json(Data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `${error.message}` });
    }
}

module.exports.getCharacters = async (req, res) => {
    try {
        const response = await axios.get(CharUrl);
        const Data = response.data.data;
        res.json(Data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `${error.message}` });
    }
}