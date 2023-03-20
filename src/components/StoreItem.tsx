import {Card} from "react-bootstrap"
import { formatCurrency } from "../util/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}:
    StoreItemProps){
        const quantity = 0





        return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit:"cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (

                    ) : null}
                </div>
            </Card.Body>
        </Card>)
}
