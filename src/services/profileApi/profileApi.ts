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

export const getOrderRaport = async (orderId: string): Promise<any> => {
  const response = await profileClient.get<string>(
    `/get-order-raport/${orderId}`,
    {
      headers: {
        responseType: "stream",
        ...authorizationHeader(),
      },
    },
  );
  console.log("RESP", response.data);
  // const file = new Blob([response.data], { type: "application/pdf" });
  // const fileURL = URL.createObjectURL(file);
  // window.open(fileURL);
  // console.log("REEESPONSE", response.data);
  // const binaryData = [];
  // binaryData.push(response.data);
  // const href = URL.createObjectURL(
  //   new Blob(binaryData, { type: "application/txt" }),
  // );
  // const link = document.createElement("a");
  // link.href = href;
  // link.setAttribute("download", "file.pdf"); // or any other extension
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
  // URL.revokeObjectURL(href);
  const linkSource = `data:application/pdf;base64,${response.data}`;
  const downloadLink = document.createElement("a");
  const fileName = "abc.pdf";
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
  return response.data;
};
