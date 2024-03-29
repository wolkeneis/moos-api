/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export type paths = {
  "/profile": {
    /**
     * Fetch Profile 
     * @description Get your own Profile.
     */
    post: operations["fetch-profile"];
    /**
     * Patch Profile 
     * @description Update your own Profile information.
     */
    patch: operations["patch-profile"];
  };
  "/profile/applications": {
    /**
     * Fetch Applications 
     * @description Get a list of your applications.
     */
    post: operations["post-profile-applications"];
  };
  "/profile/friends": {
    /**
     * Fetch Profile of a friend 
     * @description Get a list of your friends.
     */
    post: operations["post-profile-friends"];
  };
  "/profile/friend/{friendId}": {
    /**
     * Add Friend 
     * @description Begin a friendship.
     */
    put: operations["put-profile-friend"];
    /**
     * Remove Friend 
     * @description End a friendship.
     */
    delete: operations["delete-profile-friend"];
    parameters: {
      path: {
        friendId: string;
      };
    };
  };
  "/profile/friend/{friendId}/applications": {
    /**
     * List all Applications of a friend 
     * @description Get a list of the applications of a friend, which you are allowed to see.
     */
    post: operations["post-profile-friend-applications"];
    parameters: {
      path: {
        friendId: string;
      };
    };
  };
  "/profile/friend/{friendId}/files": {
    /**
     * List all Files of a friend 
     * @description Get a list of the files of a friend, which you are allowed to see.
     */
    post: operations["post-profile-friend-files"];
    parameters: {
      path: {
        friendId: string;
      };
    };
  };
  "/profile/friend/{friendId}/friends": {
    /**
     * List all Friends of a friend 
     * @description Get a list of the friends of a friend, which you are allowed to see.
     */
    post: operations["post-profile-friend-friends"];
    parameters: {
      path: {
        friendId: string;
      };
    };
  };
  "/profile/files": {
    /**
     * List all Files 
     * @description Get a list of your own files.
     */
    post: operations["post-profile-files"];
  };
  "/profile/file": {
    /**
     * Create File 
     * @description Request a pre-signed upload url for a file you want to upload, if you are logged in with a session cookie.
     */
    put: operations["put-profile-file"];
    /**
     * Get File 
     * @description Request a pre-signed download url for a file you want to download, if you are logged in with a session cookie.
     */
    post: operations["post-profile-file"];
    /**
     * Delete File 
     * @description Delete the file selected with the id parameter, if you are logged in with a session cookie.
     */
    delete: operations["delete-profile-file"];
    /**
     * Patch File Metadata 
     * @description Update the metadata of one of your files, if you are logged in with a session cookie.
     */
    patch: operations["patch-profile-file"];
  };
  "/csrf-token": {
    /**
     * Request CSRF-Token 
     * @description Endpoint for requesting the CSRF Token
     */
    get: operations["get-csrf-token"];
    /**
     * Test CSRF-Token 
     * @description Endpoint for testing the CSRF Token
     */
    post: operations["test-csrf-token"];
  };
  "/session": {
    /**
     * Request Session 
     * @description Endpoint for requesting a session cookie
     */
    post: operations["request-session"];
    /**
     * Revoke Session 
     * @description Endpoint for revoking a session cookie
     */
    delete: operations["revoke-session"];
  };
  "/application/profile": {
    /**
     * Fetch User Profile 
     * @description Fetch profile associated with the bearer token.
     */
    get: operations["get-application-profile"];
  };
};

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    /** profile */
    UserProfile: {
      /** Format: uuid */
      uid: string;
      username: string;
      /** Format: uri */
      avatar: OneOf<[string, null]>;
      scopes: ("*")[];
      /** @default false */
      private: boolean;
      providers?: (components["schemas"]["ProviderProfile"])[];
      /** Format: int64 */
      creationDate: number;
    };
    /** friend */
    Friend: {
      /** Format: uuid */
      uid: string;
      username: string;
      /** Format: uri */
      avatar: OneOf<[string, null]>;
      scopes?: ("*")[];
      /** @default false */
      private: boolean;
      consensual: boolean;
      /** Format: int64 */
      creationDate: number;
    };
    /** provider-profile */
    ProviderProfile: {
      /** @enum {string} */
      provider: "discord" | "google";
      providerId: string;
      username: string;
      /** Format: uri */
      avatar: OneOf<[string, null]>;
    };
    /** application */
    Application: {
      /** Format: uuid */
      id: string;
      name: string;
      /** Format: uri */
      redirectUri: string;
      /** Format: uuid */
      owner: string;
      /** @default false */
      trusted: boolean;
      /** Format: int64 */
      creationDate: number;
    };
    /** file */
    File: {
      /** Format: uuid */
      id: string;
      /** Format: uuid */
      name: string;
      /** Format: uuid */
      owner: string;
      /** @default true */
      private: boolean;
      /** Format: int64 */
      size: number;
      /** Format: int64 */
      creationDate: number;
      /** Format: int64 */
      lastModified: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: {
  };
  headers: never;
  pathItems: never;
};

