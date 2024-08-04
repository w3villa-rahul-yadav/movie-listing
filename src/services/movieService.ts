import axiosInstance from './axiosConfig';
import { Movie } from '../types/movie';

export const fetchMovies = async (page: number): Promise<Movie[]> => {
  const response = await axiosInstance.get(`/data/page${page}.json`);
  return response.data.page["content-items"].content.map((item: any, index: number) => ({
    id: `${page}-${index}`,  // Combining page number with index to ensure uniqueness
    title: item.name,
    imageUrl: `https://test.create.diagnal.com/images/${item['poster-image']}`, // Ensure the full URL is correct
  }));
};
