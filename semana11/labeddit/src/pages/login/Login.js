import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToRegister } from '../../routes/Coordinator'
import { login } from '../../requests/Users'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  useUnprotectedPage()

  const history = useHistory()

  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (e) => {
    e.preventDefault()
    login(form, clear, history)
  }

 
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={onSubmitForm} className={classes.form}>
            <TextField
              variant={"outlined"}
              margin={"normal"}
              required
              fullWidth
              label={"Email Address"}
              name={"email"}
              type={"email"}
              value={form.email}
              onChange={onChange}
            />
            <TextField
              variant={"outlined"}
              margin={"normal"}
              required
              fullWidth
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Password"}
              type={"password"}
            />
            <Button
              type={"submit"}
              fullWidth
              variant={"contained"}
              color={"primary"}
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => goToRegister(history)}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}