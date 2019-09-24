export default {
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%',
        minHeight: 'calc(100vh - 74px)',
        backgroundImage: 'url(https://image.freepik.com/free-photo/hand-crowd-disco_23-2147717087.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },

    tb: {
        marginLeft: '5px',
        color: '3',
        padding: '10px 25px',
        fontWeight: 'bold',
        borderRadius: '5px',
        textTransform: 'uppercase',

    },

    lista: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridTemplateRows: 'auto auto auto',
        margin: 10,
        div: {
			backgroundColor: 'white',
			gridRow: 3,
			gridColumn: '1 / span 2',
			minHeight: 50,
			minWidth: 100,
		},
			  
    },
    
    detail: {
        width: 'calc(100% - 40px)',
        height: 'calc(100vh - 74px - 40px)',
        padding: 20,
     },
     
     title: {
		 textAlign:'center',
	 },

}
