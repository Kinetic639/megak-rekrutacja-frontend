import './ModalMessage.css';

interface Props {
  message: string;
  setShowModal: (boolean: boolean) => void;
}

export const ModalMessage = ({ message, setShowModal }: Props) => {
  return (
    <>
      <div className="message modal-center">
        <p className="message__text">{message}</p>
        <div className="message__buttons">
          <button className="button" onClick={() => setShowModal(false)}>
            Ok
          </button>
        </div>
      </div>
      <div className="background-blur" />
    </>
  );
};
