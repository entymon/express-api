import { Application, NextFunction, Request, Response } from 'express';
import BaseApi from '../BaseApi';
import rest from 'restler';
import * as responseHandler from '../../lib/response-handler';

/**
 * Status controller
 */
export default class HarvardArtMuseum extends BaseApi {

    constructor(express: Application) {
        super();
        this.register(express);
    }

    public register(express: Application): void {
        express.use('/api/harvard-art-museum', this.router)
        this.router.get('/prints/:page?', this.getPrintsByPage)
        this.router.get('/prints/:objectId', this.getPrintById)
    }

    /**
     * Get all prints
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public getPrintsByPage(req: Request, res: Response, next: NextFunction): void {
        // A feed of all public items classified as “Prints”, paged in pages of 10, ordered by rank,
        // descending, that have images and have been verified to the ‘Best’ standard.
        try {
            rest.get("https://api.harvardartmuseums.org/object", {
                query: {
                    apikey: "c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc",
                    page: req.params.page ?? 1,
                    clasiffication: 'Prints',
                    sort: 'rank',
                    sortorder: 'desc',
                    hasimage: 1,
                    verificationlevel: 4,
                    fields: "id,objectid,objectnumber,title,dated,department,imagecount,division,creditline",
                    
                }
            }).on("complete", function(data, response) {
                res.locals.data = data
                responseHandler.json(res)
            });
        } catch (error) {
            next(error)
        }
    }

    /**
     * Get Print by object ID
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public getPrintById(req: Request, res: Response, next: NextFunction): void {
        try {
            rest.get(`https://api.harvardartmuseums.org/object/${req.params.objectId}`, {
                query: {
                    apikey: "c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc"
                }
            }).on("complete", function(data, response) {
                res.locals.data = data
                responseHandler.json(res)
            });
        } catch (error) {
            next(error)
        }
    } 
}