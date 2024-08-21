import { Button, Container, Grid, styled, Typography } from "@mui/material"
import FotoPerfil from "../../../../assets/images/FotoPerfil.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

  const StyledHero = styled("div")(()=>({
    backgroundColor: "black",
    height: "100vh"


  }))

  const StyledImg = styled("img")(()=>({
    width: "100%",
    borderRadius: "50%"



  }))

    return (
      <>
       <StyledHero>
        <Container>

        <Grid container spacing={2}> 
        <Grid iten xs={4}>

        <StyledImg src= {FotoPerfil}/>

        </Grid>

        <Grid iten xs={8}>

          <Typography color="Blue" variant="h1"> Carlos Alberto Carneiro </Typography>
          <Typography color="Blue" variant="h2"> Sou Desenvolvedor FullStack </Typography>

          <Button>
          <DownloadIcon/>
          Baixar CV
          </Button>
          <Button>
            <EmailIcon/>
            
            Contate-me
            </Button>


        </Grid>

       </Grid>


        </Container>
       </StyledHero>
       
        
       
      </>
    )
  }
  
  export default Hero