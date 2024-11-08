import './Modal.css'
function delete__btn(){
  console.log(`wow`)
}
function delete__confirm(){
  console.log(`free`)
}


function Modal({modalcode}){
    return (
<>
  <div className="modal">
    <p className="modal__title">{modalcode}</p>
    <div className="modal__buttons">
      <button onClick={delete__btn} className="btn btn__cancel">Cancel</button>
      <button onClick={delete__confirm} className="btn">Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</>);
}
export default Modal