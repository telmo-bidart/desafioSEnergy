import './App.css';
import { clientData } from "./dadosClientes";

function Contribuitors() {
  return (
    <div> 
        {clientData.map((data, id) => {
            return (
                <div key={id}>
                    {data.numeroCliente + " , " + data.nomeCliente + " , " + data['usinas'][0]['usinaId'] + " , " + data['usinas'][0]['percentualDeParticipacao'] + "%"}
                </div>
            );
        })}
    </div>
  );
}

export default Contribuitors;