import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando } = useBebidas()

    const mostrarIngredientes = () => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={`ingredient-${i}`}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

  return (
    !cargando && (
        <Modal show={modal} onHide={handleModalClick}>
            <Image 
                src={receta.strDrinkThumb}
                alt={`Imagen receta ${receta.strDrink}`}
            />
            <Modal.Header>
                <Modal.Title style={{ textAlign: 'center', width: '100%' }}>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h2>Instrucciones:</h2>
                    {receta.strInstructions}
                    <h2 className="mt-4">Ingredientes y Cantidades:</h2>
                    {mostrarIngredientes()}
                </div>
            </Modal.Body>
        </Modal>
    )
  )
}

export default ModalBebida