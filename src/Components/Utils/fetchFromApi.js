import axios from 'axios'

const env = 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLza';
const baseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url)=>{
  const { data } = await axios.get(`${baseUrl}/${url}`, options)
  return data;
}

// for fetch

// const baseurl = 'https://youtube-v31.p.rapidapi.com/search'
      
// useEffect(() => {
//     const options = {
//         params: {
//           maxResults: '50'
//         },
//         headers: {
//           'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLza',
//           'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//         }
//       };

//        axios.get(`${baseurl}`, options).then((res)=>{
//         console.log(res.data.items)
//        })
// }, [])