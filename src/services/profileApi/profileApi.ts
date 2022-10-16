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

export const getOrderRaport = async (orderId: string): Promise<string> => {
  const response = await profileClient.get<string>(
    `/get-order-raport/${orderId}`,
    {
      headers: {
        responseType: "blob",
        ...authorizationHeader(),
      },
    },
  );
  console.log(response.data);

  return response.data;
};
