import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  FormDialog,
  CustomInput,
  ItemGrid
} from "components";

import {P} from "components";

import avatar from "assets/img/faces/fed.jpg";

function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            subtitle="DJ - EDM"
            title="Love X Violence"
            description="Federico Dichiara and Jay Longo, separately known as Virtua and Loon3ytunez (respectively) form their collaboration act named “LXV” (Loon3ytunez x Virtua). They are a duo of Electronic Music's next generation under 20 and have big aspirations to push both their own original sounds as well as developing the harder genres of EDM which they both dearly cherish."
            footer={
                <div>
                <P>0.0000005 LXV to ETH</P>
                <FormDialog />
                </div>
              }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
