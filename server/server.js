const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const AWS = require('aws-sdk');

app.use(express.json());
app.use(cors());

app.post('/sendMessage', (req, res) => {
    console.log('here')
    let sended = { user: false, manager: false }
    const { name, phoneNumber, amount } = req.body;
    let message, managerMessage;
    if (amount) {
        managerMessage = `שלום ספיר
            ${name} נרשמה לסדנא בקבוצות צרי עמה קשר בהקדם טלפון: ${phoneNumber}
            מספר המשתתפים הוא ${amount}`
    } else {
        managerMessage = `שלום ספיר
        ${name} נרשמה לסדנא אישית טלפון: ${phoneNumber}`
    }
    message = `שלום ${name}
        פרטייך התקבלו בהצלחה לתשלום וסיום ההרשמה אצור עמך קשר בהקדם`
    var clientParams = {
        Message: message,
        PhoneNumber: '+972' + phoneNumber,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'SapirCourse'
            }
        }
    };

    var managerParams = {
        Message: managerMessage,
        PhoneNumber: '+972' + 548098038,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'SapirCourse'
            }
        }
    };
    function a() {
        var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
            .publish(clientParams).promise();
        publishTextPromise.then((data) => {
            console.log(data)
        }).catch(err => {
            console.log(JSON.stringify({ Error: err }))
        });
    }
    function b() {
        var publishTextPromiseManager = new AWS.SNS({ apiVersion: '2010-03-31' })
            .publish(managerParams).promise();
        publishTextPromiseManager.then((data) => {
            console.log(data)
        }).catch(err => {
            console.log(JSON.stringify({ Error: err }))
        });
    }
    Promise.all([a(), b()]).then(() => res.json({ message: 'success' })
    ).catch(err => res.json({ message: 'fail' }))

});

const PORT = process.env.PORT || 5000;
console.log('server started on port:', PORT);
app.listen(PORT);


