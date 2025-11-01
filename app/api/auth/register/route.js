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

    // ✅ EMAIL SETUP (No extra files)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ✅ your gmail
        pass: process.env.EMAIL_PASS, // ✅ your app password
      },
    });

    // ✅ Send Welcome Email
    await transporter.sendMail({
      from: `"Mtawa Auth" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Mtawa Auth 🚀",
      html: `
        <h2>Hello ${name},</h2>
        <p>Your account was created successfully.</p>
        <p>Welcome to the system! ✅</p>
      `,
    });

    return NextResponse.json(
      { message: "User registered & email sent ✅", user: newUser },
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
