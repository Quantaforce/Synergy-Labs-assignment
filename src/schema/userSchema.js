import { z } from "zod";
const addressSchema = z.object({
	street:z.string().min(1,{message:"please enter street"}),
	suite:z.string().min(1,{message:"please enter suite"}),
	city:z.string().min(1,{message:"please enter city"}),
	zipcode:z.string().min(1,{message:"please enter zipcode"}),
})
const urlSchema=z.string().regex(
  /^(?:[a-zA-Z]+:\/\/)?[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}.*$/,
  { message: "Invalid URL format" }
).or(z.literal(''));
const companySchema=z.object({
	name:z.string().min(3,{message:"company name should be 3 letter long"}).optional(),
	bs:z.string(),
})
export const UserSchema=z.object({
	id:z.number(),
	name:z.string().min(3,{message:"name is required"}),
	email:z.string().email(),
	phone:z.string().min(10,{message:"please enter valid phone no"}),
	username:z.string().min(3,{message:"Username should be atleast 3 letter long"}),
	address:addressSchema,
	company:companySchema,
	website:urlSchema,
})
