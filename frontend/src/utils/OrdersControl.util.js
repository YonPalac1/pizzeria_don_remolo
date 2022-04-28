export const orders  = [{

    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
    client: 'Martin Salem',
    date: '10 abr, 2022',
    state: 'Enviado',
    price: '2.100',
    type: 'Retirar en el local'

},
{

    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
    client: 'Martin Salem',
    date: '10 abr, 2022',
    state: 'Pendiente',
    price: '2.100',
    type: 'Delivery'

},
{

    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
    client: 'Martin Salem',
    date: '10 abr, 2022',
    state: 'Cancelado',
    price: '2.100',
    type: 'Retirar en el local'

}

]

export const ordersDelivery = [
    {

        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
        delivery: 'Martin Salem',
        time: '10:40',
        status: 'Enviado',
        orderStatus: '2.100',
        
    
    },
    {
    
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
        delivery: 'Martin Salem',
        time: '10:20',
        status: 'Pendiente',
        orderStatus: '2.100',
      
    
    },
    {
    
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
        delivery: 'Martin Salem',
        time: '10:50',
        status: 'Cancelado',
        orderStatus: '2.100',
        
    
    }
]

 


export const tittlesValues = [ 
    {
        item: 'Foto',
        id: 0
    },
    {
        item: 'Nombre Cliente',
        id: 1
    },
    {
        item: 'Fecha',
        id: 2
    },
    {
        item: 'Estado',
        id: 3
    },
    {
        item: 'Precio',
        id: 4
    },
    {
        item: 'Más info',
        id: 5
    }
]

export const ordersLastsRequest = [
    {

        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
        client: 'Martin Salem',
        date: '10:00',
        order: 'OPD-0586',
        payment: 'Tarjeta',
        address: 'wall Street 15',
        
    
    },
    {
    
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
        client: 'Martin Salem',
        order: 'OPD-0586',
        date: '20:30',
        payment: 'Efectivo',
        address: 'wall Street 15',
      
    
    },
    {
    
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
        client: 'Martin Salem',
        order: 'OPD-0586',
        date: '15:30',
        payment: 'Tarjeta',
        address: 'wall Street 15',
        
    
    }
]


export const ordersLastsRequestTittles = [
    {
    item: "Nombre del Cliente",
    position: 'first item-request-button'
},
{
    item: "N° de ID",
    position: 'second item-request-button'
},
{
    item: "Fecha",
    position: 'third item-request-button'
},
{
    item: "Metodo de pago",
    position: 'fourth item-request-button'
},
{
    item: "Dirección",
    position: 'fifth item-request-button'
}
]