import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const GetChampionDetails = (props) => {
    const classes = useStyles();
    const [details, setDetails] = useState();
    const championName = props.match.params.name;
    const version = props.match.params.version;

    useEffect(() => {
        fetch("http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion/" + championName + ".json")
            .then(result => result.json())
            .then(
                (result) => {
                    console.log(Object.values(result.data)[0]);
                    setDetails(Object.values(result.data)[0]);
                }
            )
            .catch((error) => {
                console.log(error, "error");
            })
    }, [championName])


    const DetailForm = () => {
        if (!details) {
            return null;
        }
        return (
            <Row>
                <Col>
                    <Link to={`/`}>
                        <ArrowBackIosIcon>ArrowBackIosIcon</ArrowBackIosIcon>
                    </Link>
                </Col>
                <Col></Col><Col></Col>
                <Col>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${details.image.full}`} />
                </Col>
                <Row>
                    <form className={classes.root} noValidate autoComplete="off">
                        <h3> Champion detail </h3>
                        <div>
                            <TextField
                                label="Name"
                                defaultValue={details.name}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="Title"
                                defaultValue={details.title}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="Number of skins"
                                defaultValue={details.skins.length}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                            />
                            <TextField
                                id="filled-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue={details.lore}
                                variant="filled"
                            />
                        </div>
                        <h3> Stats </h3>
                        <div>
                            <TextField
                                label="hp"
                                defaultValue={details.stats.hp}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="hpperlevel"
                                defaultValue={details.stats.hpperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="mp"
                                defaultValue={details.stats.mp}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="mpperlevel"
                                defaultValue={details.stats.mpperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="movespeed"
                                defaultValue={details.stats.movespeed}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="armor"
                                defaultValue={details.stats.armor}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="armorperlevel"
                                defaultValue={details.stats.armorperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="spellblock"
                                defaultValue={details.stats.spellblock}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="spellblockperlevel"
                                defaultValue={details.stats.spellblockperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="attackrange"
                                defaultValue={details.stats.attackrange}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="hpregen"
                                defaultValue={details.stats.hpregen}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="hpregenperlevel"
                                defaultValue={details.stats.hpregenperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="mpregen"
                                defaultValue={details.stats.mpregen}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="mpregenperlevel"
                                defaultValue={details.stats.mpregenperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="crit"
                                defaultValue={details.stats.crit}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="critperlevel"
                                defaultValue={details.stats.critperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="attackdamage"
                                defaultValue={details.stats.attackdamage}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="attackdamageperlevel"
                                defaultValue={details.stats.attackdamageperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="attackspeedperlevel"
                                defaultValue={details.stats.attackspeedperlevel}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="attackspeed"
                                defaultValue={details.stats.attackspeed}
                                InputProps={{
                                    readOnly: true
                                }}
                                variant="filled"
                            />
                        </div>
                    </form>
                </Row>
            </Row>
        );
    }

    return (
        <Container className="detail-form">
            <div className="col">
                <DetailForm />
            </div>
        </Container>

    )
}

export default GetChampionDetails;