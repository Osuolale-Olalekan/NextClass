import { Schema, model, models, Document, Model } from "mongoose";
import bcrypt from "bcrypt"

interface IUser extends Document {
	name: string,
	email: string,
	password: string
}

const UserSchema = new Schema<IUser>({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

UserSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(this.password, salt);
	this.password = hashedPassword;
})

const UserModel: Model<IUser> = models.User || model<IUser>("User", UserSchema);

export default UserModel