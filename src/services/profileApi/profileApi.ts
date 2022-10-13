import { authorizationHeader } from "services/authorization/authorization";
import { IProfile } from "types/api/profile/profile";

import { profileClient } from "./profileClient";

export const getProfile = async (): Promise<IProfile> => {
  const response = await profileClient.get<IProfile>("/get-profile", {
    headers: {
      ...authorizationHeader(),
    },
  });
  console.log("RESPONSE", response.data);
  return response.data;
};
