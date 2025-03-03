import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4} style={{ paddingTop: "100px" }}>
          <List />
        </Grid>
        <Grid item xs={12} md={8} style={{ paddingTop: "100px" }}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
