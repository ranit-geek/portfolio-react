import React , {Component} from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import GitHubForkRibbon from 'react-github-fork-ribbon';
const Content = () => (
    <GitHubForkRibbon className="forkme-github" href="https://github.com/ranit-geek/portfolio-react/tree/master"
                      target="_blank"
                      color="green"
                      position="roght"
                      >
      Fork this app on GitHub
    </GitHubForkRibbon>
  );

class Projects extends Component
{
    
      render() {
        return(
          
           
          <div>
           
              <Grid>
              <Content />,
                <Cell col={12}>
                <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '220px', background: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/94490461/original/86eb94463df4b2580d64affd83e74e3fbf02c2de/nodejs-and-express-application.jpg) center / cover"}} />
                <CardText>
                REST API server implementation built on top Node.js and Express.js with Mongoose.js for MongoDB integration.
                </CardText>
                <CardActions border>
                  <Button onClick={() =>window.open('https://github.com/ranit-geek/RestFull-API-NodeJS','height=250,width=250')} colored>GitHub</Button>
                </CardActions>
              </Card>
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '469px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://udemy-images.udemy.com/course/750x422/1449262_3a67_6.jpg) center / cover'}}/>
                <CardText>
                    Rest API automation using python and requests 
                </CardText>
                <CardActions border>
                <Button onClick={() =>window.open('https://github.com/ranit-geek/Rest-API-Automation','height=250,width=250')} colored>GitHub</Button>
               </CardActions>
              </Card>
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '469px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '220px', background: 'url(https://www.emergya.com/blog/qa/wp-content/upload/sites/4/blog-appium-js-docker2-e1497007440364.jpg) center / cover'}} />
                <CardText>
                An android test framework written in java(build-tool:Maven) which includes appium and testng as a framework. This framework is wrapped in docker for easier setup of automation environment.
                </CardText>
                <CardActions border>
               
                <Button onClick={() =>window.open(' https://github.com/ranit-geek/Appium-Maven-Docker','height=250,width=250')} colored>GitHub</Button>
               
    
                </CardActions>
         
              </Card>
              
            </div>
                </Cell>
              </Grid>
          </div>
        )
      }
}

export default Projects