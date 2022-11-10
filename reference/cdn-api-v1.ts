/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** Type helpers */
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
    /** Logout */
    delete: operations["delete-profile"];
  };
  "/file": {
    /**
     * Create File 
     * @description Request a pre-signed upload url for a file you want to upload, if you are logged in with a session cookie and have permission.
     */
    put: operations["put-profile-file"];
    /**
     * Get File 
     * @description Request a pre-signed download url for a file you want to download, if you are logged in with a session cookie and have permission.
     */
    post: operations["post-profile-file"];
    /**
     * Delete File 
     * @description Delete the file selected with the id parameter, if you are logged in with a session cookie and have permission.
     */
    delete: operations["delete-profile-file"];
    /**
     * Patch File Metadata 
     * @description Update the metadata of one of your files, if you are logged in with a session cookie and have permission.
     */
    patch: operations["patch-profile-file"];
  };
  "/collections": {
    /**
     * List all Collections 
     * @description Get a list of the collections, which you are allowed to see.
     */
    post: operations["post-profile-collections"];
  };
  "/collection": {
    /** Create Collection */
    put: operations["put-profile-collection"];
    /** Get Collection */
    post: operations["post-profile-collection"];
    /** Delete Collection */
    delete: operations["delete-profile-collection"];
    /** Patch Collection */
    patch: operations["patch-profile-collection"];
  };
  "/season": {
    /** Create Season */
    put: operations["put-profile-season"];
    /** Get Season */
    post: operations["post-profile-season"];
    /** Delete Season */
    delete: operations["delete-profile-season"];
    /** Patch Season */
    patch: operations["patch-profile-season"];
  };
  "/episode": {
    /** Create Episode */
    put: operations["put-profile-episode"];
    /** Get Episode */
    post: operations["post-profile-episode"];
    /** Delete Episode */
    delete: operations["delete-profile-episode"];
    /** Patch Episode */
    patch: operations["patch-profile-episode"];
  };
  "/source": {
    /** Create Source */
    put: operations["put-profile-source"];
    /** Get Source */
    post: operations["post-profile-source"];
    /** Delete Source */
    delete: operations["delete-profile-source"];
    /** Patch Source */
    patch: operations["patch-profile-source"];
  };
  "/subtitle": {
    /** Create Subtitle */
    put: operations["put-profile-subtitle"];
    /** Get Subtitle */
    post: operations["post-profile-subtitle"];
    /** Delete Subtitle */
    delete: operations["delete-profile-subtitle"];
    /** Patch Subtitle */
    patch: operations["patch-profile-subtitle"];
  };
};

