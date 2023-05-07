import {AxiosResponse} from 'axios';
import {CHARACTERS_ROUTE} from '../components/constants/api';
import {ICharactersPage} from '../types';
import {apiClient} from './config';

export const getCharacters = async (): Promise<ICharactersPage | null> => {
  try {
    const response: AxiosResponse = await apiClient.get(CHARACTERS_ROUTE);
    const data: ICharactersPage = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

