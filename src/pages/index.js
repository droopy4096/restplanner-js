import React from 'react'
import Layout from '../components/layout'

export default class IndexPage extends React.Component {
  state = {
    schedule: "",
    payStart: "",
    years: "",
    step: "",
    housePrice: "",
    interest: "",
    downpayment: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleNext = event => {
    event.preventDefault()
    alert (`${this.state.schedule} ${this.state.payStart} ${this.state.years} ${this.state.step}`)
  }

  handleSubmit = event => {
    event.preventDefault()
    alert (`${this.state.housePrice} ${this.state.interest} ${this.state.downpayment}`)
  }

  render () {
    return (
      <Layout>
      <div class="container">
        <div id="schedule">
          <form onSubmit={this.handleNext}>
            {/* Setting up payments schedule
            fieldset(disabled='') - to disable the fields */}
            <fieldset>
              <legend>Create Schedule</legend>
              <div class=".form-field">
                <label for="schedule">Payments</label>
                {/* How often are the payments: weekly, bi-weekly, monthly. For weekly/bi-weekly choice we'll have another option showing. */}
                <input
                  list="schedules"
                  id="schedule"
                  name="schedule"
                  value={this.state.payments}
                  onChange={this.handleInputChange}
                />
                <datalist id="schedules">
                  <option value="Weekly" />
                  <option value="Bi-Weekly" />
                  <option value="Monthly" />
                </datalist>
              </div>
              {/* Calendar that allows to choose the date of 'Payments Start' */}
              <div class=".form-field">
                <label for="payStart">Start Date</label>
                <input
                  type="date"
                  id="payStart"
                  name="payStart"
                  value={this.state.payStart}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class=".form-field">
                <label for="years">Mortgage Period (years)</label>
                <input
                  type="number"
                  id="years"
                  name="years"
                  min='1'
                  max='99'
                  value={this.state.years}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class=".form-field">
                <label for="step">Periodicity (months)</label>
                <input
                  type="number"
                  id="step"
                  name="step"
                  min='1'
                  max='12'
                  value={this.state.step}
                  onChange={this.handleInputChange}
                />
              </div>
            </fieldset>
            <button type="submit">Next</button>
          </form>
        </div>
        <div id="mortgage">
          <form onSubmit={this.handleSubmit}>
            {/* Setting up payments schedule
            fieldset(disabled='') - to disable the fields */}
            <fieldset>
              <legend>Mortgage Set-Up</legend>
              <div class=".form-field">
                <label for="housePrice">House Price</label>
                {/* How often are the payments: weekly, bi-weekly, monthly. For weekly/bi-weekly choice we'll have another option showing. */}
                <input
                  type="date"
                  id="housePrice"
                  name="housePrice"
                  min='1'
                  value={this.state.housePrice}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class=".form-field">
                <label for="interest">Interest Rate (%)</label>
                <input
                  type="number"
                  id="interest"
                  name="interest"
                  min='0'
                  max='6'
                  step='0.01'
                  value={this.state.interest}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class=".form-field">
                <label for="downpayment">Downpayment</label>
                <input
                  type="number"
                  id="downpayment"
                  name="downpayment"
                  min='0'
                  value={this.state.downpayment}
                  onChange={this.handleInputChange}
                />
              </div>
            </fieldset>
            {/* Show payments schedule on the screen. */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      </Layout>
    )
  }
}