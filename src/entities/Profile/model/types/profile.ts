import { Country } from "entities/Country";


export interface Profile {
    id?: string,
    first?: string;
    lastname?: string;
    age?: number,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}
