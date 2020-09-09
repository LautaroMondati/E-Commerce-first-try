import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory, } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../store/actions/user.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import estilos from './MiPerfil.style';

//-------------------------------------------
const useStyles = estilos;
//-------------------------------------------

function MiPerfil(props) {
    const [me, setMe] = useState({});
    const classes = useStyles();

    let history = useHistory();

    const cerrarSesion = (e) => {
        e.preventDefault();
        axios.get('http://localhost:4000/auth/logout', { withCredentials: true }).then(
            props.setUser(null),
            history.replace('/products')
        ).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get('http://localhost:4000/auth/me', { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setMe(res.data)
            });
    }, []);

    return (
        <div className={classes.perfil}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://img.freepik.com/free-vector/beer-mugs-with-foam-set-vintage-style_225004-1146.jpg?size=626&ext=jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.conteniner}>
                        <Typography variant="h4" component="h3">
                            MI PERFIL CERVECERO
                        </Typography>
                        <div className={classes.nya}>
                            <Typography variant="h4" component="h4">
                                Nombre y Apellido:
                        </Typography>
                            <div style={{ marginLeft: '10px' }}>
                                <Typography variant="h4" component="h4" style={{ marginTop: "4px" }}>
                                    {me.first_name} {me.last_name}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.dir}>
                            <Typography gutterBottom variant="h4" component="h4">
                                Direccion:
                            </Typography>
                            <div style={{ marginLeft: '10px' }}>
                                <Typography variant="h4" component="h4" style={{ marginTop: "4px" }}>
                                    {me.adress}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.email}>
                            <Typography gutterBottom variant="h4" component="h4">
                                Email:
                        </Typography>
                            <div style={{ marginLeft: '10px' }}>
                                <Typography variant="h4" component="h4" style={{ marginTop: "4px" }}>
                                    {me.email}
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className={classes.boton}>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                            <Button onClick={cerrarSesion} style={{ borderRadius: '5px' }}>
                                Cerrar Sesion
                        </Button>
                            <Link to={`auth/passwordReset`} style={{ textDecoration: 'none' }}>
                                <Button style={{ textDecoration: 'none' }} color="primary" variant="contained" >
                                    Modificar contraseña
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
}

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = dispatch => ({
    setUser: (user) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(MiPerfil)