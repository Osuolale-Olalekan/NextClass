"use server"

import UserModel from "@/models/User"
import dbConnect from "./dbConnect"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export const registerUser = async (user: { name: string, password: string, email: string }) => {
	try {
		await dbConnect()

		await UserModel.create(user);

		return {
			success: true
		}
	} catch (error) {
		console.log(error);
		return {
			success: false
		}
	}
}

export const loginAction = async ({ email, password }: { password: string, email: string }) => {
	try {
		await dbConnect()

		const user = await UserModel.findOne({ email });
		if (!user) {
			return {
				success: false,
				message: "User not found"
			}
		}

		const hashedPassword = user.password;
		const validPassword = bcrypt.compare(password, hashedPassword);

		if (!validPassword) {
			return {
				success: false,
				message: "Invalid Details"
			}
		}

		const token = jwt.sign({ id: String(user._id) }, process.env.JWT_SECRET!, { expiresIn: '2h' });

		const cookieStore = await cookies();

		cookieStore.set("token", token, {
			secure: process.env.NODE_ENV === "production"
		});

		return {
			success: true
		}
	} catch (error) {
		console.log(error);
		return {
			success: false
		}
	}
}

export const logout = async () => {
	const cookieStore = await cookies();

	cookieStore.delete("token");
}


export const verifyUser = async () => {
	const cookieStore = await cookies();
	const token = cookieStore.get("token")?.value;

	if (!token) {
		return { success: false }
	}

	const payload = jwt.verify(token, process.env.JWT_SECRET!);

	return {
		id: payload.id,
		success: true
	}
}

export const getUserWithId = async (id: string) => {
	const user = await UserModel.findById(id).lean();

	return user;
}