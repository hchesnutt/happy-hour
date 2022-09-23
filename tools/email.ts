import * as nodemailer from 'nodemailer';

export async function sendEmailForHappyHour(location: string) {
	// Create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: 'smtp.sparkpostmail.com',
		port: 587,
		secure: false, // True for 465, false for other ports
		auth: {
			user: 'SMTP_Injection',
			pass: process.env.SPARKPOST_API_KEY,
		},
	});

	const info = await transporter.sendMail({
		from: '"Lucas Shadler" <happy-hour@mail.lshadler.io>', // Sender address
		to: 'social-lshadler-test-aaaahq4ztwhidtv7ejkgna3jha@flockfreight.slack.com', // List of receivers
		subject: 'The Wheel has been spun!',
		html: `<b>We are going to ${location}</b>`,

	});

	console.log('Message sent: %s', info.messageId);
}