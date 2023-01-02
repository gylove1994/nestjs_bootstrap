import { Environment } from './env.interface';
export default (): Environment => ({
  appName: 'Login(prod)',
  appPort: 3000,
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'db',
    entities: [],
    synchronize: true,
  },
});
