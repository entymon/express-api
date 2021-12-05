import * as express from 'express';
import SystemStatusController from './components/system-status/system-status.controller';
import HarvardArtMuseumController from './components/harvard-art-museum/hardvard-art-museum.controller';

export default function registerRoutes(app: express.Application): void {
    new SystemStatusController(app);
    new HarvardArtMuseumController(app);
}
