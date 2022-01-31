const config = {
  // Backend config
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'note-app-uploads-chiggs',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://2gli1oeb79.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_vwx0vhBzy',
    APP_CLIENT_ID: '316j19g4uspi4kphe1o4cbgci2',
    IDENTITY_POOL_ID: 'us-east-1:026717b3-8b85-406e-a592-89a04c0be594'
  },
};

export default config;