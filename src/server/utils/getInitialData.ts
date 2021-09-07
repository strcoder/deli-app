/* eslint-disable no-param-reassign */
import qs from 'qs';
import { Request } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '../config';
import { ContextInterface } from '../../frontend/utils/interface/Context';
import { PaginatedResult } from '../../frontend/utils/interface';
import { InstituteInterface } from '../../frontend/utils/interface/Institute';
import UserInterface from '../../frontend/utils/interface/User';
import ReportInterface from '../../frontend/utils/interface/Report';
import ChatInterface from '../../frontend/utils/interface/Chat';
import RegistrationInterface from '../../frontend/utils/interface/Registration';

const getInitialData = async (req: Request, mutateObj: Partial<ContextInterface>): Promise<Partial<ContextInterface>> => {
  const { token } = req.cookies;
  const path = req.originalUrl.split('?').shift();
  const query = Object.keys(req.query).length > 0 ? `?${qs.stringify(req.query)}` : '';
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (token) {
    const { data } = await axios.get<{ data: UserInterface }>(`${API_URL}/users/@me`, config);
    mutateObj.user = data.data;

  return mutateObj;
};

export default getInitialData;
