import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function BtnRender({ product, deleteProduct }) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart


    return (
        <div className="row_btn">
            {
                isAdmin ?
                    <>
                        <Link id="btn_buy" to="#!"
                            onClick={() => deleteProduct(product._id, product.images.public_id)}>
                            Delete
                        </Link>
                        <Link id="btn_view" to={`/edit_product/${product._id}`}>
                            Edit
                        </Link>
                    </>
                    : <>
                        <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                            <AddShoppingCartIcon style={{ marginRight: '.3rem' }} /> Buy
                        </Link>
                        <Link id="btn_view" to={`/detail/${product._id}`}>
                            <VisibilityIcon style={{ marginRight: '.3rem' }} /> View
                        </Link>
                    </>
            }

        </div>
    )
}

export default BtnRender
