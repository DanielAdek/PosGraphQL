import { ApolloServer } from 'apollo-server';

import AppConfig from './config/AppConfig';
import Resolvers from './resolvers/user.resolver';

export default class SimpleMartServer {
  private appConfig = new AppConfig();

  constructor() {
    this.appConfig.serverConfiguration();
    
    this.apolloServer();
  }

  private apolloServer() {
    new ApolloServer({ typeDefs: this.appConfig.getGraphQlSchema(), resolvers: Resolvers })
  }

  public runApplication(): void {
		 this.appConfig.getApplicationServer().listen(this.appConfig.getServerPort(), this.appConfig.getLogOnServerStart);
  }
}