// pages/api/send-email.js

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

    if (!process.env.SENDGRID_API_KEY) {
        console.error('SENDGRID_API_KEY is not set.');
        return res.status(500).json({ error: 'Internal server error.' });
    } else {
        console.log('SENDGRID_API_KEY is set.');
    }

    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    const { name, email, message } = req.body;

    // Validate input data
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const emailContent = {
        to: 'hello@hugo-jimenez.com',
        from: 'hello@hugo-jimenez.com', // Replace with your verified sender
        subject: `New message from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
        replyTo: 'hello@hugo-jimenez.com',
    };

    try {
        await sendgrid.send(emailContent);
        return res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error.response.body);
        return res.status(500).json({ error: 'Error sending email.' });
    }
}
