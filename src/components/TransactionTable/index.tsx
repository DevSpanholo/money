import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"

export function TransationsTable(){
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    },[]);
    return(
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/22</td>
                    </tr>
                    <tr>
                        <td>Anuidade ProBarber</td>
                        <td className="deposit">R$3.000</td>
                        <td>Mensalidade</td>
                        <td>20/02/22</td>
                    </tr>
                    <tr>
                        <td>Aluguel Servidor</td>
                        <td className="withdraw">- R$8.000</td>
                        <td>Implementação</td>
                        <td>16/02/22</td>
                    </tr>
                    <tr>
                        <td>Pagamento Salario</td>
                        <td className="withdraw">- R$1.600</td>
                        <td>Salarios</td>
                        <td>16/02/22</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}