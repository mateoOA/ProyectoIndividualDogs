const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;

const getApiBreeds = async () => {
    const fullApiData = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const filteredData = await fullApiData.data.map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
        photo: breed.image.url,
        minHeight: Number(breed.height.metric.split("-")[0] || 0),
        maxHeight: Number(breed.height.metric.split("-")[1] || 0),
        minWeight: Number(breed.weight.metric.split("-")[0] || 0),
        maxWeight: Number(breed.weight.metric.split("-")[1] || 0),
        lifeSpan: breed.life_span,
        temperament: breed.temperament?.includes(",")? breed.temperament?.split(",").map((temp) => temp.trim())
          : breed.temperament?.split(),
      };
    });
    return filteredData;
  };