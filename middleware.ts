import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware (request: NextRequest) {
	const token = request.cookies.get('token')?.value;

	if (!token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	const payload = jwt.verify(token, process.env.JWT_SECRET!);

	if (!payload) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

}


export const config = {
	matcher: "/products/:path*"
}