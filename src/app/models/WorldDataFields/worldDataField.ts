import { countriesField } from './countriesFields';
import { globalFields } from './globalfield';
export interface WorldDataField{
    Countries:countriesField;
    Global:globalFields;
    Date:string;
}