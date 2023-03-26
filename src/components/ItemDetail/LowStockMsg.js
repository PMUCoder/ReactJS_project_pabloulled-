export const LowStockMsg = ({stock}) => {
    return (
        <p className="lastUnitsColor"><strong>
            {
                stock > 1 
                ? `Quedan solo ${stock} unidades. Apurate!`
                : `Queda solo 1 unidad. Apurate!`
            }    
        </strong></p>
    )
}