const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-pj",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://a0b5n3qbrd.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_WRP55zhbm",
    APP_CLIENT_ID: "1hirtjmfhrnb1bqcf3541prjds",
    IDENTITY_POOL_ID: "us-east-1:2a4d9cb9-dbfc-4ce6-8b37-158f76d9af15",
  },
};

export default config;
