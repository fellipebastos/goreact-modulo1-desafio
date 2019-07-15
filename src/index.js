// React Import
import React, {Component, Fragment } from 'react';
import { render } from 'react-dom';

// Styles Import
import './assets/reset.css';
import './assets/styles.scss';

//Plugins Import
import Header from './components/Header'
import Post from './components/Post/Post'

class App extends Component {
  state = {
    posts: [
      {
        key: 1,
        avatar: './assets/images/avatar1.png',
        name: "Lorem Ipsum",
        time: "há 1 min",
        body: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Sapien in monti palavris qui num significa nadis i pareci latim. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
      },
      {
        key: 2,
        avatar: './assets/images/avatar2.png',
        name: "Lorem Ipsum",
        time: "há 1 min",
        body: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Sapien in monti palavris qui num significa nadis i pareci latim. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
      },
      {
        key: 3,
        avatar: './assets/images/avatar3.png',
        name: "Lorem Ipsum",
        time: "há 1 min",
        body: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Sapien in monti palavris qui num significa nadis i pareci latim. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
      }
    ]
  }
  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        { posts && posts.map(post => <Post key={post.key} data={post}/>) }
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
