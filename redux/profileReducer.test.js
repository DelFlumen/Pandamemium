const { default: profileReducer, addPostActionCreator, deletePostActionCreator } = require("./profileReducer");

let action = addPostActionCreator('it-kamasutra.com');
let initialState = {
        postsData: [
          { id: 1, text: "What's up?", likeCount: 15 },
          { id: 2, text: "It's my first site", likeCount: 20 },
    
        ],
        profile: null,
        status: ""
      }

it ('new post should be added', () => {
    
    let newState = profileReducer(initialState, action);

    expect(newState.postsData.length).toBe(3);
});

it ('new post should be added', () => {
    
    let newState = profileReducer(initialState, action);

    expect(newState.postsData[2].text).toBe('it-kamasutra.com');
});

it ('after deleting the length of messages should be decremented', () => {
    
    let deleteAction = deletePostActionCreator(1);
    let newState = profileReducer(initialState, deleteAction);

    expect(newState.postsData.length).toBe(1);
});
