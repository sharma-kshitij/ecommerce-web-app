export const ACTIONS = {
    test: "test",
    ADD_TO_CART: "ADD_TO_CART",
    CHECKBOX_CLICKED: "CHECKBOX_CLICKED",
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
            break;
        
        default:
            return cart
    }
}