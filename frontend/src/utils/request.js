import Amplify, { API, Auth } from "aws-amplify";
import { retryWrapper } from "./index";

window.rekognitionSettings = {"apiGateway":"https://6u7rkt4loe.execute-api.us-east-1.amazonaws.com/Prod/","cognitoIdentityPool":"us-east-1:cdfd8fdd-c4a6-4f77-a608-67eb1a381d63","cognitoUserPoolId":"us-east-1_OyevrYQ42","cognitoUserPoolClientId":"2109mjnnhn04ep0kk30rltput6","region":"us-east-1"};

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
        endpoint: "https://6u7rkt4loe.execute-api.us-east-1.amazonaws.com/Prod",
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
