import axios from 'axios';
import { useEffect, useState } from 'react';

const useSneakers = () => {
  const [sneakers, setSneakers] = useState([]);
  const [pages, setPages] = useState(0);

  const getSneakers = async (pag, genr) => {
    const options = {
      method: 'GET',
      url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
      params: {
        limit: '12', gender: 'men', colorway: 'red', releaseYear: '2021', page: pag,
      },
      headers: {
        'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
        'x-rapidapi-key': 'a4ab1d374amshf8982cc4b9da65bp19c79ejsnb0077dd65fbf',
      },
    };
    console.log(genr);
    setPages(pag);

    try {
      const response = await axios.request(options);
      return setSneakers(response.data.results);
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    getSneakers(pages);
  }, []);

  return {
    pages,
    sneakers,
    getSneakers,
  };
};

export default useSneakers;
