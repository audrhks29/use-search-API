import { create } from 'zustand';
import axios from 'axios';

interface SearchAllStoreType {
  searchWebResults: SearchWebType[];
  searchVclipResults: any;
  fetchSearchData: (query: string, page: number) => void;
}
// web,vclip,image,blog,book,cafe
const useSearchAllStore = create<SearchAllStoreType>(set => ({
  searchWebResults: [],
  searchVclipResults: [],

  fetchSearchData: async (query, page) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const Kakao = axios.create({
      baseURL: 'https://dapi.kakao.com/v2',
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    try {
      const webResponse = await Kakao.get(`search/web?query=${query}&size=3&page=${page}`);
      const vclipResponse = await Kakao.get(`search/vclip?query=${query}&size=5&page=${page}`);
      set(
        {
          searchWebResults: webResponse.data.documents,
          searchVclipResults: vclipResponse.data.documents
        }
      );
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  },
}));


export default useSearchAllStore;