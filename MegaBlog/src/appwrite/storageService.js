import { Client, Databases, ID, Query, Storage } from "appwrite";
import { conf } from "../../conf/conf";

export class StorageService{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client
            .setEndpoint(conf.url)
            .setProject(conf.projectId)
        
        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    createDocument(payload){
        try{
            return this.database.createDocument(conf.databaseId, conf.collectionId, payload.slug, payload) // returns a promise
        } catch (error) {
            console.log(`createDocument :: error: ${error}`);
            return false
        }
    }

    async listDocuments(queries = [Query.equal("status" , "active")]){
        try {
           return await this.database.listDocuments(conf.databaseId, conf.collectionId, queries)
        } catch (error) {
            console.log(`listDocuments :: error: ${error}`)
            return false
        }
    }

    async deleteDocument({slug}){
        try{
            return await this.database.deleteDocument(conf.databaseId, conf.collectionId, slug)
        } catch (error) {
            console.log(`deleteDocument :: error: ${error}`);
            return false
        }

    }

    async updateDocument(payload){
        try {
            return await this.database.updateDocument(conf.databaseId, conf.collectionId, payload.slug, payload)
        } catch (error) {
            console.log(`updateDocument :: error: ${error}`);
            return false
        }
    }

    async getDocument({slug}){
        try{
            return await this.database.getDocument(conf.databaseId, conf.collectionId, slug)
        } catch (error){
            console.log(`getDocument :: error : ${error}`);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.bucketId,
                ID.unique(),
                file
            ) 
        } catch (error) {
            console.log(`uploadFile :: error: ${error}`);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.bucketId,
                fileId
            )
        } catch (error) {
            console.log(`deleteFile :: error: ${error}`);
            return false
        }
    }

    getFilePreview(fileId){
        try {
            const preview = this.storage.getFilePreview(
                conf.bucketId,
                fileId
            )
            return preview
        } catch (error) {
            console.log(`getFilePreview :: error: ${error}`);
            return false;
        }
    }
}

const storageService = new StorageService()

export default storageService;