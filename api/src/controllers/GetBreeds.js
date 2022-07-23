
const getBreeds = async () => {
  const apiBreeds = await getApiBreeds();
  const dbBreeds = await getDbBreeds();
  const mappedDbBreeds = dbBreeds.map((breed) => {
    return {
      id: breed.id,
      original: breed.original,
      name: breed.name,
      origin: breed.origin,
      photo: breed.photo,
      minHeight: breed.minHeight,
      maxHeight: breed.maxHeight,
      minWeight: breed.minWeight,
      maxWeight: breed.maxWeight,
      lifeSpan: breed.lifeSpan,
      bredFor: breed.bredFor,
      temperament: breed.temperaments.map((temp) => temp.name),
    };
  });
  const breeds = apiBreeds.concat(mappedDbBreeds);
  return breeds;
};
