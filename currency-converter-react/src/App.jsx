
import './App.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from './components/Input';
import Currency from './components/Currency';
function App() {
  
  return (
    <div
      className="modal show "
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Currency Converter</Modal.Title>
        </Modal.Header>

        <Modal.Body div className="p-5">
          <p className='text-start'>From</p>

          <div className="div d-flex mx-3 " >
         <div className="div p-4 ">
         <Input className=""/>
         </div>
         <div className="div p-4 ">
         <Currency className=""/>
         </div>
              
          </div>

        </Modal.Body>

      </Modal.Dialog>
    </div>
  );
}

export default App
