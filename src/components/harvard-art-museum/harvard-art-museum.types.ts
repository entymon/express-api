export interface IHarvardArtMuseumApiResponse {
    info: IHarvardArtMuseumApiResponseInfo;
    records: IHarvardArtMuseumApiResponseRecords;
}

export interface IHarvardArtMuseumApiResponseInfo {
    totalrecordsperquery: number;
    totalrecords: number;
    pages: number;
    page: number;
    next: string;
    prev: string;
}

export interface IHarvardArtMuseumApiResponseRecords {
    records: IHarvardArtMuseumApiPrintObject[]
}

export interface IHarvardArtMuseumApiPrintObject {
    division: string;
    imagecount: number;
    objectnumber: string;
    creditline: string;
    imagepermissionlevel: number;
    dated: string;
    id: number;
    title: string;
    department: string;
    objectid: number;
}