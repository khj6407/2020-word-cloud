import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tyoography from "@material-ui/core/Typography";

const databaseURL = "https://wordcloud-4d9b3.firebaseio.com/";

class Words extends Component {
  constructor() {
    super();

    this.state = {
      words: null,
    };
  }

  _get = () => {
    fetch(`${databaseURL}/words.json`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((response) => this.setState({ words: response }));
  };

  componentDidMount = () => {
    this._get();
  };

  render() {
    const { words } = this.state;

    return (
      <div>
        {words &&
          words.map((word, idx) => {
            return (
              <Card key={idx}>
                <CardContent>
                  <Tyoography color="textSecondary" gutterBottom>
                    가중치 : {word.weight}
                  </Tyoography>
                  <Tyoography variant="h5" component="h2">
                    {word.word}
                  </Tyoography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    );
  }
}

export default Words;
