import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '24daeebd74msh6f7a958b0d1605cp181c48jsne2413dd60bb9'
    }
  });
    
  return data;
}

