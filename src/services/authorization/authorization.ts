interface AuthorizationHeader {
  Authorization: string;
}

export const authorizationHeader = (): AuthorizationHeader => {
  return {
    Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
  };
};
