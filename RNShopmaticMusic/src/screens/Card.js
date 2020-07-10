import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <Card
        title={null}
        image={{ uri: "" }}
        containerStyle={{ padding: 0, width: 160 }}
      >
        <Text style={{ marginBottom: 10 }}>
          title
        </Text>
      </Card>
    );
  }
}