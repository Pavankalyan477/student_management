import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ContextDetails() {
    return (
        <div>
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
             DSA
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Stacks and Queus
              </Typography>
              <Typography variant="body2" gutterBottom>
                #JAVA, #Python, #JavaScript
              </Typography>
              <Typography variant="body2" color="text.secondary">
                9:30AM to 12PM
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Start
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              5-1-2022
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <br/>
     <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
             DSA
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Stacks and Queus
              </Typography>
              <Typography variant="body2" gutterBottom>
                #JAVA, #Python, #JavaScript
              </Typography>
              <Typography variant="body2" color="text.secondary">
                9:30AM to 12PM
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Start
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              5-1-2022
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
     <br/>
     <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
             DSA
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Stacks and Queus
              </Typography>
              <Typography variant="body2" gutterBottom>
                #JAVA, #Python, #JavaScript
              </Typography>
              <Typography variant="body2" color="text.secondary">
                9:30AM to 12PM
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Start
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              5-1-2022
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
     <br/>
     <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
             DSA
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Stacks and Queus
              </Typography>
              <Typography variant="body2" gutterBottom>
                #JAVA, #Python, #JavaScript
              </Typography>
              <Typography variant="body2" color="text.secondary">
                9:30AM to 12PM
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Start
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              5-1-2022
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
        </div>
    )
}
