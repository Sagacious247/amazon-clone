export const getBasketTotal = (basket) => 
  basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);

export const initialState = {
    basket: [],
    user: null
};

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

            case "ADD_TO_BASKET":
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }

                case "EMPTY_BASKET":
                    return {
                        ...state,
                        basket: []
                    };
                case "REMOVE_FROM_BASKET":
                    const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
                    let newBasket = [...state.basket]

                    if(index >=0) {
                        newBasket.splice(index, 1)
                    } else{
                        console.log(
                            `Cant't remove product {id ${action.id} as it's not in the basket}`
                        );
                    }
                    return {
                     ...state,
                     basket: newBasket
                    }

                    
                    default:
                        return state;
                    }
                }
                
                export default reducer
                // case "REMOVE_FROM_BASKET":
                //     tem) =>const index = state.basket.findIndex(
                //         (basketI basketItem.id === action.id
                //     );
                //     let newBasket = [...state.basket];
    
                //     if(index >= 0) {
                //         newBasket.splice(index, 1);
                //     } else{
                //       console.warn(
                //         `Cant remove product (id: ${action.id}) as is not in the basket`
                //       )
                //     }
                
    
                //     return{
                //         ...state,
                //         basket: newBasket
                //     }