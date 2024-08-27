import {Box, Container, Grid, styled, Typography } from "@mui/material"
import FotoPerfil from "../../../../assets/images/FotoPerfil.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../Components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../Components/StyledButton/AnimatedBackground/AnimatedBackground";


const Hero = () => {

  const StyledHero = styled("div")(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems:"center"


  }))

  const StyledImg = styled("img")(({theme})=>({
    width: "80%",
    borderRadius: "50%",
    border:`solid 1px ${theme.palette.primary.contrastText}`



  }))

    return (
      <>
       <StyledHero>

        <Container maxWidth="lg">

        <Grid container spacing={2}> 

        <Grid iten xs={12} md={5}>
          <Box position="relative">
            
            <Box position="absolute" width={"150%"} top={-100} right={0}>

              <AnimatedBackground/>

            </Box>

            <Box position ="relative" textAlign ="center">

            <StyledImg src= {FotoPerfil}/>

            </Box>
            

           
          </Box>


        </Grid>

        <Grid iten xs={12} md={7}>

          <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}> Carlos Alberto Carneiro </Typography>
          <Typography color="primary.contrastText" variant="h2" textAlign="center"> Sou Desenvolvedor FullStack </Typography>

          <Grid container display="flex" justifyContent="center" gap={3} pt={3}>

            <Grid iten xs={12} md={4} display="flex" justifyContent="center">

              
              <StyledButton>

              

              <DownloadIcon/>

              <Typography>
              Baixar CV
              </Typography>

              

              
              </StyledButton>

            </Grid>

            <Grid iten xs={12} md={4} display="flex" justifyContent="center">

            <StyledButton>

            <EmailIcon/>
            
            <Typography>
            Contate-me
            </Typography>

            </StyledButton>
              
            </Grid>
          </Grid>

        </Grid>

       </Grid>


        </Container>
       </StyledHero>
       
        
       
      </>
    )
  }
  
  export default Hero