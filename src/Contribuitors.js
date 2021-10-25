import './App.css';
import { clientData } from "./dadosClientes";

function Contribuitors() {
  return (
    <div> 
        {clientData.map((data, key) => {
            return (
                <div key={key}>
                    {data.numeroCliente + " , " + data.nomeCliente + " , " + data["usinas"]["usinaId"] + " , " + data.usinas.percentualDeParticipacao}
                </div>
            );
        })}
    </div>
  );
}

export default Contribuitors;