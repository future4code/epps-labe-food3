import React from 'react'
import { 
    Card, ImgFood, Rectangle, ItemName, ItemDescription, Value
} from './Styled'

export const CartCard = () => {
    return (
        <Card>
            <ImgFood src='https://vejasp.abril.com.br/wp-content/uploads/2020/05/image001.jpg?quality=70&strip=info' alt='hamburguer'/>
            <Rectangle>2</Rectangle>
            <ItemName>Pizza</ItemName>
            <ItemDescription>Muiitas coisas</ItemDescription>
            <Value>R$0,01</Value>
            
        </Card>
    )
}
