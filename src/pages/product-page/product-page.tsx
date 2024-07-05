import { useAppSelector } from "../../hooks/typed-redux-hooks"
import { selectedProductSelect } from "../../redux/slices/product-slice/product-slice-selectors"



export const ProductPage = () => {
    const selectedProduct = useAppSelector(selectedProductSelect)

return (
    <div>
      <p>{selectedProduct?.price}</p>
    </div>
)
}