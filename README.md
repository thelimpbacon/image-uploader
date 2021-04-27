# Image uploading using XHR

1. Cloudinary as file storage
2. [Nextjs api-routes]("https://nextjs.org/docs/api-routes/introduction) to get signed URLs from Cloudinary for uploading images
3. [react-spring]("https://react-spring.io/) for showing upload progress

### to use: add this env variables:

    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL=your_cloudinary_upload_url
