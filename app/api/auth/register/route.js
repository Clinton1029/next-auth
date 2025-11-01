import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    // ✅ Email Transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Beautiful HTML Template + Dashboard Link
    const htmlTemplate = `
      <div style="background: #f7f7f7; padding: 40px; font-family: Arial, sans-serif;">
        <div style="
          max-width: 500px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        ">
          <h2 style="text-align: center; color: #4f46e5; margin-bottom: 20px;">
            👋 Welcome, ${name}!
          </h2>

          <p style="font-size: 16px; color: #444;">
            Your account has been <strong>successfully created</strong>.
          </p>

          <p style="font-size: 16px; color: #444;">
            You can now log in and access your dashboard.
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard"
              style="
                background: #4f46e5;
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
              ">
              Go to Dashboard
            </a>
          </div>

          <p style="font-size: 14px; color: #666; margin-top: 20px;">
            If you did not create this account, you can safely ignore this email.
          </p>

          <hr style="margin-top: 25px; border: none; border-top: 1px solid #eee;" />

          <p style="text-align: center; font-size: 13px; color: #888;">
            © ${new Date().getFullYear()} Mtawa Auth. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // ✅ Send the Email
    await transporter.sendMail({
      from: `"Mtawa Auth" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Welcome to Mtawa Auth!",
      html: htmlTemplate,
    });

    return NextResponse.json(
      { message: "User registered & welcome email sent ✅", user: newUser },
      { status: 201 }
    );

  } catch (error) {
    console.error("REGISTER ERROR ➜", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
