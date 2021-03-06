module.exports = {
  docs: {
    Introduction: ['introduction/getting-started', 'introduction/server-vs-serverless'],
    'Core Concepts': [
      'core/routes',
      'core/context',
      'core/routing',
      'core/middleware',
      'core/connect',
      'core/logging',
      'core/params',
      'core/query',
      'core/body-parsing',
      'core/error-handling',
      'core/testing',
      'core/hot-module-reloading',
    ],
    Deploy: [
      'deploy/vercel',
      'deploy/runkit',
      'deploy/netlify',
      'deploy/heroku',
      'deploy/server',
      'deploy/aws-lambda',
      'deploy/google-cloud-functions',
      'deploy/azure-functions',
    ],
    'Third Party': ['third-party/apollo', 'third-party/jest', 'third-party/ava'],
  },
  api: {
    'Exported Functions': [
      'api/exported/create-route',
      'api/exported/create-server',
      'api/exported/create-test',
      'api/exported/logger',
    ],
    Context: [
      'api/context/req',
      'api/context/res',
      'api/context/buffer',
      'api/context/text',
      'api/context/json',
      'api/context/send',
      'api/context/send-error',
      'api/context/create-error',
      'api/context/use-params',
      'api/context/use-query',
    ],
  },
};
