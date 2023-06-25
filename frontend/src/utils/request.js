import Amplify, { API, Auth } from "aws-amplify";
import { retryWrapper } from "./index";

window.rekognitionSettings = {"apiGateway":"https://0rdhhlnb89.execute-api.us-east-1.amazonaws.com/Prod/","cognitoIdentityPool":"us-east-1:89b8f0e8-18b8-4601-b6b8-7a17dba14dcf","cognitoUserPoolId":"us-east-1_xgKwTvh4f","cognitoUserPoolClientId":"1kn2jd7ci4ggoa99olkcras0jg","region":"us-east-1"};

const settings = window.rekognitionSettings || {};
const region = settings.region || "eu-west-1";

Amplify.configure({
  Auth: {
    identityPoolId: settings.cognitoIdentityPool,
    region,
    mandatorySignIn: true,
    userPoolId: settings.cognitoUserPoolId,
    userPoolWebClientId: settings.cognitoUserPoolClientId,
  },
  API: {
    endpoints: [
      {
        name: "apiGateway",
        endpoint: "https://0rdhhlnb89.execute-api.us-east-1.amazonaws.com/Prod",
        region,
        custom_header: async () => {
          const session = await Auth.currentSession();
          const token = session.getIdToken().getJwtToken();
          return { Authorization: `Bearer ${token}` };
        },
      },
    ],
  },
});

const request = (url, method, data) =>
  retryWrapper(() =>
    API[method || "get"]("apiGateway", url, {
      body: data || undefined,
      headers: { "Content-Type": "application/json" },
    })
  );

export default request;
