import React from 'react';
import ReactMarkdown from 'react-markdown'

class Main extends React.Component{
  
  render() {
    let markdown = `Just a link: https://reactjs.com.`

    return (
      <>
      <ReactMarkdown children={markdown}># Hello, *world*!</ReactMarkdown>,
      </>
    )
  }

}

export default Main