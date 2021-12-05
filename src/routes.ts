import * as express from 'express';
import HarvardArtMuseumController from './components/harvard-art-museum/harvard-art-museum.controller';

export default function registerRoutes(app: express.Application): void {
    new HarvardArtMuseumController(app);
}
