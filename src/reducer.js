export const ACTIONS = {
    test: "test",
    ADD_TO_CART: "ADD_TO_CART",
}

export const reducer = (cart, action) => {
    switch (action.type) {
        case ACTIONS.test:
            console.log("Test")
            break;

        case ACTIONS.ADD_TO_CART:
            const newItem = action.payload
            return (
                [
                    ...cart,
                    {
                        title: newItem.title
                    }
                ]
            )


        default:
            return cart
    }
}