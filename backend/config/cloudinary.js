import { v2 as cloudinary } from "cloudinary"

const connectClodudinary = async () => {
    cloudinary.config({
        cloud_name: 'dwlvqdart',
        api_key: '183811718515292',
        api_secret: 'wKsjw9iKXlPa6-jecd99iM8s1dA'
    });
}

export default connectClodudinary;