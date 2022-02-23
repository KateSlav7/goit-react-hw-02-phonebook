import React, { Component } from "react";
import Statistics from "../components/Statistics";
import Section from "../components/Section";
import FeedbackOptions from "../components/FeedbackOptions";
import Notification from "../components/Notification";
import { GlobalStyle } from "../theme/GlobalStyle.styled";

class App extends Component {
  // состояние. публичное свойство state. свойство экземпляра, всегда объект. от свойств этого объекта зависит разметка
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // countTotalFeedback = () =>
  //   this.state.good + this.state.neutral + this.state.bad;

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((ac, item) => (ac += item));
  };

  countPositiveFeedbackPercentage = () => {
    const res = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return !Number.isNaN(res) ? res : 0;
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;