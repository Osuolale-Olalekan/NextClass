"use server";

import ProductModel from "@/models/Product";
import dbConnect from "./dbConnect";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const SECRET = process.env.JWT_SECRET || "mysecretkey";

const users: {
  email: string;
  passwordHash: string;
}[] = [];

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { success: false, message: "Missing email or password" };
  }

  const existing = users.find((u) => u.email === email);

  if (existing) {
    return { success: true, message: "email already registered" };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  
  users.push({ email, passwordHash });

  return {success: true, message: 'Account created.'}

};


export const signInAction = async (formData: FormData) =>{
  const email = formData.get("email");
  const password = formData.get("password") as string;

  const user = users.find((u)=> u.email===email);

  if(!user|| !(await bcrypt.compare(password, user.passwordHash))){
    return{success: false, message:"invalid credentials"};
  }

  const token = jwt.sign({email}, SECRET, {expiresIn: "1h"})

  const cookieStore = await cookies()
 
  cookieStore.set('auth_token', token)

  return { success: true, message: "Login successful" };

}




export const updateProduct = async (formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const id = formData.get("id");
  const price = formData.get("price");

  try {
    await dbConnect();
    await ProductModel.findByIdAndUpdate(id, {
      title,
      description,
      price,
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/my-products");
};

export const createProduct = async (formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");

  try {
    await dbConnect();
    const product = await ProductModel.create({
      title,
      description,
      price,
    });
    console.log(product);
  } catch (error) {
    console.log(error);
  }
  redirect("/products");
};
