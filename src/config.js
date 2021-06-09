const { env } = process;
const config = {
  backend_endpoint: env.MOOOVIE_BACKEND || 'http://localhost:3030/' 
};

export default config;
