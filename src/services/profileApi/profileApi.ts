import { authorizationHeader } from "services/authorization/authorization";
import { IProfile } from "types/api/profile/profile";

import { profileClient } from "./profileClient";

export const getProfile = async (): Promise<IProfile> => {
  const response = await profileClient.get<IProfile>("/get-profile", {
    headers: {
      ...authorizationHeader(),
    },
  });
  return response.data;
};

export const getOrderRaport = async (): Promise<any> => {
  const response = await profileClient.get<any>("/get-order-raport", {
    headers: {
      ...authorizationHeader(),
    },
  });
  return response.data;
};
