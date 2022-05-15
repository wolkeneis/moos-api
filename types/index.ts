import * as generatedV1 from "../reference/moos-api-v1";

enum AuthScope {
  identify = "identify",
  all = "*"
}

const v1 = {
  ...generatedV1,
  AuthScope: AuthScope
};

export { v1 };
