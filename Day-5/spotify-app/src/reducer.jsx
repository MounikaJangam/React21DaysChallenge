export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token:
    //  "BQBmKpHEOq09H0oKUzaRMu3FZSQ8u4inLq0ocIPgD1jC91GllTejh3mxDIYxvehIFuwAVbpDSQLB7DbOa_epR1heUjHR-3E_N7Rw7Et-eoYH58ZqZCjkS7oyvhloWeCuppDlGloGadMh9iubKG-7LpF2A8DneK1V2tWla5hwm-UaO7xGRFWfdRGQvT40nBIHpK_5ZKHuNY0KnDEGcCVO",
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [playload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }; 
            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token,
                };
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists,
                };   
            case  'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                };

            default:
                return state;
    }
}

export default reducer;