import { productType } from "@/config/data/type";
import Container from "../components/container";
import TableProduct from "../components/table-product";
import Button from "../components/ui/button";
import Header from "../components/ui/header";
import Table from "../components/ui/table";

function Product(){
    const product : productType = [
        {
            id: 1,
            product_name: 'Shampo',
            buy: 10000,
            sell: 20000,
            quantity: 20,
            unit: 'Pcs'
        },
        {
            id: 2,
            product_name: 'Sabun',
            buy: 15000,
            sell: 25000,
            quantity: 23,
            unit: 'Pcs'
        },
    ]
    return <Container>
        <section className='flex justify-between items-center'>
            <Header>List Product</Header>
            <div>
                <Button variant="solid">Add Product</Button>
            </div>
        </section>
        <section className="py-8">
            <TableProduct coloms={['No', 'Product Name', 'Buy', 'Sell', 'Quantity', 'Action']} data={product}/>
        </section>
    </Container>
}

export default Product