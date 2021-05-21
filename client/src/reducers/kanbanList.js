import { ADD_LIST, ADD_CARD, DRAG_HAPPENED } from '../constants/actionTypes'

let listID = 2;
let cardID = 6;
const initialState = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "We created a static list and a static card"
      },
      {
        id: `card-${1}`,
        text: "We used a mix between material UI React and styled components" 
      }
    ]
  },
  {
    title: "This Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "We will create out first reducer"
      },
      {
        id: `card-${3}`,
        text: "and render many cards on our list with static data" 
      },
      {
        id: `card-${4}`,
        text: "We will also make some little change I forgot in the last episode" 
      }
    ]
  }
]

const kanbanList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        id: `list-${listID}`,
        title: action.payload,
        cards: [],
      }
      listID++;
      return [...state, newList]
    case ADD_CARD:
      const newCard = {
        id: `card-${cardID}`,
        text: action.payload.text
      }
      cardID++;
      return state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list, cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })      
    case DRAG_HAPPENED:
      const {  
        droppableIDStart,
        droppableIDEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableID,
        type
       } = action.payload;
      const newState = [...state];

      //  dragging lists around
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // In the same list
      if (droppableIDStart === droppableIDEnd) {
        const list = state.find(list => droppableIDStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      // Other list
      if(droppableIDStart !== droppableIDEnd) {
        // find the list where drag happened
        const listStart = state.find(list => droppableIDStart === list.id)

        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // find the list where the drag ended
        const listEnd = state.find(list => droppableIDEnd === list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      return newState;
    default:
      return state;
  }
}

export default kanbanList;