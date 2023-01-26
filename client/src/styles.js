import { makeStyles } from "@material-ui/core/styles";

//call back function returns an object(styles)
export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '5% 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(245, 130, 44, 0.8)',
      },
      image: {
        marginRight: '2%',
      },
      

}));