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


const leftovers = (
  <Deck>
    <Slide bgColor='tertiary'>
      <Heading size={6} textColor='primary'>A text editor: <Code>vim</Code></Heading>
      <List>
        <ListItem>Editor of choice for many developers</ListItem>
        <ListItem>Notoriously hard to learn, but don't worry</ListItem>
      </List>
      <Text>Run <Code>vim text.txt</Code> and wait</Text>
    </Slide>

    <Slide>
      <Heading size={5} style={styles.header}>Vim is a modal editor</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderItem>
              Mode
            </TableHeaderItem>
            <TableHeaderItem>
              Description
            </TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>
              Normal
            </TableItem>
            <TableItem>
              Move the cursor
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              Insert
            </TableItem>
            <TableItem>
              Insert text
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              Visual
            </TableItem>
            <TableItem>
              Highlight text
            </TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <Slide>
      <Heading size={5} style={styles.header}>Normal mode commands</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderItem>
              Command
            </TableHeaderItem>
            <TableHeaderItem>
              Description
            </TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableItem>
              <Code>i</Code>
            </TableItem>
            <TableItem>
              Enter <em>Insert</em> mode
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              <Code>:w &lt;CR&gt;</Code>
            </TableItem>
            <TableItem>
              Write to file
            </TableItem>
          </TableRow>
          <TableRow>
            <TableItem>
              <Code>:q &lt;CR&gt;</Code>
            </TableItem>
            <TableItem>
              Quit <Code>vim</Code>
            </TableItem>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>

    <HeaderSlide
      title='Project management'
      quote='Your code will become more complex over time. Here is how we combat that.'
    />

  <Slide>
    <Heading size={5} style={styles.header}>Basic <Code>git</Code> commands</Heading>
    <Table style={{ textAlign: 'left' }}>
      <TableHeader>
        <TableRow>
          <TableHeaderItem>
            Command
          </TableHeaderItem>
          <TableHeaderItem>
            Description
          </TableHeaderItem>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableItem>
            init
          </TableItem>
          <TableItem>
            Create a new repository (creates <Code>.git</Code>)
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            status
          </TableItem>
          <TableItem>
            View the <Code>diff</Code> status of this repository
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            add
          </TableItem>
          <TableItem>
            Stage a file to be committed
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            commit
          </TableItem>
          <TableItem>
            Annotate the changes to the staged files
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            push
          </TableItem>
          <TableItem>
            Upload commits to <em>origin</em>
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            pull
          </TableItem>
          <TableItem>
            Get the latest commits
          </TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
  </Deck>
);
