import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>Hello there!</p>
        <Component />
      </Container >
    )
  }
}

export default MyApp;