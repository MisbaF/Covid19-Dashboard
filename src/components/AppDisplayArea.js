
import {Button, Card, Grid, Typography} from "@material-ui/core";
import CountryPicker from "./CountryPicker";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

const useStyles = makeStyles(() => ({
    grid: {
        height: '100vh', //vh= 1% of ur viewport
        display: "flex", //
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        background: "transparent"
    },
    card: {
        height: '53vh',
        width: '55vh',
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(15px)",
        paddingLeft: "0.8%",
        paddingTop:"2%",
        paddingBottom:"2%"
    }

}));

async function fetchCovidData(country) {
    const response = await fetch("https://covid2019-api.herokuapp.com/v2/country/" + country);
    const info = await response.text();
    console.log(info);
    return info;
}

export default function AppDisplayArea() {
    const [country, setCountry] = useState(undefined);
    const styles = useStyles();
    async function handleClick() {
        if (country === undefined) {
            setCovidData("pick a country");
            return; 
        }
        const data = await fetchCovidData(country);
        setCovidData(data);
    }

    const [covidData, setCovidData] = useState(undefined);
        return(
           <Grid className={styles.grid}>
               <Card className={styles.card}>
                   <div>
                       { covidData !== undefined && <Typography>{covidData}</Typography>}
                       <CountryPicker setCountry={setCountry}/>
                    <Button onClick={handleClick}>Enter</Button>
                   </div>
               </Card>
           </Grid>
        );
};