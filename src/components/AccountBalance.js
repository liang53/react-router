import React, {Component} from 'react';
// import axios from 'axios';

class AccountBalance extends Component {
  constructor (props) {
    super(props)
    this.state = {
      creditTotal: 0,
      credits: [
            {
              "id": "963a03dd-1388-4267-bee7-f061886522e5",
              "description": "Refined Frozen Soap",
              "amount": 350.99,
              "date": "2018-04-15T05:47:22.348Z"
            },
            {
              "id": "2cb7066e-47b3-496b-b7c7-d2abc6cbe7a8",
              "description": "Ergonomic Granite Shoes",
              "amount": 668.15,
              "date": "2018-03-16T22:28:45.938Z"
            },
            {
              "id": "7cf27e8c-0974-450e-8dc3-a9c3fa79c4dc",
              "description": "Tasty Steel Salad",
              "amount": 333.1,
              "date": "2017-10-28T19:45:13.677Z"
            },
            {
              "id": "93773824-bdea-4239-8824-5528a731ca47",
              "description": "Fantastic Rubber Bacon",
              "amount": 150.21,
              "date": "2018-02-08T16:05:07.921Z"
            },
            {
              "id": "8dd1f29f-5dc6-4a22-8110-132148aa1540",
              "description": "Incredible Plastic Tuna",
              "amount": 47.02,
              "date": "2018-03-02T07:32:54.785Z"
            },
            {
              "id": "a29c206a-d7c5-4218-a8da-6147669100af",
              "description": "Unbranded Metal Cheese",
              "amount": 25.81,
              "date": "2018-02-06T20:32:19.859Z"
            },
            {
              "id": "37212aea-a00f-4227-8e99-02a5af911cbf",
              "description": "Refined Metal Mouse",
              "amount": 853.96,
              "date": "2018-07-08T03:51:00.665Z"
            },
            {
              "id": "3a11339d-5cb7-47df-acb1-6a19edf68bf6",
              "description": "Unbranded Frozen Computer",
              "amount": 590.97,
              "date": "2017-10-27T18:55:23.183Z"
            },
            {
              "id": "facde539-f840-44e6-acb6-a6388b93b9bb",
              "description": "Small Concrete Tuna",
              "amount": 876.56,
              "date": "2018-06-14T02:39:07.340Z"
            },
            {
              "id": "fc2aa7c3-5cca-44f1-afd0-c7650e82bffa",
              "description": "Gorgeous Soft Pizza",
              "amount": 829.88,
              "date": "2017-08-25T20:05:41.726Z"
            }
          ],
      debits: [
          {
            "id": "c41084b1-ad84-4630-bc8d-679fb66c5deb",
            "description": "Tasty Frozen Keyboard",
            "amount": 669.68,
            "date": "2018-04-26T09:26:58.413Z"
          },
          {
            "id": "e4d72674-b565-494c-a004-5d5761bf7890",
            "description": "Handmade Concrete Tuna",
            "amount": 769.91,
            "date": "2018-06-14T22:53:52.716Z"
          },
          {
            "id": "ccf88aa1-7d0d-4c5e-8d12-d263f707d110",
            "description": "Practical Rubber Cheese",
            "amount": 11.62,
            "date": "2018-04-20T14:41:48.550Z"
          },
          {
            "id": "ef6e2ac4-eab2-4075-9c28-70eaf3ffbf1a",
            "description": "Generic Steel Bacon",
            "amount": 38.95,
            "date": "2017-09-10T09:30:32.851Z"
          },
          {
            "id": "8f02674b-8cb7-46c0-b7a3-ee938c8dfeab",
            "description": "Rustic Steel Mouse",
            "amount": 68.72,
            "date": "2017-10-25T12:46:06.074Z"
          },
          {
            "id": "48975d31-263d-408d-833a-f847583a92ec",
            "description": "Small Frozen Cheese",
            "amount": 992.86,
            "date": "2017-12-02T04:00:39.584Z"
          },
          {
            "id": "11c0371e-7632-4b71-aad6-aec6f8f0b5a0",
            "description": "Intelligent Cotton Chair",
            "amount": 176.94,
            "date": "2018-05-22T20:16:36.503Z"
          },
          {
            "id": "bfa3e15c-74f6-4169-a3fa-10dc1e030d82",
            "description": "Ergonomic Wooden Bike",
            "amount": 610.48,
            "date": "2017-12-04T20:23:22.468Z"
          },
          {
            "id": "5979e8e0-2410-4055-bce8-5b4a00b292f2",
            "description": "Handmade Granite Shoes",
            "amount": 66.28,
            "date": "2017-12-28T15:36:05.241Z"
          },
          {
            "id": "799b163d-c33b-4608-a85c-5b7e42a9eb9f",
            "description": "Awesome Soft Tuna",
            "amount": 805.33,
            "date": "2017-11-27T15:36:09.609Z"
          }
        ]
    }
  }

  fetchDebits(){
    var total_credits = 0;
    var total_debits = 0;

    this.state.credits.map((c) =>
      total_credits += c["amount"]
    )

    this.state.debits.map((c) =>
      total_debits += c["amount"]
    )

    return (total_credits - total_debits);
  }

  render() {
    return (
        <div>
          Balance: {this.fetchDebits()}
        </div>
    );
  }
}

export default AccountBalance;
