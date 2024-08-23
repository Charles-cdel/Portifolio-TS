import { Button, Container, Grid, styled, Typography } from "@mui/material"
import FotoPerfil from "../../../../assets/images/FotoPerfil.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

  const StyledHero = styled("div")(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    height: "100vh"


  }))

  const StyledImg = styled("img")(()=>({
    width: "100%",
    borderRadius: "50%"



  }))

    return (
      <>
       <StyledHero>

        <Container maxWidth="lg">

        <Grid container spacing={2}> 

        <Grid iten xs={12} md={4}>

        <StyledImg src= {FotoPerfil}/>

        </Grid>

        <Grid iten xs={12} md={8}>

          <Typography color="primary.contrastText" variant="h1" textAlign="center"> Carlos Alberto Carneiro </Typography>
          <Typography color="primary.contrastText" variant="h2" textAlign="center"> Sou Desenvolvedor FullStack </Typography>

          <Grid container display="flex" justifyContent="center">

            <Grid iten xs={12} md={4} display="flex" justifyContent="center">

              <Button>

              <DownloadIcon/>

              Baixar CV

              </Button>

            </Grid>

            <Grid iten xs={12} md={4} display="flex" justifyContent="center">

            <Button>

            <EmailIcon/>
            
            Contate-me

            </Button>
              
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