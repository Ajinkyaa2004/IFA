import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { date, time, name, email, company } = await req.json();

        const emailUser = process.env.EMAIL_USER || 'insightfusionanalytics@gmail.com';
        const emailPass = process.env.EMAIL_PASS;

        if (!emailPass) {
            console.error('Error: EMAIL_PASS environment variable is not set.');
            return NextResponse.json(
                { success: false, message: 'Server configuration error: Missing email password.' },
                { status: 500 }
            );
        }

        console.log(`Attempting to send email from: ${emailUser}`);

        // Configure Nodemailer transporter
        // NOTE: For Gmail, use an App Password if 2FA is enabled.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        // 1. Email to Admin
        const adminMailOptions = {
            from: emailUser,
            to: process.env.ADMIN_EMAIL || emailUser, // Send to admin (or self)
            subject: `New Demo Request: ${name} - ${date} @ ${time}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>New Demo Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Date:</strong> March ${date}, 2026</p>
                    <p><strong>Time:</strong> ${time}</p>
                </div>
            `,
        };

        // 2. Email to User
        const userMailOptions = {
            from: emailUser,
            to: email,
            subject: `Demo Confirmation: Insight Fusion Analytics`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>Booking Confirmed</h2>
                    <p>Hi ${name},</p>
                    <p>Thank you for booking a strategy call with Insight Fusion Analytics.</p>
                    <p><strong>Date:</strong> March ${date}, 2026</p>
                    <p><strong>Time:</strong> ${time}</p>
                    <p>We look forward to speaking with you.</p>
                    <br/>
                    <p>Best regards,</p>
                    <p>The Insight Fusion Team</p>
                    <p><a href="https://insightfusion.com">insightfusion.com</a></p>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send emails' },
            { status: 500 }
        );
    }
}
