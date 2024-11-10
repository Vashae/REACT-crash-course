import './Modal.css'



function Modal({modalcode}){
    return (
<>
  <div className="modal">
    <p className="modal__title">{modalcode}</p>
    <div className="modal__buttons">
      <button onClick={() => console.log(`eesy`) }className="btn btn__cancel">Cancel</button>
      <button onClick={() => console.log(`wow`)} className="btn">Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</>);
}
export default Modal