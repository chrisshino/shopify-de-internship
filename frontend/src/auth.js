import { createAuthProvider } from "react-token-auth";

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "access_token",
  onUpdateToken: (token) =>
    fetch("34.68.61.159:8080/api/auth/refresh", {
      method: "POST",
      body: token.refresh_token,
    }).then((r) => r.json()),
});
