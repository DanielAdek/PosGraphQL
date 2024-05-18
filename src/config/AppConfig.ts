import fs from 'fs';
import cors from 'cors';
import express from 'express';
import {gql, GraphQLSchemaModule} from 'apollo-server';

export default class AppConfig {
  private server = express();
  
  public serverConfiguration(): void {
    this.server.set("json spaces", 4);

    // USE MIDDLEWARES
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));

    // SET SERVER PORT
    this.server.set("PORT", parseInt(process.env.PORT!, 10) || 8090);
  }

  public getServerPort(): number {
    return this.server.get("PORT");
  }

  public getApplicationServer(): express.Application {
    return this.server;
  }

  public getLogOnServerStart(): void {
    const message = "  App is running at http://localhost:%d in %s mode";

    console.info(message, this.getServerPort(), "development");
		 
    console.info("  **Press CTRL + C to stop**");
  }

  public getGraphQlSchema() {
    const pathToFile = require.resolve("../schema/type-def.gql");
    return gql`${fs.readFileSync(pathToFile, "utf-8")}`;
  }
}
