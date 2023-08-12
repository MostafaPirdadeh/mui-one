import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={"300"}>
        <Typography variant="h6" fontWeight={"100"}>
          Online Firends
        </Typography>
        <AvatarGroup max={5} sx={{justifyContent:"start"}}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.rokna.net/thumbnail/l5B7SnH5QQqU/NS2RJzVApQ3E7SFsFf8OS-KvMGwizaa_Q-_dxw0RVwm0qukoI27-JV2XP73Xc1uGeDRyE0w8KrrrEvf2Lcb5DzYd4j3WYr7vwXrZnkpaTeCC2reZintfT6N3nQCgEnvs/%D8%B9%D9%84%DB%8C+%D8%AF%D8%A7%DB%8C%DB%8C.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://varzeshi.org/wp-content/uploads/2023/01/alikarimi-pho-1.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://static2.neshanonline.com/thumbnail/JyTx5HmAk1zq/joh30ybOyj3thpd-5vniYlcrKFfupUicZHWjwaaQMSWgM9z71-za5M4Xqa1S0y-f9WwCgkmPENBKqI3U8kPU_Vl4qWBKlFer/%D8%AA%D8%B1%D8%A7%D9%86%D9%87+%D8%B9%D9%84%DB%8C%D8%AF%D9%88%D8%B3%D8%AA%DB%8C.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.donya-e-eqtesad.com/thumbnail/OEn5KOmT41el/QHn8O9nsSzT8qCU7RegsN6Pbb5v74eEtbKeSOh05RaboyrQcqFu_Fkt7TZyzEhnm/%D8%B4%D8%B1%D9%88%DB%8C%D9%86+%D8%AD%D8%A7%D8%AC%DB%8C+%D9%BE%D9%88%D8%B1.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://static2.rasadeghtesadi.com/servev2/RWVUdr1n0NY5/m1MI1kFsYl0,/%DA%A9%D8%AA%D8%A7%DB%8C%D9%88%D9%86+%D8%B1%DB%8C%D8%A7%D8%AD%DB%8C.jfif"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={"100"} mt={2} mb={2}>
          Lates Photo
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872"
              alt="pic1"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU"
              alt="pic2"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000"
              alt="pic3"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={"100"} mt={2}>
          Lates Converstions
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  src="https://static2.rasadeghtesadi.com/servev2/RWVUdr1n0NY5/m1MI1kFsYl0,/%DA%A9%D8%AA%D8%A7%DB%8C%D9%88%D9%86+%D8%B1%DB%8C%D8%A7%D8%AD%DB%8C.jfif"
 />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Katayoun
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard"             src="https://cdn.donya-e-eqtesad.com/thumbnail/OEn5KOmT41el/QHn8O9nsSzT8qCU7RegsN6Pbb5v74eEtbKeSOh05RaboyrQcqFu_Fkt7TZyzEhnm/%D8%B4%D8%B1%D9%88%DB%8C%D9%86+%D8%AD%D8%A7%D8%AC%DB%8C+%D9%BE%D9%88%D8%B1.jpg"
 />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Shervin
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://static.dw.com/image/56481795_804.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Voria
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};
export default Rightbar;