export type external = Record<string, never>;

export type operations = {

  /**
   * Fetch Profile 
   * @description Get your own Profile.
   */
  "fetch-profile": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["UserProfile"];
        };
      };
      /** @description Unauthorized */
      401: never;
      /** @description Invalid csrf token */
      403: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Patch Profile 
   * @description Update your own Profile information.
   */
  "patch-profile": {
    requestBody: {
      content: {
        "application/json": {
          private?: boolean;
        };
      };
    };
    responses: {
      /** @description OK */
      200: never;
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Fetch Applications 
   * @description Get a list of your applications.
   */
  "post-profile-applications": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["Application"])[];
        };
      };
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Fetch Profile of a friend 
   * @description Get a list of your friends.
   */
  "post-profile-friends": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["Friend"])[];
        };
      };
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Add Friend 
   * @description Begin a friendship.
   */
  "put-profile-friend": {
    parameters: {
      path: {
        friendId: string;
      };
    };
    responses: {
      /** @description Created */
      201: never;
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Invalid CSRF Token */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Remove Friend 
   * @description End a friendship.
   */
  "delete-profile-friend": {
    parameters: {
      path: {
        friendId: string;
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Invalid CSRF Token */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * List all Applications of a friend 
   * @description Get a list of the applications of a friend, which you are allowed to see.
   */
  "post-profile-friend-applications": {
    parameters: {
      path: {
        friendId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["Application"])[];
        };
      };
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * List all Files of a friend 
   * @description Get a list of the files of a friend, which you are allowed to see.
   */
  "post-profile-friend-files": {
    parameters: {
      path: {
        friendId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["File"])[];
        };
      };
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * List all Friends of a friend 
   * @description Get a list of the friends of a friend, which you are allowed to see.
   */
  "post-profile-friend-friends": {
    parameters: {
      path: {
        friendId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["Friend"])[];
        };
      };
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * List all Files 
   * @description Get a list of your own files.
   */
  "post-profile-files": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["File"])[];
        };
      };
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Create File 
   * @description Request a pre-signed upload url for a file you want to upload, if you are logged in with a session cookie.
   */
  "put-profile-file": {
    requestBody: {
      content: {
        "application/json": {
          name: string;
          /** @default true */
          private?: boolean;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            /** Format: uuid */
            id: string;
            /** Format: uri */
            url: string;
            /** Format: int64 */
            ttl: number;
          };
        };
      };
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Invalid CSRF Token */
      403: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Get File 
   * @description Request a pre-signed download url for a file you want to download, if you are logged in with a session cookie.
   */
  "post-profile-file": {
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
          /**
           * Format: int64 
           * @default 14400
           */
          ttl?: number;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            /** Format: uuid */
            id: string;
            /** Format: uri */
            url: string;
            /** Format: int64 */
            ttl: number;
          };
        };
      };
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Delete File 
   * @description Delete the file selected with the id parameter, if you are logged in with a session cookie.
   */
  "delete-profile-file": {
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
        };
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Invalid CSRF Token */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Patch File Metadata 
   * @description Update the metadata of one of your files, if you are logged in with a session cookie.
   */
  "patch-profile-file": {
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
          private?: boolean;
          name?: string;
        };
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: never;
      /** @description Unauthorized */
      401: never;
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Request CSRF-Token 
   * @description Endpoint for requesting the CSRF Token
   */
  "get-csrf-token": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            _csrf: string;
          };
        };
      };
    };
  };
  /**
   * Test CSRF-Token 
   * @description Endpoint for testing the CSRF Token
   */
  "test-csrf-token": {
    responses: {
      /** @description No Content */
      204: never;
      /** @description Invalid csrf token */
      403: never;
    };
  };
  /**
   * Request Session 
   * @description Endpoint for requesting a session cookie
   */
  "request-session": {
    requestBody: {
      content: {
        "application/json": {
          token: string;
        };
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: never;
      /** @description Invalid csrf token */
      403: never;
    };
  };
  /**
   * Revoke Session 
   * @description Endpoint for revoking a session cookie
   */
  "revoke-session": {
    responses: {
      /** @description No Content */
      204: never;
      /** @description Invalid csrf token */
      403: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  /**
   * Fetch User Profile 
   * @description Fetch profile associated with the bearer token.
   */
  "get-application-profile": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["UserProfile"];
        };
      };
      /** @description Bad Request */
      400: never;
    };
  };
};
