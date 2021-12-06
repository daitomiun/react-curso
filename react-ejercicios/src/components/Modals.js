import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>modal 1</h3>
        <p>hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>otro modal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          numquam cupiditate excepturi praesentium fugiat. Vitae aliquid facilis
          reprehenderit eius dignissimos distinctio inventore exercitationem
          unde, dolorem quam ipsam, ad atque soluta!
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal>
      <button onClick={openModalContact}>Modal contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSong}>Modal canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3> modal en portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde carga nuestra app de React, gracias a los portales
          de react
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
