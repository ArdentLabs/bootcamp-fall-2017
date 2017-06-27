import React, { Component } from 'react';

import {
  Deck, Slide,
  Heading, Text, Code, CodePane,
  Quote, Cite, BlockQuote, Image,
  Layout,

  List,
  ListItem as RadiumListItem,

  Table as RadiumTable,
  TableHeader, TableBody, TableRow,
  TableHeaderItem as RadiumTableHeaderItem,
  TableItem as RadiumTableItem,
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import Emoji from '../components/emoji';


const images = {
  sam: require('../assets/sam.jpg'),
  dallas: require('../assets/dallas.jpg'),
  slack: require('../assets/slack.png'),
  trello: require('../assets/trello.png'),
  nodejs: require('../assets/nodejs.svg'),
  appBreakdown: require('../assets/app-breakdown.png'),
  boardBreakdown: require('../assets/board-breakdown.png'),
  controlsBreakdown: require('../assets/controls-breakdown.png'),
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

const styles = {
  header: {
    color: '#03A9FC',
    marginBottom: 50,
  },
};

const ListItem = ({ children }) =>
  <RadiumListItem style={{ whiteSpace: 'nowrap', padding: 5 }}>{children}</RadiumListItem>;

const Table= ({ children }) =>
  <RadiumTable style={{ textAlign: 'left', whiteSpace: 'nowrap' }}>{children}</RadiumTable>;

const TableItem = ({ children }) =>
  <RadiumTableItem style={{ whiteSpace: 'nowrap', padding: 10 }}>{children}</RadiumTableItem>;

const TableHeaderItem = ({ children }) =>
  <RadiumTableHeaderItem style={{ padding: 10 }}>{children}</RadiumTableHeaderItem>;

class HeaderSlide extends Component {
  componentWillEnter(cb) {
    this.refs.slide.componentWillEnter(cb)
  }

  componentWillAppear(cb) {
    this.refs.slide.componentWillAppear(cb)
  }

  componentWillLeave(cb) {
    this.refs.slide.componentWillLeave(cb)
  }

  render() {
    const { title, quote, ...rest } = this.props;
    return (
      <Slide ref='slide' bgColor='secondary' textColor='primary' {...rest}>
        <Heading size={6} textColor='grey' caps>{title}</Heading>
        <BlockQuote>
          <Quote>{quote}</Quote>
        </BlockQuote>
      </Slide>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} theme={theme}>

        <Slide transition={['zoom']}>
          <Heading size={1} fit textColor='secondary'>
            Week 1: Hello World <Emoji type='wave' />
          </Heading>
          <Code> console.log('Hello World'); </Code>
        </Slide>

        <Slide transition={['fade']} textColor='secondary'>
          <Heading size={6} caps>Introductions</Heading>
          <Image src={images.sam} width={300} />
          <Text>Sam Balana</Text>
          <Text>I <Emoji type='heart' /> <Code>JavaScript</Code></Text>
        </Slide>

        <Slide transition={['fade']} textColor='secondary'>
          <Heading size={6} caps>Introductions</Heading>
          <Image src={images.dallas} width={500} />
          <Text>Dallas Johnson</Text>
          <Text>I <Emoji type='heart' /> <Code>C++</Code></Text>
        </Slide>

        <Slide transition={['fade']} textColor='secondary'>
          <Heading size={6} caps>Introductions</Heading>
          <Text>What do you <Emoji type='heart' />?</Text>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={6} textColor='primary' caps>Course background and goals</Heading>
          <List>
            <ListItem>Jump into mobile app development</ListItem>
            <ListItem>Applicable to the real world</ListItem>
            <ListItem>Fast paced; expectations will be high</ListItem>
            <ListItem>Emphasis on clean, reusable code</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} textColor='tertiary'>
          <Heading size={6} caps>Class Breakdown</Heading>
          <Text>Total of 3 hours long, so bring a snack.</Text>
          <Text>Last 45 minutes for code reviews.</Text>
          <Text>Opt-out of code review for a seminar.</Text>
        </Slide>

        <HeaderSlide
          title='Communication and coordination'
          quote='It is not distance that keeps people apart, but the lack of communication.'
        />

        <Slide transition={['fade']} textColor='tertiary'>
          <Image src={images.slack} width={500} />
          <Text>Communicate with your classmates and instructors.</Text>
          <Text style={{marginTop: 50}} bold>Verify your name and email</Text>
        </Slide>

        <Slide transition={['fade']} textColor='tertiary'>
          <Image src={images.trello} width={500} style={styles.imgHeader} />
          <Text>Plan your project by organizing it into manageable steps.</Text>
        </Slide>

        <HeaderSlide
          title='Development workflow'
          quote='You cannot call yourself a professional programmer without knowing how to use the command line'
        />

        <Slide transition={['fade']} textColor='tertiary'>
          <Heading size={6} caps>Survey the room</Heading>
          <Text>How familar are you with the Linux command line?</Text>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={6} textColor='primary' caps>The command line</Heading>
          <List>
            <ListItem>All the tools we use will be CLI based</ListItem>
            <ListItem>Using the command line will be integral</ListItem>
            <ListItem>We'll be assuming you're on Linux or Mac</ListItem>
            <ListItem>We recommend using a Mac</ListItem>
          </List>
          <Text bold>Does anyone use Windows?</Text>
        </Slide>

        <Slide bgColor='primary'>
          <CodePane textSize="32px">{cow}</CodePane>
        </Slide>

        <Slide bgColor='primary'>
          <Heading size={5} style={styles.header}>Common commands</Heading>
          <Table style={{ whiteSpace: 'no-wrap' }}>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Command</TableHeaderItem>
                <TableHeaderItem>Description</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem><Code>ls</Code></TableItem>
                <TableItem>List files in the current directory</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>cd &lt;DEST&gt;</Code></TableItem>
                <TableItem>Change directory</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>mkdir &lt;NAME&gt;</Code></TableItem>
                <TableItem>Make a new directory</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>cp &lt;SOURCE&gt; &lt;DEST&gt;</Code></TableItem>
                <TableItem>Copy a file or directory</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>rm &lt;FILE&gt;</Code></TableItem>
                <TableItem>Remove a file or directory</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Code>mv &lt;SOURCE&gt; &lt;DEST&gt;</Code></TableItem>
                <TableItem>Move a file or directory</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide bgColor='primary'>
          <Heading size={5} style={styles.header}>Common directories</Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>
                  Name
                </TableHeaderItem>
                <TableHeaderItem>
                  Description
                </TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>
                  .
                </TableItem>
                <TableItem>
                  Current directory
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  ..
                </TableItem>
                <TableItem>
                  Previous directory
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  ~
                </TableItem>
                <TableItem>
                  Home directory
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  /
                </TableItem>
                <TableItem>
                  Root directory
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <HeaderSlide
          title='React Native'
          quote='Write once, use anywhere.'
        />

        <Slide bgColor='#333'>
          <Image src={images.nodejs} width={500} />
          <Text textColor='#EFEFEF'>Use JavaScript for all things <Emoji type='sparkles' /></Text>
          <Text textColor='#EFEFEF' style={{marginTop: 50}} bold>Let's get it installed</Text>
        </Slide>

        <Slide>
          <Text fit bold>Let's create something!</Text>
        </Slide>


        <HeaderSlide
          title='Snake App'
          quote='Experience is the teacher of all things.'
        />

        <Slide>
          <Heading size={6} caps fit>Snake App Breakdown</Heading>
          <Image src={images.appBreakdown} height={700} />
        </Slide>

        <Slide>
          <Heading size={6} caps fit>Board Breakdown</Heading>
          <Image src={images.boardBreakdown} height={700} />
        </Slide>

        <Slide>
          <Heading size={6} caps fit>Controls Breakdown</Heading>
          <Image src={images.controlsBreakdown} height={700} />
        </Slide>

      </Deck>
    );
  }
}

const cow = `\
$ cowsay "Learn to use the command line"
 _______________________________
< Learn to use the command line >
 -------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
