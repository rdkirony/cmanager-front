import { MateriaPessoa } from "./MateriaPessoa"


export interface ListaResultadoMaterias{
    periodo:ListPeriodo[]
}
interface ListPeriodo{
    dia:ListDias[]
}

interface ListDias{
    listaMateriaPessoa:MateriaPessoa[]
}