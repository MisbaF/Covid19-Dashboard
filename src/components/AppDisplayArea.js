
import {Card, Grid} from "@material-ui/core";
import CountryPicker from "./CountryPicker";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    grid: {
        height: '100vh', //vh= 1% of ur viewport
        display: "flex", //
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(161,175,171)"
    },
    card: {
        height: '53vh',
        width: '55vh',
        background: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(20px)",
        paddingLeft: "0.8%",
        paddingTop:"2%",
        paddingBottom:"2%"
    }

}));

export default function AppDisplayArea() {
    const styles = useStyles();

        return(
           <Grid className={styles.grid}>
               <Card className={styles.card}>
                    <CountryPicker/>
               </Card>
           </Grid>
        );
};