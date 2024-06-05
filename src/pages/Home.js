import 'rsuite/dist/rsuite.min.css';
import './Home.css';
import { Container, Header, Content, Footer, Button } from 'rsuite';
import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

import logo from './logo.jpg';

const Home = () => {
  return (
    <div className="div">
      <Container>
        <Header>
          <h2 className="h2">Corporate Website</h2>

          <Box
            component="section"
            display="flex"
            justifySelf="center"
            alignItems="center"
            sx={{ width: 'auto', p: 3, border: '1px ' }}
            className="box1"
          >
            <img src={logo} alt="Logo" width="50px" height="50px" />{' '}
            <h5 className="h4"> Ayush Pandey || React developer</h5>
            <Button appearance="default" className="button b1">
              Get in touch
            </Button>
          </Box>
        </Header>

        <Content className="content">
          <ThemeProvider
            theme={{
              palette: {
                primary: {
                  main: '#0d0c22',
                },
              },
            }}
          >
            <Box
              sx={{
                width: 'auto',
                height: 1000,
                borderRadius: 3,
                bgcolor: 'primary.main',
              }}
            />
          </ThemeProvider>

          <ThemeProvider
            theme={{
              palette: {
                primary: {
                  main: '#0d0c22',
                },
              },
            }}
          >
            <Box
              marginTop="2%"
              sx={{
                width: 'auto',
                height: 1000,
                borderRadius: 3,
                bgcolor: 'primary.main',
              }}
            />
          </ThemeProvider>
        </Content>

        <Footer className="footer">
          <p>©2024 </p> <a className="a">Terms</a> <a className="a">Privacy</a>{' '}
          <a className="a">Cookies</a>
        </Footer>
      </Container>
    </div>
  );
};

export default Home;
