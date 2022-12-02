import * as React from 'react';
import "./realestate.css"
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Worktender() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 

  return (
    <div className="Realestate">
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "black"}}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <h3>Bidding System</h3>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}
           style={{ color: "white"}}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[<Link to="/"  style={{color: "white"}}>Home</Link>, <li><Link to="/contact"  style={{color: "white"}}>Contact</Link></li>, <li><Link to="/start"  style={{color: "white"}}>Start Bid</Link></li>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon  style={{ color: "rgb(160, 255, 8)"}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[<Link to="/about"  style={{color: "white"}}>About</Link>, <li><Link to="/design"  style={{color: "white"}}>Design</Link></li>, "FeedBack"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon  style={{ color: "rgb(160, 255, 8)"}}>
                {index % 10 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
      <DrawerHeader />
      <Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={25} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 1200,
                  height: 200,
                },
                
                
              }}
              
            >
              {[ 5].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <text style={{fontWeight: "bold", color: "red"}}>
                  Latest Andhra Pradesh Tenders<br /></text>
                  <text> Find latest Global Construction Work Tenders, LSTK Tenders, FEED Packages, EPCM, EPIC and PMC Global Contracts. Tendersontime the biggest tenders website and tenders portal, provides online tenders, tender news and International Tenders. Trial users get access to Free Tenders, e-procurement tenders and tenders online globally.<br />
                      </text>
                </Item>
                
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>

    <Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={25} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 1200,
                  height: 200,
                },
                
                
              }}
           
              
            >
              {[ 5].map((elevation) => (
                
                <Item key={elevation} elevation={elevation}>
                
                  Country: India , State: Andhra pradesh<br />
                  <text>oakridge international school<br /> </text>   
                <Button variant="contained" href="#contained-buttons" style={{padding: 10, marginRight: -800}}>
                <Link to="/view">View Details</Link>
      </Button>
                  <text style={{textAlign: "center"}}>TOT Ref No.: 60703413, Deadline: 10 Jan 2022<br />
                   </text>
                 
                </Item>
                
              ))}
              
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>

    <Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={25} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 1200,
                  height: 200,
                },
                
                
              }}
              
            >
              {[ 5].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  
                Country: India , State: Andhra pradesh<br />
                <text>Appolo Hospital<br /> </text>
                <Button variant="contained" href="#contained-buttons" style={{padding: 10, marginRight: -800}}>
                <Link to="/view">View Details</Link>
      </Button>
                <text>TOT Ref No.: 60674770, Deadline: 09 Dec 2021<br /> </text>
               
              </Item>
                
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>


    <Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={25} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 1200,
                  height: 200,
                },
                
                
              }}
              
            >
              {[ 5].map((elevation) => (
                 <Item key={elevation} elevation={elevation}>
                  
                 Country: India , State: Andhra pradesh<br />
                 <text>Beach Resots - Vishakapatnam<br /> </text>
                 <Button variant="contained" href="#contained-buttons" style={{padding: 10, marginRight: -800}}>
                 <Link to="/view">View Details</Link>
      </Button>
                 <text>TOT Ref No.: 50674770, Deadline: 25 Dec 2021<br /> </text>
                
               </Item>
               
                
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>


    <Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={25} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 1200,
                  height: 200,
                },
                
                
              }}
              
            >
              {[ 5].map((elevation) => (
               <Item key={elevation} elevation={elevation}>
                  
               Country: India , State: Andhra pradesh<br />
               <text>Hotel Minarva -- Vijayawada<br /> </text>
               <Button variant="contained" href="#contained-buttons" style={{padding: 10, marginRight: -800}}>
               <Link to="/view">View Details</Link>
      </Button>
               <text>TOT Ref No.: 40674770, Deadline: 09 Jan 2022<br /> </text>
              
             </Item>
                
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>


    <Grid>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={25} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 1200,
                  height: 200,
                },
               
                
                
              }}
              

             
              
            >
              {[ 5].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  
                Country: India , State: Andhra pradesh<br />
                <text>Appartements -- Srikakulam<br /> </text>
                <Button variant="contained" href="#contained-buttons" style={{padding: 10, marginRight: -800}}>
                <Link to="/view">View Details</Link>
      </Button>
                <text>TOT Ref No.: 33674770, Deadline: 16 Dec 2021<br /> </text>
               
              </Item>
                
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
       
        </Main>
        
    </Box>
    </div>
  );
  
          
        }