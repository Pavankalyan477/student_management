import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ContextDetails() {

  const [contest,setContest]=useState([])

  const fetchData = async () => {
    const {data} = await axios.get('http://localhost:3003/contest');
     console.log("data:",data.contest);
    setContest(data.contest);
  }
useEffect(() => {
 fetchData()
}, [])
  const filterDSA = async() => {
    const {data} = await axios.get("http://localhost:2233/contest/type/dsa");
    setContest(data.contest);
}

const handleDeadline = async() => {
    const {data} = await axios.get("http://localhost:2233/contest/sortByDeadline");
    setContest(data.contest);
}
const filterCoding = async () => {
    const {data} = await axios.get("http://localhost:2233/contest/type/coding");
    setContest(data.contest);
}


  return (
    <div style={{marginTop:"120px"}}>
      <div style={{gap:"13%"}}>
        <button onClick={fetchData}>All Contests</button>
        <button onClick={handleDeadline}>Sort by Deadline</button>
        <button onClick={filterDSA}>DSA Contest</button>
        <button onClick={filterCoding}>Coding Contest</button>
      </div>
      <br />{
        contest.map((data) =>(
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item>{data.type}</Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {data.tags}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.time}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    Start
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {data.deadline}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        ))
      }
      
      {/* <br />
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>DSA</Grid>
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
                <Typography sx={{ cursor: "pointer" }} variant="body2">
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
      <br />
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>DSA</Grid>
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
                <Typography sx={{ cursor: "pointer" }} variant="body2">
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
      <br />
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>DSA</Grid>
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
                <Typography sx={{ cursor: "pointer" }} variant="body2">
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
      </Paper> */}
    </div>
  );
}
