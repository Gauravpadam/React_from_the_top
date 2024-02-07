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
        this.database.createDocument(conf.databaseId, conf.collectionId, payload.slug, payload) // returns a promise
        .then(
            (res) => {
                alert(`Document created successfully`);
            }, (error) => {
                throw error
            }
        )
    }

    listDocuments(queries = [Query.equal("status" , "active")]){
        this.database.listDocuments(conf.databaseId, conf.collectionId, queries)
        .then(
            (res) => res.json
            , (error) => {
                console.log(`listDocuments :: error: ${error}`);
            }
        )
    }

    deleteDocument({slug}){
        this.database.deleteDocument(conf.databaseId, conf.collectionId, slug)
        .then(
            (res) => {
                alert(`Document deleted`)
            }, (error) => {
                console.log(`deleteDocument :: error: ${error}`);
            }
        )
    }

    updateDocument(payload){
        this.database.updateDocument(conf.databaseId, conf.collectionId, payload.slug, payload)
        .then(
            (res) => {
                alert(`Document updated`);
            }, (error) => {
                console.log(`updateDocument :: error: ${error}`);
            }
        )
    }

    getDocument({slug}){
        this.database.getDocument(conf.databaseId, conf.collectionId, slug)
        .then(
            (res) => {
                console.log("Successful");
            }, (error) => {
                console.log(`getDocument :: error: ${error}`);
            }
        )
    }

    uploadFile(file){
        this.storage.createFile(
            conf.bucketId,
            ID.unique(),
            file
        )
        .then(
            (res) => {
                return res
            }, (error) => {
                console.log(`uploadFile :: error: ${error}`);
                return false
            }
        )
    }

    deleteFile(fileId){
        this.storage.deleteFile(
            conf.bucketId,
            fileId
        )
        .then(
            (res) => {
                return res
            }, (error) => {
                console.log(`uploadFile :: error: ${error}`);
                return false
            }
        )
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