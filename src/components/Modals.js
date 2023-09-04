import Modal from './modal';
import { useState } from 'react';
import { useModal } from './useModal';

const Modals = ({ tipo, name, setName, count, setCount, totalInicial, setTotalInicial, }) => {
    const [isOpenModal1,openModal1,closeModal1,selectedProduct1] = useModal(false);
    const showInfo = () => {

    }
    return (
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            {selectedProduct1 && (
                <>
                    <p className="text-center underline font-serif font-bold">La Italiana</p> 
                    <p className="text-center">Llegando a los mejores gustos </p>
                    <p className="text-center">Soyapango local H7 S.S</p>
                    <p className="mt-2">Cliente: {name}</p>
                    <p>--------------------------------------------------------</p>
                    <p>Pizza: {tipo}</p>
                    <p>--------------------------------------------------------</p>
                    <p>Adicionales: {count}</p>
                    <p>--------------------------------------------------------</p>
                    <p>Total inicial: {totalInicial}</p>
                    <p>--------------------------------------------------------</p>
                    <p>SubTotal: subTotal</p>
                    <p>--------------------------------------------------------</p>
                    <p>Total: total</p>
                    <p></p>
                    <button onClick={closeModal1}  className="bg-rose-600 hover:bg-amber-400 transition-colors cursor-pointer uppercase font-bold w-full p-3 mt-5 text-white rounded-lg">Cerrar</button>
                </>
            )}
        </Modal>
    )
};
export default Modals;