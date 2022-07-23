
const getTemperaments = async () => {
    const breeds = await getBreeds();
    breeds.forEach((breed) => {
      if (breed.temperament) {
        for (let i = 0; i < breed.temperament.length; i++) {
          Temperament.findOrCreate({
            where: { name: breed.temperament[i].trim() },
          });
        }
      }
    });
    return await Temperament.findAll();
  };