import { components as _components, external as _external, operations as _operations, paths as _paths } from "../reference/moos-api-v1";

declare namespace v1 {
  export type external = _external;
  export type operations = _operations;
  export type paths = _paths;

  export enum AuthScope {
    identify = "identify",
    files = "*",
    all = "*"
  }

  export type UserProfile = _components["schemas"]["UserProfile"];
  export type ProviderProfile = _components["schemas"]["ProviderProfile"];
  export type Application = _components["schemas"]["Application"];
  export type File = _components["schemas"]["File"];
}

export { v1 };