export type components = {
  schemas: {
    /** profile */
    UserProfile: {
      /** Format: uuid */
      uid: string;
      username: string;
      /** Format: uri */
      avatar: OneOf<[string, null]>;
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
    /** episode */
    Episode: {
      /** Format: uuid */
      seasonId: string;
      /** Format: uuid */
      id: string;
      index: number;
      name: string;
      sources: (components["schemas"]["Source"])[];
      subtitles: (components["schemas"]["Source"])[];
      /** Format: int64 */
      creationDate: number;
    };
    /** source */
    Source: {
      /** Format: uuid */
      seasonId: string;
      /** Format: uuid */
      episodeId: string;
      /** Format: uuid */
      id: string;
      language: components["schemas"]["Language"];
      name?: string;
      /** Format: uuid */
      key?: string;
      subtitles?: components["schemas"]["Language"];
      /** Format: int64 */
      creationDate: number;
    };
    /** subtitle */
    Subtitle: {
      /** Format: uuid */
      seasonId: string;
      /** Format: uuid */
      episodeId: string;
      /** Format: uuid */
      id: string;
      language: components["schemas"]["Language"];
      /** Format: uuid */
      key?: string;
      /** Format: int64 */
      creationDate: number;
    };
    /**
     * language 
     * @default en_EN 
     * @example de_DE 
     * @enum {string}
     */
    Language: "en_EN" | "de_DE" | "ja_JP" | "zh_CN";
    /** season */
    Season: {
      /** Format: uuid */
      collectionId: string;
      /** Format: uuid */
      id: string;
      index: number;
      episodes: (components["schemas"]["Episode"])[];
      languages: (components["schemas"]["Language"])[];
      subtitles: (components["schemas"]["Language"])[];
    };
    /** collection */
    Collection: {
      /** Format: uuid */
      id: string;
      name: string;
      /**
       * @default private 
       * @enum {string}
       */
      visibility: "private" | "public" | "unlisted";
      seasons: (components["schemas"]["Season"])[];
      owner: string;
      /** Format: int64 */
      creationDate: number;
    };
    /** collection-preview */
    CollectionPreview: {
      /** Format: uuid */
      id: string;
      name: string;
      /**
       * @default private 
       * @enum {string}
       */
      visibility: "private" | "public" | "unlisted";
      /** Format: uri */
      thumbnail?: string;
      owner: string;
      /** Format: int64 */
      creationDate: number;
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

  "fetch-profile": {
    /**
     * Fetch Profile 
     * @description Get your own Profile.
     */
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
  "delete-profile": {
    /** Logout */
    responses: {
      /** @description No Content */
      204: never;
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
  "put-profile-file": {
    /**
     * Create File 
     * @description Request a pre-signed upload url for a file you want to upload, if you are logged in with a session cookie and have permission.
     */
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
  "post-profile-file": {
    /**
     * Get File 
     * @description Request a pre-signed download url for a file you want to download, if you are logged in with a session cookie and have permission.
     */
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
  "delete-profile-file": {
    /**
     * Delete File 
     * @description Delete the file selected with the id parameter, if you are logged in with a session cookie and have permission.
     */
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
  "patch-profile-file": {
    /**
     * Patch File Metadata 
     * @description Update the metadata of one of your files, if you are logged in with a session cookie and have permission.
     */
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
  "post-profile-collections": {
    /**
     * List all Collections 
     * @description Get a list of the collections, which you are allowed to see.
     */
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["CollectionPreview"])[];
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
  "put-profile-collection": {
    /** Create Collection */
    requestBody: {
      content: {
        "application/json": {
          name: string;
          /**
           * @default private 
           * @enum {string}
           */
          visibility?: "private" | "public" | "unlisted";
          /** Format: uuid */
          thumbnail?: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Collection"];
        };
      };
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
  "post-profile-collection": {
    /** Get Collection */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Collection"];
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
  "delete-profile-collection": {
    /** Delete Collection */
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
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  "patch-profile-collection": {
    /** Patch Collection */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
          name?: string;
          /** @enum {string} */
          visibility?: "public" | "private" | "unlisted";
          /** Format: uuid */
          thumbnail?: string;
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
  "put-profile-season": {
    /** Create Season */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          collectionId: string;
          index: number;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Season"];
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
  "post-profile-season": {
    /** Get Season */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Season"];
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
  "delete-profile-season": {
    /** Delete Season */
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
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  "patch-profile-season": {
    /** Patch Season */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
          index?: number;
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
  "put-profile-episode": {
    /** Create Episode */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          index: number;
          name: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Episode"];
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
  "post-profile-episode": {
    /** Get Episode */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          id: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Episode"];
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
  "delete-profile-episode": {
    /** Delete Episode */
    requestBody: {
      content: {
        "application/json": {
          seasonId: string;
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
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  "patch-profile-episode": {
    /** Patch Episode */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          id: string;
          index?: number;
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
  "put-profile-source": {
    /** Create Source */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          episodeId: string;
          language: components["schemas"]["Language"];
          /** Format: uuid */
          key?: string;
          subtitles?: components["schemas"]["Language"];
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Source"];
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
  "post-profile-source": {
    /** Get Source */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            /** Format: uri */
            url: string;
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
  "delete-profile-source": {
    /** Delete Source */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          episodeId: string;
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
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  "patch-profile-source": {
    /** Patch Source */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          episodeId: string;
          /** Format: uuid */
          id: string;
          language?: components["schemas"]["Language"];
          /** Format: uuid */
          key?: string;
          subtitles?: components["schemas"]["Language"];
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
  "put-profile-subtitle": {
    /** Create Subtitle */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          episodeId: string;
          language: components["schemas"]["Language"];
          /** Format: uuid */
          key?: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Source"];
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
  "post-profile-subtitle": {
    /** Get Subtitle */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          id: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            /** Format: uri */
            url: string;
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
  "delete-profile-subtitle": {
    /** Delete Subtitle */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          episodeId: string;
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
      /** @description Forbidden */
      403: never;
      /** @description Not Found */
      404: never;
      /** @description Internal Server Error */
      500: never;
    };
  };
  "patch-profile-subtitle": {
    /** Patch Subtitle */
    requestBody: {
      content: {
        "application/json": {
          /** Format: uuid */
          seasonId: string;
          /** Format: uuid */
          episodeId: string;
          /** Format: uuid */
          id: string;
          language?: components["schemas"]["Language"];
          /** Format: uuid */
          key?: string;
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
};
