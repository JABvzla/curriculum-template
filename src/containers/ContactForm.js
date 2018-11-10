import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import validator from "validator";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

/**
 * Form to send contact email.
 * 
 */
class ContactForm extends Component {

  /**
   * Constructor with mandatory parameters.
   *
   * @param Object The initial properties of the component, cannot be null.
   */
  constructor(props) {
    super(props);

    this.state = {
      "name": "",
      "email": "",
      "message": "",
      "validName": false,
      "validEmail": false
    };

    this.sendContactEmail = this.sendContactEmail.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  /**
   * Send contact form via email.
   */
  sendContactEmail() {
    
    const modalOption = {
      buttons: false, 
      closeModal: false,
      closeOnClickOutside: false,
      closeOnEsc: false
    };

    let email = {
      "user" : "user_HfeTLLvjvvDBIwDzhhBKD",
      "service" : "josebonito_com",
      "template" : "contact",
      "data" : {
        "to_email":"joseantoniobonito@hotmail.com",
        "from_name": this.state.name,
        "from_email": this.state.email,
        "message": this.state.message
      }
    };

    swal("Enviando tu informacion de contacto",modalOption)
      .then(emailjs.send(email.service, email.template, email.data, email.user)
        .then(() => {
          swal("¡Tu mensaje fue enviado correctamente!",
            "Pronto nos pondremos en contacto ;)","success");

          this.setState({
            "name": "",
            "email": "",
            "message": "",
            "validName": false,
            "validEmail": false
          });
        }, () => {
          swal("Error al enviar el email", "Intentalo mas tarde.","error");
        }));
  }

  /**
   * On Name change event.
   */
  onNameChange(e) {
    let str = e.target.value;
    let valation = validator.isAlpha(str.substr(0,1));
    valation = valation? validator.isAscii(str) : false;
    this.setState({name: str, validName: valation });
  }
  
  /**
   * On Email change event.
   */
  onEmailChange(e) {
    let str = e.target.value;
    this.setState({email: str, validEmail: validator.isEmail(str)});
  }
  
  /**
   * On Message change event.
   */
  onMessageChange(e) {
    let str = e.target.value;
    this.setState({message: str});
  }

  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Card className={classes.card}>
          <CardHeader title="Formulario de Contacto"/>
          <CardContent>
            <form className={classes.form}>

              <TextField label="Nombre" 
                value={this.state.name}
                onChange={this.onNameChange}
                error={!this.state.validName && this.state.name.length > 0} />
            
              <TextField label="Email" 
                value={this.state.email}
                onChange={this.onEmailChange} 
                error={!this.state.validEmail && this.state.email.length > 0} />

              <TextField label="Mensaje" 
                value={this.state.message}
                onChange={this.onMessageChange} 
                multiline rows="4" />

              <Button 
                onClick={this.sendContactEmail}
                disabled={!this.state.validName || !this.state.validEmail}
                variant="raised" 
                color="primary" 
                className={classes.button}>
              Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  main: {
    display: "flex",
    minWidth: "100%",
    minHeight: "100vh",
  },
  card: {
    margin: "auto",
    position:"relative",
    maxWidth: 600,
    [theme.breakpoints.up("sm")]: {
      minWidth: 500,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 300
  },

});

export default withStyles(styles)(ContactForm);
