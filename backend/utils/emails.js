const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST, port: process.env.EMAIL_PORT, auth: {
        user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD,
    }, tls: {
        rejectUnauthorized: false,
    },
});

const sendEmail = async (options) => {
    const {to, subject, text} = options;
    try {
        const respo = await transporter.sendMail({from: process.env.EMAIL_USERNAME, to, subject, text});
        return {result: 'success', response: respo};
    } catch (error) {
        console.log(error);
        return {result: 'error', error: error.message};
    }
};

module.exports = sendEmail;

