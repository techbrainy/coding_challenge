import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { Fragment, ReactElement } from "react";

import startups from "D://WebDevelopment_downloads_projects//Interview//coding_challenge//src//mocks//startups.json";
export default function StartupList(): ReactElement {
  return (
    <Fragment>
      {startups.map((res) => (
        <Grid item marginBottom={2}>
          <Card sx={{ marginBottom: "3" }}>
            <CardContent>
              <Typography fontSize={30} fontWeight={"400"}>{res.name}</Typography>

              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                sx={{
                  color: "GrayText",
                }}
              >
                <Typography color={"GrayText"} paddingRight={1}>
                  Founded: {new Date(res.dateFounded).getFullYear()}
                </Typography>
                <Typography paddingRight={1}>|</Typography>
                <Typography paddingRight={1}> {res.employees}</Typography>
                <Typography paddingRight={1}>|</Typography>
                <Typography paddingRight={1}>{res.totalFunding}</Typography>
                <Typography paddingRight={1}>$</Typography>
                <Typography paddingRight={1}>|</Typography>
                <Typography>{res.legalEntity}</Typography>
              </Stack>
              <Typography>{res.shortDescription}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Fragment>
  );
}
