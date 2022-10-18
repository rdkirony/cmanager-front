import { TipoMateria } from "./TipoMateria";

export interface Materia{
    id:number,
    nome:string,
    descricao:string,
    tipoMateriaDto: TipoMateria
}