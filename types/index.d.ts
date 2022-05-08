// Type definitions for moos-api
// Definitions by: Frooastside <https://github.com/wolkeneis>

export interface UserProfile {
  uid: string;
  username: string;
  avatar: string | null;
  scopes: Array<string>;
  private: boolean;
  providers?: Array<ProviderProfile>;
  clients: Array<string>;
  creationDate: number;
}

export type ProviderProfile = {
  provider: string;
  providerId: string;
  username: string;
  avatar: string | null;
};

export interface Client {
  id: string;
  name: string;
  redirectUri: string;
  owner: string;
  trusted: boolean;
  creationDate: number;
}

export namespace v1 {
  const BASE_URL = "https://moos.wolkeneis.dev/api/v1";
}
