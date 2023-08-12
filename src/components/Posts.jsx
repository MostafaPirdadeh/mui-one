import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
const Posts=()=>{
    return(
        <Card sx={{margin:"20px"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Mostaafa"
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.kojaro.com/2023/5/f7394e68-5bcb-48e0-b48b-bb078cb232b9-840x560.jpg"
          alt="Milad"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          
        </CardActions>
        
      </Card>
    
    )
}
export default Posts;