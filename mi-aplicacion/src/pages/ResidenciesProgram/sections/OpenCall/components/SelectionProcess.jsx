import MediumSans from '../../../../../components/Titles/MediumSans/MediumSans';
import './SelectionProcess.css';

function SelectionProcess({ t }) {
    return (
        <div className="selection-process-content">
            <h2>Proceso de selección</h2>
            
            <div className="requirements-section">
                <div className="requirements-title">REQUISITOS</div>
                <ul className="requirements-list">
                    <li>Mayores de 18 años</li>
                    <li>Residentes en España o Portugal</li>
                </ul>
            </div>
            
            <div className="documentation-section">
                <div className="documentation-title">DOCUMENTACIÓN A PRESENTAR</div>
                <ul className="documentation-list">
                    <li>Breve portafolio o descripción de trabajos anteriores</li>
                    <li>Carta de candidatura, que incluya una presentación lo más personal posible y que exponga su interés en formar parte de la Residencia2026. Puede enviarse en formato texto o video breve.</li>
                </ul>
            </div>
            
            <div className="jury-section">
                <div className="jury-title">JURADO Y SELECCIÓN</div>
                <p className="jury-description">
                    Las candidaturas serán evaluadas por un jurado vinculado a las disciplinas convocadas.
                </p>
                <p className="jury-description">
                    Del proceso de elección resultarán cuatro artistas seleccionados
                </p>
            </div>
        </div>
    );
}

export default SelectionProcess;