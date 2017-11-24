// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Layout,
  Fill,
  Image,
  Appear,
  List,
  ListItem,
  CodePane,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle-theme-nova';

// code view
import CodeSlide from 'spectacle-code-slide';

import { Diagram } from '../components';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  molecules: require('../assets/8803.jpg'),
  banner: require('../assets/banner.jpg'),
  php1: require('../assets/php1.jpg'),
  php2: require('../assets/php2.gif'),
  brain: require('../assets/brain.png'),
  mono: require('../assets/mono.png'),
  showme: require('../assets/show-me.png'),
  distributed: require('../assets/distributed.png'),
  whatIsThat: require('../assets/what-is-that.gif')
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={300} theme={theme} progress="none">
        <Slide bgColor="white">
          <Image src={images.banner} />
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image src={images.php1} />
            </Fill>
            <Fill align="center" style={{ display: 'flex', alignItems: 'center' }}>
              <BlockQuote fit>
                <Quote>I worked in PHP</Quote>
              </BlockQuote>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image src={images.php2} />
            </Fill>
            <Fill align="center" style={{ display: 'flex', alignItems: 'center' }}>
              <BlockQuote fit>
                <Quote>I worked in PHP</Quote>
              </BlockQuote>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={2} caps>Monolithic Architecture Path</Heading>
        </Slide>
        <Slide bgImage={images.molecules.replace('/', '')} bgDarken={0.75}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            MICROSERVICES 4 REAL
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} caps>The initial problem</Heading>
          <Diagram />
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote>
            Microservices are <span style={{ backgroundColor: 'white', color: 'black' }}>small</span>, <span style={{ backgroundColor: 'white', color: 'black' }}>autonomous</span> services that <span style={{ backgroundColor: 'white', color: 'black' }}>work together</span>
            </Quote>
            <Cite>Sam Newman</Cite>
          </BlockQuote>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/code2.example')}
          ranges={[
            { loc: [0, 12], title: 'HTTP Service' },
            { loc: [2, 3], note: 'Find songs related with the user query search' },
            { loc: [4, 5], note: 'Return a specific HTTP response' },
            { loc: [7, 12], note: 'We export a function to run a HTTP server' },
            { loc: [0, 12], title: 'What if I need a `search by artist` service?' },
            { loc: [2, 3], title: 'What is `MusicExplorer`?' },
            { loc: [2, 3], title: 'What if is another service?' }
          ]}
        />
        <Slide>
          <Heading size={3} caps>The "MusicExplorer Service" problem</Heading>
          <List>
            <Appear><ListItem>How can I found the service in the jungle</ListItem></Appear>
            <Appear><ListItem>How they communicate?</ListItem></Appear>
            <Appear><ListItem>What happen if MusicExplorer is down?</ListItem></Appear>
            <Appear><ListItem>These are common issues BTW!</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} caps>Solving the infrastructure problem</Heading>
        </Slide>
        <Slide>
          <Heading size={1} caps>Moleculer</Heading>
        </Slide>
        <Slide>
          <Heading size={3} caps>Features</Heading>
          <List>
            <Appear><ListItem>Fault tolerance <i className="em em-construction"/> built-in service registry & auto discovery</ListItem></Appear>
            <Appear><ListItem>support event driven architecture with balancing</ListItem></Appear>
            <Appear><ListItem>load balanced requests & events (round-robin, random, custom)</ListItem></Appear>
            <Appear><ListItem>pluggable transporters (NATS, MQTT, Redis)</ListItem></Appear>
            <Appear><ListItem>built-in caching solution (memory, Redis)</ListItem></Appear>
            <Appear><ListItem>health monitoring, metrics & statistics</ListItem></Appear>
            <Appear><ListItem>Promise-based solution (using bluebird)<i className="em em---1"/></ListItem></Appear>
            <Appear><ListItem>request-reply concept</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps>Concepts</Heading>
          <List>
            <Appear><ListItem>Service <i className="em em-package" /></ListItem></Appear>
            <Appear><ListItem>Node <i className="em em-bag" /></ListItem></Appear>
            <Appear><ListItem>Service Broker <i className="em em-godmode" /></ListItem></Appear>
            <Appear><ListItem>Transporter <i className="em em-electric_plug" /></ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading sice={3} caps>Music Explorer</Heading>
          <Image src={images.musicExplorer} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/code3.example')}
          ranges={[
            { loc: [0, 64], title: 'The `Songs` Service' },
            { loc: [0, 1], title: 'It\'s just a module' },
            { loc: [1, 2], note: 'With a name' },
            { loc: [3, 9], note: 'With an object where you can store every settings/options to your service' },
            { loc: [10, 25], note: 'Define your actions handler' },
            { loc: [17, 21], note: 'We are calling an action from other service: soundcloud' },
            { loc: [26, 35], note: 'You can subscribe to events' },
            { loc: [36, 42], note: 'You can also create private functions in the Service' },
            { loc: [43, 63], title: 'There are some lifecycle service events' },
            { loc: [43, 49], note: 'Fired when the service instance created' },
            { loc: [50, 56], note: 'Fired when `broker.start()` called' },
            { loc: [57, 63], note: 'Fired when `broker.stop()` called' }
          ]}
        />
        <Slide>
          <Heading size={3} caps>Node</Heading>
          <List>
            <Appear><ListItem>A process <i className="em em-ghost" /></ListItem></Appear>
            <Appear><ListItem>Running in some network <i className="em em-computer" /></ListItem></Appear>
            <Appear><ListItem>Hosting one or more services <i className="em em-house" /><i className="em em-package" /></ListItem></Appear>
          </List>
          <Appear>
            <Image src={images.mono} />
          </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/code4.example')}
          ranges={[
            { loc: [0, 11], title: 'Service Broker' },
            { loc: [2, 6], title: 'It\'s the main component of Moleculer' },
            { loc: [2, 6], title: 'It handles services & events, calls actions and communicates with remote nodes.' },
            { loc: [2, 6], title: 'You need to create an instance of ServiceBroker on every node.' },
            { loc: [3, 4], note: 'It identifies a node in a cluster when there are many nodes' },
            { loc: [4, 5], note: 'Logger class. In production you can use an external logger e.g. winston or pino' },
            { loc: [7, 8], note: 'We create the `songs` service' },
            { loc: [8, 9], note: 'We create the `musicExplorer` service' },
            { loc: [9, 11], note: 'Start the node instance' }
          ]}
        />
        <Slide>
          <Heading size={3} caps>Transporter</Heading>
          <List>
            <Appear><ListItem>communicates with other nodes</ListItem></Appear>
            <Appear><ListItem>It transfers events, calls requests, processes responses</ListItem></Appear>
            <Appear><ListItem>If a service is running on multiple instances on different nodes, the requests will be load-balanced between nodes</ListItem></Appear>
          </List>
          <Appear><Image src={images.distributed} /></Appear>
        </Slide>
        <Slide>
          <Heading size={3} caps>Show me the code</Heading>
          <Image src={images.showme} />
        </Slide>
        <Slide>
          <Heading size={3} caps>Take aways!</Heading>
          <List>
            <Appear><ListItem>Hay tres conceptos en arq orientada a microservicios: Service, Service Broker, Transporter</ListItem></Appear>
            <Appear><ListItem>microservicio como un node module</ListItem></Appear>
            <Appear><ListItem>las fronteras importan</ListItem></Appear>
            <Appear><ListItem>escalabilidad + tolerante a fallos + autonomia</ListItem></Appear>
            <Appear><ListItem>time * problem/solution = happiness</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps>TIME</Heading>
        </Slide>
      </Deck>
    );
  }
}
