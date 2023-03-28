import storeItems from "../data/items.json"
import { Col, Image, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import easter_banner from "../images/easter_banner.png"
import "./Store.css"

export function Store() {
    return (
        <>
            <>
                <Image src={easter_banner} className="easter-banner" />
            </>
            <Row md={2} xs={1} lg={4} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}

            </Row>

        </>)
}
