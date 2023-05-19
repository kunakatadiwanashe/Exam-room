import Amplify, { API, Auth } from "aws-amplify";
import { retryWrapper } from "./index";

window.rekognitionSettings = { "apiGateway": "https://lh0seoyr60.execute-api.us-east-1.amazonaws.com/Prod/", "cognitoIdentityPool": "us-east-1:ac57aaa2-ebc3-4aed-8f56-5a35d80e7dce", "cognitoUserPoolId": "us-east-1_yEjrlOk1j", "cognitoUserPoolClientId": "5qmjvvadl1v50le7sc3vlb38v5", "region": "us-east-1" };
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
        endpoint: "https://lh0seoyr60.execute-api.us-east-1.amazonaws.com/Prod",
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
