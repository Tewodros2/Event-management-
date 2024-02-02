
import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
// import NodeGeocoder from "node-geocoder";

// export const DATABASE = "mongodb://127.0.0.1:27017/xxx";
export const DATABASE = "mongodb+srv://Tewodros12:tma263510@cluster0.hd3fj.mongodb.net/eventManagment?retryWrites=true&w=majority"

export const AWS_ACCESS_KEY_ID = "AKIAXY2RIMSJV24BKFUT";
export const AWS_SECRET_ACCESS_KEY = "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";

export const EMAIL_FROM = '"Aster Event" <tewkind@gmail.com>';
export const REPLY_TO = "tewkind@gmail.com";

const awsConfig = {
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: "us-east-2",
  apiVersion: "2010-12-01",
};
export const AWSSES = new SES(awsConfig);
export const AWSS3 = new S3(awsConfig);

// const options = {
//   provider: "google",
//   apiKey: "xxx",
//   formatter: null,
// };

// export const GOOGLE_GEOCODER = NodeGeocoder(options);
export const JWT_SECRET = "anycode"
export const CLIENT_URL = "http://localhost:3000";