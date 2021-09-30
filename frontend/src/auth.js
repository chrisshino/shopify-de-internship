import { createAuthProvider } from "react-token-auth";

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: "access_token",
  onUpdateToken: (token) =>
    fetch("34.123.73.156:8080/api/auth/refresh", {
      method: "POST",
      mode: 'cors',
      body: token.refresh_token,
    }).then((r) => r.json()),
});
