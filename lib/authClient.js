import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

const AUTH_BASE_URL =
  "https://ep-frosty-credit-ayfa6kro.neonauth.c-5.us-east-2.aws.neon.tech/neondb/auth";

export const authClient = createAuthClient({
  baseURL: AUTH_BASE_URL,
  plugins: [
    expoClient({
      scheme: "ehp",
      storagePrefix: "ehp",
      storage: SecureStore,
    }),
  ],
});
