import { Client, Account } from 'appwrite';
export const Client = new Client;
import { conf } from '../../conf/conf';

Client.setEndpoint(conf.url);
Client.setProject(conf.projectId)

export const Account = new Account(client);
export { ID } from 'appwrite';