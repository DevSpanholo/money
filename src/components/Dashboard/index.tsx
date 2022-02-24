import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";
import { TransationsTable } from "../TransactionTable";

export function Dashboard(){
    return(
    <Container>
    <Summary />
    <TransationsTable />
    </Container>
    )
}