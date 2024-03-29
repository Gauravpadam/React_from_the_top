// Code modularity: When each of your code snippet can act independently without relying on its dependencies
// You have written good code; else your code is s*** 

// Why should I return the promises?
// because components consume promises

import { Client , Account , ID} from 'appwrite';
import { conf } from '../../conf/conf';

export class AuthService {

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.url)
            .setProject(conf.projectId);
        
            this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const newAccount = await this.account.create(ID.unique(), email, password, name)

            if (newAccount){
                // call another function
                this.login({email, password, name})
            }
        } catch (error) {
            console.log(`createAccount :: error: ${error}`)
            return null
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log(`login :: error: ${error}`);
            return null
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        }
        catch (error) {
            console.log(`appwrite :: getCurrentUser :: error: ${error}`);
            return null
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        }
        catch (error){
            console.log(`appwrite :: logout :: error: ${error}`);
            return null
        }
    }

}

// Create an object and export for easy access

const authService = new AuthService()

export default authService;