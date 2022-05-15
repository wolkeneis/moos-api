import { components as _components, external as _external, operations as _operations, paths as _paths } from "../reference/moos-api-v1";

declare namespace v1 {
  export type components = _components;
  export type external = _external;
  export type operations = _operations;
  export type paths = _paths;

  export enum AuthScope {
    identify = "identify",
    all = "*"
  }
}

export { v1 };
