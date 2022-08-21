import { useState } from "react";
import { Perfil } from "../../entitys/Perfil";

export function ListPerfis(){
    const [perfis, setPerfis] = useState<Perfil[]>([]);
    const [loading, setLoading] = useState(false);


}